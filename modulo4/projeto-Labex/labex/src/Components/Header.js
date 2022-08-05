import UseCoordinator from "../hooks/UseCoordinator";
import { HeaderNav } from "../styles/styles";

const Header = ()=>{
    const {
        goToAdminHomePage,
        goToHomePage,
        goToCreateTripPage,
        goToListTripsPage,
        goToLoginPage,
        goToApplicationform,
    } = UseCoordinator()

    return <>
    {/* <HeaderNav onClick={goToHomePage} >Home</HeaderNav>
    <HeaderNav onClick={goToApplicationform} >Apply to trip</HeaderNav> */}
    </>
}

export default Header