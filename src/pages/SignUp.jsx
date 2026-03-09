import React, { useContext, useState } from "react";
import { IoEye } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import axios from "axios"
import { authDataContext } from "../context/AuthContext";
import { userDataContext } from "../context/UserContext";
const SignUp = () => {

let [show,setShow]=useState(false)

let [name,setName]=useState("")
let [email,setEmail]=useState("")
let [password,setPassword]=useState("")

const navigate=useNavigate()
let {serverUrl,loading,setLoading}=useContext(authDataContext)
let {userData,setUserData}=useContext(userDataContext)
const handleSignUp=async(e)=>{
  setLoading(true)
  e.preventDefault()
  try{
let result=await axios.post(serverUrl + "/api/auth/signup",{
name,email,password
},{withCredentials:true})
setUserData(result.data)
navigate("/")

console.log(result);
setLoading(false)




  }catch(err){
    console.log("error", err);
    setLoading(false)


  }
}

  return( 
  <div className="w-[100wv] h-screen flex relative items-center justify-center">
<div className="w-[50px] h-[50px] bg-[red] cursor-pointer absolute top-[10%] left-[20px] rounded-[50%] flex items-center justify-center  " onClick={()=>navigate("/")}><FaArrowLeft className="w-[25px] h-[25px] text-[white]" />
</div>

<form action="" onSubmit={handleSignUp} className="max-w-[900px] w-[90%] h-[600px] flex tems-center justify-center  flex-col md:items-start gap-[10px]">
<h1 className="text-[30px] text-black ">Welcome To Airbnb</h1>
<div className="w-[90%] flex items-start justify-start flex-col gap-[10px] mt-[30px]">
<label htmlFor="name" className="text-[20px]">Name</label>
<input type="text" name="" id="name" className="w-[90%] h-[40px] border-[2px] border-[#555656] rounded-lg text-[18px] px-[20px]" required onChange={(e)=>setName(e.target.value)} value={name}/>
</div>
<div className="w-[90%] flex items-start justify-start flex-col gap-[10px] mt-[30px]">
<label htmlFor="email" className="text-[20px]">Email</label>
<input type="text" name="" id="email" className="w-[90%] h-[40px] border-[2px] border-[#555656] rounded-lg text-[18px] px-[20px] "  required onChange={(e)=>setEmail(e.target.value)} value={email}/>
</div>
<div className="w-[90%] relative flex items-start justify-start flex-col gap-[10px] mt-[30px]">
<label htmlFor="password" className="text-[20px]">Password</label>
<input type={show?"text":"password"} name="" id="password" className="w-[90%] h-[40px] border-[2px] border-[#555656] rounded-lg text-[18px] px-[20px] "  required onChange={(e)=>setPassword(e.target.value)} value={password}/>
{!show && <IoEye className="w-[22px] cursor-pointer h-[22px] absolute right-[12%] bottom-[10px]" onClick={()=>setShow(prev=>!prev)}/>
}

{show && <FaRegEyeSlash className="w-[22px] cursor-pointer h-[22px] absolute right-[12%] bottom-[10px]" onClick={()=>setShow(prev=>!prev)} />
}
</div>
<button className="px-[50px] py-[10px] bg-[red] text-[white] text-[18px] md:px-[100px] rounded-lg mt-[20px] " disabled={loading}>{loading?"loading":"SignUp"}</button>

<p className="text-[18px]">Already have an account? <span className="text-[19px] text-[red] cursor-pointer" onClick={()=>navigate("/login")}>Login</span></p>
</form>

  </div>
)};

export default SignUp;
