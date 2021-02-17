

// note that you can also export the source data via CountryRegionData. It's in a deliberately concise format to 
// keep file size down
import {Form} from "react-bootstrap";
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';



 const CountryAndRegionFields = ({country, setCountry,  region, setRegion}) => {
  
    

  const selectCountry = (val) => {
     setCountry(val);
   }
  
  const selectRegion = (val) => {
     setRegion(val);
   }
  
   
      return (
        <>
          <Form.Group controlId="formGroupCountry" className="reg__group">
                <Form.Label>
                    *Country
                </Form.Label>
           <CountryDropdown
            value={country}
            onChange={(val) => selectCountry(val)} 
            require={true}
            />
            </Form.Group>
            <Form.Group controlId="formGroupRegion" className="reg__group">
                <Form.Label>
                    *Region
                </Form.Label>
          <RegionDropdown
            country={country}
            value={region}
            onChange={(val) => selectRegion(val)} 
            require={true}
            />
            </Form.Group>
        </>
      );
    
  }



  export default CountryAndRegionFields;
