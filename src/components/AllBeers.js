import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function AllBeers(){
    const [beers, setBeers] = useState([]);

    useEffect(()=>{
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
            .then(response => setBeers(response.data))
    }, [])

    console.log(beers)

    return(
        <div className="container-fluid" style={{width:'100vw'}}>
           {beers.length === 0 && <p>Loading...</p>}
           {beers.map(beer => {
            return(
                <div key={beer._id} className="row align-items-start">
                    <div className="col" style={{paddingBottom: '40px', width: '100%'}}>
                        <img src={beer.image_url} width={'40vw'} alt={beer.name}/>
                    </div>
                    <div className="col">
                        <Link to={`/beers/${beer._id}`}><h4 className="h4" style={{textAlign:'left'}}>{beer.name}</h4></Link>
                        <h6 className="h6" style={{textAlign:'left'}}>{beer.tagline}</h6>
                        <p style={{textAlign:'left'}}>Created by: {beer.contributed_by}</p>
                    </div>
                </div> 
            )
           })}
        </div>
    )

}

export default AllBeers;