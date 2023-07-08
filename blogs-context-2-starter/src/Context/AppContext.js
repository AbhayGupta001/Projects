import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

function AppContextProvider({children}){
    const [page,setPage] = useState(1);
    const [posts,setPosts] = useState([]);
    const [totalPages, setTotalPages] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    async function fetchData(page=1,tag,category){
        let Newurl = `${baseUrl}?page=${page}`;
        if(tag) {Newurl += `&tag=${tag}`;}
        else if(category) {Newurl += `&category=${category}`;}

        setLoading(true);
        try{
            let response  = await fetch(Newurl);
            let data = await response.json();            
            setPage(page);
            setPosts(data.posts)
            setTotalPages(data.totalPages);
        }
        catch(e){
            setPage(1);
            setPosts([])
            setTotalPages(null);
        }
        setLoading(false);
    }

    function pageHandler(page){
        console.log(page);
        navigate({search: `?page=${page}`});
        setPage(page);
    }

    let values = {
        fetchData,
        posts,setPosts,
        page,setPage,
        totalPages,setTotalPages,
        loading,setLoading,
        pageHandler
    }

    return <AppContext.Provider value={values}>
        {children}
    </AppContext.Provider>
}

export default AppContextProvider;