import React from "react";
import loginimgae from "../../assets/images/login1.png";

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(email, password);

    // loginUser(email, password)
    //   .then((res) => {
    //     console.log("login User");
    //     navigate(location.state ? location.state : "/");
    //   })
    //   .catch((e) => console.log(e.message));
  };

  return (
    <>
      <div className="flex justify-center h-screen items-center">
        <div className="w-[50%] bg-[#fff2f2] h-[500px]">
          <form onSubmit={handleLogin} className="p-10 card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input bg-[#ffffff] input-bordered"
                required
                name="email"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
                name="password"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="px-4 py-3 rounded-lg text-white font-semibold bg-[#50a1ff]">
                Login
              </button>
            </div>
          </form>
        </div>
        <div className="w-[50%]">
          <img src={loginimgae} alt="" />
        </div>
      </div>
    </>
  );
};

export default Login;
