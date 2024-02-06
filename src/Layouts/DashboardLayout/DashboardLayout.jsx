import { Link, Outlet } from "react-router-dom";
import { GrMenu } from "react-icons/gr";

const DashboardLayout = () => {
  const adminOptions = (
    <>
      <Link to="/dashboard/manageNotices">
        <li className="mb-2 lg:px-5 py-1 rounded text-white hover:text-black hover:bg-white mx-2 text-lg font-normal">
          Manage Notices
        </li>
      </Link>
    </>
  );

  const userOptions = (
    <>
      <Link to="/dashboard/youtube-promotions">
        <li className="mb-2 lg:px-5 py-1 rounded text-white hover:text-black hover:bg-white mx-2 text-lg font-normal">
          Youtube Promotions
        </li>
      </Link>
      <Link to="/dashboard/facebook-promotions">
        <li className="mb-2 lg:px-5 py-1 rounded text-white hover:text-black hover:bg-white mx-2 text-lg font-normal">
          Facebook Promotions
        </li>
      </Link>
      <Link to="/dashboard/instagram-promotions">
        <li className="mb-2 lg:px-5 py-1 rounded text-white hover:text-black hover:bg-white mx-2 text-lg font-normal">
          Instagram Promotions
        </li>
      </Link>
      <Link to="/dashboard/twitter-promotions">
        <li className="mb-2 lg:px-5 py-1 rounded text-white hover:text-black hover:bg-white mx-2 text-lg font-normal">
          Twitter Promotions
        </li>
      </Link>
    </>
  );

  const isAdmin = false;
  const isUser = true;

  return (
    <div className="bg-slate-200 min-h-screen">
      <div className="drawer container mx-auto">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content lg:flex gap-1">
          <div className="w-full lg:w-3/12 bg-blue-900 overflow-y-auto max-h-[100vh] lg:h-screen">
            <div className="flex justify-start">
              <div className="flex-none lg:hidden">
                <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                  <GrMenu className="w-6 h-6" />
                </label>
              </div>
            </div>
            <div className="flex-none hidden lg:block mt-4">
              <ul className="menu-vertical">
                <Link to="/dashboard/profile">
                  <li className="mb-2 lg:px-5 py-1 rounded text-white hover:text-black hover:bg-white mx-2 text-lg font-normal">
                    Profile
                  </li>
                </Link>
                {isAdmin && <> {adminOptions} </>}
                {isUser && <> {userOptions} </>}
                <Link to="/">
                  <li className="mb-2 lg:px-5 py-1 rounded text-white hover:text-black hover:bg-white mx-2 text-lg font-normal">
                    Home
                  </li>
                </Link>
              </ul>
            </div>
          </div>
          <div className="lg:w-9/12 p-4">
            <div className="overflow-y-auto max-h-[95vh]">
              <Outlet />
            </div>
          </div>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay overflow-x-auto max-h-[100vh]"></label>
          <ul className="p-4 w-full md:w-1/2 bg-blue-900 overflow-y-auto">
            <Link to="/dashboard/profile">
              <li className="mb-2 lg:px-5 py-1 rounded text-white hover:text-black hover:bg-white mx-2 text-lg font-normal">
                Profile
              </li>
            </Link>
            {isAdmin && <> {adminOptions} </>}
            {isUser && <> {userOptions} </>}
            <Link to="/">
              <li className="mb-2 lg:px-5 py-1 rounded text-white hover:text-black hover:bg-white mx-2 text-lg font-normal">
                Home
              </li>
            </Link>
          </ul>
        </div>
      </div>
      <div>{/* Footer position [if need] */}</div>
    </div>
  );
};

export default DashboardLayout;
