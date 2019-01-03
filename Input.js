import React, { Component } from 'react';

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ToDoInput: '',
        };
        this.inputchange=this.inputchange.bind(this);
    }

    componentWillMount() {
         window.scroll(0, 0);
    }

     inputchange(e) {
        this.setState({ ToDoInput: e.target.value });
         this.props.callback(e.target.value);
    }

    componentWillReceiveProps(nextProps)
    {
        if(this.props.message!==nextProps.message) {
        if(nextProps.message === this.state.ToDoInput )
        {
        this.setState({ToDoInput:''});
        }
    }
    }

    render() {
        return (
            <div>
                 <input type='text' value={this.state.ToDoInput} onChange={this.inputchange} /> 
            </div>
        );
    }
}
export default Input;