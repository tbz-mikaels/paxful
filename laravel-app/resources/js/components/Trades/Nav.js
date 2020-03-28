import React, {PureComponent} from 'react'

class Nav extends PureComponent {
    render() {
        const {trade} = this.props;

        return <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: '#30364c'}}>
                <a className="navbar-brand">Paxful</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link">Buy Bitcoins</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Sell Bitcoins</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Wallet</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Support</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Your Account</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </React.Fragment>
    }
}

export default Nav
