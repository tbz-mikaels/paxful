import React, {Component, PureComponent} from 'react'
import TradesService from "../../../services/API/TradesService";
import Details from "./Details";
import {isEmpty} from "../../../services/Utilities";

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

        return <span>
            <div id="sidepanel">
                <div id="search">
                    {
                        !isEmpty(trade) && <span>
                            <p># of trades: {trade.id}</p><br/>
                            <p>Trade Status: {trade.status}</p><br/>
                            <p>Trade Hash: {trade.trade_hash}</p><br/>
                            <p>Amount USD: {trade.amount}</p><br/>
                            <p>Amount BTC: {trade.btc_amount}</p><br/>
                        </span>
                    }
                </div>
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
                                            <img src={trade.avatar} alt=""/>
                                            <div className="meta">
                                                <p className="name"
                                                   style={{fontSize: '12px', color: 'gray'}}>
                                                    {trade.first_name} is buying
                                                </p>
                                                <p className="name" style={{paddingTop: '3px'}}>
                                                    {trade.payment_method} (
                                                    <small
                                                        style={{fontStyle: 'oblique', fontSize: '12px'}}>
                                                        {trade.status}
                                                    </small>
                                                    )
                                                </p>
                                                <p className="preview">
                                                    {trade.amount} USD ({trade.btc_amount} BTC)
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
        </span>
    }
}

export default List
