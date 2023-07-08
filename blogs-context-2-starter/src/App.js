import { useEffect } from "react";
import { useContext } from "react";
import { AppContext } from "./Context/AppContext";
import {Home} from "./Pages/Home";
import {Tags} from "./Pages/Tags";
import { Category } from "./Pages/Category";
import {BlogsPage} from "./Pages/BlogsPage";
import { Route,Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

export default function App() {
  const location = useLocation();  
  const {fetchData} = useContext(AppContext)
  const [searchParams,setSearchParams] = useSearchParams();
  useEffect(() => {
    const page = searchParams.get("page") ?? 1;
    if(location.pathname.includes("tag")){
      const tag = location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchData(Number(page),tag);
    }
    else if(location.pathname.includes("categories")){
      const category = location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchData(Number(page),null,category);
    }

    else  fetchData(Number(page));
  }, [location.pathname,location.search]);
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/tag/:tag" element={<Tags/>}></Route>
        <Route path="/blogs/:blogid" element={<BlogsPage/>}></Route>
        <Route path="/categories/:catagory" element={<Category/>}></Route>
      </Routes>
    </div>
  );
}
