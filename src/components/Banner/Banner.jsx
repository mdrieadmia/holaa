import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { LiaCrownSolid } from "react-icons/lia";

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
            <div className="flex justify-center pl-[580px] pt-[100px]">
                <div className="max-w-[750px]">
                    <h1 className="text-[150px] text-white font-big font-black leading-[155px] uppercase">The Lord <span className="block">of The Rings</span></h1>
                </div>
            </div>
        </div>
    );
};

export default Banner;