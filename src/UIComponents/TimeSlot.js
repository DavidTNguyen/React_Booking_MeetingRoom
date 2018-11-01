import React, {Component} from 'react';
import moment from 'moment';

class TimeSlot extends Component{
    state = {
        //timeSlot : moment().format('LT')
        //timeSlot : '' //moment().format('h:mm: A')''
    }
    
    componentDidMount(){
        var baseTime = moment();
        baseTime.set({hour:9,minute:0,second:0,millisecond:0});
        this.setState({
            timeSlot: baseTime.format('h:mm: A')
        })

    }

    _showTimeSlots = (baseSlot) => {
        
    }

    render(){
        // const diffTime = {
        //     day: moment.duration(this.state.t2.diff(this.state.t1)).days(),
        //     hour: moment.duration(this.state.t2.diff(this.state.t1)).hours(),
        //     minute: moment.duration(this.state.t2.diff(this.state.t1)).minutes(),
        //     second: moment.duration(this.state.t2.diff(this.state.t1)).seconds()
        // }

        const {timeSlot} = this.state;
        console.log(this.state.timeSlot);
        return(
            <div>
                {timeSlot}
            </div>
        )
    }

}

export default TimeSlot 