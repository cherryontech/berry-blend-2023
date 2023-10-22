import './App.css'
import { 
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
   } 
  from 'react-router-dom';
  import ErrorPage from "./routes/ErrorPage.jsx";
import './index.css';
import About from './routes/About.jsx';
import Resources from './routes/Resources.jsx';
import { Layout } from './Layouts/layout.jsx';


const router = createBrowserRouter( createRoutesFromElements(
  <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
    <Route path="/" element={<App />}></Route>
    <Route path="/About" element={<About />}></Route>
    <Route path="/Resources" element={<Resources />}></Route> 
  </Route>
))


function App() {
return(<RouterProvider router={router} />)
}

export default App
