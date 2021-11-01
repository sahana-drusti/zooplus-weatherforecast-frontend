import { Component } from "react";
import './ForeCast.css';

class InvalidCityName extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (<div className="err mono"> No city with name '{this.props.city}' found Please check if the spelling is correct</div>)

    }
}

export default InvalidCityName;