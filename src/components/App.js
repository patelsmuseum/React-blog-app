import {createBrowserRouter , RouterProvider , createRoutesFromElements , Route} from 'react-router-dom';
import {  CreatePost , PostDetail , Home , Navbar}  from './index'


function App() {
  const routes = createRoutesFromElements(
    <>
        <Route path='/' element={<Home/>} />
        <Route path='/post/:postId' element={<PostDetail/>} />
        <Route path='/create-post' element={<CreatePost/>} />
    </>
  );

  const router = createBrowserRouter(routes);
  return (
    <div className="container">
        < Navbar/>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
