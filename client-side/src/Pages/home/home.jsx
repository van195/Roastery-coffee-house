import CoffeeFeature from '../../components/coffeeFeature/coffeeFeature.jsx';
import Hero from '../../components/hero/hero.jsx';
import NavBar from '../../components/NavBar/NavBar.jsx';
import OurStory from '../../components/OurStory/ourStory.jsx';
const Home =()=>{
    return(
        <div className="home">
           <NavBar/>
           <Hero/>
           <CoffeeFeature/>
           <OurStory/>
        </div>
    )
}
export default Home;