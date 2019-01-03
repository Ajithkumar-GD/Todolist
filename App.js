import React from 'react';
import Input from './Input';
import styled from 'styled-components';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ToDoInput: '',
            storage: [],
            clear: '',
            dropdown: '',
            deldone: [],
            deleteFlag: false,
            addFlag:false,
        };
        this.inputbind = this.inputbind.bind(this);
        this.click = this.click.bind(this);
        this.deldone = this.deldone.bind(this);
        this.delete = this.delete.bind(this);
        this.add = this.add.bind(this);
    }

    inputbind(input) {
        this.setState({ ToDoInput: input });
    }

    click() {
        if (this.state.ToDoInput === "") {
            alert("Enter valid todo name");
            return false;
        }

        let array = this.state.storage;
        array.push(this.state.ToDoInput);
        this.setState({ storage: array, clear: this.state.ToDoInput });
        this.setState({ ToDoInput: '' });
    }
    deldone(e) {
        let array = this.state.deldone;
        array.push(e.target.value);
        this.setState({ deldone: array });
    }
    delete() {
        this.setState({ deleteFlag: true });
    }
    add(){
        this.setState({addFlag:true});
    }


    render() {
        const strike = {
            textDecoration: 'line-through'
        };

        const bold = {
              textDecoration: 'underline'
        };
        console.log("ajith", this.state.deldone);
        const Naveen = styled.div`
         margin:30px 0px 0px 10px;
         `;
        return (
            <div>
                <div>Enter ToDo List</div>
                <Input callback={(input) => this.inputbind(input)} message={this.state.clear} />
                <br />
                <button onClick={this.click}>Submit</button>
                {this.state.storage.map((item) => {
                    return (<div><input type="Checkbox" value={item} onClick={this.deldone} /><span>{item}</span></div>);
                })}
                <br /><br />
                <button onClick={this.delete}>Delete</button>

                {this.state.deleteFlag ? this.state.deldone.map((item1) => {
                    return (<div style={strike}>{item1}</div>
                    )
                })  : ''}
                <br/><br/>
               <button  onClick={this.add}>Add</button>
               {this.state.addFlag ? this.state.deldone.map((item1) => {
                   return (<div style={bold}>{item1}</div>
                    )
                }) : ''}
            </div>
        );
    }
}

export default App;
