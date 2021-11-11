import React,{Component} from 'react'
import './CC.css'
class CC extends React.Component {
    
    constructor() {
        super()
        this.state = {
            number: 0
        }
    }
    add = () => {
        this.setState({number:this.state.number+1})
      }
    subract = () => {
        this.setState({number:this.state.number-1})
      }
    
    render() {
        return (
             <div>
                 <h2>React Counter Programs!</h2><hr />
                 <h1>{this.state.number}</h1>
                 <button onClick={this.add}>Add +1</button>
                 <button onClick={this.subract}>Substrac -1</button>
             </div>
        );
    }
}
export default CC;