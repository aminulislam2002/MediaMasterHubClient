import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../Providers/AuthProvider/AuthProvider";
import { Link } from "react-router-dom";

const YoutubePromotions = () => {
  const [page, setPage] = useState("Earn Points");
  const [allLoginChannelIds, setAllLoginChannelIds] = useState([]);
  const { user } = useContext(AuthContext);

  const handleShowPage = (selectedPage) => {
    setPage(selectedPage);
  };

  useEffect(() => {
    fetch("http://localhost:5000/youtubeChannelLoginID")
      .then((res) => res.json())
      .then((data) => {
        setAllLoginChannelIds(data);
      });
  }, []);

  const currentUserSubscribeChannelId = allLoginChannelIds.find(
    (singleLoginChannel) => singleLoginChannel?.userEmail === user?.email
  );

  console.log(currentUserSubscribeChannelId?.youtubeChannelID);

  return (
    <div>
      <div className="grid grid-cols-3 gap-5">
        <button
          type="button"
          onClick={() => handleShowPage("Earn Points")}
          className={`text-slate-50 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 ${
            page === "Earn Points" ? "bg-blue-500" : ""
          }`}
        >
          Earn Points
        </button>
        <button
          type="button"
          onClick={() => handleShowPage("Boost Channel")}
          className={`text-slate-50 bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 ${
            page === "Boost Channel" ? "bg-blue-500" : ""
          }`}
        >
          Boost Channel
        </button>
        <button
          type="button"
          onClick={() => handleShowPage("View Promotions")}
          className={`text-slate-50 bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 ${
            page === "View Promotions" ? "bg-blue-500" : ""
          }`}
        >
          View Promotions
        </button>
      </div>

      <div className="h-auto w-full">
        <div>
          {page === "Earn Points" && (
            <div className="p-6 bg-gradient-to-br from-purple-600 to-blue-500 rounded-lg shadow-lg">
              <div className="pb-10 border-b border-slate-200">
                <h1 className="text-4xl font-extrabold text-slate-50 text-center mb-8">Earn Points</h1>

                <div className="flex items-center justify-center mb-6">
                  <span className="text-2xl font-semibold text-slate-50">
                    Current Points: <span className="text-yellow-400">000</span>
                  </span>
                </div>

                <div className="md:flex items-center justify-between mb-4">
                  <h1 className="text-lg font-medium text-slate-50 mr-2">Login Channel ID:</h1>
                  <Link
                    to={`https://www.youtube.com/channel/${currentUserSubscribeChannelId?.youtubeChannelID}`}
                    target="_blank"
                    className="text-blue-300 hover:text-blue-400 hover:underline transition duration-300"
                  >
                    {currentUserSubscribeChannelId?.youtubeChannelID}
                  </Link>
                </div>
              </div>

              <div className="py-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                  {/* Subscription Section */}
                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-slate-50">
                      Earn <span className="text-yellow-400">10</span> points by Subscribing to <br />
                      <span className="text-green-400">Learn With Abhishek</span>
                    </h3>
                    <button
                      type="button"
                      className="text-slate-50 bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-4"
                    >
                      Subscribe
                    </button>
                  </div>

                  {/* Like Section */}
                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-slate-50">
                      Earn <span className="text-yellow-400">5</span> points by Liking <br />
                      <span className="text-green-400">Learn With Abhishek</span>
                    </h3>
                    <button
                      type="button"
                      className="text-slate-50 bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-4"
                    >
                      Like
                    </button>
                  </div>
                </div>

                {/* Daily Bonus Section */}
                <div className="flex justify-center items-center mt-5">
                  <div className="w-1/2 text-center border-r border-l border-b">
                    <h1 className="text-2xl font-semibold mb-4 text-slate-800 bg-red-300 py-2">Claim Daily Bonus!</h1>
                    <p className="text-slate-50 mb-4 p-4">
                      After completing 5 subscriptions and 10 likes daily, you can claim your daily bonus. You will receive credits between
                      <span className="text-yellow-400 px-1">10 to 100</span>daily.
                    </p>
                    <button
                      type="button"
                      className="text-slate-50 bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-4"
                    >
                      Claim
                    </button>
                  </div>
                </div>
              </div>

              {/* Add more content specific to "Earn Points" if needed */}
            </div>
          )}
        </div>

        <div>
          {page === "Boost Channel" && (
            <div>
              <h1>Boost Channel</h1>
              {/* Add content specific to "Boost Channel" */}
            </div>
          )}
        </div>

        <div>
          {page === "View Promotions" && (
            <div>
              <h1>View Promotions</h1>
              {/* Add content specific to "View Promotions" */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default YoutubePromotions;
