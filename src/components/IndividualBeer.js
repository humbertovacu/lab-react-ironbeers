import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import BeerModel from "./BeerModel";


function IndividualBeer(props){
    const { id } = useParams();
    const { beer, setBeer } = props;
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