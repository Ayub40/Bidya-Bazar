import { HiMiniCheckBadge } from "react-icons/hi2";
// import Lottie from "lottie-react";
// import onlineEducation from "../../../assets/online class.json";


const Banner = () => {
    return (
        <section className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-7xl mx-auto">
            <div className="">
                <span className="block mb-4 text-xs md:text-lg text-[#2AB884] font-semibold">
                    Learn For Peace
                </span>
                <h3 className="text-3xl md:text-5xl font-bold">
                    Let's Learn New Courses & Gain  More Skills
                </h3>
                <p className="text-base md:text-lg text-slate-700 my-4 md:my-6">
                    Online learning and teaching marketplace with 5K+ courses & 10M students. Taught by experts to help you acquire new skills.
                </p>
                <div className="md:flex mb-4 gap-3">
                    <div className="flex items-center gap-1">
                        <HiMiniCheckBadge /> <p>Learn with experts</p>

                    </div>
                    <div className="flex items-center gap-1">
                        <HiMiniCheckBadge />
                        <p>Get certificate</p>
                    </div>
                    <div className="flex items-center gap-1"><HiMiniCheckBadge />
                        <p>Get membership</p>
                    </div>
                </div>
                <button className="bg-[#FBE9EB] text-[#D6293E] hover:text-[white] font-medium py-3 px-6 rounded transition-all hover:bg-[#d6293e] active:scale-95">
                    Get Started
                </button>
            </div>
            <div className="">
                {/* <Lottie animationData={onlineEducation} /> */}
                <img className="rounded-4xl" src="https://i.ibb.co.com/RkWt7dC6/Online-Class.jpg" alt="" />
            </div>
            {/* <ShuffleGrid /> */}
        </section>
    );
};

export default Banner;