/* eslint-disable react/no-unescaped-entities */

import { useTypewriter, Cursor } from "react-simple-typewriter";

import header_bg from "../../../assets/Header/header-bg.png";

const Header = () => {
  const [text] = useTypewriter({
    words: [
      "Instagram Auto Follower & Liker",
      "Facebook Auto Follower & Liker",
      "Twitter Auto Follower & Liker",
      "YouTube Auto Subscribe & Liker",
      "YouTube Tags Generator",
      "YouTube Thumbnail Generator",
      "Image to Text Convert",
      "Website Browsing",
      "Age Calculator",
    ],
    loop: 5,
    onLoopDone: () => console.log(`loop completed after 3 runs.`),
  });

  return (
    <div>
      <section
        id="home"
        className="h-[500px] md:h-[650px] lg:h-[750px] relative"
        style={{
          backgroundImage: `url(${header_bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto">
          <div className="flex justify-center items-center flex-wrap">
            <div className="offset-lg-1 col-lg-10 col-sm-12 col-xs-12 text-center">
              <div className="pt-[140px] md:pt-[250px] md:pl-8 md:pr-20">
                <h1 className="text-xl md:text-4xl lg:text-5xl font-bold leading-[40px] lg:leading-[70px] mb-5">
                  Find A Plan That's Right For You! <br />
                  <span className="capitalize bg-transparent text-red-500">{text}</span>
                  <Cursor cursorColor="red" />
                </h1>
                <p className="mb-10 w-10/12 md:w-8/12 lg:w-7/12 mx-auto">
                  Ai Gen is an AI writing assistant that helps you create high-quality content, in just a few seconds, at a
                  fraction of the cost!
                </p>
              </div>

              <div>
                <button className="bg-blue-600 border border-blue-600 text-white text-lg md:text-xl lg:text-2xl font-bold px-8 py-2 md:py-3 lg:py-4 rounded transition duration-300 ease-in-out hover:bg-yellow-400 hover:border-yellow-400 hover:text-gray-900 focus:outline-none focus:border-yellow-400 focus:shadow-outline-yellow active:bg-yellow-500">
                  Get started
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
