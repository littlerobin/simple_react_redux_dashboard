export default function validateType(type,value) {
    let errors = {};
    // Email Errors
    if(type==="email")
    {
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
      errors.type = "Invalid email address";
    }
}
    //ip address
    if(type==="ip_address")
    {
    if (!/^(?=.*[^\.]$)((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.?){4}$/i.test(value)) {
      errors.type = "Invalid ip address";
    }
}
    return errors;
  }
  