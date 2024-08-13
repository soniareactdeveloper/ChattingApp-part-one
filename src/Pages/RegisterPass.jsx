
import { useState } from 'react';
import Lottie from 'lottie-react'
import { Link} from 'react-router-dom';
import { IoMdEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import 'react-toastify/dist/ReactToastify.css'; 
import loginAni from '../../public/Animation/logIn.json'
import videoSource from '../../public/images/background.mp4'
import { Bounce, toast, ToastContainer } from 'react-toastify';

const RegisterPass = () => {
  const [pass, setPass]= useState(false)
  const [user,setUser] = useState('')
  const [userErr, setUserErr] = useState('')
  const [email, setEmail] = useState('')
  const [emailerr, setEmailerr] = useState('')
  const [password, setPassword] = useState('')
  const [passerr, setPasserr] = useState('')
  const [conpassword, setConPassword] = useState('')
  const [conpasserr, setConPasserr] = useState('')


  const handleShow = () =>{
    setPass(!pass)
  }
  
  const handleUser = (e) => {
    setUser(e.target.value)
    setUserErr('')
  }

  const handleEmail = (e) => {
    setEmail(e.target.value)
    setEmailerr('')
  }
  const handlePassword = (e) => {
    setPassword(e.target.value)
    setPasserr('')
  }
  const handleConPassword = (e) => {
    setConPassword(e.target.value)
    setConPasserr('')
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if(!user){
      setUserErr('Please enter your user name')
    }else {
      if(!email){
        setEmailerr('Please enter your password')
      } else {
        if (!password){
          setPasserr('Please confirm your password')
        } else {
          if (!conpassword){
            setConPasserr('Please confirm your password')
          } else {
            toast('🦄 Login successful! Welcome back!', {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              transition: Bounce,
              });
          }
       }
      }
    }
  }
   
  return (
    <>
    <div className="relative w-full h-screen overflow-hidden">
      <video
        className="absolute top-1/2 left-1/2 w-auto min-w-full min-h-full max-w-none transform -translate-x-1/2 -translate-y-1/2"
        autoPlay
        loop
        muted
      >
        <source src={videoSource} type="video/mp4" />
      </video>
      <div className="relative w-full h-[580px] z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-xl bg-transparent shadow-[-10px_10px_19px_10px_rgba(0,0,0,0.38)]">
        <div className='main'>
          <Lottie className='animation' animationData={loginAni} loop={true} />
          <div className='w-[400px] pb-5 mt-7 bg-[#5a34f1] rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] flex flex-col items-center'>
            <h1 className='login'>Sign Up</h1>
            <form onSubmit={handleSubmit}>
            <label htmlFor="user">User Name</label>
              <br />
              <input onChange={handleUser} type="user" id='user' name='user' placeholder='Enter your User name' />
              <p>{userErr}</p>
              <label htmlFor="email">Email</label>
              <br />
              <input onChange={handleEmail} type="email" id='email' name='email' placeholder='Enter your email' />
              <p>{emailerr}</p>

              <label htmlFor="pass">Password</label>
              <div className='relative'>
                <input onChange={handlePassword} type={pass ? "text" : "password"} id='pass' name='pass' placeholder='Enter your Password' />
                {
                  pass ?
                    <IoMdEye onClick={handleShow}  className='icon' />
                    :
                    <IoIosEyeOff onClick={handleShow} className='icon'  />
                }
              </div>
              <p>{passerr}</p>
              <label htmlFor="pass">Confirm Password</label>
              <div className='relative'>
                <input onChange={handleConPassword} type={pass ? "text" : "password"} id='pass' name='pass' placeholder='Confirm your Password' />
                {
                  pass ?
                    <IoMdEye onClick={handleShow}  className='icon' />
                    :
                    <IoIosEyeOff onClick={handleShow} className='icon'  />
                }
              </div>
              <p>{conpasserr}</p>
              <button className='logBtn'>Sign Up</button>
              <h4 className='pt-1'>Already have an account? <Link className='text-[#E3FF43] text-md font-sans font-bold' to="/">Sign In</Link></h4>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  </>
  )
}

export default RegisterPass