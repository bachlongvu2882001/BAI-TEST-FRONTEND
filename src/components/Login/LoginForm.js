import { useState, useEffect } from "react";
import "./stylesLogin.css"

function LoginForm() {
  const initialValues = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [showPass, setShowPass] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };
  const showPassWord = () =>{
    if(showPass){
      setShowPass(false);
    }
    if(!showPass){
      setShowPass(true);
    }
  }
  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 15) {
      errors.password = "Password cannot exceed more than 15 characters";
    }
    return errors;
  };

  return (
    <div className="container">
     
      <form onSubmit={handleSubmit}>
        <h3>Login</h3>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="  example@kyanon.digital"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.email}</p>
          <div className="field">
            <label>Password</label>
            <input
              type={showPass==false ? "text" : "password"}
              name="password"
              placeholder="  **********"
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.password}</p>
          <div className="submit1">
            <div className="validate-check">
              <input type="checkbox" id="showpass" name="showpass" onChange={showPassWord}/>
              <label for="showpass"> Show password</label>
           </div>
           <button className="btn-signin">Sign in</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;