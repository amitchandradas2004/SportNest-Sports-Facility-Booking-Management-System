import { Button, Dropdown, Separator } from "@heroui/react";
import Link from "next/link";
import { FaUserAlt } from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";

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

        <Dropdown.Item id="theme">Theme</Dropdown.Item>
        <Separator />
        <Dropdown.Item className="text-red-400">
          Logout <LuLogOut />
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown.Popover>
  </Dropdown>
);
export default UserDropdown;
