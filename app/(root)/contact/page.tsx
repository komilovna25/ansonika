import { Link } from "lucide-react";
// import backImage from '/images/home_section_2.png'
import Image from "next/image";


function contactPage() {
  return (
    <div>
      <div className="relative w-full h-screen">
        <div className="w-full h-full">
          <Image src={'/images/home_section_2.jpg'} alt="back_image" width={1400} height={600} className="w-full h-full" />
        </div>
        <div className="w-full h-full absolute z-10 bg-[#27272785] top-0 left-0">
          <div className="h-full w-full flex flex-col gap-4 items-center justify-center">
            <h5 className="text-7xl font-semibold text-white">Contact FooYes</h5>
            <h4 className="text-2xl font-bold text-white">A successful restaurant experience</h4>
          </div>
          <div className="waves-con">
          <svg
            className='waves'
            xmlns='http://www.w3.org/2000/svg'
            xmlnsXlink='http://www.w3.org/1999/xlink'
            viewBox='0 24 150 28'
            preserveAspectRatio='none'
            shapeRendering='auto'
          >
            <defs>
              <path
                id='gentle-wave'
                d='M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z'
              />
            </defs>
            <g className='parallax'>
              <use
                xlinkHref='#gentle-wave'
                x='48'
                y='0'
                fill='rgba(255, 255, 255, 0.433)'
              />
              <use
                xlinkHref='#gentle-wave'
                x='48'
                y='3'
                fill='rgba(255, 255, 255, 0.533)'
              />
              <use
                xlinkHref='#gentle-wave'
                x='48'
                y='5'
                fill='rgba(255, 255, 255, 0.233)'
              />
              <use xlinkHref='#gentle-wave' x='48' y='7' fill='#ffffff' />
            </g>
          </svg>

          </div>
        </div>
      </div>
      <div className="bg-gray-100 w-full h-full py-10">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-8">
            {/* Card1 */}
            <div className="box-contact bg-white shadow-lg rounded-xl p-8 flex flex-col items-center text-center w-[55vh] h-100">
              <i className="fa-solid fa-address-card text-4xl text-orange-500 mb-4"></i>
              <h1 className="text-2xl font-semibold mb-4">Help Center</h1>
              <div className="flex items-center justify-around gap-1">
                <h2 className="hover:underline cursor-pointer">+94 423-23-221</h2>  -
                <small className="hover:underline cursor-pointer">help@fooyes.com</small>
              </div>
              <small className="text-gray-500 mt-2">
                MON to FRI 9am-6pm SAT 9AM-2PM
              </small>
               </div>

            {/* Card2 */}
            <div className="box-contact bg-white shadow-lg rounded-xl p-8 flex flex-col items-center text-center w-[55vh] h-100">
              <i className="fa-solid fa-location-dot text-4xl text-red-500 mb-4"></i>
              <h2 className="text-2xl font-semibold mb-4">Address</h2>
              <div className="text-gray-700">
                6th Forrest Ray, London - 1001 UK
              </div>
              <small className="text-gray-500 mt-2">
                MON to FRI 9am-6pm SAT 9AM-2PM
              </small>
            </div>

            {/* Card3 */}
            <div className="box-contact bg-white shadow-lg rounded-xl p-8 flex flex-col items-center text-center w-[55vh] h-100">
              <i className="fa-regular fa-cloud text-4xl text-blue-500 mb-4"></i>
              <h2 className="text-2xl font-semibold mb-4">Submissions</h2>
              <div className="flex items-center justify-around gap-1">
                <h2 className="hover:underline cursor-pointer">+94 423-23-221</h2>  -
                <small className="hover:underline cursor-pointer">order@fooyes.com</small>
              </div>
              <small className="text-gray-500 mt-2">
                MON to FRI 9am-6pm SAT 9AM-2PM
              </small>
            </div>
          </div>
        </div>
      </div>

{/*  */}
<div className="mt-10 flex items-center justify-around gap-1 px-4">

  <div className="w-2/6">
  <h1 className="text-4xl  mb-2 text-center text-gray-800">
      Drop Us a Line
</h1>
  <div className="flex flex-col space-y-4">
  <input
    type="text"
    placeholder="Name"
    className="w-full border border-gray-300 rounded-md px-4 py-2 bg-white focus:outline-none focus:ring focus:ring-gray-200 focus:border-gray-200"
  />
  <input
    type="email"
    placeholder="Email"
    className="w-full border border-gray-300 rounded-md px-4 py-2 bg-white focus:outline-none focus:ring focus:ring-gray-200 focus:border-gray-200"
  />
  <textarea
    className="w-full border border-gray-300 rounded-md px-4 py-2 bg-white resize-none h-32 focus:outline-none focus:ring focus:ring-gray-200 focus:border-gray-200"
    placeholder="Message"
  ></textarea>
  <input
    type="text"
    placeholder="Are you human? 3 + 1 ="
    className="w-full border border-gray-300 rounded-md px-4 py-2 bg-white focus:outline-none focus:ring focus:ring-gray-200 focus:border-gray-200"
  />
  <button
    type="submit"
    className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-3 rounded-md flex items-center justify-center font-semibold hover:shadow-lg focus:outline-none focus:ring focus:ring-orange-300"
  >
    Submit
  </button>
  </div>

  </div>

  <div className="w-3/5 rounded-md overflow-hidden shadow-lg">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243646.51488731765!2d-0.3817837926918892!3d51.52855824279362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761cb4a1a25e37%3A0x14b82b9ed401e619!2sLondon%2C%20UK!5e0!3m2!1sen!2s!4v1617711238564!5m2!1sen!2s"
      className="w-full h-96 border-0"
      allowFullScreen
      loading="lazy"
      title="Google Maps"
    ></iframe>
  </div>
</div>


    </div>
  );
}

export default contactPage;
