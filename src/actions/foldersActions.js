import * as types from './actionTypes';
import axios from 'axios';
import global from '../generic/vars/global.json';

export function receiveFolders(folders) {
    return {type: types.RECEIVE_FOLDERS, folders: folders}
}

export function fetchFolders() {
    return dispatch => {
        axios({
            url: global.api.url + '/folders',
            method: 'get',
        }).then(response => {
            if (response.status === 200) {
                dispatch(receiveFolders(response.data['hydra:member']));
            } else {
                const flash = {
                    type: 'error',
                    title: 'Error getting folders list',
                    content: 'There was an error getting the folder list. Please try again.'
                };
                dispatch({type: "DISPLAY_FLASH", data: flash})
            }
        });
    }

}