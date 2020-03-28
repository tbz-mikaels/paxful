import React, {PureComponent} from 'react'
import {isEmpty} from "../../../services/Utilities";

class Info extends PureComponent {
    render() {
        const {trade} = this.props;

        return (!isEmpty(trade) && <div id="sidepanel" className="right-panel">

                <div className="row">
                    <div className="col-12">
                        <p>You are trading with {trade.first_name}</p>
                        <p>Started 23 minutes ago </p>
                    </div>
                    <div className="col-12">
                        <button className="btn btn-success" style={{borderRadius: '25px'}}>Release Bitcoins</button>
                    </div>
                    <div className="col">
                        <p><img src={trade.avatar} alt=""/></p>
                        <span>
                        {trade.first_name} &nbsp;
                            <span style={{color: '#2ecc71'}}>+{trade.reputation[0]}</span> / &nbsp;
                            <span style={{color: '#e74c3c'}}>{trade.reputation[1]}</span>
                    </span>
                    </div>
                    <div className="col">
                        <p id="detail-header"># of Trades</p>
                        <p id="detail-header-info">{trade.id}</p>
                    </div>
                    <div className="w-100"></div>
                    <div className="col">
                        <p id="detail-header">TRADE STATUS</p>
                        <p id="detail-header-info"
                           style={{color: trade.status === 'Paid' ? '#2ecc71' : ''}}>{trade.status}</p>
                    </div>
                    <div className="col">
                        <p id="detail-header">TRADE HASH</p>
                        <p id="detail-header-info">{trade.trade_hash}</p>
                    </div>
                    <div className="w-100"></div>
                    <div className="col">
                        <p id="detail-header">AMOUNT USD</p>
                        <p id="detail-header-info">{trade.amount}</p>
                    </div>
                    <div className="col">
                        <p id="detail-header">AMOUNT BTC</p>
                        <p id="detail-header-info">{trade.btc_amount}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Info
