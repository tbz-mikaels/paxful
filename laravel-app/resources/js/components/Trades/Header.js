import React, {PureComponent} from 'react'

class Header extends PureComponent {
    render() {
        const {trade} = this.props;

        return (<div className="contact-profile">
                <p>
                    <span className="payment-header">{trade.payment_method}</span><br/>
                    <span className="trader-header">
                        {trade.first_name} &nbsp;
                        <span style={{color: '#2ecc71'}}>+{trade.reputation[0]}</span> / &nbsp;
                        <span style={{color: '#e74c3c'}}>{trade.reputation[1]}</span>
                    </span>
                </p>
            </div>
        );
    }
}

export default Header
