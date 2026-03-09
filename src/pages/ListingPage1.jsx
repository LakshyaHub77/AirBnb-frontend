import React from 'react'
import { useContext } from 'react';
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { listingDataContext } from '../context/ListingContext';

function ListingPage1() {

    let navigate=useNavigate()
    let {title,setTitle,description,setDescription,frontEndImage1,setfrontEndImage1,frontEndImage2,setfrontEndImage2,frontEndImage3,setfrontEndImage3,backendImage1,setbackendImage1,backendImage2,setbackendImage2,backendImage3,setbackendImage3,
rent,setRent,city,setCity,landmark,setLandmark,category,setCategory}=useContext(listingDataContext)
const handleImage1=(e)=>{
    let file=e.target.files[0]
    setbackendImage1(file)
    setfrontEndImage1(URL.createObjectURL(file))
}
const handleImage2=(e)=>{
    let file=e.target.files[0]
    setbackendImage2(file)
    setfrontEndImage2(URL.createObjectURL(file))
}
const handleImage3=(e)=>{
    let file=e.target.files[0]
    setbackendImage3(file)
    setfrontEndImage3(URL.createObjectURL(file))
}




  return (
    <div className='w-[100%] h-[100vh] bg-white flex items-center justify-center relative overflow-auto'>

<form action="" className='max-w-[900px] overflow-auto w-[90%] h-[550px] flex tems-center justify-start mt-[50px] flex-col md:items-start gap-[10px]' onSubmit={(e)=>{e.preventDefault() 
    navigate("/listingpage2")}} >

  <div className="w-[50px] h-[50px] bg-[red] cursor-pointer absolute top-[5%] left-[20px] rounded-[50%] flex items-center justify-center  " onClick={()=>navigate("/")}><FaArrowLeft className="w-[25px] h-[25px] text-[white]" />
  </div>


<div className='w-[200px] h-[50px] text-[20px] bg-[#f14242] text-[white] flex items-center justify-center rounded-[30px] absolute top-[5%] right-[10px] shadow-lg'>Setup Your home</div>

<div className="w-[90%] flex items-start justify-start flex-col gap-[10px] mt-[30px]">
<label htmlFor="title" className="text-[20px]">Title</label>
<input type="text" name="" id="title" className="w-[90%] h-[40px] border-[2px] border-[#555656] rounded-lg text-[18px] px-[20px]" placeholder='_bhk house or best title' required onChange={(e)=>setTitle(e.target.value)} value={title}/>
</div>
<div className="w-[90%] flex items-start justify-start flex-col gap-[10px] mt-[30px]">
<label htmlFor="des" className="text-[20px]">Description</label>
<textarea name="" id="des"  className="w-[90%] h-[80px] border-[2px] border-[#555656] rounded-lg text-[18px] px-[20px]" required onChange={(e)=>setDescription(e.target.value)} value={description}></textarea>
</div>


<div className="w-[90%] flex items-start justify-start flex-col gap-[10px] mt-[30px]">
<label htmlFor="img1" className="text-[20px]">Image1</label>
<div className='flex items-center justify-start w-[90%] h-[40px] border-[#555656] border-2 rounded-[10px] '>
<input type="file" name="" id="img1" className="w-[100%]  text-[15px] px-[10px]" required onChange={handleImage1}/>
</div>
</div>
<div className="w-[90%] flex items-start justify-start flex-col gap-[10px] mt-[30px]">
<label htmlFor="img2" className="text-[20px]">Image2</label>
<div className='flex items-center justify-start w-[90%] h-[40px] border-[#555656] border-2 rounded-[10px] '>
<input type="file" name="" id="img2" className="w-[100%]  text-[15px] px-[10px]" required onChange={handleImage2}/>
</div>
</div>
<div className="w-[90%] flex items-start justify-start flex-col gap-[10px] mt-[30px]">
<label htmlFor="img2" className="text-[20px]">Image3</label>
<div className='flex items-center justify-start w-[90%] h-[40px] border-[#555656] border-2 rounded-[10px] '>
<input type="file" name="" id="img2" className="w-[100%]  text-[15px] px-[10px]" required onChange={handleImage3}/>
</div>
</div>
<div className="w-[90%] flex items-start justify-start flex-col gap-[10px] ">
<label htmlFor="rent" className="text-[20px]">Rent</label>
<input type="number" name="" id="rent" className="w-[90%] h-[40px] border-[2px] border-[#555656] rounded-lg text-[18px] px-[20px]" placeholder='Rs.______/day' required onChange={(e)=>setRent(e.target.value)} value={rent}/>
</div>
<div className="w-[90%] flex items-start justify-start flex-col gap-[10px] ">
<label htmlFor="city" className="text-[20px]">City</label>
<input type="text" name="" id="city" className="w-[90%] h-[40px] border-[2px] border-[#555656] rounded-lg text-[18px] px-[20px]" placeholder='city,country' required onChange={(e)=>setCity(e.target.value)} value={city}/>
</div>
<div className="w-[90%] flex items-start justify-start flex-col gap-[10px] ">
<label htmlFor="landmark" className="text-[20px]">Landmark</label>
<input type="text" name="" id="landmark" className="w-[90%] h-[40px] border-[2px] border-[#555656] rounded-lg text-[18px] px-[20px]" placeholder='nearby area' required onChange={(e)=>setLandmark(e.target.value)} value={landmark}/>
</div>

<button className="px-[50px] py-[10px] bg-[red] text-[white] text-[18px] md:px-[100px] rounded-lg mt-[20px] ">Next</button>


</form>

    </div>
  )
}

export default ListingPage1