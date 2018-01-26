import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FolderList from '../folder/FolderList';
import FolderEntry from '../folder/FolderEntry';

const Folder = () => (
    <Switch>
        <Route exact path='/dossiers' component={FolderList} />
        <Route path='/dossiers/:id' component={FolderEntry} />
    </Switch>
);

export default Folder;