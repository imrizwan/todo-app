import React, {Component} from 'react';
import AddOption from './AddOption';
import Option from './Option';
import Options from './Options';
import Action from './Action';
import Header from './Header';
import OptionModal from './OptionModal';


class Todo extends Component {

//   constructor(props){
//     super(props);
//     this.handlePick = this.handlePick.bind(this);
//     this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
//     this.handleAddOption = this.handleAddOption.bind(this);
//     this.handleDeleteOption = this.handleDeleteOption.bind(this);
//             this.state = {
//               options: []
//             }
//   }
state = {
       options: [],
       selectedOption: undefined
 }
  componentDidMount() {
    // fetching Data
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
      // we dont wanna set value if options are null/empty
      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e){
      // Do nothing
    }
  }

  componentDidUpdate(prevProps, prevState) {
    //saving data
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }

  }

  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    let options = this.state.options[randomNum];
    this.setState(()=>({ selectedOption: options}))
  }

  handleDeleteOptions = () => {
    // this.setState(()=>{
    //     return {
    //       options: []
    //     }
    // })

    // returning an object
    this.setState(()=>({options: []}));
  }

  handleDeleteOption = (optionToRemove) => {
    // console.log("hdo", option);
    this.setState((prevState)=>({
      options: prevState.options.filter((option)=>{
        return optionToRemove!==option;
      })
    }))

  }

  handleAddOption = (option) => {
    // taking option value using parameter in handleAddOption
    let optionTrim = option.trim();
    //triming the spaces
    option = optionTrim.charAt(0).toUpperCase() + optionTrim.slice(1).toLowerCase();
    //making the first letter uppercase and concatinating with remaining string
    if(!option){
      // if option does not exist
      return "Enter a valid item!";
    } else if(this.state.options.indexOf(option) > -1){
      return "This item already exists";
    }

    // this.setState((prevState)=>{
    //   return {
    //     options: prevState.options.concat([option])
    //   }
    // })
    this.setState((prevState)=>({ options: prevState.options.concat([option]) }));
  }

  closeModal = () => {
    this.setState(()=>({ selectedOption: undefined }));
  }
  render(){
    // const title = 'Indicision';
    const subtitle = 'Your Computer is your brain!'; 
    return (
      <div>
        <Header subtitle={subtitle} />
         <div className="container">
           <Action 
          hasOptions={this.state.options.length > 0} 
          handlePick={this.handlePick}
          />
          <div className="widget">
            <Options
              options={this.state.options}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption
              handleAddOption={this.handleAddOption}
            />
          </div>
        </div>
          <OptionModal 
            closeModal = {this.closeModal}
            selectedOption={this.state.selectedOption}
          />
      </div>
    )
  }
}

export default Todo;