import React from 'react'

const Filter = ({FilterData , catagory , setCatagory}) => {
  // console.log(FilterData)
  function handleCatagory(e){
    setCatagory(e.target.textContent);
  }
  return (
    <div>
      {
        FilterData.map(filter =>{
          return <button key={filter.id} onClick={handleCatagory}>{filter.title}</button>
        })
      }
    </div>
  )
}

export default Filter;