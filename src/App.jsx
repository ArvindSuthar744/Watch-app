import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Navigation from './Components/Navigation'
import Footer from './Components/Footer'
import Homepage from './Pages/Homepage'
import Menpage from './Pages/Menpage'
import Womenpage from './Pages/Womenpage'
import Unisexpage from './Pages/Unisexpage'
import Cartpage from './Pages/Cartpage'
import Checkoutpage from './Pages/Checkoutpage'
import SingleProductViewpage from './Pages/SingleProductViewpage'
import { Provider } from 'react-redux'
import store from './Context-Api/Store'
import { ToastContainer } from 'react-toastify'



function App() {



  return (
    <>
      <div className="bg-white text-white font-intermedium relative scroll-m-40">

          <Provider store={store}>
          <BrowserRouter> 
            <Navigation />
            <ToastContainer/>
            <Routes>
              <Route path="/" element={<Homepage/>} />
              <Route path='/menpage' element={<Menpage />} />
              <Route path='/womenpage' element={<Womenpage />} />
              <Route path='/unisexpage' element={<Unisexpage />} />
              <Route path='/cartpage' element={<Cartpage />} />
              <Route path='/checkoutpage' element={<Checkoutpage />} />
              <Route path='/singleproductviewpage/:viewId' element={<SingleProductViewpage />} />
            </Routes>
            <Footer />
          </BrowserRouter>
          </Provider>


      </div>
    </>
  )
}


export default App