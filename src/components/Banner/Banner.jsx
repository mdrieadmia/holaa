import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { LiaCrownSolid } from "react-icons/lia";
import { IoStar } from "react-icons/io5";
import { HiMiniClock } from "react-icons/hi2";
import { PiFourKFill } from "react-icons/pi";
import { IoPlayOutline } from "react-icons/io5";
import { PiListPlus } from "react-icons/pi";
import LeftSidebar from "../LeftSidebar/LeftSidebar";

const Banner = () => {
    return (
        <div className="bg-[url(/Background.png)] min-h-[1071px] max-w-[1920px] bg-no-repeat mx-auto bg-cover bg-left">
            <div className="px-[60px] py-9 flex justify-between items-center">
                <div className="flex gap-[35px]">
                    <div>
                        <img src="/logo.svg" alt="Logo" />
                    </div>
                    <div>
                        <HiMiniBars3CenterLeft className="text-2xl text-white h-12 w-12 p-2 border-white border rounded-full hover:text-red-300 hover:border-red-300 duration-200 cursor-pointer" />
                    </div>
                </div>
                <div className="flex gap-[17px]">
                    <button className="bg-gradient-to-r from-customColor1 via-customColor2 to-customColor3 h-[60px] w-[170px] font-bold text-white font-big flex items-center justify-center gap-2 rounded-full uppercase text-lg"> <LiaCrownSolid className="text-xl" /> Subscribe Now</button>
                    <div>
                        <img src="/user-icon.png" alt="User Icon" />
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly">
                <div className="flex justify-center pl-[580px] pt-[100px]">
                    <div className="max-w-[750px]">
                        <h1 className="text-[150px] text-white font-big font-black leading-[155px] uppercase">The Lord <span className="block">of The Rings</span></h1>
                        <div className="flex gap-[15px] pt-8">
                            <button className="bg-gradient-to-r from-[rgba(255,255,255,0.27)] to-[rgba(255,255,255,0.09)] flex justify-center items-center text-white px-[16px] py-[15px] gap-[5px] font-jost font-medium text-lg leading-[0px] rounded-full border border-gray-700"><IoStar className="text-2xl" /> 4.9 Reviews</button>
                            <button className="bg-gradient-to-r from-[rgba(255,255,255,0.27)] to-[rgba(255,255,255,0.09)] flex justify-center items-center text-white px-[16px] py-[15px] gap-[5px] font-jost font-medium text-lg leading-[0px] rounded-full border border-gray-700"><HiMiniClock className="text-2xl" /> 02h 30m</button>
                            <button className="bg-gradient-to-r from-[rgba(255,255,255,0.27)] to-[rgba(255,255,255,0.09)] flex justify-center items-center text-white px-[16px] py-[15px] gap-[5px] font-jost font-medium text-lg leading-[0px] rounded-full border border-gray-700"><PiFourKFill className="text-2xl" /> 4k Quality</button>
                        </div>
                        <p className="text-[22px] text-[#999999] font-jost leading-[34px] pt-10 pb-[50px]">The Lord of the Rings is a trilogy of epic fantasy adventure films directed.</p>
                        <div className="flex gap-5">
                            <button className="bg-gradient-to-r from-customColor1 via-customColor2 to-customColor3 h-[60px] w-[170px] font-bold text-white font-big flex items-center justify-center gap-2 rounded-full uppercase text-lg tracking-wider"> <IoPlayOutline className="text-xl mb-[2px]" /> Play Trailer</button>
                            <button className="bg-transparent h-[60px] w-[170px] font-bold text-[#999999] font-big flex items-center justify-center gap-2 rounded-full uppercase text-lg tracking-wider border border-gray-600"> <PiListPlus className="text-xl mb-[2px]" /> Add To List</button>
                        </div>
                    </div>
                </div>
                <LeftSidebar />
            </div>
        </div>
    );
};

export default Banner;