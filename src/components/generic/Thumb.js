import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { formatDate } from '../../generic/components/format';

const DivFolder = styled.div`
    &:nth-child(even) {
        margin-right: 0;    
    }
    
    &:nth-child(odd) {
        margin-left: 0;    
    }
    
    box-sizing: border-box;
    margin: 5px;
    position: relative;
    display: inline-block;
    background-size: cover;
    background-position: center;
    height: 150px;
    width: calc(50% - 10px);
`;

const DivInfo = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    box-sizing: border-box;
    padding: 10px;
    width: 100%;
    background: linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,0.4) 36%,rgba(0,0,0,0.4) 97%);
`;

const H4 = styled.h4`
    margin: 0 0 5px;
    color: #fff;
    font-size: 14px;
    font-weight: normal;
`;

const DynH4 = styled.span`
    text-transform: uppercase;
`;

const H3 = styled.h3`
    margin: 0;
    color: #fff;
    font-weight: bold;
    font-size: 16px;
    text-transform: uppercase;
`;

class Thumb extends React.Component {

    renderH4(type, obj) {
        let dynPart = "";

        switch (type) {
            case "article":
                if (obj.category === "magazine" || obj.category === "folder")
                    dynPart = obj.genericCategory.title;

                break;
            case "folder":
                dynPart = obj.articles.length + " ARTICLES";
                break;
            default:
                break;

        }

        return <H4> <DynH4>{dynPart}</DynH4> / {formatDate(obj.date)}</H4>
    }

    buildLink(type, id) {
        let link = "";

        switch (type) {
            case "article":
                link = "/articles/";
                break;
            case "folder":
                link = "/dossiers/";
                break;
            default:
                break;
        }

        return link + id;
    }

    render() {
        const {type, obj} = this.props;
        return (
            <Link to={this.buildLink(type, obj.id)}>
                <DivFolder style={{backgroundImage: `url(${obj.image})`}}>
                    <DivInfo>
                        {this.renderH4(type, obj)}
                        <H3>{obj.title}</H3>
                    </DivInfo>
                </DivFolder>
            </Link>
        )
    }
}

export default Thumb;
