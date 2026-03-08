// App.js
// Import core React functionality
import React, { Suspense, lazy } from "react";
// Import route components from react-router-dom
import { Routes, Route } from "react-router-dom";
// Import a regular (non-lazy) component for navigation
import Navbar from "./components/Navbar";
// Import a fallback component to show while lazy-loaded components are being fetched
import LoadingSpinner from "./components/LoadingSpinner";
// Lazy-load the Home component — this will be split into its own chunk
const Home = lazy(() => import("./pages/Home"));
// Lazy-load the About component — it will also be split and loaded only when needed
const About = lazy(() => import("./pages/About"));
function App() {
  return (
    <>
      {/* Display navigation bar */}
      <Navbar />
      {/* Suspense component provides a fallback UI while lazy-loaded components load */}
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          {/* Define route for "/" and render the Home component lazily */}
          <Route path="/" element={<Home />} />

          {/* Define route for "/about" and render the About component lazily */}
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
