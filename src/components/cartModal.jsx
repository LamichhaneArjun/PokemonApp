import React from 'react';

export default class cartModal extends React.Component{
    
  constructor(props){
    super(props);
    this.handleModal = this.handleModal.bind(this);
  }

  handleModal(){
    this.props.onHandleModal();
  }

//   pokeNameList(){
//     this.props.sendPokeName();
//   }

  render(){
    
  return (
    
    <div className="modal">
        <button className='cartClose' onClick={this.handleModal}>Close X</button>
      <div className="modal-content">
        <span className='cartTitle'>Items Added to the Cart: </span>
        <ul className='cartContent'>
            <li>Pokemon</li>
            <li>Pokemon</li>
            <li>Pokemon</li>           
        </ul>
      </div>
    </div>
  );
}
}