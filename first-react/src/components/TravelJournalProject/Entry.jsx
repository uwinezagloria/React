

export default function Entry(props){
    return (
        <article className="entry-article">
            <div className="main-image">
                <img src={props.img.src} alt={props.img.alt} />
            </div>
            <div className="info-container">
                <img src="./src/assets/marker.png" alt="map maker icon" />
                <span>{props.country}</span>
                <a href={props.googleMapsLink}>View on Google Maps</a>
            <h2>{props.title}</h2>
                <p>{props.dates}</p>
                <p>{props.text}</p>
            </div>
        </article>
    )
}