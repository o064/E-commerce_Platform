import ProductList from "../features/product/ProductList";
import Collection from "./Collection";
import Hero from "./Hero";

function Home(){
  return (
      <>
      <Hero/>
      <Collection/>
      <ProductList headerText="Featured Products" category="featured" />
      </>
  )
}
export default Home;