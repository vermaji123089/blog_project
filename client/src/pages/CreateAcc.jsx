import { Link } from "react-router-dom";
import axios from "axios";
const CreateAcc = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    try {
      const res = await axios.post(
        "http://localhost:3001/api/creataccount",
        data
      );
      console.log(res.data);
    } catch (error) {
      console.log("your Account is Already exists");
    }
  };

  return (
    <div>
      <div className="login-form-container">
        <form action="" onSubmit={handleSubmit}>
          <h3>Registration form</h3>
          <div className="flex">
            <input
              type="text"
              name="name"
              placeholder="enter your Name"
              className="box"
            />
            <input
              type="email"
              name="email"
              placeholder="enter your Email"
              className="box"
            />
          </div>
          <div className="flex">
            {" "}
            <input
              type="number"
              name="number"
              placeholder="enter your Number"
              className="box"
            />
            <input
              type="password"
              name="password"
              placeholder="enter your password"
              className="box"
            />
          </div>
          <div className="remember">
            <input type="checkbox" name="" id="remember-me" />
            <label>remember me</label>
          </div>
          <input type="submit" value="Register now" className="btn" />
          <p>
            forget password? <a href="#">click here</a>
          </p>
          <p>
            <Link to="/login">
              Already have an account? <a href="#">click here Login</a>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default CreateAcc;
