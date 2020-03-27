import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => (
    <div className="row justify-content-center">
        <div className="col-md-8">
            <div className="card">
                <div className="card-header"><Link className='navbar-brand' to='/trades'>Trades</Link></div>

            </div>
        </div>
    </div>
)

export default Header
