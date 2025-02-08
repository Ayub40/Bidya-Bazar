import Banner from "../../Components/Home/Banner/Banner";
import BecomeTeacher from "../BecomeInstructors/BecomeTeacher";
import TrendingCourses from "../TrendingCourses/TrendingCourses";


const Home = () => {
    return (
        <div className="max-w-screen-[1700px] m-auto max-w-7xl">
            <Banner></Banner>
            <TrendingCourses></TrendingCourses>
            <BecomeTeacher></BecomeTeacher>
        </div>
    );
};

export default Home;