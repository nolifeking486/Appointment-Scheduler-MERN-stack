import Card from 'react-bootstrap/Card';
import { CheckCircleFilled, CloseCircleFilled, ClockCircleFilled} from '@ant-design/icons';
import "./../styles/AppointmentCard.css"

function AppointmentCard(props) {
  return (
    <Card className="customCardAppointment">
    <Card.Header className="header-style">
      Status: {props.status}
      {props.status === 'Pending' && (
        <ClockCircleFilled style={{color: 'grey'}} />
      )}
      {props.status === 'Approved' && (
        <CheckCircleFilled style={{color: 'green'}} />
      )}
      {props.status === 'Rejected' && (
        <CloseCircleFilled style={{color: 'red'}} />
      )}
      Appointment Time: {props.starttime}
    </Card.Header>
  <Card.Body>
    <blockquote className="blockquote mb-0">
      <p> Prof Name: {props.to}, Subject: {props.subject}</p>
      <footer className="blockquote-footer">
        Request date: {props.createdAt}
      </footer>
    </blockquote>
  </Card.Body>
</Card>
  );
}

export default AppointmentCard;

// status, starttime, createdAt, to, subject are the props. done
// starttime in string works. done
// createdAt should be in correct format.