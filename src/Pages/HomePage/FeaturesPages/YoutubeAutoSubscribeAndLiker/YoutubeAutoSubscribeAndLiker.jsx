import { useContext, useEffect, useState } from "react";
import { LuSendHorizonal } from "react-icons/lu";
import Swal from "sweetalert2";
import { AuthContext } from "../../../../Providers/AuthProvider/AuthProvider";

const YoutubeAutoSubscribeAndLiker = () => {
  const [youtubeChannelLink, setYoutubeChannelLink] = useState("");
  const [inputId, setInputId] = useState("");
  const [allLoginChannelIds, setAllLoginChannelIds] = useState([]);

  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch("http://localhost:5000/youtubeChannelLoginID")
      .then((res) => res.json())
      .then((data) => {
        setAllLoginChannelIds(data);
      });
  }, []);

  console.log(allLoginChannelIds);
  console.log(inputId);

  const handleLoginViaYoutubeChannel = async (e) => {
    e.preventDefault();
    const youtubeChannelData = {
      youtubeChannelLink: youtubeChannelLink,
      userEmail: user?.email,
    };

    const res = await fetch("http://localhost:5000/youtubeChannelLogin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(youtubeChannelData),
    });
    const data = await res.json();

    if (data?.acknowledged == true || data?.success) {
      setInputId(data.youtubeChannelID);
      Swal.fire({
        title: "Login Successfully!",
        icon: "success",
      });
    }
  };

  const handleLoginYoutubeChannelLink = (e) => {
    setYoutubeChannelLink(e?.target?.value);
  };

  return (
    <div className="bg-gradient-to-br from-cyan-100 via-pink-200 to-yellow-200 min-h-screen mt-16">
      {/* Title box */}
      {/* <div className="lg:max-w-5xl mx-auto w-full py-10 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-center text-white shadow-md">
        <h1 className="text-4xl font-extrabold text-white">Youtube Auto Subscribe & Liker</h1>
      </div> */}

      {/* Search box */}
      <div>
        <div className="flex items-center justify-center min-h-lvh">
          <form
            onSubmit={handleLoginViaYoutubeChannel}
            className="flex items-center max-w-5xl w-full bg-white rounded-full shadow-md"
          >
            <div className="w-full">
              <input
                type="search"
                value={youtubeChannelLink}
                onChange={handleLoginYoutubeChannelLink}
                className="w-full px-4 py-2 text-gray-800 rounded-full focus:outline-none"
                placeholder="Search"
              />
            </div>
            <div>
              <button
                type="submit"
                className="flex items-center bg-blue-600 justify-center w-20 h-12 text-white rounded-r-full transition duration-300 hover:bg-blue-700"
              >
                <LuSendHorizonal className="w-6 h-6" />
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Dashboard */}

      <div></div>
    </div>
  );
};

export default YoutubeAutoSubscribeAndLiker;
