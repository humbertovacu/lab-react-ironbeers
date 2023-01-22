function BeerModel(props){
    const { beer } = props;
    return(
        <div>
            {Object.keys(beer)===0 && <p>Loading...</p>}
            <div className="container-sm">
                <img src={beer.image_url} width={'20%'} alt={beer.name}/>
                <h3 className="h3">{beer.name} <span>{beer.attenuation_level}</span></h3>
                <h6 className="h6">{beer.tagline} <span>{beer.first_brewed}</span></h6>
                <div className="container" style={{display: 'flex', justifyContent: 'center'}}>
                    <p className="lead" style={{textAlign: 'justify', fontSize: '1em', width: '90%'}}>{beer.description}</p>
                </div>
                <p>{beer.brewers_tips}</p>
                <p>{beer.contributed_by}</p>
            </div>
        </div>
    )
}

export default BeerModel;