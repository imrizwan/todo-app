import React, {Component} from 'react';

class Counter extends Component {
  constructor(props){
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    
    this.state = {
      count: 0,
    }
  }

  componentDidMount(){
    // fetching Data
    const count = parseInt(localStorage.getItem('count'), 10);
    if(isNaN(count)){
        this.setState(()=>({count: 0}))
    } else {
        this.setState(()=>({ count }));
    }
  }

  componentDidUpdate(prevProps, prevState){
    //   saving Data
    if(prevState.count !== this.state.count){
        localStorage.setItem('count', this.state.count);
    }
  }


  handleAddOne(){
    this.setState((prevState)=>{return {count: prevState.count+1}})
    //  console.log('HandleADDOne');
  }
  handleMinusOne(){
    this.setState((prevState)=>{return {count: prevState.count-1}})
  }
  handleReset(){
    this.setState(()=>{
      return {
        count: 0
      }
    })
  }
  render(){
    return(
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    )
  }
}

// Counter.defaultProps = {
//     count: 0
// };

export default Counter;

