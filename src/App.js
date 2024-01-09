import { Navbar } from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/form/Login";
import Signup from "./components/form/Signup";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import Dashboard from "./components/pages/dashboard/Dashboard";
import PrivateRoute from "./components/type_of_route/PrivateRoute";
import OpenRoute from "./components/type_of_route/OpenRoute";
import ViewBlog from "./components/pages/viewBlog/ViewBlog";
import CreateBlog from "./components/pages/blogOperations/CreateBlog";
import AllBlog from "./components/pages/allBlogs/AllBlog";
import EditProfile from "./components/pages/profileOperations/EditProfile";
import UpdateBlog from "./components/pages/blogOperations/UpdateBlog";
import ThirdPersonDashboard from "./components/pages/viewAuthor/ThirdPersonDashboard";
import DivertedLogin from'./components/form/DivertedLogin';
import AllAuthor from "./components/pages/allAuthor/AllAuthor";
import Footer from "./components/Footer";


function App() {
  const { token } = useSelector((state) => state.auth);

  return (
    <div
      className='w-full  min-h-screen flex flex-col bg-gradient-to-br  backg gap-3 overflow-x-hidden  font-ubuntu-style'>
     
          <div className="w-full  flex-grow  ">
            <Navbar />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<OpenRoute token={token}><Login /></OpenRoute>} />
              <Route path="/divertedlogin" element={<OpenRoute token={token}><DivertedLogin/> </OpenRoute>} />
              <Route path="/signup" element={<OpenRoute token={token}><Signup /></OpenRoute>} />
              <Route path="/viewBlog/:blogId" element={<ViewBlog />} />

              <Route path="/dashboard" element={<PrivateRoute token={token}><Dashboard /></PrivateRoute>} />
              <Route path="/createBlog" element={<PrivateRoute token={token}><CreateBlog /></PrivateRoute>} />
              <Route path="/allBlog" element={<AllBlog  />} />
              <Route path="/allAuthor" element={<AllAuthor/>} />
              <Route path="/dashboard/editProfile" element={<EditProfile />} />
              <Route path="/updateBlog" element={<UpdateBlog />} />
              <Route path="/author/:authorId" element={<ThirdPersonDashboard />} />
            </Routes>
   

          </div>
          <Footer/>

    </div>
  );
}

export default App;
