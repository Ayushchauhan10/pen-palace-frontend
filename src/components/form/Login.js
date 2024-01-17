import { useState } from "react"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import Loader from "../Loader"
import { login } from "../../services/operations/authAPI"

function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { loading } = useSelector((state) => state.auth)

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const [showPassword, setShowPassword] = useState(false)

  const { email, password } = formData

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
  }

  const handleOnSubmit = (e) => {

    e.preventDefault()
    dispatch(login(email, password, navigate));
  }
 
  if(loading)
    return <div className='flex h-screen items-center justify-center'>
        <Loader/>
    </div>;


  return (


    <div className="w-full sm:w-6/12 px-2 flex flex-col mx-auto items-center justify-center sm:gap-5  mt-20 h-[60vh] ">
      <div className=" sm:px-7 sm:py-2 text-headingColor font-bold rounded-[1em] text-[2rem] sm:text-[2rem] ">
        Welcome !!!
      </div>
      <form
        onSubmit={handleOnSubmit}
        className="mt-6 flex w-full flex-col gap-y-4 items-center">

        <div className=" bg-lightNavy px-5 py-8 flex flex-col  justify-center  gap-5 sm:gap-10 rounded-[1em] w-full sm:h-[12rem]">

          <div className="flex flex-col sm:flex-row  gap-1 sm:gap-4 justify-center sm:px-4">
            <div className="w-[150px] flex flex-row justify-between items-center text-[1rem] text-slate-400">
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

          <div className="flex flex-col sm:flex-row  gap-1 sm:gap-4 justify-center sm:px-4">
            <div className=" sm:w-[150px] flex flex-row justify-between items-center text-[0.875rem] text-slate-400">
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





        </div>

        <div className="text-xs text-headingColor hover:underline ml-auto">
          <Link to="/forgot-password">
            <p className="">
              Forgot Password?
            </p>
          </Link>

        </div>

        <button
          type="submit"
          className="bg-slate-500 px-7 py-2 text-headingColor font-bold rounded-[1em] text-[1.5rem] hover:bg-slate-600">


          {loading ? "Loading..." : "Log In"}
        </button>

        <Link to="/signup" className=" text-sm text-blue-100 mx-auto hover:underline">New User? <span className="text-headingColor">SignUp</span></Link>

      </form>
    </div>

  )
}

export default Login
