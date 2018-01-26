import React from 'react';
import axios from 'axios';
import global from '../../generic/vars/global.json';
import Loader from "../generic/Loader";
import ArticleV2 from "./ArticleV2";
import ArticleV1 from "./ArticleV1";

class Article extends React.Component {
    state = {article: {}, isV1: false, loaded: false};

    componentDidMount() {
        const articleId = parseInt(this.props.match.params.id, 10);

        if (!isNaN(articleId)) {
            axios({
                url: global.api.url + '/articles/' + articleId,
                method: 'get',
            }).then(response => {
                this.setState({
                    loaded: true,
                    isV1: (response.data.oldZipContent) ? true : false,
                    article: response.data
                });
            });
        }
    }

    render() {
        const {article, isV1, loaded} = this.state;

        if (loaded) {
            if (isV1)
                return <ArticleV1 oldZipContent={article.oldZipContent} />;
            else
                return <ArticleV2 article={article} />;
        } else {
            return (<Loader />);
        }
    }
}

export default Article;

