
import videoSource from '../../public/images/background.mp4'


const ForgetPass = () => {

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
         <div className="relative w-[1070px] h-[460px] z-10 top-[50%] left-[50%] pt-[100px] translate-x-[-50%] translate-y-[-50%] rounded-xl bg-transparent shadow-[-10px_10px_19px_10px_rgba(0,0,0,0.38)]" >
            <div className="w-full m-auto max-w-md p-8 space-y-6 bg-transparent rounded shadow-md">
              <h2 className="text-2xl font-bold text-center text-white">Forgot Password</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-300"
                    placeholder="Enter your email"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400"
                >
                  Reset Password
                </button>
              </form>
          </div>
              </div>
       </div>
     </>
  )
}

export default ForgetPass