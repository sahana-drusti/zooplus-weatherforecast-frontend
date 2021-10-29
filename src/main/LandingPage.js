import React, { Component } from 'react';
import './LandingPage.css';
import ForeCast from './ForeCast';
import deleteImg from './delete-img.png';
import StaticPage from './StaticPage';
import backgroundImg from './background.jpg';




class LandingPage extends Component {

    constructor(props) {
        super(props);
        this.state = { city: "", clicked: false };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }

    handleSubmit() {
        if (this.state.city !== "") {
            console.log('handle submit');
            this.setState({ clicked: true });
        }
    }

    handleChange(event) {
        if (this.state.clicked) {
            this.setState({ clicked: false });
        }

        this.setState({ city: event.target.value });
    }
    render() {
        console.log(this.state.clicked);
        if (!this.state.clicked) {
            return (<div className="landing-page center" style={{background:`url(${backgroundImg})`}}>

                <StaticPage />
                <div className="content-query">
                    <div className="search-form">
                        <form id="city-form" >

                            <input type="text" id="city-name" value={this.state.city} onChange={this.handleChange} name="city" placeholder="Type your city here.." />
                            <img className="img-delete" src={deleteImg} onClick={(event) => { this.setState({ city: "" }) }} />
                            <input type="submit" id="get-weather" onClick={this.handleSubmit} value="Get Weather" />
                        </form>

                    </div>
                </div>
                <div className="content-main">

                </div>
            </div>);
        }
        else {
            return (<div className="landing-page center" style={{background:`url(${backgroundImg})`}}>

                <StaticPage />
                <div className="content-query">
                    <div className="search-form">
                        <form id="city-form" >
                            <input type="text" id="city-name" value={this.state.city} onChange={this.handleChange} name="city" placeholder="Type your city here.." />
                            <img className="img-delete" src={deleteImg} onClick={(event) => { this.setState({ city: "" }) }} />
                            <input type="button" id="get-weather" onClick={this.handleSubmit} value="Get Weather" />
                        </form>

                    </div>
                </div>
                <div className="content-main">
                    <ForeCast city={this.state.city} />
                </div>
            </div>);

        }
    }
}

export default LandingPage;