import React, { Component } from "react";

class Comp extends  Component{
    constructor(props){
        super(props)
        this.state={
            text: null,
            num: null
        }
        //this.add=this.add.bind(this)
        //this.handleClick=this.handleClick.bind(this)
    }
    add=(e)=>{
       this.setState({ text: e.target.value});
    }
    handleClick=(e)=>
    {
     
      // alert("hello  "+this.state.text);
       this.state.num=this.state.text / 1000
       alert(this.state.num + "KG");
      
    }
    render()
    {
        return(
        <div>
            <form onSubmit={this.handleClick}>
            <h1>Enter the Number to convet in kg</h1>
           <input type="text" onChange={this.add}></input>
           <button >Click me</button>
            </form>
        </div>
           
        )
    }
}
export default Comp;