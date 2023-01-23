import axios from "axios";
import { useState } from "react";

function NewBeer(){

    const [newBeer, setNewBeer] = useState({});
    const [successfullyAdded, setSuccessfullyAdded] = useState(false);

    const handleChange = (event) => {
        event.preventDefault();
        setSuccessfullyAdded(false);
        const name = event.target.name;
        const value = name === 'attenuation_level' ? Number(event.target.value) : event.target.value;
        setNewBeer(newBeer => ({...newBeer, [name]:value}))
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('https://ih-beers-api2.herokuapp.com/beers/new', newBeer)
            .then(createdBeer => {setSuccessfullyAdded(true); event.target.reset()})
            .catch(err => console.error(err));
    }

    return(
        <div style={{marginTop: '30px'}}>
            <form id='new-beer-form' onSubmit={handleSubmit}>
                <div className='form-floating mb-3'>
                        <input type='text' name='name' className='form-control' placeholder="Delicious Beer" onChange={handleChange}></input>
                        <label>Name</label> 
                </div>
                <div className='form-floating mb-3'>
                    <input type='text' name='tagline' className='form-control' placeholder="A beer for the adventurous" onChange={handleChange}></input>
                    <label>Tagline</label>
                </div>
                <div className='form-floating mb-3'>
                    <input type='text' name='description' className='form-control' placeholder="IPA with citric notes." onChange={handleChange}></input>
                    <label className='form-label'>Description</label>
                </div>
                <div className='form-floating mb-3'>
                    <input type='text' name='first_brewed' className='form-control' placeholder="mm/yyyy" onChange={handleChange}></input>
                    <label className='form-label'> First Brewed</label>
                </div>
                <div className='form-floating mb-3'>
                    <textarea name='brewers_tips' rows='4' cols='35' className='form-control' placeholder="Serve cold" onChange={handleChange}></textarea>
                    <label className='form-floating mb-3'>Brewers Tips</label> 
                </div>
                <div className='form-floating mb-3'>
                    <input type='number' name='attenuation_level' className='form-control' placeholder="7" onChange={handleChange}></input>
                    <label className='form-label'>Attenuation Level</label>
                </div>
                <div className='form-floating mb-3'>
                    <input type='text' name='contributed_by' className='form-control' placeholder="Your Alias" onChange={handleChange}></input>
                    <label className='form-label'>Created By</label> 
                </div>
                <br/>
                <button type='submit' className='btn btn-primary'>Create Beer</button>
            </form>
            {successfullyAdded && <p className="lead">Beer Successfully Added!</p>}
        </div>
    )
}

export default NewBeer;