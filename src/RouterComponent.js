import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Pages/Home'
import StudentsData from './Components/Pages/StudentsData'
import ContactUs from './Components/Pages/ContactUs'
import ErrorPage from './Components/Pages/ErrorPage'
import { StoreComponent } from './Components/StoreComponent'
import EditStudent from "./Components/Pages/EditStudent"
import NewStudent from "./Components/Pages/NewStudent"

function RoutersComponent() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                
                <Route path='/' element={<Home/>} />

                <Route path="/students-data" element={
                  <StoreComponent>
                    <StudentsData />
                  </StoreComponent>
                } />
                    
                <Route path="/editstudent" element={
                  <StoreComponent>
                    <EditStudent />
                  </StoreComponent>
                } />
                
                <Route path="/newstudent" element={
                  <StoreComponent>
                    <NewStudent />
                  </StoreComponent>
                } />

                <Route path='/contact-us' element={<ContactUs/>} />
                
                <Route path='/*' element={<ErrorPage/>} />
            
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default RoutersComponent