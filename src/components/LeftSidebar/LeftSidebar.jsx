import { FiSearch } from "react-icons/fi";
import { IoVideocamOutline } from "react-icons/io5";
import { MdOutlineSportsFootball } from "react-icons/md";
import { PiGameController, PiMonitorLight } from "react-icons/pi";
import { RiHome2Line, RiPlayList2Line } from "react-icons/ri";

const LeftSidebar = () => {
    return (
        <div>
        list
        
            <div className="w-[95px] min-h-[611px] bg-gray-900 rounded-full flex flex-col justify-start items-center py-5 relative">
                <div className="absolute right-[16px] flex flex-col gap-[24px] items-end">
                    <div>
                        <div className=" bg-[#282828] home border border-transparent hover:border-orange-500 duration-300 rounded-full   p-4 flex text-white cursor-pointer">
                            <p className="hidden home_text pr-5 pl-5 text-[18px] leading-0 font-big uppercase leading-0 text-nowrap">Home Page</p>
                            <div className="pt-[1px]">
                                <RiHome2Line className="text-[26px]"/>
                            </div>
                        </div>
                    </div>    
                    <div>
                        <div className=" bg-[#282828] home border border-transparent hover:border-orange-500 duration-300 rounded-full   p-4 flex text-white cursor-pointer">
                            <p className="hidden home_text pr-5 pl-5 text-[18px] leading-0 font-big uppercase leading-0 text-nowrap">Search Movies</p>
                            <div className="pt-[1px]">
                                <FiSearch className="text-[26px]"/>
                            </div>
                        </div>
                    </div>    
                    <div>
                        <div className=" bg-[#282828] home border border-transparent hover:border-orange-500 duration-300 rounded-full   p-4 flex text-white cursor-pointer">
                            <p className="hidden home_text pr-5 pl-5 text-[18px] leading-0 font-big uppercase text-nowrap leading-0">Live Shows</p>
                            <div className="pt-[1px]">
                                <IoVideocamOutline className="text-[26px]"/>
                            </div>
                        </div>
                    </div>    
                    <div>
                        <div className=" bg-[#282828] home border border-transparent hover:border-orange-500 duration-300 rounded-full   p-4 flex text-white cursor-pointer">
                            <p className="hidden home_text pr-5 pl-5 text-[18px] leading-0 font-big uppercase leading-0 text-nowrap">Add To Playlist</p>
                            <div className="pt-[1px]">
                                <RiPlayList2Line className="text-[26px]"/>
                            </div>
                        </div>
                    </div>    
                    <div>
                        <div className=" bg-[#282828] home border border-transparent hover:border-orange-500 duration-300 rounded-full   p-4 flex text-white cursor-pointer">
                            <p className="hidden home_text pr-5 pl-5 text-[18px] leading-0 font-big uppercase leading-0 text-nowrap">TV Shows</p>
                            <div className="pt-[1px]">
                                <PiMonitorLight className="text-[26px]"/>
                            </div>
                        </div>
                    </div>    
                    <div>
                        <div className=" bg-[#282828] home border border-transparent hover:border-orange-500 duration-300 rounded-full   p-4 flex text-white cursor-pointer">
                            <p className="hidden home_text pr-5 pl-5 text-[18px] leading-0 font-big uppercase leading-0 text-nowrap">All Games</p>
                            <div className="pt-[1px]">
                                <PiGameController className="text-[26px]"/>
                            </div>
                        </div>
                    </div>    
                    <div>
                        <div className=" bg-[#282828] home border border-transparent hover:border-orange-500 duration-300 rounded-full   p-4 flex text-white cursor-pointer">
                            <p className="hidden home_text pr-5 pl-5 text-[18px] leading-0 font-big uppercase leading-0 text-nowrap">Sports Shows</p>
                            <div className="pt-[1px]">
                                <MdOutlineSportsFootball className="text-[26px]"/>
                            </div>
                        </div>
                    </div>    
                 
                </div>
            </div>
        </div>
    );
};

export default LeftSidebar;