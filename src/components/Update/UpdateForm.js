import { useState, useEffect } from "react";
import "./stylesUpdate.css";

function UpdateForm() {
  const initialValues = { fullname: "", dayofbirth: "", email: "",phone: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [checkDeauf, setCheckDeauf] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    if(checkDeauf==true){
      alert("Cập nhật thành công");
      setFormValues(initialValues);
      setCheckDeauf(false);
    }
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const phoneRegExp = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
  
    if (!values.fullname) {
      errors.fullname = "Fullname is required!";
      setCheckDeauf(false);
      console.log(values.phone.length)
    }
    if (!values.dayofbirth) {
      errors.dayofbirth = "Day of birth is required!";
      setCheckDeauf(false);
    }
    if (!values.email) {
      errors.email = "Email is required!";
      setCheckDeauf(false);
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
      setCheckDeauf(false);
    }
    if (!values.phone) {
      errors.phone = "Phone number is required!";
      setCheckDeauf(false);
    } else if ((!phoneRegExp.test(values.phone)) || (values.phone.length <9 || values.phone.length > 10)) {
      errors.phone = "This is not a valid phone format!";
      setCheckDeauf(false);
    }
    return errors;
    
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h3>Profile</h3>
        <div className="ui divider"></div>
        <div className="ui form">
        <div className="field">
            <label>Full name:</label>
            <input
              type="text"
              name="fullname"
              placeholder=""
              value={formValues.fullname}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.fullname}</p>
          <div className="field">
            <label>Day Of Birth:</label>
            <input
              type="text"
              name="dayofbirth"
              placeholder=""
              value={formValues.dayofbirth}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.dayofbirth}</p>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder=""
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.email}</p>
          <div className="field">
            <label>Phone</label>
            <input
              type="number"
              name="phone"
              placeholder=""
              value={formValues.phone}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.phone}</p>
          <div className="submit">
              <button className="btn-update">Update</button>
              <button className="btn-cancle">Cancle</button>
          </div>
         
        </div>
      </form>
    </div>
  );
}

export default UpdateForm;