import React from 'react';
import { Template } from '../Components/Template';
import { useLocation } from 'react-router-dom';
import { BackButton } from '../Components/BackButton';

export const Tags = () => {
  const location =  useLocation();
  const tag = location.pathname.split("/").at(-1).replaceAll("-"," ");
  return (
    <div>
      <BackButton/>
      <h1>Blogs Tagged <span>#{tag}</span></h1>
      <Template/>
    </div>
  )
}
