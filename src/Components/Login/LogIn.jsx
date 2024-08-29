import { useSelector } from "react-redux";

const LogIn = () => {
  const currentUser = useSelector((state) => state.counter.userData);

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#2e073f]">
      <div className="w-96 bg-gradient-to-r from-purple-500 to-indigo-500 shadow-lg rounded-lg overflow-hidden p-8 transform transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-2xl">
        <div className="flex items-center">
          <img
            className="w-16 h-16 rounded-full object-cover"
            src={currentUser?.photoURL}
            alt="Profile"
          />
          <div className="ml-6 text-white">
            <h2 className="text-2xl font-semibold">{currentUser?.displayName}</h2>
            <p className="text-indigo-200">{currentUser?.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;


