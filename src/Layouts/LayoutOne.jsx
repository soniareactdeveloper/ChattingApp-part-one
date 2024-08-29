import { useEffect } from "react"
import { useSelector } from "react-redux"
import { Outlet, useNavigate } from "react-router-dom"



const LayoutOne = () => {
// getting data from redux
const sliceUser = useSelector((state)=> state.counter.userData)
const navigate =useNavigate()

console.log(sliceUser)

  // rendering the component based on the data
  useEffect(()=>{
    if(sliceUser == null){
      navigate('/login')  // navigate to login page if the user data is null
    }
  },[])

  return (
    <div>
      <Outlet/>
    </div>
  )
}

export default LayoutOne