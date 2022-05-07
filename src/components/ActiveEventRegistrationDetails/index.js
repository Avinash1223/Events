// Write your code here
import './index.css'

const registrationStatus = {
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationsClosed: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {EventStatus} = props

  const renderNoViewStatus = () => (
    <p>Click on an event, to view its registration details </p>
  )

  const renderYetToRegister = () => (
    <div className="yet-to-register-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="yet-to-register"
      />
      <p>
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art form
      </p>
      <button type="button" className="btn">
        Register Here
      </button>
    </div>
  )

  const renderRegistered = () => (
    <div className="registered-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="registered"
      />
      <h1>You have already registered for the event</h1>
    </div>
  )

  const renderRegistrationsClosed = () => (
    <div className="yet-to-register-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png "
        alt="registrations closed"
        className="registrations-closed"
      />
      <h1 className="reg-closed-heading">Registrations Are Closed Now!</h1>
      <p>Stay tuned. We will reopen the registrations soon!</p>
    </div>
  )

  const RenderActiveEvent = () => {
    switch (EventStatus) {
      case registrationStatus.yetToRegister:
        return renderYetToRegister()
      case registrationStatus.registered:
        return renderRegistered()
      case registrationStatus.registrationsClosed:
        return renderRegistrationsClosed()
      default:
        return renderNoViewStatus()
    }
  }

  return <div className="events-list-container">{RenderActiveEvent()}</div>
}

export default ActiveEventRegistrationDetails
