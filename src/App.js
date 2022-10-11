import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Main from './Main';
import Home from './components/Home';
import Topics from './components/Topics';
import Statics from './components/Statics';
import Quizes from './components/Quizes';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>
        },
        {
          path: 'Home',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>
        },
        // { path: 'Topics', element: <Topics></Topics> },
        { path: 'Statics', element: <Statics></Statics> },
        {
          path: '/topic/:topicId',
          loader: async ({params}) => {
             return fetch(`https://openapi.programming-hero.com/api/quiz/${params.topicId}`) 
            },
          element: <Quizes></Quizes>
        }
      ]

    }

  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
