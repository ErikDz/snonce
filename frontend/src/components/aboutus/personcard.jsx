

function PersonCard(props){
    return(
        <div>
            <div className="peopleCard">
                <img style={{borderRadius:"50%", width:"150px", height:"150px", margin:"0 auto 0 auto", objectFit:"cover"}} src={props.image}/>
                <p>{props.name}</p>
                <p><i>{props.title}</i></p>
                <p style={{fontSize:"14px"}}>{props.description}</p>
            </div>
        </div>
    )
}

export default PersonCard 