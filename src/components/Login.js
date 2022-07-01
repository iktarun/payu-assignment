import React from "react";
import { GoogleLogin } from "react-google-login";

import googleIcon from "../icons/google.svg";
// refresh token
// import { refreshTokenSetup } from "../utils/refreshToken";

const clientId =
  "363568262310-3h20tcbf1sk5smr8usbppvb0ccupivl3.apps.googleusercontent.com";

function LoginHooks() {
  const onSuccess = (res) => {
    console.log("Login Success: currentUser:", res.profileObj);
    alert(
      `Logged in successfully welcome ${res.profileObj.name} 😍. \n See console for full profile object.`
    );
    // refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    console.log("Failed to login. Please try again!", res);
    alert("Failed to login. Please try again!");
  };

  //   const { signIn } = useGoogleLogin({
  //     onSuccess,
  //     onFailure,
  //     clientId,
  //     isSignedIn: true,
  //     accessType: "offline",
  //     responseType: "code",
  //     prompt: "consent",
  //   });

  return (
    <GoogleLogin
      clientId={clientId}
      onSuccess={onSuccess}
      onFailure={onFailure}
    >
      {/* <FontAwesome name="google" /> */}
      <span> Login with Google</span>
    </GoogleLogin>
    // <button onClick={signIn} className="button">
    //   <img src={googleIcon} alt="google login" className="icon"></img>

    //   <label className="buttonText">SignIn with Google</label>
    // </button>
  );
}

export default LoginHooks;
