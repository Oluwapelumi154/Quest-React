import React from "react";
import SignUp from "../Pages/SignUp/SignUp";
import { Routes, Route } from "react-router-dom";
import Login from "../Pages/Login/Login";
import Main from "../Pages/Main/Main";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Pages/Footer/Footer";
import Contact from "../Pages/Contact/Contact";
import Pricing from "../Pages/Pricing/Pricing";

const Router = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <Main />
            <Footer />
          </>
        }
      />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/sign-in" element={<Login />} />
      <Route
        path="/contact"
        element={
          <>
            <Navbar />
            <Contact />
            <Footer />
          </>
        }
      />
      <Route
        path="/pricing"
        element={
          <>
            <Navbar />
            <Pricing />
            <Footer />
          </>
        }
      />
    </Routes>
  );
};

export { Router };
