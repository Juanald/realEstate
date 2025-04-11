import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Signup from "./pages/Signup.tsx";
import Login from "./pages/Login.tsx";
import Search from "./pages/Listings.tsx";
import ListingDetails from "./pages/Search.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";
import NavBar from "./components/NavBar.tsx";
import "./index.css";
import ListingForm from "./components/ListingForm.tsx";
import Listings from "./pages/Listings.tsx";

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search/listings" element={<Listings />} />
        {/* <Route path="/search/listings/:id" element={<ListingModal />} /> */}
        <Route path="/listing/post" element={<ListingForm />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}
