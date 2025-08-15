const Card = (person) => {
    return(
        <>
            <div className="card w-50 mt-2" style={{margin: "0 auto"}}>
                <div className="card-header fw-bold text-center">
                    {person.name}
                </div>
                <div className="card-body">
                    <img src={person.photo} alt="" width={100} height={120}/>
                </div>
                <div className="card-footer text-center fw-bold">
                    Edad: {person.age} años
                </div>
            </div>
        </>
    )
}

export default Card;