import React, {Component} from "react";
import PropTypes from "prop-types";
import Follower from './Follower.js'

class FollowersList extends Component {
    constructor(props) {
        super(props)
    }

    renderFollowers() {
        return this.props.bandas.map((f, i) => {
            console.log(f);
            return <Follower follower={f} key={i}/>;
        });
    }

    render() {
        return(<div>
            {(!this.props.followers.toString()=="") ? this.renderFollowers() : "Su Búsqueda no genero resultados"}
        </div>);
    }
}

FollowersList.propTypes = {
     followers : PropTypes.array.isRequired
}

export default FollowersList;