import React, {PureComponent} from 'react'
import List from "./List";
import Nav from "./Nav";
import '../../../css/trade.scss'

class TradeIndex extends PureComponent {
    render() {
        return <React.Fragment>
            <div className="container">
                <Nav/>
                <List/>
            </div>
        </React.Fragment>;
    }
}

export default TradeIndex
