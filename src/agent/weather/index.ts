import {
  typedUi,
  uiMessageReducer,
} from "@langchain/langgraph-sdk/react-ui/server";

//import { ChatOpenAI } from "@langchain/openai";
import { v4 as uuidv4 } from "uuid";
//import { z } from "zod";

import type ComponentMap from "../../agent-uis/index.tsx";

import {
  Annotation,
  MessagesAnnotation,
  StateGraph,
  type LangGraphRunnableConfig,
} from "@langchain/langgraph";

const AgentState = Annotation.Root({
  ...MessagesAnnotation.spec,
  ui: Annotation({ reducer: uiMessageReducer, default: () => [] }),
});

export const graph = new StateGraph(AgentState)
  .addNode("weather", async (state, config) => {

    // Provide the type of the component map to ensure
    // type safety of `ui.push()` calls as well as
    // pushing the messages to the `ui` and sending a custom event as well.
    const ui = typedUi<typeof ComponentMap>(config);

    /*const weather = await new ChatOpenAI({ model: "gpt-4o-mini" })
      .withStructuredOutput(z.object({ city: z.string() }))
      .withConfig({ tags: ["nostream"] })
      .invoke(state.messages);*/
    

    const response = {
      id: uuidv4(),
      type: "ai",
      content: `Here's the weather for sf`,
    };

    // Emit UI elements associated with the AI message
    ui.push(
    {
      name: "weather",
      props: { cityName: "Givat Hashlosha" },
    },
    { message: response },
  );

    return { messages: [response],  ui: ui.items };
  })
  .addEdge("__start__", "weather")
  .compile();