import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import BeerModel from "./BeerModel";


function IndividualBeer(){

    const [beer, setBeer] = useState('');

    const { id } = useParams();
    useEffect(()=>{
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
        .then(response => setBeer(response.data))
    }, [id])

    console.log(beer)

    return(
        <BeerModel beer={beer}/>
    )

}

export default IndividualBeer;