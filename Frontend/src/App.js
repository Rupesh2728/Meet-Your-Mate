
import { Outlet } from 'react-router-dom';
import './App.css';
import  { Toaster } from 'react-hot-toast';
import "typeface-poppins";

function App() {
  return (
    <>
      <Toaster/>
      <main>
        <Outlet/>
      </main>
    </>
  );
}

export default App;
