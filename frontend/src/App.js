import React, { useContext, Redirect } from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ProfilePage from "./pages/ProfilePage";
import Reviews from "./pages/Reviews";
import About from "./pages/About";
import Companies from "./pages/Companies";
import Internships from "./pages/Internships";
import Layout from "./components/Navbar/Layout";
import NewInternshipPage from "./pages/NewInternshipPage";
import SignUpPage from "./pages/SignUpPage";
import AuthPage from "./pages/AuthPage";
import AuthContext from "./store/auth-context";

function App() {
  const authCtx = useContext(AuthContext);
  return (
    <Layout>
      <Routes>
        <Route exact path="/" element={<LandingPage />}></Route>
        <Route path="/reviews" element={<Reviews />}></Route>
        {authCtx.isLoggedIn && (
          <Route path="/profile" element={<ProfilePage />}></Route>
        )}
        <Route path="/companies" element={<Companies />}></Route>
        <Route path="/internships" element={<Internships />}></Route>
        <Route path="/new-internship" element={<NewInternshipPage />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/sign-up" element={<SignUpPage />}></Route>
        {!authCtx.isLoggedIn && (
          <Route path="/auth" element={<AuthPage />}></Route>
        )}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Layout>
  );
}

export default App;
