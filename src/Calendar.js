import React from 'react';
import './app.css';

const MONTHS = {
  1: 'january'
};

class Calendar extends React.Component {
  constructor() {
    super();
    this.state = {
      calendarData : {
        2018: {
        1: [
              [null, {}, {}, {}, {}, {}, {}],
              [{}, {}, {}, {}, {}, {}, {}],
              [{}, {}, {}, {}, {}, {}, {}],
              [{}, {}, {}, {}, {}, {}, {}],
              [{}, {}, {}, {}, null, null, null]
            ]
        }
      },
      selectedYear: 2018,
      selectedMonth: 1,
    }
  }

  renderWeekData(data, week) {
    let day = 0;
    if (week > 0) {
      week = week+7;
    }
    return data.map((dayData, index) => {
      const isAValidDate = dayData === null;
      return <td className={!isAValidDate ? 'valid' : ''}>
        <div className="events-list">
          <div className="event">Event 1</div>
          <div className="event">Event 1</div>
          <div className="event">Event 1</div>
          <div className="event">Event 1</div>
          <div className="event">Event 1</div>
          <div className="event">Event 1</div>
        </div>
        <div className="date">{!isAValidDate ? ++day + week : ''}</div>
      </td>
    })
  }

  renderCalendarData() {
    const {calendarData, selectedYear, selectedMonth} = this.state;
    const monthData = calendarData[selectedYear][selectedMonth];
    return monthData.map((data, index) => {
      return <tr>
              {this.renderWeekData(data, index)}
            </tr>
    });
  }

  render() {
    const {selectedYear, selectedMonth} = this.state;
    return (
      <div className="calendar-main">
      <div className="calendar">
          <p>{MONTHS[selectedMonth].toUpperCase()} {selectedYear}</p>
          <table align="center">
            <thead>
              <tr>
                <th>Sun</th>
                <th>Mon</th>
                <th>Tue</th>
                <th>Wed</th>
                <th>Thu</th>
                <th>Fri</th>
                <th>Sat</th>
              </tr>
            </thead>
            <tbody>
              {this.renderCalendarData()}            
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default Calendar;
