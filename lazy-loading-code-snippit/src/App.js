import { Link, Outlet, Route, Routes } from 'react-router';
import './App.css';
// import About  from "./components/About";
// import Home from "./components/Home";
// import Store from "./components/Store.js";
import { lazy, Suspense } from 'react';

const Home = lazy(()=> import('./components/Home.js'));
const About = lazy(() => import('./components/About.js').then(module => {
  return {default: module.About}
}));
const Store = lazy(() => import('./components/Store.js'));



function App() {
  return (
    <Routes>
      <Route path="/" element={<NavWrapper />}>
         <Route path="/" element={<Home />}/>
         <Route path="/store" element={<Store />}/>
         <Route path="/about" element={<About />}/>
      </Route>
    </Routes>
  );
}


function NavWrapper () {
  return (
    <>
      <nav style={{display: "flex", gap: "1rem"}}>
        <Link  to="/">Home</Link>
        <Link  to="/store">Store</Link>
        <Link  to="/about">About</Link>
      </nav>
       <Suspense fallback={<h1>Loading....</h1>}>
         <Outlet />
      </Suspense>
    </>
  )
}

export default App;
