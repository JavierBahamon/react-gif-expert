
export const Getgifs = async( category) => {
       
    const url = `https://api.giphy.com/v1/gifs/search?api_key=Gqh7Ob19HgipqE0COzu5MjKKLijr7o1n&q=${category}&limit=9`;
    const resp = await fetch( url );
    const { data } = await resp.json();
    
    
  
    const gifs = data.map( img => ({
          id: img.id,
          title: img.title,
          url: img.images.downsized_medium.url
    }));
  
    console.log(gifs);
    return gifs;
  
  
}