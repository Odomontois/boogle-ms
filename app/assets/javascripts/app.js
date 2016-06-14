import React from 'react'
import ReactDom from 'react-dom'
import darkBaseTheme from "material-ui/styles/baseThemes/darkBaseTheme"
import lightBaseTheme from "material-ui/styles/baseThemes/lightBaseTheme"
import getMuiTheme from "material-ui/styles/getMuiTheme"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Greeter from './containers/Greeter.js'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import greet from './reducers/greet'


import '../stylesheets/style.scss'

const store = createStore(greet);

const darkMuiTheme = getMuiTheme(darkBaseTheme);
const lightMuiTheme = getMuiTheme(lightBaseTheme);

const App = () => (
    <MuiThemeProvider muiTheme={darkMuiTheme}>
        <Provider store={store}>
            <Greeter/>
        </Provider>
    </MuiThemeProvider>
);

ReactDom.render(<App />, document.getElementById("app"))