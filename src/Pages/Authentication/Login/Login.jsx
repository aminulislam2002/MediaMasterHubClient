import { useContext } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Providers/AuthProvider/AuthProvider";

const Login = () => {
  const { createUserWithGoogle } = useContext(AuthContext);

  const handleGoogleSignUp = () => {
    createUserWithGoogle()
      .then((result) => {
        const loggedInUser = result.user;
        const saveUser = {
          name: loggedInUser.displayName,
          email: loggedInUser.email,
          photo: loggedInUser.photoURL,
          role: "user",
        };

        fetch(`http://localhost:5000/authenticationUser`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(saveUser),
        })
          .then((res) => res.json())
          .then(() => {
            Swal.fire({
              icon: "success",
              title: `${loggedInUser.displayName} Login Successful`,
              showConfirmButton: false,
              timer: 3000,
            });
          })
          .catch((error) => {
            console.log(error);
            Swal.fire({
              icon: "warning",
              title: `${loggedInUser.displayName} Login Failed`,
              showConfirmButton: false,
              timer: 3000,
            });
          });
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "warning",
          title: "Login Failed",
          showConfirmButton: false,
          timer: 3000,
        });
      });
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6">Login</h2>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full mb-4"
          onClick={handleGoogleSignUp}
        >
          Login with Google
        </button>
        <p className="text-center text-gray-500 text-sm">
          By login, you agree to our
          <Link to="" className="text-blue-500">
            Terms and Conditions
          </Link>
          and
          <Link to="" className="text-blue-500">
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default Login;
