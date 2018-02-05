import {combineReducers} from 'redux';
import folders from './foldersReducer';

const rootReducer = combineReducers({
   folders
});

export default rootReducer;