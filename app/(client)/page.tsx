
import Hero from "../../components/Hero";
import FeaturedProducts from "../../components/Featuredproducts";
import LatestProducts from "../../components/Latestproducts";
import Offer from "../../components/Offer";
import TrendingProducts from "../../components/Trendingproducts";
import LatestBlog from "../../components/LatestBlog";
import Conatainer from "../../components/Container";




export default function Home() {
  return (
   <div>
    <Conatainer>

    <Hero/>
    <FeaturedProducts/>
    <LatestProducts/>
    <Offer/>
    <TrendingProducts/>
    <LatestBlog/>
    </Conatainer>
  
   </div>
  );
}
