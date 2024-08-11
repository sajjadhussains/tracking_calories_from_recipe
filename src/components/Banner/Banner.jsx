import "./Banner.css";
import banner_img from "../../assets/images/banner_img.png";
const Banner = () => {
  return (
    <div
      style={{ backgroundImage: `url(${banner_img})` }}
      className="bg-cover bg-center banner-section flex items-center justify-center text-white mb-24"
    >
      <div className="md:w-8/12 text-center">
        <h1 className="text-3xl md:text-5xl  md:leading-[4.75rem] mb-5">
          Discover an exceptional cooking class tailored for you!
        </h1>
        <p className="leading-7 mb-10">
          Learn and Master Basic Programming, Data Structures, Algorithm, OOP,
          Database and solve 500+ coding problems to become an exceptionally
          well world-class Programmer.
        </p>
        <button className="text-black bg-green-400 px-8 py-5 rounded-[3.125rem]">
          Explore Now
        </button>
        <button className="px-8 py-5 rounded-[3.125rem] border border-white ms-7">
          Our Feedback
        </button>
      </div>
    </div>
  );
};

export default Banner;
