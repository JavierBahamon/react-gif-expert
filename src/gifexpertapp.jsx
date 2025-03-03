import { useState, useEffect } from 'react';
import { Addcategory } from './components/addcategory'
import { Gifgrid } from './components/gifgrid'
export const Gifexpertapp = () => {

    const [categories, setCategories] = useState( [ ] )


    const onaddcategory = ( newcategory ) => { 

        if( categories.includes(newcategory)  ) return;


        console.log(newcategory);
        setCategories([...categories, newcategory])
    }
    return (

        <div className="flex flex-col items-center min-h-screen bg-gray-900 text-white p-6">
                
                <div className='bg-gray-800 p-6 rounded-xl shadow-lg text-center'>
                    <div className='flex gap-2 mb-4'>
                        <div className="text-3xl font-bold mb-4">Busqueda</div>
                            <div >
                                <Addcategory 
                                    // setCategories={ setCategories } 
                                    onnewcategory = { onaddcategory}
                                />
                                
                            </div>
                    </div>
                </div>
                
                
            

            <div>
                { 
                    categories.map ( (category)  => ( 
                            <Gifgrid
                                key={category}
                                category={ category} />
                    ))
                }
                
            </div>






        </div>

    );
}