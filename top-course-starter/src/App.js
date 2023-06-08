import React from "react";
import { useState,useEffect } from "react";
import Navbar from "./Components/Navbar";
import Filter from "./Components/Filter";
import Cards from "./Components/Cards";
import {filterData,apiUrl} from "./Components/data";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [courses, setCourses] = useState({});
  const [catagory , setCatagory] = useState(filterData[0].title);
  async function fetchData(){
    try{    
      let res = await fetch(apiUrl);
      let Output = await res.json();
      setCourses(Output.data);
    }
    catch(e){

    }
  }

  useEffect(()=>{ 
    fetchData();
  },[]);

  return( 
  <div>
    <Navbar/>
    <Filter FilterData={filterData} catagory={catagory} setCatagory={setCatagory}/>
    <Cards courses = {courses} catagory={catagory}/>
    <ToastContainer/>
  </div>);
};

export default App;
