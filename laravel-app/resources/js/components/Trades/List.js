import React, {Component, PureComponent} from 'react'
import {Link} from 'react-router-dom'
import TradesService from "../../../services/API/TradesService";
import Details from "./Details";

class List extends PureComponent {

    constructor(props) {
        super();

        this.state = {
            trades: [],
            trade: {}
        }
    }

    componentDidMount() {
        TradesService.all()
            .then((trades) => this.setState({trades}))
            .catch((error) => console.log(error));
    }

    loadTrade(id) {
        TradesService.get(id)
            .then((trade) => this.setState({trade}))
            .catch((error) => console.log(error));
    }

    render() {
        const {trades, trade} = this.state;

        return (
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        {
                            trades.map((trade) => {
                                return (
                                    <li
                                        key={trade.id}
                                        onClick={() => this.loadTrade(trade.id)}>
                                        {trade.buyer_username}
                                    </li>
                                )
                            })
                        }
                        <Details trade={trade}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default List
