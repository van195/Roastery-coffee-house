import CoffeeFeature from '../../components/coffeeFeature/coffeeFeature.jsx';
import Hero from '../../components/hero/hero.jsx';
import NavBar from '../../components/NavBar/NavBar.jsx';
import OurStory from '../../components/OurStory/ourStory.jsx';
import SpotLight from '../../components/spotlight/spotlight.jsx';
const Home =()=>{
    return(
        <div className="home">
           <NavBar/>
           <Hero/>
           <CoffeeFeature/>
           <OurStory/>
           <SpotLight/>
        </div>
    )
}
export default Home;