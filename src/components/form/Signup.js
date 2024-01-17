import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signUp } from "../../services/operations/authAPI";
import Loader from "../Loader";
function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    userId: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { firstName, lastName, userId, email, password, confirmPassword } = formData;

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };


  const handleOnSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      console.error("Invalid email format");
      return;
    }
    dispatch(signUp(firstName, lastName, email, userId, password, confirmPassword, navigate));
  };



  return (
    <div className="w-full md:w-8/12  max-w-[800px] flex flex-col mx-auto items-center justify-around gap-5 my-auto">
      <div className=" px-7 py-2 text-headingColor font-bold rounded-[1em] text-[2rem]">
        Welcome !
      </div>
      <form onSubmit={handleOnSubmit} className="mt-6 flex w-full flex-col gap-y-4 items-center px-3 sm:px-0">
        <div className="bg-lightNavy px-5 py-4 sm:py-8 flex flex-col gap-5 sm:gap-10 rounded-[1em] w-full ">
          {/* email */}
          <div className="flex flex-col sm:flex-row  gap-1 sm:gap-4 justify-center sm:px-4">
            <div className="w-[150px] flex flex-row justify-between items-center text-[0.875rem] text-slate-400">
              <div className="" >
                Email
              </div>
              <div className="hidden sm:block">
                :
              </div>

            </div>

            <input required
              type="text"
              name="email"
              value={email}
              onChange={handleOnChange}
              placeholder="Enter email address"
              className=" text-md w-full py-1 rounded-xl bg-richblack-800 px-3  placeholder-slate-400 outline-none"
            />

          </div>


          {/* userId */}
          <div className="flex flex-col sm:flex-row  gap-1 sm:gap-4 justify-center sm:px-4">
            <div className="w-[150px] flex flex-row justify-between items-center text-[0.875rem] text-slate-400">
              <div className="" >
                UserID
              </div>
              <div className="hidden sm:block">
                :
              </div>

            </div>

            <input required
              type="text"
              name="userId"
              value={userId}
              onChange={handleOnChange}
              placeholder="Enter User ID"
              className=" text-md w-full py-1 rounded-xl bg-richblack-800 px-3  placeholder-slate-400 outline-none"
            />

          </div>

          {/* names */}
          <div className="flex flex-col sm:flex-row gap-4  w-full">
            <div className="flex flex-col sm:flex-row  gap-1 sm:gap-4 justify-center sm:px-4 w-full">
              <div className="w-[120px] flex flex-row justify-between items-center text-[0.875rem] text-slate-400">
                <div className="" >
                  FirstName
                </div>
                <div className="hidden sm:block">
                  :
                </div>

              </div>

              <input required
                type="text"
                name="firstName"
                value={firstName}
                onChange={handleOnChange}
                placeholder="Enter First Name"
                className=" text-md w-full py-1 rounded-xl bg-richblack-800 px-3  placeholder-slate-400 outline-none"
              />

            </div>
            <div className="flex flex-col sm:flex-row  gap-1 sm:gap-4 justify-center sm:px-4 w-full">
              <div className="w-[120px] flex flex-row justify-between items-center text-[0.875rem] text-slate-400">
                <div className="" >
                  LastName
                </div>
                <div className="hidden sm:block">
                  :
                </div>

              </div>

              <input required
                type="text"
                name="lastName"
                value={lastName}
                onChange={handleOnChange}
                placeholder="Enter Last Name"
                className=" text-md w-full py-1 rounded-xl bg-richblack-800 px-3  placeholder-slate-400 outline-none"
              />

            </div>
          </div>
          {/* password */}
          <div className="flex flex-col sm:flex-row gap-4  w-full">
            <div className="flex flex-col sm:flex-row  gap-1 sm:gap-4 justify-center sm:px-4 w-full">
              <div className=" sm:w-[120px] flex flex-row justify-between items-center text-[0.875rem] text-slate-400">
                <div className="" >
                  Password
                </div>
                <div className="hidden sm:block">
                  :
                </div>

              </div>

              <div className="  relative flex flex-row items-center gap-2 w-full">
                <input
                  required
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={password}
                  onChange={handleOnChange}
                  placeholder="Enter Password"
                  className=" text-md w-full py-1 rounded-xl bg-richblack-800 px-3  placeholder-slate-400 outline-none"
                />
                <span
                  onClick={() => setShowPassword((prev) => !prev)}
                  className=" absolute right-2 z-[10] cursor-pointer"
                >
                  {showPassword ? (
                    <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                  ) : (
                    <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                  )}
                </span>
              </div>


            </div>
            <div className="flex flex-col sm:flex-row  gap-1 sm:gap-4 justify-center sm:px-4 w-full">
              <div className="w-[220px] flex flex-row justify-between items-center text-[0.875rem] text-slate-400">
                <div className="w-full" >
                  Confirm Password
                </div>
                <div className="hidden sm:block">
                  :
                </div>

              </div>

              <div className="  relative flex flex-row items-center gap-2 w-full">
                <input
                  required
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={handleOnChange}
                  placeholder="Confirm Your Password"
                  className=" text-md w-full py-1 rounded-xl bg-richblack-800 px-3  placeholder-slate-400 outline-none"
                />
                <span
                  onClick={() => setShowConfirmPassword((prev) => !prev)}
                  className=" absolute right-2 z-[10] cursor-pointer"
                >
                  {showConfirmPassword ? (
                    <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                  ) : (
                    <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                  )}
                </span>
              </div>


            </div>
          </div>

        </div>
        <div className="flex flex-col gap-2 ">
          <button
            type="submit"
            className="bg-slate-500 px-7 py-2 text-headingColor font-bold rounded-[1em] text-[1.5rem] hover:bg-slate-600">
            Sign Up
          </button>
          <div className="text-xs text-white hover:underline ml-auto">
            <Link to="/login">
              <p className="">Already have an account? <span className="text-headingColor">Log In</span></p>
            </Link>
          </div>
        </div>

      </form>


    </div>

  );
}

export default Signup;
