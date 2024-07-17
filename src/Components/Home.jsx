import './Home.css'
import { useState } from 'react';
import Lottie from 'lottie-react'
import { Link} from 'react-router-dom';
import { IoMdEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import 'react-toastify/dist/ReactToastify.css'; 
import loginAni from '../../public/Animation/logIn.json'
import videoSource from '../../public/images/background.mp4'
import { Bounce, toast, ToastContainer } from 'react-toastify';


const Home = () => {
  const [pass, setPass]= useState(false)
  const [email, setEmail] = useState('')
  const [emailerr, setEmailerr] = useState('')
  const [password, setPassword] = useState('')
  const [passerr, setPasserr] = useState('')


  const handleShow = () =>{
    setPass(!pass)
  }
  
  const handleEmail = (e) => {
    setEmail(e.target.value)
    setEmailerr('')
  }
  const handlePassword = (e) => {
    setPassword(e.target.value)
    setPasserr('')
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if(!email){
      setEmailerr('Please enter your email')
    }else {
      if(!password){
        setPasserr('Please enter your password')
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
      <div className="relative w-[1070px] h-[460px] z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-xl bg-transparent shadow-[-10px_10px_19px_10px_rgba(0,0,0,0.38)]">
        <div className='main'>
          <Lottie className='animation' animationData={loginAni} loop={true} />
          <div className='w-[400px] h-[400px] bg-[#5a34f1] mt-7 rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] flex flex-col items-center'>
            <h1 className='login'>Login</h1>
            <form onSubmit={handleSubmit}>
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
              <div className='text flex items-center gap-10'>
                <div className='flex items-center gap-2'>
                  <input type="checkbox" />
                  <p>Remember me</p>
                </div>
                <Link to="/forgetpass">Forgot Password?</Link>
              </div>
              <button className='logBtn'>Log In</button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  </>
  )
}

export default Home
