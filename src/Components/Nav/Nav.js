import React, { Component } from 'react'

import {Link} from 'react-router-dom'

export default class Nav extends Component {
    render() {
        return (
            <div className='nav-bar'>
                <Link to='/home'>
                    <button>
                        Home
                    </button>
                </Link>
                <Link to='/profileUser' >
                    <button>
                        Profile
                    </button>
                </Link>
                <Link to='/teamsUser'>
                    <button>
                        Teams
                    </button>
                </Link>
            </div>
        )
    }
}
