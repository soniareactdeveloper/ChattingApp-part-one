import { useState } from 'react';
import Lottie from 'lottie-react';
import { Link, useNavigate } from 'react-router-dom';
import { IoMdEye, IoIosEyeOff } from "react-icons/io";
import 'react-toastify/dist/ReactToastify.css'; 
import loginAni from '../../public/Animation/logIn.json';
import videoSource from '../../public/images/background.mp4';
import { Bounce, toast, ToastContainer } from 'react-toastify';
import { getAuth, createUserWithEmailAndPassword, updateProfile, sendEmailVerification } from "firebase/auth";
import { CircleLoader } from 'react-spinners';


const RegisterPass = () => {
  const [pass, setPass] = useState(false);
  const [user, setUser] = useState('');
  const [userErr, setUserErr] = useState('');
  const [email, setEmail] = useState('');
  const [emailErr, setEmailErr] = useState('');
  const [password, setPassword] = useState('');
  const [passErr, setPassErr] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const auth = getAuth();

  const handleShow = () => {
    setPass(!pass);
  };

  const handleUser = (e) => {
    setUser(e.target.value);
    setUserErr('');
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailErr('');
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setPassErr('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!user) {
      setUserErr('Please enter your user name');
    } else if (!email) {
      setEmailErr('Please enter your email');
    } else if (!password) {
      setPassErr('Please enter your password');
    } else {
      setLoading(true);
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Update a user's profile
          updateProfile(auth.currentUser, {
            displayName: user,
            photoURL: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          })

          setLoading(false);
          toast('Registration Successful', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
          setTimeout(() => {
            navigate('/');
           }, 1000); // Delay navigation to ensure toast displays
          sendEmailVerification(auth.currentUser)
        })
        .catch((error) => {
          setLoading(false);
          toast(error.message, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
        });
    }
  };

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
          <div className='main flex gap-32 justify-center items-center'>
            <Lottie className='animation' animationData={loginAni} loop={true} />
            <div className='w-[400px] pb-5 bg-[#5a34f1] rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] flex flex-col items-center mt-16'>
              <h1 className='login'>Sign Up</h1>
              <form onSubmit={handleSubmit}>
                <label htmlFor="user">User Name</label>
                <br />
                <input 
                  onChange={handleUser} 
                  type="user" 
                  id='user' 
                  name='user' 
                  placeholder='Enter your User name' 
                />
                <p>{userErr}</p>
                <label htmlFor="email">Email</label>
                <br />
                <input 
                  onChange={handleEmail} 
                  type="email" 
                  id='email' 
                  name='email' 
                  placeholder='Enter your email' 
                />
                <p>{emailErr}</p>

                <label htmlFor="pass">Password</label>
                <div className='relative'>
                  <input 
                    onChange={handlePassword} 
                    type={pass ? "text" : "password"} 
                    id='pass' 
                    name='pass' 
                    placeholder='Enter your Password' 
                  />
                  {pass ? 
                    <IoMdEye onClick={handleShow} className='icon' /> : 
                    <IoIosEyeOff onClick={handleShow} className='icon' />
                  }
                </div>
                <p>{passErr}</p>
                {loading ?
                  <div className='logBtn h-[44px] flex items-center justify-center'>
                    <CircleLoader size="30px" color='#113C7A' />
                  </div> :
                  <button className='logBtn'>Sign Up</button>
                }
                <h4 className='pt-1'>Already have an account? 
                  <Link className='text-[#E3FF43] text-md font-sans font-bold' to="/">Sign In</Link>
                </h4>
              </form>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default RegisterPass;
