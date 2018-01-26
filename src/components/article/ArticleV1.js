import React from 'react';

class ArticleV1 extends React.Component {
    state = {content: ""};

    componentDidMount() {
        let content = "";
        const url = this.props.oldZipContent;
        const zip = window.zip;
        const callback = (type, text) => {

            if (type === "css") {
                content += "<style>"+ text + "</style>";
            } else if (type === "html") {
                content += text;
            }

            this.setState({
                content: content,
            });
        };


        zip.createReader(new zip.HttpReader(url), function(zipReader){
            zipReader.getEntries(function(entries){

                for (let i = 0; i < entries.length; i++) {
                    entries[i].getData(new zip.TextWriter(), function(text){
                        let type = "";

                        if (entries[i].filename.indexOf("css") !== -1) {
                            type = "css";
                        } else if (entries[i].filename.indexOf("html") !== -1) {
                            type = "html";
                        }
                        zipReader.close(function(){});
                        callback(type, text);
                    });
                }
            });
        }, function(e) {
            console.log(e);
        });
    }

    render() {
        const {content} = this.state;
        return (
            <div dangerouslySetInnerHTML={{__html: content}} />
        )
    }
}

export default ArticleV1;