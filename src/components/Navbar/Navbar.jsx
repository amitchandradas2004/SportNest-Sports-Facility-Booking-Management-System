"use client";

import Link from "next/link";
import { Button, Dropdown, Separator } from "@heroui/react";
import { LuLogOut } from "react-icons/lu";
import { IoFootballOutline } from "react-icons/io5";
import UserDropdown from "./UserDropDown";
import { TiThMenu } from "react-icons/ti";
import { ThemeToggle } from "../ThemeToggle";
const Navbar = () => {
  const user = false;
  return (
    <header className="fixed top-0 left-0 z-50 w-full backdrop-blur-xl shadow-xl border-b border-white/10 bg-white/10">
      <nav className="mx-auto flex h-13 container items-center justify-between  px-6 ">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-1  text-indigo-600 dark:text-white"
        >
          <div className="flex h-10 w-10 items-center justify-center border text-2xl rounded-xl shadow">
            <IoFootballOutline />
          </div>
          <span className="text-xl font-bold">SportNest</span>
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
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <Link href={"/signup"}>
                <Button className="rounded-full border border-white/20 px-5 py-2 text-sm font-medium transition">
                  Get Started
                </Button>
              </Link>
            </div>
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
            {!user ? (
              <Dropdown.Menu>
                <Dropdown.Item id="home" className="p-0 ">
                  <Link
                    href="/"
                    className="w-full block   p-2 rounded-2xl hover:bg-gray-200 hover:text-indigo-600"
                  >
                    Home
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item id="all-facilities" className="p-0 ">
                  <Link
                    href="/allFacilities"
                    className="w-full block   p-2 rounded-2xl hover:bg-gray-200 hover:text-indigo-600"
                  >
                    All Facilities
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item id="theme">
                  <ThemeToggle />
                </Dropdown.Item>

                <Dropdown.Item id="get-started" className="  p-0 ">
                  <Link
                    href="/signup"
                    className="w-full block   p-2 rounded-2xl hover:bg-gray-200 hover:text-indigo-600"
                  >
                    Get Started
                  </Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            ) : (
              <Dropdown.Menu>
                <Dropdown.Item id="home" className="  p-0 ">
                  <Link
                    href="/"
                    className="w-full block   p-2 rounded-2xl hover:bg-gray-200 hover:text-indigo-600"
                  >
                    Home
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item id="all-facilities" className="  p-0 ">
                  <Link
                    href="/allFacilities"
                    className="w-full block   p-2 rounded-2xl hover:bg-gray-200 hover:text-indigo-600"
                  >
                    All Facilities
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item id="my-bookings" className="  p-0 ">
                  <Link
                    href="/my-bookings"
                    className="w-full block   p-2 rounded-2xl hover:bg-gray-200 hover:text-indigo-600"
                  >
                    My Bookings
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item id="my-bookings" className="  p-0 ">
                  <Link
                    href="/my-bookings"
                    className="w-full block   p-2 rounded-2xl hover:bg-gray-200 hover:text-indigo-600"
                  >
                    My Bookings
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item id="add-facility" className="  p-0 ">
                  <Link
                    href="/addFacility"
                    className="w-full block   p-2 rounded-2xl hover:bg-gray-200 hover:text-indigo-600"
                  >
                    Add Facility
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item id="manage-facilities" className="  p-0 ">
                  <Link
                    href="/manageFacilities"
                    className="w-full block   p-2 rounded-2xl hover:bg-gray-200 hover:text-indigo-600"
                  >
                    Manage My Facilities
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item id="profile" className="  p-0 ">
                  <Link
                    href="/profile"
                    className="w-full block   p-2 rounded-2xl hover:bg-gray-200 hover:text-indigo-600"
                  >
                    Profile
                  </Link>
                </Dropdown.Item>

                <Dropdown.Item id="theme">
                  <ThemeToggle />
                </Dropdown.Item>
                <Separator />
                <Dropdown.Item className="text-red-400">
                  Logout <LuLogOut />
                </Dropdown.Item>
              </Dropdown.Menu>
            )}
          </Dropdown.Popover>
        </Dropdown>
      </nav>
    </header>
  );
};

export default Navbar;
