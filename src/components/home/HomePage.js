import React from 'react';
import axios from 'axios';
import global from '../../generic/vars/global.json';
import styled from 'styled-components';
import Loader from "../generic/Loader";
import { Link } from "react-router-dom";

const FolderLink = styled.div`
    display: inline-block;
    width: 33%;
`;

class HomePage extends React.Component {
    state = {folderTilte: "", folders: [], loaded: false};

    componentDidMount() {
        axios({
            url: global.api.url + '/home_pages/1',
            method: 'get',
        }).then(response => {
            this.setState({
                loaded: true,
                folderTilte: response.data.folderTitle,
                folders: [response.data.firstPositionFolder, response.data.secondPositionFolder, response.data.thirdPositionFolder]
            });
        });
    }

    render() {
        const {folders, folderTilte, loaded} = this.state;
        if (loaded) {
            return (
                <div>
                    <h1>{folderTilte}</h1>

                    <div>
                        {folders.map((folder, i) => <FolderLink key={i}><Link to={`dossiers/` + folder.id}>{folder.title}</Link></FolderLink>)}
                    </div>
                </div>
            )
        } else {
            return (<Loader />);
        }

    }
}

export default HomePage;

