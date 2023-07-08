import React from 'react';
import { Template } from '../Components/Template';
import { useLocation } from 'react-router-dom';
import { BackButton } from '../Components/BackButton';


export const Category = () => {
  const location =  useLocation();
  const category = location.pathname.split("/").at(-1).replaceAll("-"," ");
  return (
    <div>
      <BackButton/>
      <h1>Blogs On <span>{category}</span></h1>
      <Template/>
    </div>
  )
}