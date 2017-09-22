import React, { Component } from 'react';
import ReactModal from 'react-modal';
import Usuario from './Usuario.js'
import FollowersList from './FollowersList.js'
import PropTypes from "prop-types";

import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state= {
            followers:[
            ],
            showModal: false,
            search: ""
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
        fetch("https://api.github.com/users/"+this.state.search+"/followers")
            .then((res) => {
                if(res.ok) {
                    return res.json();
                }
            })
            .then((followers) => {
                this.setState({ followers: followers })
            })
            .catch(res => {
                console.error("error", res);
            })
    }

    search(text) {
        this.setState ({
            search: text,
            followers: []
        });
    }

    render() {
        return (
            <div className="principal">
                <div className="centrado">
                    <h2 className="titulo"> Usuario: </h2>
                    <Usuario search={this.search.bind(this)}/>
                    <button onClick={this.handleOpenModal} className="btn btn-bandagio">Followers</button>
                </div>
                <div>
                    <ReactModal
                        isOpen={this.state.showModal}
                        contentLabel="Minimal Modal Example"
                    >
                        <FollowersList followers={this.state.followers}/>
                        <button onClick={this.handleCloseModal}>Cerrar</button>
                    </ReactModal>
                </div>
            </div>

        );
    }
}

export default App;



