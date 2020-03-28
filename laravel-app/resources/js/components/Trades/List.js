import React, {Component, PureComponent} from 'react'
import TradesService from "../../../services/API/TradesService";
import Details from "./Details";
import {isEmpty} from "../../../services/Utilities";
import Info from "./Info";

class List extends PureComponent {

    constructor(props) {
        super();

        this.state = {
            selectedId: null,
            trades: [],
            trade: {}
        }
    }

    componentDidMount() {
        TradesService.all()
            .then((trades) => this.setState({trades}))
            .catch((error) => console.log(error));
    }

    loadTrade(selectedId) {
        TradesService.get(selectedId)
            .then((trade) => this.setState({trade, selectedId}))
            .catch((error) => console.log(error));
    }

    render() {
        const {trades, trade, selectedId} = this.state;

        return <React.Fragment>
            <div id="sidepanel">
                <div id="search"></div>
                <div id="contacts">
                    <ul>
                        {
                            trades.map((trade) => {
                                return (
                                    <li
                                        key={trade.id}
                                        className={selectedId === trade.id ? 'contact active' : 'contact'}
                                        onClick={() => this.loadTrade(trade.id)}
                                    >
                                        <div className="wrap">
                                            <span className={"contact-status " + trade.statusColor}></span>
                                            {/*<img src={trade.avatar} alt=""/>*/}
                                            <div className="meta">
                                                <p className="name"
                                                   style={{fontSize: '12px'}}>
                                                    {trade.first_name} is buying
                                                </p>
                                                <p className="name" style={{paddingTop: '3px'}}>
                                                    {trade.payment_method}
                                                </p>
                                                <p className="preview">
                                                    {trade.amount} USD ({trade.btc_amount} BTC)
                                                </p>
                                            </div>
                                            <div style={{float: 'right', margin: '-50px -10px 0px 0px'}}>
                                                <img src={trade.avatar} alt=""/>
                                                <p
                                                    className="meta"
                                                    style={{
                                                        color: trade.status === 'Paid' ? '#2ecc71' : ''
                                                    }}>
                                                    {trade.status}
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
            <Details trade={trade}/>
            <Info trade={trade}/>
        </React.Fragment>
    }
}

export default List
