import React, {Component, PureComponent} from 'react'
import {Link} from 'react-router-dom'
import TradesService from "../../../services/API/TradesService";
import Details from "./Details";

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
                                            <span className="contact-status busy"></span>
                                            <img src={trade.avatar} alt=""/>
                                            <div className="meta">
                                                <p className="name"
                                                   style={{fontSize: '12px', color: 'gray'}}>
                                                    {trade.first_name} is buying
                                                </p>
                                                <p className="name" style={{paddingTop: '3px'}}>
                                                    {trade.payment_method}
                                                </p>
                                                <p className="preview">
                                                    {trade.amount} USD ({trade.amount} BTC)
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
