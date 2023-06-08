import { useState,useEffect } from "react";
import axios from 'axios'

let API_KEY = `0UTRbFtkMxAplrohufYco5IY74U8hOes`;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

function useGif(){
    const [gif,setGif] = useState("");
    const [loading,setLoading] = useState(false);

    async function fetchData(tag){
        setLoading(true);
        let response = await axios.get(tag ? `${url}&tag=${tag}` : url);
        setGif(response.data.data.images.downsized.url)
        setLoading(false)
        console.log(response)
    }

    useEffect(()=>{
        fetchData();
      },[]);

  return {gif,loading,fetchData};
}

export default useGif;
