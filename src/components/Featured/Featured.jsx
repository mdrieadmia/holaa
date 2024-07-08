import { IoStar } from "react-icons/io5";
import { GoClockFill } from "react-icons/go";
import { PiFourKFill } from "react-icons/pi";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { RiPlayList2Fill } from "react-icons/ri";
import { CgCast } from "react-icons/cg";
import { FiHeart } from "react-icons/fi";
import { GoShare } from "react-icons/go";


const Featured = () => {
    return (
        <div>
            <div className="w-[1920px] pb-40 bg-[#101010] mx-auto ">
                <div className="relative">
                    <div className="w-[1800px] h-[455px] bg-[#191919] rounded-[50px] mx-auto absolute -top-12 left-[50%] -translate-x-1/2">
                        <div className="-mt-[92px] flex justify-center gap-[30px]">
                            <div className="text-center">
                                <div>
                                    <img src="./featured1.png" alt="" />
                                </div>
                                <div>
                                    <h1 className="text-white text-[35px] font-big font-bold pt-[10px]">Samelill Sronle</h1>
                                    <div className="flex gap-[15px] justify-center py-[2px]">
                                        <div className="flex gap-1 items-center text-[#999999] font-jost text-[16px]">
                                            <IoStar className="text-orange-600" />
                                            <p>9.5</p>
                                        </div>
                                        <div className="flex gap-1 items-center text-[#999999] font-jost text-[16px]">
                                            <GoClockFill />
                                            <p>02h 30m</p>
                                        </div>
                                        <div className="flex gap-1 items-center text-[#999999] font-jost text-[16px]">
                                            <PiFourKFill />
                                            <p>4k Quality</p>
                                        </div>
                                    </div>
                                    <p className="font-jost text-[#999999]">Action, Comedy</p>
                                </div>
                            </div>
                            <div className="text-center">
                                <div>
                                    <img src="./featured2.png" alt="" />
                                </div>
                                <div>
                                    <h1 className="text-white text-[35px] font-big font-bold pt-[10px]">The family monky</h1>
                                    <div className="flex gap-[15px] justify-center py-[2px]">
                                        <div className="flex gap-1 items-center text-[#999999] font-jost text-[16px]">
                                            <IoStar className="text-orange-600" />
                                            <p>9.5</p>
                                        </div>
                                        <div className="flex gap-1 items-center text-[#999999] font-jost text-[16px]">
                                            <GoClockFill />
                                            <p>02h 30m</p>
                                        </div>
                                        <div className="flex gap-1 items-center text-[#999999] font-jost text-[16px]">
                                            <PiFourKFill />
                                            <p>4k Quality</p>
                                        </div>
                                    </div>
                                    <p className="font-jost text-[#999999]">Action, Comedy</p>
                                </div>
                            </div>
                            <div className="text-center">
                                <div>
                                    <img src="./featured3.png" alt="" />
                                </div>
                                <div>
                                    <h1 className="text-white text-[35px] font-big font-bold pt-[10px]">Chiefly universes</h1>
                                    <div className="flex gap-[15px] justify-center py-[2px]">
                                        <div className="flex gap-1 items-center text-[#999999] font-jost text-[16px]">
                                            <IoStar className="text-orange-600" />
                                            <p>9.5</p>
                                        </div>
                                        <div className="flex gap-1 items-center text-[#999999] font-jost text-[16px]">
                                            <GoClockFill />
                                            <p>02h 30m</p>
                                        </div>
                                        <div className="flex gap-1 items-center text-[#999999] font-jost text-[16px]">
                                            <PiFourKFill />
                                            <p>4k Quality</p>
                                        </div>
                                    </div>
                                    <p className="font-jost text-[#999999]">Action, Comedy</p>
                                </div>
                            </div>
                            <div className="text-center">
                                <div>
                                    <img src="./featured4.png" alt="" />
                                </div>
                                <div>
                                    <h1 className="text-white text-[35px] font-big font-bold pt-[10px]">World war 02</h1>
                                    <div className="flex gap-[15px] justify-center py-[2px]">
                                        <div className="flex gap-1 items-center text-[#999999] font-jost text-[16px]">
                                            <IoStar className="text-orange-600" />
                                            <p>9.5</p>
                                        </div>
                                        <div className="flex gap-1 items-center text-[#999999] font-jost text-[16px]">
                                            <GoClockFill />
                                            <p>02h 30m</p>
                                        </div>
                                        <div className="flex gap-1 items-center text-[#999999] font-jost text-[16px]">
                                            <PiFourKFill />
                                            <p>4k Quality</p>
                                        </div>
                                    </div>
                                    <p className="font-jost text-[#999999]">Action, Comedy</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pt-[500px]">
                    <div>
                        <p className="text-[50px] font-black text-white font-big pl-[100px]">Newest releases</p>
                    </div>
                    <div>

                    </div>
                </div>
                <div>
                    <Swiper
                        slidesPerView={6}
                        spaceBetween={25}
                        loop={true}
                        pagination={{
                            clickable: true,
                        }}
                        autoplay={{
                            delay: 1000,
                            disableOnInteraction: false,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper my-10"
                    >
                        <SwiperSlide className="h-[400px] flex justify-center items-center">
                            <div className="newImage relative hover:scale-110 duration-300 cursor-pointer">
                                <div>
                                    <img className="rounded-[20px]" src="/new1.png" alt="" />
                                </div>
                                <div className="newImageContent bg-custom-gradient w-full h-[360px] absolute top-0 left-0 rounded-[20px]">
                                    <div className="absolute top-[15px] right-[20px] text-white flex flex-col gap-[5px]">
                                        <div className="video_action_button h-10 w-10 rounded-full bg-[#1E27  flex justify-center items-center cursor-pointer">
                                            <div><RiPlayList2Fill /></div>
                                        </div>
                                        <div className="video_action_button h-10 w-10 rounded-full bg-[#1E27 flex justify-center items-center cursor-pointer">
                                            <CgCast />
                                        </div>
                                        <div className="video_action_button h-10 w-10 rounded-full bg-[#1E27 flex justify-center items-center cursor-pointer">
                                            <FiHeart />
                                        </div>
                                        <div className="video_action_button h-10 w-10 rounded-full bg-[#1E27 flex justify-center items-center cursor-pointer">
                                            <GoShare />
                                        </div>
                                    </div>
                                    <div className="absolute bottom-5 left-5">
                                        <h1 className="text-white text-[35px] font-big font-bold pt-[10px]">Samelill Sronle</h1>
                                        <div className="flex gap-[15px] justify-center py-[2px]">
                                            <div className="flex gap-1 items-center text-[#999999] font-jost text-[16px]">
                                                <IoStar className="text-orange-600" />
                                                <p>9.5</p>
                                            </div>
                                            <div className="flex gap-1 items-center text-[#999999] font-jost text-[16px]">
                                                <GoClockFill />
                                                <p>02h 30m</p>
                                            </div>
                                            <div className="flex gap-1 items-center text-[#999999] font-jost text-[16px]">
                                                <PiFourKFill />
                                                <p>4k Quality</p>
                                            </div>
                                        </div>
                                        <p className="font-jost text-[#999999]">Action, Comedy</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="h-[400px] flex justify-center items-center">
                            <div className="newImage relative hover:scale-110 duration-300 cursor-pointer">
                                <div>
                                    <img className="rounded-[20px]" src="/new2.png" alt="" />
                                </div>
                                <div className="newImageContent bg-custom-gradient w-full h-[360px] absolute top-0 left-0 rounded-[20px]">
                                    <div className="absolute top-[15px] right-[20px] text-white flex flex-col gap-[5px]">
                                        <div className="video_action_button h-10 w-10 rounded-full bg-[#1E27  flex justify-center items-center cursor-pointer">
                                            <div><RiPlayList2Fill /></div>
                                        </div>
                                        <div className="video_action_button h-10 w-10 rounded-full bg-[#1E27 flex justify-center items-center cursor-pointer">
                                            <CgCast />
                                        </div>
                                        <div className="video_action_button h-10 w-10 rounded-full bg-[#1E27 flex justify-center items-center cursor-pointer">
                                            <FiHeart />
                                        </div>
                                        <div className="video_action_button h-10 w-10 rounded-full bg-[#1E27 flex justify-center items-center cursor-pointer">
                                            <GoShare />
                                        </div>
                                    </div>
                                    <div className="absolute bottom-5 left-5">
                                        <h1 className="text-white text-[35px] font-big font-bold pt-[10px]">Samelill Sronle</h1>
                                        <div className="flex gap-[15px] justify-center py-[2px]">
                                            <div className="flex gap-1 items-center text-[#999999] font-jost text-[16px]">
                                                <IoStar className="text-orange-600" />
                                                <p>9.5</p>
                                            </div>
                                            <div className="flex gap-1 items-center text-[#999999] font-jost text-[16px]">
                                                <GoClockFill />
                                                <p>02h 30m</p>
                                            </div>
                                            <div className="flex gap-1 items-center text-[#999999] font-jost text-[16px]">
                                                <PiFourKFill />
                                                <p>4k Quality</p>
                                            </div>
                                        </div>
                                        <p className="font-jost text-[#999999]">Action, Comedy</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="h-[400px] flex justify-center items-center">
                            <div className="newImage relative hover:scale-110 duration-300 cursor-pointer">
                                <div>
                                    <img className="rounded-[20px]" src="/new3.png" alt="" />
                                </div>
                                <div className="newImageContent bg-custom-gradient w-full h-[360px] absolute top-0 left-0 rounded-[20px]">
                                    <div className="absolute top-[15px] right-[20px] text-white flex flex-col gap-[5px]">
                                        <div className="video_action_button h-10 w-10 rounded-full bg-[#1E27  flex justify-center items-center cursor-pointer">
                                            <div><RiPlayList2Fill /></div>
                                        </div>
                                        <div className="video_action_button h-10 w-10 rounded-full bg-[#1E27 flex justify-center items-center cursor-pointer">
                                            <CgCast />
                                        </div>
                                        <div className="video_action_button h-10 w-10 rounded-full bg-[#1E27 flex justify-center items-center cursor-pointer">
                                            <FiHeart />
                                        </div>
                                        <div className="video_action_button h-10 w-10 rounded-full bg-[#1E27 flex justify-center items-center cursor-pointer">
                                            <GoShare />
                                        </div>
                                    </div>
                                    <div className="absolute bottom-5 left-5">
                                        <h1 className="text-white text-[35px] font-big font-bold pt-[10px]">Samelill Sronle</h1>
                                        <div className="flex gap-[15px] justify-center py-[2px]">
                                            <div className="flex gap-1 items-center text-[#999999] font-jost text-[16px]">
                                                <IoStar className="text-orange-600" />
                                                <p>9.5</p>
                                            </div>
                                            <div className="flex gap-1 items-center text-[#999999] font-jost text-[16px]">
                                                <GoClockFill />
                                                <p>02h 30m</p>
                                            </div>
                                            <div className="flex gap-1 items-center text-[#999999] font-jost text-[16px]">
                                                <PiFourKFill />
                                                <p>4k Quality</p>
                                            </div>
                                        </div>
                                        <p className="font-jost text-[#999999]">Action, Comedy</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="h-[400px] flex justify-center items-center">
                            <div className="newImage relative hover:scale-110 duration-300 cursor-pointer">
                                <div>
                                    <img className="rounded-[20px]" src="/new4.png" alt="" />
                                </div>
                                <div className="newImageContent bg-custom-gradient w-full h-[360px] absolute top-0 left-0 rounded-[20px]">
                                    <div className="absolute top-[15px] right-[20px] text-white flex flex-col gap-[5px]">
                                        <div className="video_action_button h-10 w-10 rounded-full bg-[#1E27  flex justify-center items-center cursor-pointer">
                                            <div><RiPlayList2Fill /></div>
                                        </div>
                                        <div className="video_action_button h-10 w-10 rounded-full bg-[#1E27 flex justify-center items-center cursor-pointer">
                                            <CgCast />
                                        </div>
                                        <div className="video_action_button h-10 w-10 rounded-full bg-[#1E27 flex justify-center items-center cursor-pointer">
                                            <FiHeart />
                                        </div>
                                        <div className="video_action_button h-10 w-10 rounded-full bg-[#1E27 flex justify-center items-center cursor-pointer">
                                            <GoShare />
                                        </div>
                                    </div>
                                    <div className="absolute bottom-5 left-5">
                                        <h1 className="text-white text-[35px] font-big font-bold pt-[10px]">Samelill Sronle</h1>
                                        <div className="flex gap-[15px] justify-center py-[2px]">
                                            <div className="flex gap-1 items-center text-[#999999] font-jost text-[16px]">
                                                <IoStar className="text-orange-600" />
                                                <p>9.5</p>
                                            </div>
                                            <div className="flex gap-1 items-center text-[#999999] font-jost text-[16px]">
                                                <GoClockFill />
                                                <p>02h 30m</p>
                                            </div>
                                            <div className="flex gap-1 items-center text-[#999999] font-jost text-[16px]">
                                                <PiFourKFill />
                                                <p>4k Quality</p>
                                            </div>
                                        </div>
                                        <p className="font-jost text-[#999999]">Action, Comedy</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="h-[400px] flex justify-center items-center">
                            <div className="newImage relative hover:scale-110 duration-300 cursor-pointer">
                                <div>
                                    <img className="rounded-[20px]" src="/new5.png" alt="" />
                                </div>
                                <div className="newImageContent bg-custom-gradient w-full h-[360px] absolute top-0 left-0 rounded-[20px]">
                                    <div className="absolute top-[15px] right-[20px] text-white flex flex-col gap-[5px]">
                                        <div className="video_action_button h-10 w-10 rounded-full bg-[#1E27  flex justify-center items-center cursor-pointer">
                                            <div><RiPlayList2Fill /></div>
                                        </div>
                                        <div className="video_action_button h-10 w-10 rounded-full bg-[#1E27 flex justify-center items-center cursor-pointer">
                                            <CgCast />
                                        </div>
                                        <div className="video_action_button h-10 w-10 rounded-full bg-[#1E27 flex justify-center items-center cursor-pointer">
                                            <FiHeart />
                                        </div>
                                        <div className="video_action_button h-10 w-10 rounded-full bg-[#1E27 flex justify-center items-center cursor-pointer">
                                            <GoShare />
                                        </div>
                                    </div>
                                    <div className="absolute bottom-5 left-5">
                                        <h1 className="text-white text-[35px] font-big font-bold pt-[10px]">Samelill Sronle</h1>
                                        <div className="flex gap-[15px] justify-center py-[2px]">
                                            <div className="flex gap-1 items-center text-[#999999] font-jost text-[16px]">
                                                <IoStar className="text-orange-600" />
                                                <p>9.5</p>
                                            </div>
                                            <div className="flex gap-1 items-center text-[#999999] font-jost text-[16px]">
                                                <GoClockFill />
                                                <p>02h 30m</p>
                                            </div>
                                            <div className="flex gap-1 items-center text-[#999999] font-jost text-[16px]">
                                                <PiFourKFill />
                                                <p>4k Quality</p>
                                            </div>
                                        </div>
                                        <p className="font-jost text-[#999999]">Action, Comedy</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="h-[400px] flex justify-center items-center">
                            <div className="newImage relative hover:scale-110 duration-300 cursor-pointer">
                                <div>
                                    <img className="rounded-[20px]" src="/new6.png" alt="" />
                                </div>
                                <div className="newImageContent bg-custom-gradient w-full h-[360px] absolute top-0 left-0 rounded-[20px]">
                                    <div className="absolute top-[15px] right-[20px] text-white flex flex-col gap-[5px]">
                                        <div className="video_action_button h-10 w-10 rounded-full bg-[#1E27  flex justify-center items-center cursor-pointer">
                                            <div><RiPlayList2Fill /></div>
                                        </div>
                                        <div className="video_action_button h-10 w-10 rounded-full bg-[#1E27 flex justify-center items-center cursor-pointer">
                                            <CgCast />
                                        </div>
                                        <div className="video_action_button h-10 w-10 rounded-full bg-[#1E27 flex justify-center items-center cursor-pointer">
                                            <FiHeart />
                                        </div>
                                        <div className="video_action_button h-10 w-10 rounded-full bg-[#1E27 flex justify-center items-center cursor-pointer">
                                            <GoShare />
                                        </div>
                                    </div>
                                    <div className="absolute bottom-5 left-5">
                                        <h1 className="text-white text-[35px] font-big font-bold pt-[10px]">Samelill Sronle</h1>
                                        <div className="flex gap-[15px] justify-center py-[2px]">
                                            <div className="flex gap-1 items-center text-[#999999] font-jost text-[16px]">
                                                <IoStar className="text-orange-600" />
                                                <p>9.5</p>
                                            </div>
                                            <div className="flex gap-1 items-center text-[#999999] font-jost text-[16px]">
                                                <GoClockFill />
                                                <p>02h 30m</p>
                                            </div>
                                            <div className="flex gap-1 items-center text-[#999999] font-jost text-[16px]">
                                                <PiFourKFill />
                                                <p>4k Quality</p>
                                            </div>
                                        </div>
                                        <p className="font-jost text-[#999999]">Action, Comedy</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="h-[400px] flex justify-center items-center">
                            <div className="newImage relative hover:scale-110 duration-300 cursor-pointer">
                                <div>
                                    <img className="rounded-[20px] h-[360px]" src="/new7.png" alt="" />
                                </div>
                                <div className="newImageContent bg-custom-gradient w-full h-[360px] absolute top-0 left-0 rounded-[20px]">
                                    <div className="absolute top-[15px] right-[20px] text-white flex flex-col gap-[5px]">
                                        <div className="video_action_button h-10 w-10 rounded-full bg-[#1E27  flex justify-center items-center cursor-pointer">
                                            <div><RiPlayList2Fill /></div>
                                        </div>
                                        <div className="video_action_button h-10 w-10 rounded-full bg-[#1E27 flex justify-center items-center cursor-pointer">
                                            <CgCast />
                                        </div>
                                        <div className="video_action_button h-10 w-10 rounded-full bg-[#1E27 flex justify-center items-center cursor-pointer">
                                            <FiHeart />
                                        </div>
                                        <div className="video_action_button h-10 w-10 rounded-full bg-[#1E27 flex justify-center items-center cursor-pointer">
                                            <GoShare />
                                        </div>
                                    </div>
                                    <div className="absolute bottom-5 left-5">
                                        <h1 className="text-white text-[35px] font-big font-bold pt-[10px]">Avengers</h1>
                                        <div className="flex gap-[15px] justify-center py-[2px]">
                                            <div className="flex gap-1 items-center text-[#999999] font-jost text-[16px]">
                                                <IoStar className="text-orange-600" />
                                                <p>9.5</p>
                                            </div>
                                            <div className="flex gap-1 items-center text-[#999999] font-jost text-[16px]">
                                                <GoClockFill />
                                                <p>02h 30m</p>
                                            </div>
                                            <div className="flex gap-1 items-center text-[#999999] font-jost text-[16px]">
                                                <PiFourKFill />
                                                <p>4k Quality</p>
                                            </div>
                                        </div>
                                        <p className="font-jost text-[#999999]">Action, Comedy</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Featured;