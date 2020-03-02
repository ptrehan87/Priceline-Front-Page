import React from 'react';

class Flights extends React.Component{
    render(){
        return (
            <div>

                <div id="flight-radio">
                    <div> 
                        <input type ="radio"/>
                        <span>Round-trip</span>
                    </div>
                    <div>
                        <input type ="radio"/>
                        <span>One-way</span>
                    </div>
                    <div>
                        <input type ="radio"/>
                        <span>Multi-destination</span>
                    </div>

                </div>


                <div className="flight-inputs">
                    <input type="text" placeholder="Departing from?"/>
                    <input type ="text" placeholder="Going to" />
                    <input type="date" />

                    <input list="adult" placeholder="Adult!"/>
                    <datalist id="adult">
                        <option value="Adult"/>
                        <option value="Youth"/>
                        <option value="Children"/>
                        <option value="Lap infants"/>
                    </datalist>
                    <input list="Economy" placeholder="Economy"/>
                    <datalist id="Economy">
                        <option value="Economy"/>
                        <option value="Premuim Economy"/>
                        <option value="Business"/>
                        <option value="Frist"/>
                    </datalist>
                    
                    <input type="button" value="Find your flight"/>
                </div>
                <div className="flight-check">
                    <p>Need anthing else?</p>
                    <div>
                        <input type="checkbox" />
                        <span>Add a hotel</span>
                    </div>
                    <div>
                      <input type="checkbox" />
                       <span>Add a cars</span>
                    </div>
                </div>
            </div>
        );
    }
}
export default Flights;