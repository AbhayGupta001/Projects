import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [posts , setPosts] = useState([]);
  const [loading , setLoading] = useState(true);

  async function fetchProductData(){
    setLoading(true);
    try{
      const res = await fetch(API_URL);
      const data = await res.json();
      setPosts(data);
    }
    catch(e){
      console.log('Error Occured');
      setPosts([]);
    }

    setLoading(false);
  }

  useEffect(()=>{
    fetchProductData();
  },[]);

  return (<div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 
  max-w-[1080px] min-h-[80vh] mx-auto space-x-5 space-y-10 p-4">

    { loading ? <Spinner/>:
      posts.length ?
      posts.map((post)=>(
        <Product key={post.id} post = {post} />
      ))
      :<div className="text-green-600 flex justify-center items-center">
        <p>No Post Found</p>
      </div>
    }
  </div>);
};

export default Home;
