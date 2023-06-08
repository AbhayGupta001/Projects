import useGif from "../hooks/useGif";

export default function Random() {

  const {gif,loading,fetchData} = useGif();
  return (
  <div className="w-11/12 md:w-3/4 lg:w-1/2 sm:p-8 p-4 mt-8 bg-green-500 flex flex-col items-center gap-8 rounded-md border-2 border-black">
      <h2 className="sm:text-2xl text-xl font-bold underline capitalize">Random Gif</h2>
      {
        loading ? <div className="spinner"></div> :
        <img src={gif} className="unset w-[450px] max-h-[350px]" alt="gif"/>
      }
      <button onClick={()=>fetchData()} className="sm:w-5/6 w-full sm:text-lg text-sm p-2 font-bold bg-yellow-300 rounded-md border border-black">Generate</button>
  </div>);
}
