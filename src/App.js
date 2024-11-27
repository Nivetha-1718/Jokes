import axios from "axios"
import { useState } from "react"
import { useSelector,useDispatch } from "react-redux";
import { fetchJoke } from "./jokeSlice";

function App()
{

  const [category,setcategory] = useState("");
  const [error,seterror] = useState("");

  const joke = useSelector(function(state){
    return state.joke.joke;
  })

  const list=[
    "animal",
    "career",
    "celebrity",
    "dev",
    "explicit",
    "fashion",
    "food",
    "history",
    "money",
    "movie",
    "music",
    "political",
    "religion",
    "science",
    "sport",
    "travel"
];


  const dispatch = useDispatch()

  const handlechange=(evt)=>{
  setcategory(evt.target.value);
  seterror("");
  }
  
  const handleFetch=()=>
  {
    if(!list.includes(category))
      {
        seterror(`Invalid Category.Available category are:${list.join(",")}`);
      }
    else {
          dispatch(fetchJoke(category))
         }
  }

  return(
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-tr from-blue-400 via-teal-400 to-purple-700 ">
     
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Random Jokes</h1>
      <input className="border rounded-md shadow-lg mb-4 focus:outline-none w-96 p-2" placeholder="Enter Category" onChange={handlechange}></input>
      <button className="bg-lime-600 font-semibold rounded-xl  px-5 py-3 text-lg text-black"  onClick={handleFetch} disabled={!category}>Get Jokes</button>
      {error && <p className="mt-4 text-red-600 text-xl font-semibold text-center px-4">{error}</p>}
      <h1 className="text-black font-semibold text-xl text-center p-3">{joke}</h1>
    </div>
  )
} 

export default App