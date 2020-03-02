import React, { Component } from 'react';

class Hotels extends React.Component {
  render() {
    return (
      <div class="Main-box">
        <h2>Save more on your next hotel</h2>
        <h4>Thousands of deals made every day</h4>
        <div class="Main-box-bottom-border"></div>

       

          <div class="Main-box-multibox">
            <div class="Main-box-multibox-calender">
              <div class="Calender-image">
                {/* <img src={Calender} alt="Calender"></img> */}
                <i class="fas fa-calendar-week"></i>
                <input type="date" value="Check-in Check-out"></input>
              </div>
            </div>
            <div class="Main-box-multibox-dropdown">
              {/* <i class="fa fa-key" ></i> */}
              <select>
                <option value="">1Room</option>
                <option value="">2Rooms</option>
                <option value="">3Rooms</option>
                <option value="">4Rooms</option>
                <option value="">5Rooms</option>
                <option value="">6Rooms</option>
                <option value="">7Rooms</option>
                <option value="">8Rooms</option>
                <option value="">9Rooms</option>
                <option value="">10Rooms</option>
              </select>
            </div>
            <div class="Main-box-multibox-btn">
              <button>search</button>
            </div>
          </div>
          <div class="Main-box-multibox-last">
            <h6>Bundle+save</h6>

            <div class="Main-box-multibox-last-checkbox">
              <span>
                <input type="checkbox" value="Select a Car"></input> Add a Car
              </span>
            </div>
            <div class="Main-box-multibox-last-checkbox">
              <span>
                <input type="checkbox" value="Select a Car"></input> Add a
                Flight{' '}
              </span>
            </div>
          </div>
        </div>
    
    );
  }
}

export default Hotels;
