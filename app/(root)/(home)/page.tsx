import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { data, Restaurant_List, SearchLinks } from "@/constants";
import Link from "next/link";
import Image from 'next/image'
import { Button } from "@/components/ui/button";
function HomePage() {
  return (
    <div className="mx-auto ">
      {/* Delivery or Takeaway Food start */}
    <div className="flex flex-col lg:flex-row justify-center items-center bg-yellow-100 p-10 font-creteRound">
      <div className="max-w-lg text-center lg:text-left mb-10 lg:mb-0">
        <h1 className="text-4xl font-bold mb-4">Delivery or Takeaway Food</h1>
        <p className="text-gray-600 mb-6">
          The best restaurants at the best price
        </p>
        <form action="./list with map">
        <div className="flex items-center justify-center lg:justify-start bg-white rounded-lg shadow-md overflow-hidden mb-4">
          <input
            type="text"
            placeholder="Address, neighborhood..."
            className="flex-grow px-4 py-4 text-gray-700 focus:outline-none"
          />
          <button className="px-6 py-4 bg-red-500 text-white font-medium hover:bg-red-600 transition">
            Search
          </button>
        </div>
        </form>
        <p className="text-sm text-gray-500 cursor-pointer">
          <span className="font-semibold">Trending:</span>
          {SearchLinks.map((link, index) => (
            <a
              key={index}
              href={link.route}
              className="ml-2 text-gray-500 hover:underline"
            >
              {link.name}
            </a>
          ))}
        </p>
      </div>
      <div className="w-full lg:w-1/2 flex justify-center">
        <img
          src="./images/hero.png"
          alt="Delivery Illustration"
          className="w-full"
        />
      </div>
    </div>
    {/* Delivery or Takeaway Food  end */}

    {/* Popular Categories start */}
    <div>
      <div className="text-center mb-8 mt-8 font-creteRound">
        <h2 className="text-3xl font-bold">Popular Categories</h2>
        <p className="text-gray-600 mt-2">
          Cum doctus civibus efficiantur in imperdiet deterruisset
        </p>
      </div>
      {/*  */}
      <div className="p-6">
  <Carousel
    opts={{
      align: "start",
    }}
    className="max-w-7xl m-auto "
  >
    <CarouselContent className="flex gap-6  rounded-lg">
    {data.map((category, index) => (
      <CarouselItem
        key={index}
        className="relative pl-4 basis-1/4 flex-shrink-0 w-64 h-80 bg-cover bg-center rounded-lg shadow-lg"
    
      >
       <Image src={category.image} alt="product-image" width={400} height={350} className="h-full w-full object-cover" />
       <div className="absolute top-0 left-0 w-full h-full z-10 bg-gradient-to-t from-[#00000072] to-transparent">
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="text-lg font-bold">{category.title}</h3>
          <p className="text-sm">Avg price {category.price}</p>
        </div>
        <div className="absolute top-4 right-4 bg-white text-black rounded-full px-3 py-1 text-sm font-semibold">
          {category.rating}
        </div>
         </div>
      </CarouselItem>
    ))}
       </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
  </Carousel>
</div>
      

    </div>
    {/* Popular Categories end */}
    <div className=" max-w-7xl flex justify-around items-center gap-36 bg-gray-50 py-4 px-6">
      <div>
        <h2 className="text-xl font-creteRound text-gray-900">Top Rated Restaurants</h2>
        <p className="text-sm text-gray-500 font-creteRound">Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
      </div>
      <Link href={'/restaurants'}  className="text-sm font-medium text-red-500 hover:underline flex items-center font-creteRound">
        View All <span className="ml-1">&rarr;</span>
      </Link>
    </div>
    <br />
    {/* Restauranst list */}
    <div className=" max-w-6xl m-auto grid grid-cols-2 gap-4">
  {Restaurant_List.map((restaurant, index) => (
    <div
      key={index}
      className="flex bg-white shadow-md rounded-lg overflow-hidden"
    >
      <Link href={'/list'}>
      <Image src={restaurant.image} alt="restaurant" className="object-cover" width={200} height={200}/>
      </Link>
 
      <div className="p-4 flex flex-col justify-between w-2/4 cursor-pointer">
        <div>
          <h4 className="text-xs uppercase text-gray-500 mb-1">
            {restaurant.kitchen}
          </h4>
          <h3 className="text-lg font-semibold text-gray-900">
            {restaurant.name}
          </h3>
          <p className="text-sm text-gray-600">{restaurant.address}</p>
        </div>
        <div className="flex justify-between items-center mt-4">
          <span className="bg-red-500 text-white text-xs font-medium px-2 py-1 rounded">
            {restaurant.discount}
          </span>
          <span className="text-sm text-gray-700">
            Average price {restaurant.price}
          </span>
          <span className="text-green-500 text-sm font-semibold">
            {restaurant.rating} 
          </span>
        </div>
      </div>
    </div>
  ))}
</div>
<br />
<div className="relative w-full h-screen ">
  <div className="relative h-full w-full max-w-7xl mx-auto">
    <div className="absolute inset-0">
      <Image
        src="/images/banner_bg_desktop.jpg" 
        alt="Food Delivery Background"
        layout="fill"
        objectFit="cover"
        quality={80} 
        priority 
        className="rounded" 
      />
    </div>
    <div className="absolute inset-0 bg-black/50 rounded-lg"></div>
    <div className="relative z-10 flex flex-col items-start justify-center h-full px-6 md:px-16 lg:px-24">
      <p className="text-white text-sm md:text-base uppercase font-creteRound">
        FooYes Delivery
      </p>
      <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold leading-snug mt-2 font-creteRound">
        We Deliver to your Office
      </h1>
      <p className="text-white text-base md:text-lg mt-4 font-creteRound">
        Enjoy a tasty food in minutes!
      </p>
       <Button variant="destructive" className="mt-6 font-creteRound"> Start Now!</Button>
    </div>
  </div>
</div>
<div className="container mx-auto px-4 py-12 flex items-center justify-around">
<div className="flex flex-wrap gap-6 justify-center">
    {/* card1 */}
    <div className="bg-white shadow-md rounded-lg p-6 text-center">
        <Image
            src="/images/order.png"
            alt="Easily Order"
            width={96}
            height={96}
            className="w-24 mx-auto mb-4"
        />
        <h3 className="text-lg font-semibold">Easily Order</h3>
        <p className="text-gray-600 mt-2">
            Faucibus ante, in porttitor tellus blandit et.
        </p>
    </div>

    {/* card2 */}
    <div className="bg-white shadow-md rounded-lg p-6 text-center">
        <img
            src="/images/enjoy-food.png"
            alt="Enjoy Food"
            className="w-24 mx-auto mb-4"
        />
        <h3 className="text-lg font-semibold">Enjoy Food</h3>
        <p className="text-gray-600 mt-2">
            Morbi convallis bibendum urna ut viverra.
        </p>
    </div>

    {/* card3 */}
    <div className="bg-white shadow-md rounded-lg p-6 text-center">
        <img
            src="/images/quick-delivery.png"
            alt="Quick Delivery"
            className="w-24 mx-auto mb-4"
        />
        <h3 className="text-lg font-semibold">Quick Delivery</h3>
        <p className="text-gray-600 mt-2">
            Maecenas pulvinar, risus in facilisis dignissim.
        </p>
    </div>
</div>

  <div className="">
        <h2 className="text-2xl font-bold">Start Ordering Now</h2>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet libero id nisi euismod, sed porta est consectetur deserunt.</span>
        <p className="text-gray-600 mt-4">
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
        <button className="mt-6 px-6 py-3 bg-red-500 text-white rounded-md hover:bg-red-600">
          Register
        </button>
      </div>
</div>


    </div>
  );
}

export default HomePage;
