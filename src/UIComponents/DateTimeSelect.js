import React, { PureComponent } from 'react';
import DateFnsUtils from 'material-ui-pickers/utils/date-fns-utils';
import MuiPickersUtilsProvider from 'material-ui-pickers/MuiPickersUtilsProvider';
import { FormControl, InputLabel, Select, MenuItem, FormHelperText } from '@material-ui/core';

import DateTimePicker from 'material-ui-pickers/DateTimePicker';


window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;

class DateTimeSelect extends PureComponent {


 

    state = {
        selectedDate: new Date(),

      }
    
      handleDateChange = (date) => {
        this.setState({ selectedDate: date });
      }
    
      render() {
        const { selectedDate } = this.state;
    
        return (
            <div>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
            
                    <DateTimePicker
                    value={selectedDate}
                    onChange={this.handleDateChange}
                    /> 
                </MuiPickersUtilsProvider>
                <FormHelperText>Date & Time</FormHelperText>
          </div>
        );
      }
}

export default DateTimeSelect