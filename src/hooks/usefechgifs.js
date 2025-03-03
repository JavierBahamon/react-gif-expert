import { useState, useEffect } from "react";
import { Getgifs } from "../helpers/getgifs";


export const usefechgifs = ( category ) => {
  
    const [images, setImages] = useState([]);
    const [isloading, setIsloading] = useState( true );

    const getimages = async() => {
        const newimages = await Getgifs( category );
        setImages(newimages);
        setIsloading( false );

    }
        
    useEffect( () => {
        getimages();
    }, [ ])


    return{
        images,
        isloading
    }
}
