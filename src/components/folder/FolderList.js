import React from 'react';
import axios from 'axios';
import global from '../../generic/vars/global.json';
import Thumb from "../generic/Thumb";
import Loader from "../generic/Loader";

class FolderList extends React.Component {
    state = {folders: [], loaded: false};

    componentDidMount() {
        axios({
            url: global.api.url + '/folders',
            method: 'get',
        }).then(response => {
            this.setState({
                loaded: true,
                folders: response.data['hydra:member']
            });
        });
    }

    render() {
        const {folders, loaded} = this.state;
        if (loaded) {
            return (
                <div>
                    <h1>Dossiers</h1>
                    <h2>{folders.length} dossiers</h2>

                    {folders.map((folder, i) => <Thumb obj={folder} type={'folder'} key={i} /> )}
                </div>
            )
        } else {
            return (<Loader />);
        }

    }
}

export default FolderList;

