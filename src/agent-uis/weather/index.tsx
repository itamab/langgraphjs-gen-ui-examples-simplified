import "./index.css";

export default function weather({
  cityName,
}: {
  cityName: string;
}) {

  return (
    <div className="w-full max-w-md bg-white rounded-lg shadow-md overflow-hidden">      
      Restaurants in {cityName}      
    </div>
  )
}  
