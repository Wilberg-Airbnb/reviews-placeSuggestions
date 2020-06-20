import React from 'react';
import './Profile.css';
import { ListGroup, ListGroupItem } from 'reactstrap';


const Profile = ({modalOpen, toggleModal}) =>{
return (
  <div className="profile-modal">
    <div className ="container">
    <ListGroup >
      <ListGroupItem>Cras justo odio</ListGroupItem>
      <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
      <ListGroupItem>Morbi leo risus</ListGroupItem>
      <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
      <ListGroupItem>Vestibulum at eros</ListGroupItem>
    </ListGroup>
    <button onClick={toggleModal}>Click to untoggle</button>
    </div>
  </div>
)
}

export default Profile;