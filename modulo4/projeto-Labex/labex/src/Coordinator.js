import { useNavigate } from "react-router-dom";


const Coordinator = ()=>{
    
    const navigate = useNavigate()

    const goToHomePage = ()=>{
        navigate('/');
    }

     const goToAdminHomePage = ()=>{
        navigate('/admin/trips/list');
    } 

     const goToCreateTripPage = ()=>{
        navigate('/admin/trips/create');
    }

     const goToListTripsPage = ()=>{
        navigate('/trips/list');
    }

     const goToLoginPage = ()=>{
        navigate('/login');
    }

     const goToTripDetailsPage = ()=>{
        navigate('/admin/trips/:id');
}

    const goToApplicationform = ()=>{
        navigate('/trips/application')
    }

    const goBack = ()=>{
        navigate(-1);
    }

    return {
        goToAdminHomePage: goToAdminHomePage,
        goToHomePage: goToHomePage,
        goToCreateTripPage: goToCreateTripPage,
        goToListTripsPage: goToListTripsPage,
        goToLoginPage: goToLoginPage,
        goToTripDetailsPage: goToTripDetailsPage, 
        goBack: goBack,
        goToApplicationform: goToApplicationform,

    }
    
}

export default Coordinator