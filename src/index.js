import '../sass/index.scss';

import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux'

import rootReducer from './reducers/Root';
import Root from './containers/Root';

const store = createStore(rootReducer);

ReactDOM.render(
	<Provider store={store}>
		<Root />
	</Provider>
	, document.getElementById('content')
);

