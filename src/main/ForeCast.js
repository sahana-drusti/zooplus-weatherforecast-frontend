
import axios from "axios";
import React, { Component } from "react";
import "./ForeCast.css";
import InvalidCityName from "./InvalidCityName";


class ForeCast extends Component {

    constructor(props) {
        super(props);
        this.state = { forecastTesult: {}, err: false };
    }
    componentDidMount() {
        const url = `http://localhost:8080/api/v1/weather/${this.props.city}`;
        if (this.props.city !== "") {
            axios.get(url)
                .then(res => {
                    if (res.data !== "")
                        this.setState({
                            forecastTesult: (res.data)
                        })
                })
                .catch(err =>{
                    console.log(err);
                })
        }

    }




    render() {
        var err = this.state.forecastTesult['err'];
        console.log(this.state.forecastTesult);
console.log('here'+err);
let city= this.props.city;
city = city.toUpperCase();
        if (!err) {
            var json = this.state.forecastTesult;
            var arr = [];
            var daily = [];
            var current = [];
            var weather = [];
            var d = [];
            Object.keys(json).forEach(function (key) {
                if (key === 'daily') {
                    daily.push(json[key]);
                }
                if (key === 'current') {
                    current.push(json[key]);
                }
                if (key === 'weather') {
                    weather.push(json[key]);
                }
                arr.push(json[key]);
            });


            if (daily[0] !== undefined) {
                daily[0].map((item, index) => {
                    if (index >= 1 && index <= 5) {
                        d.push(item);
                    }
                })
            }

            return (

                <div>
                    <div className="mono forecast-header">
                        <div className="city-country">Showing Results For:  {city},  {this.state.forecastTesult['country']}</div>
                        {current.map(val => <div className="time-date">{val.dt}</div>)}
                    </div>
                    <div className="mono weather-forecast">
                        <div className="current-forecast">
                            <div className="current-forecast-header">Current weather</div>

                            {current.map(cur =>
                                <div className="curr-forecast-description">
                                    <div className="weather-icon">
                                        <img src={cur.weather[0].icon} />
                                    </div>
                                    <div className="current-forecast-right">
                                        <div><div className="cur-temp">{parseInt(cur.temp)}{'\u00b0'} C</div>
                                            <div className="cur-feel">Feels like:{parseInt(cur.feels_like)}{'\u00b0'}C</div>
                                            <div className="weather-main">
                                                {cur.weather[0].main}
                                            </div>
                                            <div className="weather-description">
                                                {cur.weather[0].description}
                                            </div>
                                        </div>

                                    </div>
                                </div>)
                            }

                        </div>
                        <div className="daily-forecast">
                            <div className="daily-forecast-header">Forecast for next five days</div>
                            <div className="daily-forecast-description">
                                <ul className="daily-forecast-list">
                                    {d.map(val =>
                                        <li className="day">
                                            <div className="day-date">{val.dt}</div>
                                            <div><img alt="day-icon" className="img-resize" src={val.weather[0].icon} /></div>
                                            <div className="day-temp">{parseInt(val.maxTemp)}/{parseInt(val.minTemp)}{'\u00b0'} C</div>
                                            <div className="day-weather">{val.weather[0].main}</div>
                                        </li>
                                    )}
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            );
        }
        else {
            
            return ( <InvalidCityName city={this.props.city}/>)
        }

    }

}


export default ForeCast;