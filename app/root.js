import React from 'react'
import { Provider } from 'react-redux'

import store from './store/configStore'

import Home from './containers/Home'

const Root = (props) => {
    return (
        <Provider store={store}>
            <Home />
        </Provider>
    );
}

export default Root
