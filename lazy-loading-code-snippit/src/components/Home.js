// import { Link } from "react-router";
import { lazy, Suspense, useState } from "react";
// import sum from "../sum";
// import Admin from './Admin';

const Admin = lazy(() => import('./Admin.js'));

export default function Home() {
    const [isAdmin, setIsAdmin] = useState(false);

    return (
        <div>
            <h1>
                This is Home Page
            </h1>
            <button onClick={() => import('../sum.js').then(module => { alert(module.sum(2, 2)) })}>
                Add
            </button>
            <br />
            <br />
            <button onClick={() => setIsAdmin(prev => !prev)}>Toggle Admin</button>
            {/* Lazy Loading the specifice content in the single Page */}
            <Suspense fallback={"Loading..."}>
                {isAdmin ? (<Admin />) : 'Not Admin'}
            </Suspense>
        </div>
    )
}