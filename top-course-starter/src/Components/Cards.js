import React from 'react'
import Card from './Card'
import { useState } from 'react';

function Cards({courses,catagory}){
  const [likedCourses,setLikedCourses] = useState([]);

  function getCourses(){
    let allCourses = [];

    if(catagory === 'All'){
      Object.values(courses).forEach((course)=>{
        course.forEach(course => {
          allCourses.push(course);
        });
      });
    }
  
    else{
      return courses[catagory]
    }

    return allCourses
  }

  return (
    <div>
      {
        getCourses().map((course)=>{
          return <Card key={course.id} courseData = {course} likedCourses={likedCourses} setLikedCourses={setLikedCourses}/>
        })
      }
    </div>
  )
}

export default Cards;
