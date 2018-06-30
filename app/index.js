import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { createStore, applyMiddleware, compose } from 'redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import reducers from './reducers';

const createStoreWithMiddleware = compose(applyMiddleware(promise, thunk),
	window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore);
  
const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<MuiThemeProvider>
  				<App />
  			</MuiThemeProvider>
		</BrowserRouter>
	</Provider>,
    document.getElementById('app')
)