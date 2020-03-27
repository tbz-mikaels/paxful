import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import TradeIndex from "./Trades";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/trades' component={TradeIndex} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;

ReactDOM.render(<App/>, document.getElementById('frame'));
