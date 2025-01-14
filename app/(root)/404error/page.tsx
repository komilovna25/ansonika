import Image from 'next/image';

function ErrorPage() {
  return (
    <div className="w-screen h-screen flex items-center justify-center text-center bg-gray-100">
      <div className="w-full max-w-3xl ">
        <div className="text-center">
          <Image
            src="/404error/404.svg"
            alt="404error"
            width={600}
            height={600}
            className="rounded-md object-cover mx-auto"
          />
          <p className="mt-15  text-gray-750 font-serif text-lg">
            We're sorry, but the page you were looking for doesn't exist.
          </p>

          <form
            method="post"
            action="grid-listing-filterscol"
            className="mt-6 flex items-center justify-center text-center gap-4"
          >
            <div className="flex w-[800px] h-14 rounded-md overflow-hidden  shadow-lg bg-white p-6 pt-3 pr-2.5 pb-4 pl-5">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="flex-grow bg-white px-4 py-0.5   "
              />
            <button
                type="submit"
                className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-10 py-5 rounded-md flex items-center justify-center"
              >
                Search
            </button>

            </div>
          </form>
          
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;
