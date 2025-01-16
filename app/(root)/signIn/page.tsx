import { Button } from "@/components/ui/button";
import { Link } from "lucide-react";
import Image from "next/image";

function SignInPage() {
  return (
    <div className="absolute w-full h-screen">
      <div className="absolute top-0 left-0 w-full h-full">
        <Image
          src={'/images/access_bg.jpg'}
          alt="Background Image"
          width={2000} height={200}
          objectFit="cover"
          className="fixed"
        />
      </div>

      <div className="relative h-full">
         <div className="w-full h-full max-w-md bg-white rounded-lg shadow-lg p-6 flex flex-col justify-center items-center text-center space-y-4">
          <span>
            
          </span>
       <div>
       <Button  className=" flex items-center justify-center gap-4 w-full border border-blue-50 rounded-md px-4 py-2 mb-4 bg-blue-700 focus:outline-none focus:ring focus:ring-blue-900"
        >
          <span><Image src={"/images/Facebook_logo.svg"} alt="/" width={20} height={20}/></span>
        Login with Facebook
        </Button>
        {/*  */}
        <Button
          type="submit"
          className=" flex items-center justify-center gap-4 w-full border border-gray-100 rounded-md px-4 py-2 mb-4 bg-gray-600 focus:outline-none focus:ring focus:ring-gray-200"
        >
          <span><Image src={"/images/Google_Logo.svg"} alt="/" width={20} height={20}/></span>
          <span> Login with Google</span>
        </Button>

         <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4 bg-white focus:outline-none focus:ring focus:ring-gray-200"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4 bg-white focus:outline-none focus:ring focus:ring-gray-200"
          />
          <div className="flex items-center justify-around">
          <div> Remember me</div>
          <div>Forgot Password?</div>
        </div>
        <button
          type="submit"
          className="w-full border border-orange-500 rounded-md px-4 py-2 mb-4 bg-red-500 focus:outline-none focus:ring-red-200"
        >
          Register Now
        </button>
        
        </div>
        </div>
      </div>



    </div>
  );
}

export default SignInPage;


