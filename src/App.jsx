import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import CreatePost from './pages/CreatePost';
import Post from './pages/Post';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import FormikSignUP from './pages/Formik';

function App() {
  return (
    <div className="container ">
      <Router>
        <Routes>
          <Route path="/" element={<Post />} />
          <Route path="/formik" element={<FormikSignUP />} />
          <Route path="/login" element={<Login />} />
          <Route path="/createpost" element={<CreatePost />} />
          <Route path="/createpost/:position" element={<CreatePost />} />
          <Route path="post" element={<Post />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
