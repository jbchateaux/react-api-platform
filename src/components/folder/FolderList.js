import React from 'react';
import Thumb from "../generic/Thumb";
import Loader from "../generic/Loader";
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as foldersActions from '../../actions/foldersActions';
import PropTypes from 'prop-types';

class FolderList extends React.Component {
    componentWillMount() {
        this.props.foldersActions.fetchFolders();
    }

    render() {
        let folders = this.props.folders;
        if (folders.length > 0) {
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

FolderList.propTypes = {
    foldersActions: PropTypes.object,
    folders: PropTypes.array
};

function mapStateToProps(state) {
    return {
        folders: state.folders
    };
}

function mapDispatchToProps(dispatch) {
    return {
        foldersActions: bindActionCreators(foldersActions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
) (FolderList);

