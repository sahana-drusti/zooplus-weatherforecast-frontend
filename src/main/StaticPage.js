import { Component } from "react";

class StaticPage extends Component {
    render() {
        return (
            <div>
                <div className="header-circles">
                    <div className="header-circle"></div>
                    <div className="header-circle"></div>
                    <div className="header-circle"></div>
                </div>
                <div className="header">
                    Weather Forecast
                </div>

                <div className="content-header">
                    Weather foreCast for your city
                </div>
            </div>
        );
    }
}

export default StaticPage;