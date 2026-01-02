export const Card = (props) => {
    return (
        
        <div className="card h-100">
            
            <img src={props.image} className="card-img-top" alt="skyrim"/>
            
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary mt-auto">{props.button}</a>
            </div>
        </div>
    );
};