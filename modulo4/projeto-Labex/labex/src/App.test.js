import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';

describe('paths test', ()=>{
  
  it('should go to "TripDetailsPage" from Home',()=>{
    const {getByText, unmount} = render(<App />)

    const buttonHome = getByText('admin area')

    userEvent.click(buttonHome)
    expect(getByText('AdminHomePage').toBeInTheDocument)

    const buttonAdminHomePage = getByText('go to trip details')
    
    userEvent.click(buttonAdminHomePage)
    expect(getByText('TripDetailsPage').toBeInTheDocument)

    const buttonGoHome = getByText('go to home')

    userEvent.click(buttonGoHome)

    unmount()
  })

  it('should go to "ApplicationFormPage" from "HomePage"', ()=>{
    const {getByText, unmount} = render(<App />)

    const buttonHome = getByText('go to list trips page')

    userEvent.click(buttonHome)
    expect(getByText('ListTripsPage').toBeInTheDocument)

    const buttonListTrips = getByText('inscrever-se')

    userEvent.click(buttonListTrips)
    expect(getByText('ApplicationFormPage').toBeInTheDocument)

    unmount()
  })

  
  
})
