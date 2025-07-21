import { lazy, Suspense } from 'react';
import './App.css';

const Todo = lazy(() => import('./components/Todo-list'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<h1>Loading....</h1>}>
        <Todo/>
      </Suspense>
    </div>
  );
}

export default App;
