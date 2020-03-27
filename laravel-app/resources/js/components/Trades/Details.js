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

        return (!isEmpty(trade) && <div className="content">
                <div className="contact-profile">
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
                <div className="messages">
                    <ul>
                        <li className="sent">
                            <img src={trade.avatar} alt=""/>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has
                                been the industry's standard dummy text.</p>
                        </li>
                        <li className="replies">
                            <img src={trade.avatar} alt=""/>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has
                                been the industry's standard dummy text ever since the 1500s, when an unknown printer
                                took a
                                galley of type and scrambled it to make a type specimen book.</p>
                        </li>
                        <li className="replies">
                            <img src={trade.avatar} alt=""/>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has
                                been the industry's standard.</p>
                        </li>
                        <li className="sent">
                            <img src={trade.avatar} alt=""/>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has
                                been the industry's standard dummy text</p>
                        </li>
                        <li className="replies">
                            <img src={trade.avatar} alt=""/>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has
                                been the industry's standard dummy text ever since the 1500s, when an unknown printer
                                took a
                                galley of type and scrambled it to make a type specimen book.</p>
                        </li>
                        <li className="replies">
                            <img src={trade.avatar} alt=""/>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has
                                been the industry's standard dummy text ever since the 1500s, when an unknown printer
                                took a
                                galley of type and scrambled it to make a type specimen book.</p>
                        </li>
                    </ul>
                </div>
                <div className="message-input">
                    <div className="wrap">
                        <input type="text" placeholder="Write your message..."/>
                        <i className="fa fa-paperclip attachment" aria-hidden="true"></i>
                        <button className="submit"><i className="fa fa-paper-plane" aria-hidden="true"></i></button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Details
