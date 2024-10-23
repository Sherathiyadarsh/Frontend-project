import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Outlet } from 'react-router-dom';
import Header from './feature/Header';
import ContaxtData from './feature/ContaxtData';

function App() {
  return (
    <>
      <ToastContainer
        position="bottom-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="colored" />
      {/* <h1>Hello React</h1> */}
      {/* <Pagenotfound/> */}
      {/* <Userlogin /> */}
      <Outlet />
    </>
  )
}

export default App
