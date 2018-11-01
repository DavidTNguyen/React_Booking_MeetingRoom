import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { FormControl, InputLabel, Select, MenuItem, FormHelperText } from '@material-ui/core';



class SelectControlUI extends Component{

    state = {
        roomName: '',
        name: 'hai',
        labelWidth: 0,

    }

    // componentDidMount(){
    //     this.setState({
    //         labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
    //     });
    // }

    handleChange = event =>{
        this.setState({[event.target.name]: event.target.value})
    }

    render(){
        let roomNo = 0;
        const rooms = ["Monday Room", "Tuesday Room", "Wednesday Room", "Thursday Room", "Friday Room", "Saturday Room", "Sunday Room"];
        const roomLists = rooms.map(
            (room) => 
            <MenuItem key={++roomNo} value={++roomNo}> {room} </MenuItem>           
        );
        //console.log(roomLists);

        
        //const {classes} = this.props;
        return(
            <form className = "root" autoComplete="off">
                <FormControl className="formControl">
                    <Select
                        value={this.state.age}
                        onChange={this.handleChange}
                        name="roomName"
                        displayEmpty
                        className="selectEmpty"
                        value = {this.state.roomName}
                    >
                        <MenuItem value="" disabled>
                        Room to Book
                        </MenuItem>
                        {roomLists}
                    </Select>
                    <FormHelperText>Meeting Room</FormHelperText>
                </FormControl>
            </form>
        )
    }



}


export default SelectControlUI