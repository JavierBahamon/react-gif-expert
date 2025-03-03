import { useState } from 'react'


export const Addcategory = ( { onnewcategory }) => {

    
    const [inputvalue, setInputvalue] = useState('')

    const oninputchange = ( {target} )  => {
        setInputvalue( target.value);
        
    }    
    
    const onsubmit = ( event ) => {
        event.preventDefault();
        console.log(inputvalue);
        if( inputvalue.trim().length <= 1) return;

        // setCategories( categories => [inputvalue, ...categories]);
        onnewcategory ( inputvalue.trim() );
        setInputvalue('');
    }

    return (

        <form onSubmit={ onsubmit } >
            <input 
                type="text"
                placeholder="buscar gif"
                value={ inputvalue }
                onChange={oninputchange }
                className="px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-blue-500"
            />
        </form>
    )
}