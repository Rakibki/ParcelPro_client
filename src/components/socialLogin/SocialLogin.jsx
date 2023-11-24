import React, { useContext } from "react";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import { authContext } from "../../providers/authProvider/AuthProvider";

const SocialLogin = () => {
  const { loginWithGoogle } = useContext(authContext);

  const handleGoogleLogin = () => {
    loginWithGoogle()
    .then((res) => console.log(res))
    .catch((e) => console.log(e))
  };

  return (
    <div>
      <div className="divider font-Inter font-medium">Or sign up with</div>
      <div className="flex justify-center items-center">
        <div className="flex items-center gap-3">
          <div className="p-3 text-[#444] cursor-pointer hover:text-[#2ad4bc] transition hover:border-[#2ad4bc] border-[#444] rounded-full border-2">
            <FaFacebookF />
          </div>
          <div className="p-3 text-[#444] cursor-pointer hover:text-[#2ad4bc] transition hover:border-[#2ad4bc] border-[#444] rounded-full border-2">
            <FaGithub />
          </div>
          <div
            onClick={handleGoogleLogin}
            className="p-3 text-[#444] cursor-pointer hover:text-[#2ad4bc] transition hover:border-[#2ad4bc] border-[#444] rounded-full border-2"
          >
            <FaGoogle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialLogin;
