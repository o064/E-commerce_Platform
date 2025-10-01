import ProductList from "../features/product/ProductList";
import ProductOverview from "../features/product/ProductOverview";
import Collection from "./Collection";
import Hero from "./Hero";

function Home(){
  return (
      <>
      <Hero/>
      <Collection/>
      <ProductList />
      </>
  )
}
export default Home;