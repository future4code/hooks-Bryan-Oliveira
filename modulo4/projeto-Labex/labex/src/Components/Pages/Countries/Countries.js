import { Select, Option } from '../../../styles/styles'
import { countryList } from '../../../constants/constants'

const Countries = ({value, onChange})=>{

    return <Select value={value} name="country" onChange={onChange}>
        {countryList.map((country, i) =>{
            return country ==='Brazil'? <Option key={i} value={country} selected>{country}</Option> : <Option key={i} value={country}>{country}</Option>
        })}
    </Select>
}

export default Countries
