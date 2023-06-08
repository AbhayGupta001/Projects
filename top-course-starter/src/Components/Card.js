import React from 'react'
import {FcLike} from 'react-icons/fc'
import {FcLikePlaceholder} from 'react-icons/fc'
import {toast} from 'react-toastify';

function Card({courseData,likedCourses,setLikedCourses}) {
  function clickHander(){
    if(likedCourses.length === 0){
      setLikedCourses([courseData.id]);
      toast.success('Liked Successfully');
    }
    else{
      if(likedCourses.includes(courseData.id)){
        setLikedCourses((prev) => prev.filter(cid => cid !== courseData.id))
        toast.error('Like Removed');      
      }
      else{
        setLikedCourses(prev => [...prev,courseData.id])
        toast.success('Liked Successfully');
      }
    }
    console.log(likedCourses)
  }
  return (
    <div>
      <div>
        <img src={courseData.image.url} alt={courseData.image.alt} width="100"/>
        <button onClick={clickHander}>
          {likedCourses.includes(courseData.id)?<FcLike/> : <FcLikePlaceholder/>}
        </button>
      </div>
      <h2>{courseData.title}</h2>
      {
        courseData.description.length ? courseData.description.substr(0,100):courseData.description
      }
    </div>
  )
}

export default Card;