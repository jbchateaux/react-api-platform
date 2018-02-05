import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

const store = configureStore();

ReactDOM.render(
    <Router>
        <Provider store={store}>
            <App />
        </Provider>
    </Router>,
    document.getElementById('root')
);
registerServiceWorker();
