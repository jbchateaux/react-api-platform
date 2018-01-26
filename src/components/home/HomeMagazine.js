import React from 'react';
import axios from 'axios';
import global from '../../generic/vars/global.json';
import Thumb from "../generic/Thumb";
import Loader from "../generic/Loader";

class HomeMagazine extends React.Component {
    state = {articles: [], loaded: false};

    componentDidMount() {
        axios({
            url: global.api.url + '/articles?category=magazine',
            method: 'get',
        }).then(response => {
            this.setState({
                loaded: true,
                articles: response.data['hydra:member']
            });
        });
    }

    render() {
        const {articles, loaded} = this.state;
        if (loaded) {
            return (
                <div>
                    <h1>Magazine</h1>

                    {articles.map((article, i) => <Thumb obj={article} type={'article'} key={i} /> )}
                </div>
            )
        } else {
            return (<Loader />);
        }

    }
}

export default HomeMagazine;

