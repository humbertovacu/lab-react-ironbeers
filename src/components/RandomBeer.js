import axios from "axios";
import { useEffect } from 'react'
import BeerModel from "./BeerModel";

function RandomBeer(props){
    const { beer, setBeer } = props;

    useEffect(()=> {
        axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
            .then(response => setBeer(response.data))
    }, [])

    return(
        <div>
            {Object.keys(beer)===0 && <p>Loading...</p>}
            <BeerModel beer={beer}/>
        </div>
    )
}

export default RandomBeer;