
import React, { Component } from 'react';
import './App.css';

class Clock extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            days : 0,
            hours :0,
            minutes :0,
            seconds :0
        }
        console.log(this.props.deadline);
        var d = new Date();
        const result = Date.parse(this.props.deadline)-Date.parse(d.getDate());
        console.log(result);
    }
    render(){
        return(
            <div className="col-md-12 container-fluid text-center">
            <div className="col-md-3 text-fluid" id="clockDays">{this.state.days}Days</div>
            <div className="col-md-3 text-fluid" id="clockHours">{this.state.hours}Hours</div>
            <div className="col-md-3 text-fluid" id="clockMinutes">{this.state.minutes}Minutes</div>
            <div className="col-md-3 text-fluid" id="clockSeconds">{this.state.seconds}Seconds</div>
            </div>
        )
    }
}

export default Clock;