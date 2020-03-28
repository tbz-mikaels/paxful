import React, {PureComponent} from 'react'
import {isEmpty} from "../../../services/Utilities";

class Info extends PureComponent {
    render() {
        const {trade} = this.props;

        return (!isEmpty(trade) && <div id="sidepanel" className="rightSection">
                <div className="heading-section">
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
            </div>
        );
    }
}

export default Info
