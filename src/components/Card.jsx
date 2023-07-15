import PropTypes from 'prop-types';
import StarImg from '../assets/str.png'


export default function Card(props) {
    console.log("enen", props.openSpots)
    console.log(props)
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "Sold Out"
    }
    else if (props.location ==="Online")
    {
        badgeText="Online"
    }
    
    return (
        <div className="card">
            {
                badgeText && <div className='card--badge'>{badgeText}</div>
            }
            <img src={props.coverImg} className="card--image" />
            <div className="card--stats">
                <img src={StarImg} className="card--star" />
                <span>{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price"><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}
Card.propTypes = {
  img: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  reviewCount: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
    location: PropTypes.string.isRequired,
  openSpots:PropTypes.string.isRequired
};