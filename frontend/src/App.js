import Topbar from "./components/Topbar";
import PostPage from "./pages/PostPage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Write from "./pages/Write";
import Settings from "./pages/Settings";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { useContext } from "react";
import { Context } from "./context/Context";

export default function App() {
  const { user } = useContext(Context);
  return (
    <BrowserRouter>
      <div className="dark:bg-Grey h-screen">
        <Topbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={user ? <Home /> : <Login />} />
          <Route path="register" element={user ? <Home /> : <Register />} />
          <Route path="post/:postId" element={<PostPage />} />
          <Route path="write" element={user ? <Write /> : <Login />} />
          <Route path="settings" element={user ? <Settings /> : <Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
