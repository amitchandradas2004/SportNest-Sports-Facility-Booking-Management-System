"use client";

import Link from "next/link";
import { Button, Dropdown, Separator } from "@heroui/react";
import { LuLogOut } from "react-icons/lu";
import { IoFootballOutline } from "react-icons/io5";
import UserDropdown from "./UserDropDown";
import { TiThMenu } from "react-icons/ti";
const Navbar = () => {
  const user = false;
  return (
    <header className="fixed top-0 left-0 z-50 w-full shadow">
      <nav className="mx-auto flex h-15 max-w-7xl items-center justify-between border-b border-white/10 bg-white/10 px-6 backdrop-blur-xl">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1  text-indigo-600">
          <div className="flex h-10 w-10 items-center justify-center border text-2xl rounded-xl shadow">
            <IoFootballOutline />
          </div>
          <span className="text-xl font-bold"> SportNest</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">
          {!user ? (
            <span className="flex items-center gap-8">
              <Link
                href="/"
                className="font-medium transition  hover:text-indigo-600"
              >
                Home
              </Link>
              <Link
                href="/allFacilities"
                className="font-medium transition hover:text-indigo-600"
              >
                All Facilities
              </Link>
            </span>
          ) : (
            <span className="flex items-center gap-8 hidden lg:inline-flex">
              <Link
                href="/"
                className="font-medium transition hover:text-indigo-600"
              >
                Home
              </Link>
              <Link
                href="/allFacilities"
                className="font-medium transition hover:text-indigo-600"
              >
                All Facilities
              </Link>
              <Link
                href="/allFacilities"
                className="font-medium transition hover:text-indigo-600"
              >
                My Bookings
              </Link>
              <Link
                href="/allFacilities"
                className="font-medium transition hover:text-indigo-600"
              >
                Add Facility
              </Link>
              <Link
                href="/allFacilities"
                className="font-medium transition hover:text-indigo-600"
              >
                Manage My Facilities
              </Link>
            </span>
          )}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-3 md:flex">
          {!user ? (
            <Link href={"/signup"}>
              <Button className="rounded-full border border-white/20 px-5 py-2 text-sm font-medium  transition">
                Get Started
              </Button>
            </Link>
          ) : (
            <UserDropdown />
          )}
        </div>

        {/* Mobile Menu Button */}
        <Dropdown>
          <Button
            isIconOnly
            aria-label="Profile"
            className={"text-indigo-600 bg-transparent inline md:hidden"}
          >
            <TiThMenu />
          </Button>

          <Dropdown.Popover className="min-w-60 p-3">
            <Dropdown.Menu>
              <Dropdown.Item id="my-bookings">My Bookings</Dropdown.Item>

              <Dropdown.Item id="add-facility">Add Facility</Dropdown.Item>

              <Dropdown.Item id="manage-facilities">
                Manage My Facilities
              </Dropdown.Item>

              <Separator />

              <Dropdown.Item>Theme</Dropdown.Item>

              <Dropdown.Item className="text-red-400">
                Logout <LuLogOut />
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown.Popover>
        </Dropdown>
      </nav>
    </header>
  );
};

export default Navbar;
