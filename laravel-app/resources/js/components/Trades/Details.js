import React, {Component} from 'react'
import {isEmpty} from '../../../services/Utilities'

class Details extends Component {

    constructor(props) {
        super();

        this.state = {}
    }

    componentDidMount() {
    }

    render() {
        const {trade} = this.props;

        return (<div>
            {
                !isEmpty(trade) && <div className="col-md-8">
                    <li>{trade.buyer_username}</li>
                    <li>{trade.payment_method}</li>
                </div>
            }
        </div>)
    }
}

export default Details
