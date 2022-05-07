// Write your code here
import './index.css'

const EventItem = props => {
  const {eventDetails, setActiveId, isActive} = props
  const {id, imageUrl, name, location} = eventDetails
  const eventImageClassName = isActive ? 'event-image active' : 'img'

  const onClickEvent = () => {
    setActiveId(id)
  }

  return (
    <li className="list-items">
      <button type="button" className="button" onClick={onClickEvent}>
        <img src={imageUrl} alt="event" className={eventImageClassName} />
      </button>
      <p className="name">{name}</p>
      <p className="location">{location}</p>
    </li>
  )
}

export default EventItem
