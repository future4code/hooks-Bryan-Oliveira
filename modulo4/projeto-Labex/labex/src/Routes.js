import {BrowserRouter, Routes, Route} from  'react-router-dom'
import AdminHomePage from './Components/Pages/AdminHomePage'
import ApplicationFormPage from './Components/Pages/ApplicationFormPage'
import CreateTripPage from './Components/Pages/CreateTripPage'
import ErrorPage from './Components/Pages/ErrorPage'
import Home from './Components/Pages/Home'
import ListTripsPage from './Components/Pages/ListTripsPage'
import LoginPage from './Components/Pages/LoginPage'
import TripDetailsPage from './Components/Pages/TripDetailsPage'
import Header from './Components/Header'

const Router = ()=>{

    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />

                <Route path='trips/list' element={<ListTripsPage />} />
                <Route path='trips/application/:id' element={<ApplicationFormPage />} />
                
                <Route path='login' element={<LoginPage />} />
                
                <Route path='admin/trips/list' element={<AdminHomePage />} />
                <Route path='admin/trips/create' element={<CreateTripPage />} />
                <Route path='admin/trips/:id' element={<TripDetailsPage />} />

                <Route path='*' element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
        </>
    )


}

export default Router