import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Main from './Main';
import Home from './components/Home';
import Quizes from './components/Quizes';
import Statistics from './components/Statistics';
import Error from './components/Error';
import Blog from './components/Blog';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main></Main>,
      errorElement:<Error></Error>,
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
        {
          path: 'Statistics',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Statistics></Statistics>
        },
        {
          path:'Blog',
          element:<Blog></Blog>
        },
        {
          path: '/topic/:topicId',
          loader: async ({ params }) => {
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
