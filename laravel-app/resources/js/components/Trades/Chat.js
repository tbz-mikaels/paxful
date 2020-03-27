import React, {PureComponent} from 'react'

class Chat extends PureComponent {
    render() {
        const {trade} = this.props;

        return (<div className="messages">
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
        );
    }
}

export default Chat
