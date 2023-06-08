import { useState } from "react";
import useGif from "../hooks/useGif";

export default function Tag() {
  const {gif,loading,fetchData} = useGif();
  const [tag,setTag] = useState("car");

  function taghandler(e){
    setTag(e.target.value);
  }

  return   <div className="w-11/12 md:w-3/4 lg:w-1/2 sm:p-8 p-4 mt-8 bg-blue-500 flex flex-col items-center gap-6 rounded-md border-2 border-black">
  <h2 className="sm:text-2xl text-xl font-bold underline capitalize">Random {tag} Gif</h2>
  {
    loading ? <div className="spinner"></div> :
    <img src={gif} className="unset w-[450px] max-h-[350px]"/>
  }

  <input 
    type="text" 
    name="input" 
    value={tag} 
    onChange={taghandler}
    className="sm:w-5/6 w-full sm:text-lg text-sm capitalize font-medium text-center p-2 px-3 rounded-md border border-black"
    />
  <button onClick={()=>fetchData(tag)} className="sm:w-5/6 w-full sm:text-lg text-sm p-2 font-bold bg-stone-50 rounded-md border border-black">Generate</button>
</div>;
}
