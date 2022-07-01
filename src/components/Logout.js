import React from "react";
import { useGoogleLogout } from "react-google-login";

const clientId =
  "7363568262310-d6d0cm4n215bmc50litsevn06rllt4d9.apps.googleusercontent.com";

function LogoutHooks() {
  const onLogoutSuccess = (res) => {
    console.log("You have logged out successfully!");
    alert("You have logged out successfully!");
  };

  const onFailure = () => {
    console.log("Some error has occured, please try again");
  };

  const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess,
    onFailure,
  });

  return (
    <button onClick={signOut} className="button">
      <img src="icons/google.svg" alt="google login" className="icon"></img>

      <span className="buttonText">Sign Out</span>
    </button>
  );
}

export default LogoutHooks;
