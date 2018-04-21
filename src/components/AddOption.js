import React, {Component} from 'react';

class AddOption extends Component {
  
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     error: undefined
  //   }
  //   this.handleAddOption = this.handleAddOption.bind(this);
  // }
   state = {
      error: undefined
    }


  handleAddOption = (e) => {
    e.preventDefault();

    // this.setState(()=>{
    //   return {
    //     error: error
    //   }
    // })

    this.setState(()=>({error}));
    // saving input into option
    const option = e.target.elements.option.value.trim();
    // callback function to move option value into handleAddOption
    const error = this.props.handleAddOption(option);
    if(!error){
      e.target.elements.option.value = '';
    }
  }
  
  render(){
    return(
      <div>
          {this.state.error && <p className="add-option-error">{this.state.error}</p>}
          <form onSubmit={this.handleAddOption} className="add-option">
            {/* Taking Option's Input */}
            <input type="text" name="option" className="add-option-input" />
            <button className="button">Add Option</button>
          </form>
      </div>
    )
  }
}

export default AddOption;