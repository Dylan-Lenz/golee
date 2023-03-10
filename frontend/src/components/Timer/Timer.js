import React from "react";
import { Form, Button } from "react-bootstrap";
import DateTimePicker from "react-datetime-picker";
import '../Timer/Timer.css';


export default class Timer extends React.Component {
  state = {
    endDate: new Date(),
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    errorMsg: ''
  };

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  onEndDateChange = endDate => {
    this.setState({ endDate });
  }

  getTwoDigitValue = value => {
    if (value < 10) {
      return '0' + value;
    }
    return '' + value;
  }
  
  calculateCountdown = () => {
    const startDate = new Date();
    const { endDate } = this.state;
    
    this.setState({ errorMsg: '' });
    const timeRemaining = endDate.getTime() - startDate.getTime();

    if(timeRemaining > 0) {
      const start_date = new Date(startDate);
      const end_date = new Date(endDate);
      const start_millis = start_date.getTime();
      const end_millis = end_date.getTime();
      const old_sec = start_millis / 1000;
      const current_sec = end_millis / 1000;

      let seconds = current_sec - old_sec;
      let days = Math.floor(seconds / (24 * 60 * 60));
      seconds -= days * 24 * 60 * 60;
      let hours = Math.floor(seconds / (60 * 60));
      seconds -= hours * 60 * 60;
      let minutes = Math.floor(seconds / 60); 
      seconds -= minutes * 60;

      days    = Math.abs(days);
      hours   = Math.abs(hours);
      minutes = Math.abs(minutes);
      seconds = Math.floor(Math.abs(seconds));

      this.setState(() => ({
        days, hours, minutes, seconds
      }), () => {
        this.timer = setTimeout(this.calculateCountdown, 1000);
      });
    } else {
      this.setState({ errorMsg: 'Times up!'});
      clearTimeout(this.timer);
    }
  };

  render() {
    const { days, hours, minutes, seconds, errorMsg } = this.state;
    const convertedDays = this.getTwoDigitValue(days);
    const convertedHours = this.getTwoDigitValue(hours);
    const convertedMins = this.getTwoDigitValue(minutes);
    const convertedSeconds = this.getTwoDigitValue(seconds);

    return (
      <div className="tmr_cont">
        <div className="tmr_row_ctr">
          <h3 className="tmr_hdr">TIME</h3>
          <ul className="tmr_row_ctr">
            <li>
              <h5 className="tmr_col_dys">Days: {convertedDays}&nbsp;</h5> 
            </li>
            <li>
              <h5 className="tmr_col_hrs">Hrs: {convertedHours}&nbsp;</h5>
            </li>
            <li> 
              <h5 className="tmr_col_min">Mins: {convertedMins}&nbsp;</h5>
            </li>
            <li>
              <h5 className="tmr_col_secs">Secs: {convertedSeconds}&nbsp;</h5> 
            </li>
          </ul>
        </div>
      <div className="tmr_row_dt">
          <Form>
            <Form.Group controlId="end_date">
              <DateTimePicker
                format="h:mm a"
                onChange={this.onEndDateChange}
                value={this.state.endDate}
              />
            </Form.Group>
            <button
              className="tmr-b"
              variant="primary"
              type="button"
              onClick={this.calculateCountdown}
              >Set Time
            </button>
          </Form>
        </div>
      </div>
    );
  }
}