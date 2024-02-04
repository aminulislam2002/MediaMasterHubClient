import {
  FaInstagramSquare,
  FaFacebookSquare,
  FaTwitterSquare,
  FaYoutubeSquare,
  FaImage,
  FaFirefoxBrowser,
  FaCalculator,
  FaHashtag,
} from "react-icons/fa";
import { LuGalleryThumbnails } from "react-icons/lu";
import { Link } from "react-router-dom";

const serviceData = [
  {
    icon: <FaInstagramSquare className="w-20 h-20 p-4" />,
    title: "Instagram Auto Follower & Liker",
    subTitle:
      "Boost your Instagram presence with automated followers and likes, saving time on manual searches and team inquiries.",
  },
  {
    icon: <FaFacebookSquare className="w-20 h-20 p-4" />,
    title: "Facebook Auto Follower & Liker",
    subTitle:
      "Increase your Facebook engagement effortlessly using automated follower and liker tools, eliminating the need for manual searches or team inquiries.",
  },
  {
    icon: <FaTwitterSquare className="w-20 h-20 p-4" />,
    title: "Twitter Auto Follower & Liker",
    subTitle:
      "Enhance your Twitter visibility with automated followers and likes, saving valuable time by eliminating the need for manual searches or team inquiries.",
  },
  {
    icon: <FaYoutubeSquare className="w-20 h-20 p-4" />,
    title: "YouTube Auto Subscribe & Liker",
    subTitle:
      "Drive YouTube growth by automating subscriptions and likes, eliminating the need for manual searches or team inquiries and saving you time.",
  },
  {
    icon: <LuGalleryThumbnails className="w-20 h-20 p-4" />,
    title: "YouTube Thumbnail Generator",
    subTitle:
      "Create eye-catching YouTube thumbnails effortlessly with our automated generator, saving time and streamlining your content creation process.",
  },
  {
    icon: <FaHashtag className="w-20 h-20 p-4" />,
    title: "YouTube Tags Generator",
    subTitle:
      "Optimize your YouTube videos with relevant tags generated automatically, saving time on manual searches and enhancing your video discoverability.",
  },
  {
    icon: <FaImage className="w-20 h-20 p-4" />,
    title: "Image to Text Convert",
    subTitle:
      "Effortlessly convert images to text with our automated tool, saving time and eliminating the need for manual data entry or searches.",
  },
  {
    icon: <FaFirefoxBrowser className="w-20 h-20 p-4" />,
    title: "Website Browsing",
    subTitle:
      "Streamline your web browsing experience with automated information retrieval, saving time and eliminating the need for manual searches or inquiries.",
  },
  {
    icon: <FaCalculator className="w-20 h-20 p-4" />,
    title: "Age Calculator",
    subTitle:
      "Quickly calculate ages with our automated age calculator, saving time and eliminating the need for manual calculations or team inquiries.",
  },
];

const Services = () => {
  return (
    <div className="bg-slate-100 dark:bg-slate-900">
      <div className="container mx-auto">
        <div className="py-[150px] border-b">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {serviceData.map((service, index) => (
              <Link key={index} to={`/${service.title.toLowerCase().replace(/\s+/g, "-")}`}>
                <div className="p-7 bg-white dark:bg-slate-800 rounded-lg">
                  <div className="flex justify-start items-center mb-3">
                    <div className="border border-t-4 rounded-full border-slate-200">{service.icon}</div>
                  </div>
                  <div>
                    <h1 className="text-xl font-semibold mb-3 text-slate-800 dark:text-slate-50">{service.title}</h1>
                    <p className="text-[15px]">{service.subTitle}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
