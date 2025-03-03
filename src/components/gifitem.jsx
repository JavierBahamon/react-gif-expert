

export const Gifitem = ( { title, url }) => {

    

  return (
    <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
        <img src={ url} alt={ title }  className="w-full h-48 object-cover"/>
        <div className="p-4">
            <p className="text-lg font-semibold text-gray-700">{title}</p>
        </div>
        
    </div>
  )
}
