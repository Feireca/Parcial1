import React, {Component} from 'react';
import PropTypes from "prop-types";

class Usuario extends Component {
    constructor(props) {
        super(props);
    }

    onEnter(evt) {
        this.props.search(evt.target.value);
    }

    /* o on input para que busque de una*/

    render() {
        return (<div className="margin-left-right">
            <input className="form-control input-lg centrar" type="text" placeholder="Cual usuario quieres" onInput={this.onEnter.bind(this)}/>
        </div>)
    }
}

Usuario.propTypes = {
    onSearch: PropTypes.func.isRequired,
    user : PropTypes.string.isRequired
}

export default Usuario;