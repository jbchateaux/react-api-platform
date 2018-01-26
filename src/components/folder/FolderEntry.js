import React from 'react';
import axios from 'axios';
import global from '../../generic/vars/global.json';
import Thumb from "../generic/Thumb";
import Loader from "../generic/Loader";

class FolderEntry extends React.Component {
    state = {folder: {}, loaded: false};

    componentDidMount() {
        const folderId = parseInt(this.props.match.params.id, 10);

        if (!isNaN(folderId)) {
            axios({
                url: global.api.url + '/folders/' + folderId,
                method: 'get',
            }).then(response => {
                this.setState({
                    loaded: true,
                    folder: response.data
                });
            });
        }
    }

    render() {
        const {folder, loaded} = this.state;

        if (loaded) {
            return (
                <div>
                    <h1>{folder.title}</h1>
                    <h2>{folder.articles.length} articles</h2>
                    <p dangerouslySetInnerHTML={{__html: folder.description}} />

                    <div>
                        {folder.articles.map((article, i) => <Thumb obj={article} type={'article'} key={i} /> )}
                    </div>
                </div>
            )
        } else {
            return (<Loader />);
        }
    }
}

export default FolderEntry;

