import { navLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
  return (
    <div className="w-full h-[10vh] p-2 border-b fixed inset-0 bg-background backdrop-blur-sm z-50 ">
      <div className="container max-w-6xl  flex items-center justify-between ">
        {/* Logo */}
        <Link href={"/"}>
          <Image src="/images/logo.png" alt="Logo" width={200} height={200} />
        </Link>

        {/* Navigation Links */}
        <div className="gap-8 hidden md:flex font-creteRound m-auto">
          {navLinks.map((nav) => (
            <div key={nav.name} className="relative group">
              <Link
                href={nav.route || "#"}
                className="hover:text-red-500 font-medium"
              >
                {nav.name}
              </Link>
              {nav.subLinks && (
                <div className="absolute left-0 top-full mt-2 hidden group-hover:flex flex-col w-48 bg-white shadow-lg rounded-md z-50">
                  {nav.subLinks.map((subLink) => (
                    <Link
                      key={subLink.name}
                      href={subLink.route || "#"}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      {subLink.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
