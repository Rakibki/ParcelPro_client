import React, { useContext } from "react";
import loginimgae from "../../assets/images/login1.png";
import SocialLogin from "../../components/socialLogin/SocialLogin";
import { Link } from "react-router-dom";
import { authContext } from "../../providers/authProvider/AuthProvider";
import uploadeImage from "../../api/uploadeImage";
import { createUserDB, createToken } from "../../api/auth";

const Register = () => {
  const { createUser, updaetUserProfile } = useContext(authContext);

  const handleRegister = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const role = e.target.role.value;
    const imageFile = e.target.image.files[0];
    const image = await uploadeImage(imageFile);

    createUser(email, password)
      .then((res) => {
        updaetUserProfile(name, image)
          .then((res) => {
            const user = {
              email,
              name,
              role
            };
            const logginUser = {logginUser: email}
            createUserDB(user);
            createToken(logginUser);
          })
          .catch((e) => console.log(e.message));
      })
      .catch((e) => console.log(e.message));
  };


  return (
    <>
      <div className="flex justify-center h-screen items-center">
        <div className="w-[50%] bg-[#fff] p-6 shadow-2xl h-[600px]">
          <h1 className="text-2xl mt-6 text-center">Create an account</h1>
          <form onSubmit={handleRegister} className="p-10 card-body">
            <div className="form-control mb-2">
              <input
                type="text"
                placeholder="Full Name"
                className="input text-[#888f96] bg-[#f7f7f7] border-none input-bordered"
                required
                name="name"
              />
            </div>

            <div className="mb-2 form-control">
              <input
                type="email"
                placeholder="Email Address"
                className="input text-[#888f96] bg-[#f7f7f7] border-none input-bordered"
                required
                name="email"
              />
            </div>

            <div className="mb-2 form-control">
              <input
                type="text"
                placeholder="Password"
                className="input text-[#888f96] bg-[#f7f7f7] border-none input-bordered"
                required
                name="password"
              />
            </div>

            {/* testinhg */}
            <div className="grid gap-4 mt-4 grid-cols-2">
              <div className="mb-2 form-control">
                <input
                  type="file"
                  className="file-input file-input-bordered file-input-primary w-full max-w-xs"
                  name="image"
                />
              </div>

              <div className="mb-2 form-control">
                <select
                  className="input text-[#888f96] bg-[#f7f7f7] border-none input-bordered"
                  name="role"
                  id="select"
                >
                  <option disabled defaultValue={"Select"} value="">
                    Select
                  </option>
                  <option value=" Delivery_Men"> Delivery Men </option>
                  <option value="user">User</option>
                </select>
              </div>
            </div>
            {/* testinhg */}

            <div className="form-control mt-6">
              <button className="px-4 py-3 rounded-lg text-white font-semibold bg-[#2ad4bc]">
                Register
              </button>
            </div>
          </form>
          <SocialLogin />
          <div className="flex mt-2 justify-center">
            <p className="text-[#636363]">
              Already a member?{" "}
              <Link
                className="hover:underline hover:text-[#2ad4bc]"
                to={"/login"}
              >
                {" "}
                Login here{" "}
              </Link>
            </p>
          </div>
        </div>
        <div className="w-[50%]">
          <img src={loginimgae} alt="" />
        </div>
      </div>
    </>
  );
};

export default Register;
