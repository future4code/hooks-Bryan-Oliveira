import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';

describe('Home Page Tests', ()=>{
  it('should render "Home"',()=>{
      const {getByText} = render(<App / >)

      expect(getByText('Home').toBeInTheDocument)   
  })

  it('should go to "ApplicationFormPage" from "HomePage"', ()=>{
    const {getByText} = render(<App />)

    const buttonHome = getByText('go to list trips page')

    userEvent.click(buttonHome)
    expect(getByText('ListTripsPage').toBeInTheDocument)

    const buttonListTrips = getByText('go to apllication form')

    userEvent.click(buttonListTrips)
    expect(getByText('ApplicationFormPage').toBeInTheDocument)
  })

  it('should go to "TripDetailsPage" from Home',()=>{
    const {getByText} = render(<App />)

    const buttonHome = getByText('go to list trips page')

    userEvent.click(buttonHome)
    expect(getByText('ListTripsPageAdminHomePage').toBeInTheDocument)

    const buttonAdminHomePage = getByText('go to trip details')
    
    userEvent.click(buttonAdminHomePage)
    expect(getByText('TripDetailsPage').toBeInTheDocument)
  })
  
})
