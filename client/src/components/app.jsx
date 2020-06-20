import React from 'react';
import Modal from './Modal.jsx'
import Profile from './Profile.jsx';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      modalOpen:false
    }

    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal(){
    this.setState(prevState =>({
      modalOpen: !prevState.modalOpen
    }))
  };

  render(){
    return(
      <div>
        {this.state.modalOpen ?
          <Modal>
            <Profile modalOpen = {this.state.modalOpen} toggleModal={this.toggleModal}/>
          </Modal>
          :null
        }
        <button onClick={this.toggleModal}>Click Me!</button>
      </div>
    )
  }
}

export default App;

