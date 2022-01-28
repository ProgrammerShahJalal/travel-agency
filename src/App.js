import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Login/Register/Register";
import Footer from "./components/Shared/Footer/Footer";
import Navbar from "./components/Shared/Navbar/Navbar";
import AuthProvider from "./Contexts/AuthProvider/AuthProvider";
import BlogDetails from "./components/Blogs/BlogDetails/BlogDetails";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          {/* <Route path='/tours' element={<Services />} /> */}
          {/* <Route path='/blog' element={<BlogsAndNews />} /> */}
          <Route path='/booking/:id' element={<PrivateRoute><BlogDetails /></PrivateRoute>} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
