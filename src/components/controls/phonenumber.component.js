import React from 'react';
import ReactPhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/dist/style.css'
import {useSelector} from 'react-redux';
import { DefaultPropertyValue } from "./defaultconfig";

const CbPhoneNumber = ({ value,change,excludeCountries,onlyCountries,preferredCountries
    ,defaultCountry,placeholder,autoFormat,disableDropdown,disableCountryCode,countryCodeEditable,
    enableSearchField,disableSearchIcon,enableLongNumbers,disableAreaCodes,inputExtraProps
}) => {
    const enableRtl = useSelector(state => state.loggedInDetails.OtherInfo.isRTL);
    return (
        <ReactPhoneInput 
        defaultCountry={defaultCountry !== undefined ? defaultCountry : DefaultPropertyValue.enableRtl}
         value={value} 
         onChange={change}
        excludeCountries={excludeCountries}
            onlyCountries={onlyCountries}
            preferredCountries={preferredCountries}
            placeholder={placeholder}
            autoFormat={autoFormat}
            disableDropdown={disableDropdown}
            disableCountryCode={disableCountryCode}
            countryCodeEditable={countryCodeEditable}
            enableSearchField={enableSearchField}
            disableSearchIcon={disableSearchIcon}
            enableLongNumbers={enableLongNumbers}
            disableAreaCodes={disableAreaCodes}
            inputExtraProps={inputExtraProps}
            style ={enableRtl===true?{direction: "ltr"}:{direction: "rtr"}
        }
        />
    );
};

export default CbPhoneNumber;
