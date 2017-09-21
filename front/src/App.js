import React, { Component } from 'react';
import ReactModal from 'react-modal';
import Usuario from './Usuario.js'
import FollowersList from './FollowersList.js'

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
        this.setState({ showModal: true });
    }

    handleCloseModal () {
        this.setState({ showModal: false });
    }

    componentDidMount() {
        fetch("/getFollowers/john-guerra")
            .then((res) => {
                if(res.ok) return res.json();
            })
            .then((getFollowers) => {
            this.setState({
                followers: getFollowers
            })});
    }

    search(text) {
        this.setState ({
            search: text
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

