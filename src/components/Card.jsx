import "../Card.css"
import star from "../assets/card/star.svg"

export default function Card(props){
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    return(<div className="card-container">
        <div className="card--image-container" style={{ backgroundImage: `url(${"./card/" + props.coverImg})`}}>
            {badgeText!=undefined && <div className="card--status">{badgeText}</div>}
        </div>
        <div className="card--info">
            <div className="card--rating">
            <img src={star} className="card--star-icon" alt="Star icon"/>
            <p className="rating">{parseFloat(props.stats.rating).toFixed(1)}</p>
            <p className="country">({props.stats.reviewCount}) • {props.location}</p> 
            </div>
            <h2>{props.title}</h2>
            <div className="card--pricing-info">
            <p className="card--price">From ${props.price}</p><p className="card--per-person">/ person</p>
            </div>
        </div>
    </div>)
}