import React, {Component} from "react";
import PropTypes from "prop-types";
import Follower from './Follower.js'

class FollowersList extends Component {
    constructor(props) {
        super(props)
    }

    renderFollowers() {
        console.log("renderFollowers()", this.props.followers);
        return this.props.followers.map((f, i) => {
            return <Follower follower={f} key={i}/>;
        });
    }

    render() {
        return(<div>
            {(!this.props.followers.toString()=="") ? this.renderFollowers() : "Este usuario no tiene seguidores"}
        </div>);
    }
}

FollowersList.propTypes = {
     followers : PropTypes.array.isRequired
}

export default FollowersList;