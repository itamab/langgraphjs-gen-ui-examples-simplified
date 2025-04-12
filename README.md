# LangGraph Generative UI Examples

This repository contains a series of agents intended to be used with the [Agent Chat UI](https://agentchat.vercel.app) ([repo](https://github.com/langchain-ai/agent-chat-ui)).

![Generative UI Example](./static/gen_ui.gif)

# Setup

> [!TIP]
> 🎥 Want to watch a video walkthrough instead? Click [here](https://youtu.be/sCqN01R8nIQ).

First, clone this repository:

```bash
git clone https://github.com/itamab/langgraphjs-gen-ui-examples-simplified.git

cd langgraphjs-gen-ui-examples-simplified
```

Then, install dependencies:

```bash
# pnpm is the default package manager in this project
pnpm install
```

Next, copy the `.env.example` file, and set the necessary environment variables:

```bash
cp .env.example .env
```

No key is required for running this server

```bash
# Example
OPENAI_API_KEY=""

Start the LangGraph server:

```bash
pnpm agent
```

You should see output similar to:

```
          Welcome to

╦  ┌─┐┌┐┌┌─┐╔═╗┬─┐┌─┐┌─┐┬ ┬
║  ├─┤││││ ┬║ ╦├┬┘├─┤├─┘├─┤
╩═╝┴ ┴┘└┘└─┘╚═╝┴└─┴ ┴┴  ┴ ┴.js

- 🚀 API: http://localhost:2024
- 🎨 Studio UI: https://smith.langchain.com/studio?baseUrl=http://localhost:2024

This in-memory server is designed for development and testing.
For production use, please use LangGraph Cloud.