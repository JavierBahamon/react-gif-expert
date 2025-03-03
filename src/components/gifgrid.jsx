import { useState, useEffect } from 'react'
import { Gifitem } from './gifitem'
import { usefechgifs} from '../hooks/usefechgifs'
// import { Getgifs } from '../helpers/getgifs';

export const Gifgrid = ({ category }) => {

  const { images, isloading} = usefechgifs( category );

  
  

  return (
    <>
        <p className='text-3xl font-bold flex items-center justify-center text-center my-4 p-4 border-2 border-gray-300 rounded-lg shadow-md '>
          {category}
        </p>
        
        <div className='flex '> 
            
              {
                isloading && ( <h2>cargando...</h2>   )
                
              }
              
              <div className='grid grid-cols-3 grid-rows-3 gap-20 ' >
                {
                  images.map( (image) => (
                    <Gifitem 
                      key={ image.id} 
                      { ...image }
                    />

                  ))
                }
              </div>
        </div>
        
        

    </>
    
  )
}

