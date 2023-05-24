import React from 'react';
import { Card } from './Card';
import {useState} from 'react';
import {FaChevronRight,FaChevronLeft} from 'react-icons/fa'

export const Testiminials = ({reviews}) => {
    const [index,setIndex] = useState(0); 
    const leftShift = ()=>{
        if(index-1 < 0)
            setIndex(reviews.length - 1);
        else
            setIndex(index-1);
    }

    const rightShift = ()=>{
        if(index + 1 === reviews.length)
            setIndex(0);
        else
            setIndex(index+1);
    }

    const randomShift = ()=>{
        let randomIndex = Math.floor(Math.random() * reviews.length);
        setIndex(randomIndex);
    }

    return (
    <div  className="Testimonial" >
        <Card review={reviews[index]}/>
        <div className="slider-btn-grp">
            <button onClick={leftShift}> 
                <FaChevronLeft/>
            </button>
            <button onClick={rightShift}>
                <FaChevronRight/>
            </button>
        </div>
        <div>
            <button onClick={randomShift}
            className="surprise-btn">
                Surprise Me
            </button>
        </div>
    </div>
  )
}
