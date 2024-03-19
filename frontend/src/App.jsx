
import './App.css'
import AllRoutes from './components/routes/AllRoutes';
import {Toaster} from "react-hot-toast";

function App() {

  return (
    <div className='p-4 h-screen flex items-center justify-center'>
      <AllRoutes/>
      <Toaster/>
    </div>
  )
}

export default App
