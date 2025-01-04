import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaFacebook, FaHome, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Link from "next/link";
function Footer() {
  return (
    <footer className="bg-yellow-50 p-8">
      <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-4 gap-8 font-creteRound">
        {/* QUICK LINKS */}
        <div>
          <h3 className="text-lg font-semibold mb-4">QUICK LINKS</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                Add your restaurant
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                Help
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                My account
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                Contacts
              </a>
            </li>
          </ul>
        </div>
        {/* CATEGORIES */}
        <div>
          <h3 className="text-lg font-semibold mb-4">CATEGORIES</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                Top Categories
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                Best Rated
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                Best Price
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                Latest Submissions
              </a>
            </li>
          </ul>
        </div>
        {/* Contacts */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Contacts</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <FaHome  className="text-orange-500 text-xl"/>
              <span className="text-gray-600">97845 Baker st. 567,Los Angeles - US</span>
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt  className="text-green-500 text-xl "/>
              <span className="text-gray-600">+94 423-23-221</span>
            </li>
            <li className="flex items-center gap-2">
            <MdEmail className="text-red-500 text-xl"/>
            <span className="text-gray-600">info@domain.com</span>
            </li>
          </ul>
        </div>
        {/* Keep iN touch */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Keep in Touch</h3>
          <form >
       <div className="flex">
       <Input
       type="email"
        placeholder="Your email"
        className="rounded-none border-gray-300 rounded-l-md"
       />
         <Button 
          className="rounded-none bg-red-500 text-white hover:bg-red-600 rounded-r-md"
        >
          →
        </Button>
        </div>
          </form>
          <div className="flex items-start  mt-8 flex-col">
          <h3>Follow US</h3>
          <div  className="flex items-center space-x-6 mt-4 ">
        <FaFacebook/>
        <FaXTwitter/>
        <FaInstagram/>
        <FaTiktok/>
        <FaWhatsapp/>
          </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto max-w-6xl mt-8 border-t border-gray-200 pt-4 flex justify-between items-center font-creteRound">
<div className="flex items-center space-x-4">
  {/* language */}
    <Select>
      <SelectTrigger className="w-[120px]">
        <SelectValue placeholder="English" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>English</SelectLabel>
          <SelectItem value="Russian">Russian</SelectItem>
          <SelectItem value="Uzbek">Uzbek</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select> 
  {/* dollar */}
  <Select>
      <SelectTrigger className="w-[120px]">
        <SelectValue placeholder="US Dollars" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>US Dollars</SelectLabel>
          <SelectItem value="euro">Euro</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
    <div className="flex items-center">
  <Link href={"/click"}>
          <Image src="/images/click.png" alt="Logo" width={120} height={120} />
        </Link>
        <Link href={"/payme"}>
          <Image src="/images/payme-01.png" alt="Logo" width={120} height={120} />
        </Link>
        <Link href={"/uzum_bank"}>
          <Image src="/images/UZUM_BANK-01.png" alt="Logo" width={120} height={120} />
        </Link>
</div>
</div>
<div className="flex gap-4 divide-x divide-gray-400 text-gray-700">
  <span className="pr-2">Terms and conditions</span>
  <span className="px-2">Privacy</span>
  <span className="pl-2">© FooYes</span>
</div>

      </div>
    </footer>
  );
}

export default Footer;
