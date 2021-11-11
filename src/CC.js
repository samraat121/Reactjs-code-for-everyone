import React,{Component} from 'react'
class CC extends React.Component {
    constructor() {
        super()
        this.state={
            number: 0
        }
    }
    componentWillMount() {
        alert('Component will mount is called')
        console.log('Component will mount is called')
        this.setState({number:1})
    }
    
    
    render() {
        return (
             <div>
                 <h2>This is CC Component</h2>
                 <h1>The declare number is {this.state.number}</h1>
             </div>
        );
    }
}
export default CC;