import React, {PureComponent} from 'react'

class Header extends PureComponent {
    render() {
        const {trade} = this.props;

        return (<div className="contact-profile">
                <img src={trade.avatar} alt=""/>
                <p>{trade.payment_method}</p>
                <span
                    style={{
                        float: 'right',
                        marginRight: '10px'
                    }}>
                        {trade.first_name} &nbsp;
                    <span style={{color: '#2ecc71'}}>+{trade.reputation[0]}</span> / &nbsp;
                    <span style={{color: '#e74c3c'}}>{trade.reputation[1]}</span>
                    </span>
            </div>
        );
    }
}

export default Header
