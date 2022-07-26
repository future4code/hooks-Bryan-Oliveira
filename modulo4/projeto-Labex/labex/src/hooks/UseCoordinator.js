import { useNavigate } from "react-router-dom";


const UseCoordinator = ()=>{
    
    const navigate = useNavigate()

    const goToHomePage = ()=>{
        navigate('/');
    }

     const goToAdminHomePage = (props)=>{
        navigate('/admin/trips/list', props);
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

     const goToTripDetailsPage = (tripId)=>{
        navigate(`/admin/trips/${tripId || ':id'}`);
}

    const goToApplicationform = (tripId)=>{
        navigate(`/trips/application/${tripId}`)
    }

    const goBack = ()=>{
        navigate(-1);
    }

    return {
        goToAdminHomePage,
        goToHomePage,
        goToCreateTripPage,
        goToListTripsPage,
        goToLoginPage,
        goToTripDetailsPage, 
        goBack,
        goToApplicationform,

    }
    
}

export default UseCoordinator