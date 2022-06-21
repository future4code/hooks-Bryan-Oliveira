import React from "react";
import UseCoordinator from "../../hooks/UseCoordinator";
import { TextField, FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const ApplicationFormPage = ()=>{

    const {goToHomePage} =  UseCoordinator()

    return <>
    <h1>ApplicationFormPage</h1>
    <button onClick={goToHomePage}>home</button>

    <FormControl variant="filled" sx={{ m: 1, width: '100%' }}>
        <InputLabel id="choose-trip-label">Escolha uma viagem</InputLabel>
        <Select
          labelId="choose-trip-label"
          id="choose-trip"
        //   value={age}
        //   onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>

    <TextField id="filled-basic" label="Filled" variant="filled" />
    <TextField id="filled-basic" label="Filled" variant="filled" />
    <TextField id="filled-basic" label="Filled" variant="filled" />
    <TextField id="filled-basic" label="Filled" variant="filled" />


    <FormControl variant="filled" sx={{ m: 1, width: '100%' }}>
        <InputLabel id="choose-country-label">Escolha uma viagem</InputLabel>
        <Select
          labelId="choose-country-label"
          id="choose-country"
        //   value={age}
        //   onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      
    </>
}

export default ApplicationFormPage