import React from 'react';
import { formatDate } from "../../generic/components/format";

const ArticleV2 = (obj) => {
    const article = obj.article;

    return (
        <div>
            <h1>{article.title}</h1>
            <h2>{article.genericCategory.title} / {formatDate(article.date)}</h2>
            <b dangerouslySetInnerHTML={{__html: article.shortDescription}} />
            <p dangerouslySetInnerHTML={{__html: article.description}} />
        </div>
    );
};

export default ArticleV2;