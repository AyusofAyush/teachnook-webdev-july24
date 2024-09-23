import { lazy, Suspense } from "react";
import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
// lazy load the components in React
const Shop = lazy(() => import("./pages/Shop/Shop"));

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/about"
          element={
            <Suspense fallback={<h1>Loading....</h1>}>
              <About />
            </Suspense>
          }
        />
        <Route
          path="/contact"
          element={
            <Suspense fallback={<h1>Loading....</h1>}>
              <Contact />
            </Suspense>
          }
        />
        <Route
          path="/shop"
          element={
            <Suspense fallback={<h1>Loading....</h1>}>
              <Shop />
            </Suspense>
          }
        />
        <Route
          path="/*"
          element={
            <Suspense fallback={<h1>Loading....</h1>}>
              <Home />
            </Suspense>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
