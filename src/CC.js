import React,{Component} from 'react'
class CC extends React.Component {
    classComponent = () => {
        alert("This is is Class COmponent Here");
    }
    inPutChange = () => {
        alert('Input file change');
    }
    render() {
        return (
             <div>
                 <button style={{color:'red',padding:'8px',}} onClick={this.classComponent}>Click now Class component</button>
                 <input type="text" onChange={this.inPutChange} className="form-control mb-2 mr-sm-2" placeholder="Jane Doe" />
             </div>
        );
    }
}
export default CC;