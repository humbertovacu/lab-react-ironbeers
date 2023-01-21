import allBeersImg from '../assets/beers.png'
import randomBeerImg from '../assets/random-beer.png'
import newBeerImg from '../assets/new-beer.png'
import { Link } from 'react-router-dom'

function Homepage(){
 return(
    <div className="container-sm">
        <Link to={'/beers'}>
            <div className="container">
                <h2 className='h2'>Check all Beers</h2>
                <img src={allBeersImg} alt='all-beers' width={'100%'}/>
                <p style={{textAlign: 'left'}}>Check out our selection of handcrafted beers.</p>
            </div>
        </Link>
        <div className="container">
            <h2 className='h2'>Random Beer</h2>
            <img src={randomBeerImg} alt='all-beers' width={'100%'}/>
            <p style={{textAlign: 'left'}}>Feeling adventurous? Click to discover a beer of our choice.</p>
        </div>
        <div className="container">
            <h2 className='h2'>New Beer</h2>
            <img src={newBeerImg} alt='all-beers' width={'100%'}/>
            <p style={{textAlign: 'left'}}>Add a new beer to the collection.</p>
        </div>
    </div>
 )
}

export default Homepage;