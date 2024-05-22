import { Link } from "react-router-dom"

const Login = () => {
  return (
    <div>
        
<div className="login-form-container">

<form action="">
    <h3>login form</h3>
    <input type="email" name="" placeholder="enter your email" id="" className="box"/>
    <input type="password" name="" placeholder="enter your password" id="" className="box" />
    <div className="remember">
        <input type="checkbox" name="" id="remember-me"/>
        <label >remember me</label>
    </div>
    <input type="submit" value="login now" className="btn" />
    <p>forget password? <a href="#" >click here</a></p>
    <p><Link to="/register">dont have an account? <a href="#">create one</a></Link></p>
</form>

</div>
form
    </div>
  )
}

export default Login









