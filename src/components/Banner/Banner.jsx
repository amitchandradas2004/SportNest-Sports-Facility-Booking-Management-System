import { Button } from "@heroui/react";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const Banner = () => {
  return (
    <div>
      <div className="relative h-screen pt-10">
        <div className="absolute inset-0 bg-[url('/Banner4.jpg')] text-white  flex justify-between flex-col items-center gap-5 bg-no-repeat bg-cover bg-center">
          <div className="absolute inset-5 bg-black/60 w-full left-0 top-0 bottom-0 right-0"></div>
          <div className="text-center flex justify-center flex-col items-center gap-4 px-2 md:px-8 flex-1 relative z-10">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
              Find the Perfect Place to Play
            </h1>
            <p className="text-[16px] opacity-70">
              Explore nearby sports facilities, book instantly, and manage your
              reservations with ease. Everything you need for your next game,
              all in one place.
            </p>

            <div>
              <Link href={"/destinations"}>
                <Button className="uppercase  flex items-center gap-2 btn btn-info text-white bg-indigo-600">
                  Explore ALL Facilities <FaArrowRightLong />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
