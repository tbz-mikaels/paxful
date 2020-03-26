import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import TradesService from "../../../services/API/TradesService";


class List extends Component {

    constructor(props) {
        super();

        this.state = {
            trades: [],
        }
    }

    componentDidMount() {
        TradesService.all()
            .then((trades) => this.setState({trades}))
            .catch((error) => console.log(error));
    }

    render() {
        const {trades} = this.state;

        return (
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        {
                            trades.map((trade) => trade.buyer_username)
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default List
