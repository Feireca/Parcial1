import React, {Component} from "react";
import PropTypes from "prop-types";

class Follower extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return(<div className="todo">
            {this.props.follower}
        </div>)
    }
}

Follower.propTypes = {
    follower : PropTypes.object.isRequired
}

export default Follower;