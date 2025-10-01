function SignUp() {
  return (
    <form>
        <input name="fullname" placeholder="FullName" required/>
        <input name="email" placeholder="email" required/>
        <input name="password" placeholder="password" required/>
        <button>
          sign up
        </button>
        <p>
          Already have an account? 
        {/* <Link to="/">Create An account</Link> */}
        </p>
    </form>
  )
}


export default SignUp;