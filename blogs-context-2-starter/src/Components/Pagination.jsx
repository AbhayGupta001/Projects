import React, { useContext } from 'react';
import { AppContext } from '../Context/AppContext';

export const Pagination = () => {
    const {page,totalPages,pageHandler} = useContext(AppContext);
  return (
    <div className='container Footer'>
        <div className='pagination'>
            <div className='btn-grp '>
              
              {page > 1 &&
                <button onClick={() => pageHandler(page-1) } className='font-bold text-sm px-3 py-1 
                border-[1px] rounded-s border-black'>Previous</button>
              }

              {page < totalPages &&
                <button onClick={() => pageHandler((page)+1) } className='font-bold text-sm px-6 py-1 
                border-[1px] rounded-s border-black'>Next</button>
              }

            </div>

            <p>
                page {page} of {totalPages}
            </p>
        </div>
    </div>
  )
}
