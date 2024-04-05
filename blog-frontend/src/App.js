import Header from "./components/Header";
import {Routes, Route} from 'react-router-dom';
  import Blogs from "./pages/Blogs";
import Login from "./pages/Login";
import Register from "./pages/Register";
  import CreateBlog from "./pages/CreateBlog";

 import BlogDetails from "./pages/BlogDetails";

function App() {
  return (
    <div>
      <>
       
      <Header></Header>
       <Routes>
       {/* <Route path="/" element={<Blogs />} />  */}
              <Route path="/blogs" element={<Blogs />} />
       <Route path="/my-blogs" element={<CreateBlog />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} /> 
    
      <Route path="/blog-details/:id" element={<BlogDetails />} />  
      </Routes> 
      </>
    </div>
  );
}

export default App;
