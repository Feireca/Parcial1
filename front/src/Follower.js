import React, {Component} from "react";
import PropTypes from "prop-types";
import FollowersList from './FollowersList.js';
import ReactModal from 'react-modal';

class Follower extends Component {
    constructor(props) {
        super(props);
        this.state= {
            followers2:[
            ],
            showModal: false,
            search2: ""
        };

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleOpenModal () {
        this.componentDidMount();
        this.setState({ showModal: true });
    }

    handleCloseModal () {
        this.setState({ showModal: false });
    }

    componentDidMount() {
        fetch("https://api.github.com/users/"+this.state.search2+"/followers")
            .then((res) => {
                if(res.ok) {
                    return res.json();
                }
            })
            .then((followers) => {
                this.setState({ followers2: followers })
            })
            .catch(res => {
                console.error("error", res);
            })
    }

    search2(text) {
        this.setState ({
            search2: text,
            followers2: []
        });
    }

    onEnter(evt) {
        console.log("$$$$" , evt);
        this.props.search2(evt.target.value);
    }

    render() {
        return(<div className="todo">
            <button onClick={this.handleOpenModal}>{this.props.follower.login}</button>
            <div>
                <ReactModal
                    isOpen={this.state.showModal}
                    contentLabel="Minimal Modal Example"
                >
                    <div>{this.props.follower.login}</div>
                    <FollowersList followers={this.state.followers2}/>
                    <button onClick={this.handleCloseModal}>Cerrar</button>
                </ReactModal>
            </div>
        </div>)
    }
}

Follower.propTypes = {
    follower : PropTypes.object.isRequired
}

export default Follower;