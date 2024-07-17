import Lottie from 'lottie-react'
import notFound from '../../public/Animation/notFound.json'

const NotFound = () => {
  return (
    <>
      <div className='flex justify-center items-center min-h-screen flex-col'>
         <Lottie className='animation' animationData={notFound} loop={true} />
         <h1 className='text-[64px]'>PAGE NOT FOUND</h1>
      </div>
    </>
  )
}

export default NotFound