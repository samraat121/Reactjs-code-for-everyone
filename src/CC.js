import React,{Component} from 'react'
class CC extends React.Component {
    
    constructor(props) {
        super(props)
        this.state={
            color: 'red',
            bg: 'green',
        }
    }
    changeColor = () => {
        this.setState({
            color: 'indigo'
        })
    }
    changeBackground = () => {
        this.setState({
            bg: 'white'
        })
    }
    
    
    render() {
        return (
             <div>
                 <h1 style={{color:this.state.color,backgroundColor:this.state.bg}}>This is Dynamic Text by Class Component</h1>
                 <button onClick={this.changeColor}>Change Color</button>
                 <button onClick={this.changeBackground}>Change Background</button>
             </div>
        );
    }
}
export default CC;