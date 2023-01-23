function BeerModel(props){
    const { beer } = props;
    return(
        <div>
            {Object.keys(beer)===0 && <p>Loading...</p>}
            <div className="container-sm ind-beer-div">
                <img src={beer.image_url} width={'20%'} alt={beer.name}/>
                <div className="category-div">
                    <h3 className="h3">{beer.name}<span style={{paddingLeft: '50px'}}>{beer.attenuation_level}</span></h3>
                </div>
                <h6 className="h6">{beer.tagline} <span style={{paddingLeft: '50px'}}>{beer.first_brewed}</span></h6>
                <div className="container" style={{display: 'flex', flexDirection:'column', alignItems: 'center'}}>
                    <p className="lead ind-beer-lead" style={{textAlign: 'justify', fontSize: '1em', width: '90%'}}>{beer.description}</p>
                    <p style={{textAlign: 'justify', fontSize: '1em', width: '90%', color: '#E6E6EA'}}><b>{beer.brewers_tips}</b></p>
                </div> 
                <p style={{color: '#E6E6EA'}}>{beer.contributed_by}</p>
            </div>
        </div>
    )
}

export default BeerModel;