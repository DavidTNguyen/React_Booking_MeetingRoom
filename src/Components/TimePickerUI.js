import React, { PureComponent } from 'react';
import DateFnsUtils from 'material-ui-pickers/utils/date-fns-utils';
import MuiPickersUtilsProvider from 'material-ui-pickers/MuiPickersUtilsProvider';
import TimePicker from 'material-ui-pickers/TimePicker';
import DatePicker from 'material-ui-pickers/DatePicker';
import DateTimePicker from 'material-ui-pickers/DateTimePicker';


window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;

class TimePickerUI extends PureComponent {

    state = {
        selectedDate: new Date(),

      }
    
      handleDateChange = (date) => {
        this.setState({ selectedDate: date });
      }
    
      render() {

        
        const { selectedDate } = this.state;
    
        return (
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
    
            <TimePicker
              value={selectedDate}
              onChange={this.handleDateChange}
            />
          </MuiPickersUtilsProvider>
        );
      }
}

export default TimePickerUI