import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Header from "./Header";
import List from "./Trades/List";

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Header/>
                <Switch>
                    <Route exact path='/trades' component={List} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;

ReactDOM.render(<App/>, document.getElementById('root'));
