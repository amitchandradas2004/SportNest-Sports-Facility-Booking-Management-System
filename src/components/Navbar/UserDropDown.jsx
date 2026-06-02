import { Button, Dropdown, Separator } from "@heroui/react";
import Link from "next/link";
import { FaHome, FaUserAlt } from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";
import { ThemeToggle } from "../ThemeToggle";
import { FaReplyAll, FaStore } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { ImProfile } from "react-icons/im";

const UserDropdown = () => (
  <Dropdown>
    <Button isIconOnly aria-label="Profile" variant="secondary">
      <FaUserAlt />
    </Button>

    <Dropdown.Popover className="min-w-60 p-3">
      <Dropdown.Menu>
        <Dropdown.Item id="home" className="  p-0 ">
          <Link
            href="/"
            className="w-full block flex items-center gap-2 p-2 rounded-2xl hover:bg-gray-200 hover:text-indigo-600"
          >
            <FaHome />
            Home
          </Link>
        </Dropdown.Item>

        <Dropdown.Item id="all-facilities" className="  p-0 ">
          <Link
            href="/allFacilities"
            className="w-full block  flex items-center gap-2 p-2 rounded-2xl hover:bg-gray-200 hover:text-indigo-600"
          >
            <FaReplyAll />
            All Facilities
          </Link>
        </Dropdown.Item>

        <Dropdown.Item id="my-bookings" className="  p-0 ">
          <Link
            href="/my-bookings"
            className="w-full block flex items-center gap-2  p-2 rounded-2xl hover:bg-gray-200 hover:text-indigo-600"
          >
            <FaStore />
            My Bookings
          </Link>
        </Dropdown.Item>
        <Dropdown.Item id="add-facility" className="  p-0 ">
          <Link
            href="/addFacility"
            className="w-full block  flex items-center gap-2 p-2 rounded-2xl hover:bg-gray-200 hover:text-indigo-600"
          >
            <IoMdAdd />
            Add Facility
          </Link>
        </Dropdown.Item>
        <Dropdown.Item id="manage-facilities" className="  p-0 ">
          <Link
            href="/manageFacilities"
            className="w-full block p-2 rounded-2xl hover:bg-gray-200 hover:text-indigo-600 flex items-center gap-2"
          >
            <IoSettingsOutline />
            Manage My Facilities
          </Link>
        </Dropdown.Item>
        <Dropdown.Item id="profile" className="  p-0 ">
          <Link
            href="/profile"
            className="w-full block flex items-center gap-2 p-2 rounded-2xl hover:bg-gray-200 hover:text-indigo-600"
          >
            <ImProfile />
            Profile
          </Link>
        </Dropdown.Item>

        <Dropdown.Item id="theme" className="pl-0">
          {" "}
          <ThemeToggle />
        </Dropdown.Item>
        <Separator />
        <Dropdown.Item className="text-red-400">
          Logout <LuLogOut />
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown.Popover>
  </Dropdown>
);
export default UserDropdown;
