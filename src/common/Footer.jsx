
const Footer = () => {
  return (
    <div className="bg-indigo-900 h-80 mb-0 text-white flex grid grid-cols-4 gap-3 text-gray-400" >
        <div className="grow text-center mt-10 font-semibold">
           <h1 className="text-2xl ">
          About Us
        </h1>
        <p className="font-bold">
        This is About Us. 
        </p>
        </div>
        <div className="grow text-center mt-10 font-semibold">
           <h1 className="text-2xl  ">
          Newsletter 
        </h1>
        <p className="">
        This is our Newsletter.
        </p>
        </div>
        <div className="grow text-center mt-10 font-semibold">
           <h1 className="text-2xl  ">
          Feed 
        </h1>
        </div>
        <div className="grow text-center mt-10 font-semibold">
           <h1 className="text-2xl  ">
          Follow Us 
        </h1>
        </div>
       
    </div>
  )
}

export default Footer