

const InstructorsBanner = () => {
    return (
        <section className="w-full md:h-[400px] px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-5 mx-auto bg-[#F5F7F9]  max-w-screen-[1700px] relative">
            <div className="md:m-auto md:mr-20 p-2 ">
                <div className="p-1">
                    <span className="block md:mb-4 mt-1 text-xs md:text-lg text-[#2AB884] font-semibold">
                        Learn For Peace
                    </span>
                    <h3 className="text-2xl md:text-4xl font-bold leading-tight">
                        Become an Instructor
                    </h3>
                    <p className="text-base md:text-base text-slate-700 my-4 md:my-5">
                        Satisfied conveying a dependent contented he gentleman agreeable <br /> do be. Delivered dejection necessary objection do Mr prevailed. Mr feeling <br /> does chiefly cordial in do.
                    </p>
                    <button className="bg-[#066AC9] text-[#FFFFFF] hover:text-[white] md:font-medium md:py-2 md:px-5 py-1 px-2 font-semibold text-sm md:text-base rounded transition-all hover:bg-[#066AC9] active:scale-95">
                        Start Teaching Today
                    </button>
                </div>
                <div className="">
                    <img src="https://edumall.vuejstemplate.com/images/others/become-a-teacher-hero-image.png" alt="Become an Instructor" className="w-full h-auto md:h-[347px] md:w-[727px] object-contain md:absolute bottom-0 right-44" />

                    {/* <img src="https://edumall.vuejstemplate.com/images/others/become-a-teacher-hero-image.png" alt="Become an Instructor" className="md:h-[347px] md:w-[727px] absolute bottom-0 right-1" /> */}
                </div>
            </div>

            {/* <div className="w-full ">
            
            <img src="https://themes.stackbros.in/eduport-next/assets/04-Bj6XRwFH.svg" alt="image" className="h-[300px]" />
        </div> */}

        </section>
    );
};

export default InstructorsBanner;