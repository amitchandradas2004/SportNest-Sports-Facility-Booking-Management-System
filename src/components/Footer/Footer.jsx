import Link from "next/link";
import { IoFootballOutline } from "react-icons/io5";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t bg-white dark:bg-slate-950 text-black">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo & Description */}
          <div>
            <Link
              href="/"
              className="mb-4 flex items-center gap-2 text-indigo-500"
            >
              <div className="flex h-13 w-13 items-center justify-center rounded-xl border text-3xl">
                <IoFootballOutline />
              </div>
              <span className="text-3xl font-bold">SportNest</span>
            </Link>

            <p className="mt-4 text-sm leading-6 dark:text-white">
              Discover, book, and manage sports facilities with ease. SportNest
              helps athletes and sports enthusiasts find the perfect place to
              play.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-2xl font-semibold dark:text-white">
              Quick Links
            </h3>

            <div className="flex flex-col gap-2 dark:text-white">
              <Link href="/" className="hover:text-indigo-600">
                Home
              </Link>
              <Link href="/allFacilities" className="hover:text-indigo-600">
                All Facilities
              </Link>
              <Link href="/about" className="hover:text-indigo-600">
                About Us
              </Link>
              <Link href="/contact" className="hover:text-indigo-600">
                Contact
              </Link>
            </div>
          </div>

          {/* User Links */}
          <div>
            <h3 className="mb-4 text-2xl font-semibold dark:text-white">
              My Account
            </h3>

            <div className="flex flex-col gap-2 opacity-80 dark:text-white">
              <Link href="/myBookings" className="hover:text-indigo-600">
                My Bookings
              </Link>
              <Link href="/addFacility" className="hover:text-indigo-600">
                Add Facility
              </Link>
              <Link href="/manageFacilities" className="hover:text-indigo-600">
                Manage Facilities
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-2xl font-semibold dark:text-white">
              Contact
            </h3>

            <div className="space-y-2 text-sm dark:text-white">
              <p>Chattogram, Bangladesh</p>
              <p>support@sportnest.com</p>
              <p>+880 1234-567890</p>
            </div>

            <div className="mt-5 flex gap-4 text-xl">
              <Link href="/">
                <FaFacebook />
              </Link>

              <Link href="/">
                <FaInstagram />
              </Link>

              <Link href="/">
                <FaLinkedin />
              </Link>

              <Link href="/">
                <FaGithub />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} SportNest. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
