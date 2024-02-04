import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Layouts/MainLayout/MainLayout";
import Home from "../../Pages/HomePage/Home/Home";
import InstagramAutoFollowerAndLiker from "../../Pages/HomePage/FeaturesPages/InstagramAutoFollowerAndLiker/InstagramAutoFollowerAndLiker";
import FacebookAutoFollowerAndLiker from "../../Pages/HomePage/FeaturesPages/FacebookAutoFollowerAndLiker/FacebookAutoFollowerAndLiker";
import TwitterAutoFollowerAndLiker from "../../Pages/HomePage/FeaturesPages/TwitterAutoFollowerAndLiker/TwitterAutoFollowerAndLiker";
import YoutubeAutoSubscribeAndLiker from "../../Pages/HomePage/FeaturesPages/YoutubeAutoSubscribeAndLiker/YoutubeAutoSubscribeAndLiker";
import YoutubeThumbnailGenerator from "../../Pages/HomePage/FeaturesPages/YoutubeThumbnailGenerator/YoutubeThumbnailGenerator";
import YoutubeTagsGenerator from "../../Pages/HomePage/FeaturesPages/YoutubeTagsGenerator/YoutubeTagsGenerator";
import ImageToTextConvert from "../../Pages/HomePage/FeaturesPages/ImageToTextConvert/ImageToTextConvert";
import WebsiteBrowsing from "../../Pages/HomePage/FeaturesPages/WebsiteBrowsing/WebsiteBrowsing";
import AgeCalculator from "../../Pages/HomePage/FeaturesPages/AgeCalculator/AgeCalculator";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
      {
        path: "instagram-auto-follower-&-liker",
        element: <InstagramAutoFollowerAndLiker></InstagramAutoFollowerAndLiker>,
      },
      {
        path: "facebook-auto-follower-&-liker",
        element: <FacebookAutoFollowerAndLiker></FacebookAutoFollowerAndLiker>,
      },
      {
        path: "twitter-auto-follower-&-liker",
        element: <TwitterAutoFollowerAndLiker></TwitterAutoFollowerAndLiker>,
      },
      {
        path: "youtube-auto-subscribe-&-liker",
        element: <YoutubeAutoSubscribeAndLiker></YoutubeAutoSubscribeAndLiker>,
      },
      {
        path: "youtube-thumbnail-generator",
        element: <YoutubeThumbnailGenerator></YoutubeThumbnailGenerator>,
      },
      {
        path: "youtube-tags-generator",
        element: <YoutubeTagsGenerator></YoutubeTagsGenerator>,
      },
      {
        path: "image-to-text-convert",
        element: <ImageToTextConvert></ImageToTextConvert>,
      },
      {
        path: "website-browsing",
        element: <WebsiteBrowsing></WebsiteBrowsing>,
      },
      {
        path: "age-calculator",
        element: <AgeCalculator></AgeCalculator>,
      },
    ],
  },
]);

export default router;
