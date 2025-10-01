
import { Link } from "react-router";

function LogIn() {
  return (
    <form>
        <input name="email" placeholder="email" required/>
        <input name="password" placeholder="password" required/>
        <button>
          Login
        </button>
        {/* <Link to="/">Create An account</Link> */}
    </form>
  )
}


export default LogIn;
