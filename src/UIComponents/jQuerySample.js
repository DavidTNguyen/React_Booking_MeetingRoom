import React, {Component} from 'react';
import { findDOMNode } from'react-dom';
import $ from 'jquery';

//this component is for a test of jQuery
class jQuerySample extends Component{

    constructor(){
        super();
    }

    handleToggle = () => {
        const el = findDOMNode(this.refs.toggle);
        $(el).slideToggle();

        const newDiv = findDOMNode(this.refs.new);
        $(newDiv).html("hello");

    };

    render(){
        return(
            <div className="long-desc">
                <ul className = "profile-info">
                    <li>
                        <span className ="info-title" >User Name: </span> Shuvo Habib
                    </li>
                </ul>

                <ul className = "profile-info additional-profile-info-list" ref="toggle">
                    <li>
                        <span className = "info-email"> Office-Email: </span> me@shiu.com
                    </li>
                </ul>
                <div className="new" ref="new"> </div>
                <div className = "ellipsis-click" onClick = {this.handleToggle}>
                    <i className = "fa-ellipsis-h">Click Here</i>
                </div>

            </div>

        )
    }
}

export default jQuerySample