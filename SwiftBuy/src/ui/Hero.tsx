import Button from "./Button";
import Logo from "./Logo";

function Hero(){
  return (
    <section>
      <div><Logo width={48} height={48} /></div>
      <div>
        <h2>Your Heading Here</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ultricies sodales mi, at ornare elit semper ac.</p>
        <Button to="/">Shop Now</Button>
      </div>
    </section>
  )
}
export default Hero;