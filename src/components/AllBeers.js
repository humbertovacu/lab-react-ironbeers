import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


function AllBeers(){
    const [beers, setBeers] = useState([]);
    const [search, setSearch] = useState('');
   
    const handleChange = (event) => {
        setSearch(event.target.value);
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${search}`)
            .then(retrievedData => setBeers(retrievedData.data))
            .catch(err => console.error(err))
    }

    useEffect(()=>{
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
            .then(response => setBeers(response.data))
    }, [])



    return(
        <div className="container-fluid" style={{width:'100vw'}}>
           
           <div className='form-floating mb-3'>
            <input id='all-beers-search' type='text' name='search' className='form-control' placeholder="My favorite beer" onChange={handleChange}/>
            <label>Search a beer</label>
           </div>
           {search.length !== 0 && beers.length === 0 && <p>We couldn't find this beer.</p>}
           {search.length === 0 && beers.length === 0 && <p>Loading...</p>}
           <hr/>
           {beers.map(beer => {
            return(
                <div key={beer._id} className="row" style={{display: 'flex', alignItems: 'center', justifyContent:'space-evenly', height:'250px'}}  >
                    <div className="col" style={{paddingBottom: '40px', paddingLeft: '40px', paddingTop: '20px', width: '100%'}}>
                        <img src={beer.image_url} width={'40vw'} alt={beer.name}/>
                    </div>
                    <div className="col" style={{marginRight: '40px'}}>
                        <Link to={`/beers/${beer._id}`} className='all-beers-link'><h4 className="h4" style={{textAlign:'left', color: '#fed766'}}>{beer.name}</h4></Link>
                        <h6 className="h6" style={{textAlign:'left', color: '#e6e6ea'}}>{beer.tagline}</h6>
                        <p style={{textAlign:'left', color: '#f4f4f8'}}>Created by: {beer.contributed_by}</p>
                    </div> 
                    <hr/> 
                </div>
               
            )
           })}
        </div>
    )

}

export default AllBeers;