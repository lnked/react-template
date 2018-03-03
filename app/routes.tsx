import * as React from 'react'
import * as axios from 'axios'

import {
    BrowserRouter as Router,
    // Redirect,
    Route,
    Switch
} from 'react-router-dom'

import { Transition } from 'react-transition-group'

// Layouts
import { CoreLayout } from 'layouts'

// Containers
import {
    Auth,
    Accounts,
    Assets,
    Dashboard,
    Entities,
    Extensions,
    Globals,
    Locale,
    NoMatch,
    Settings,
    Shop,
    Structure,
    Tasks,
    Updates
} from 'containers'

interface S {
    links: any;
    pages: any;
    pathname: string;
    isOverflow: boolean;
}

const routes: any = [
    {
        path: '/',
        exact: true,
        component: Auth
    }, {
        path: '/accounts',
        component: Accounts
    }, {
        path: '/shop',
        component: Shop
    }, {
        path: '/tasks',
        component: Tasks
    }, {
        path: '/assets',
        component: Assets
    }, {
        path: '/updates',
        component: Updates
    }, {
        path: '/locale',
        component: Locale
    }, {
        path: '/globals',
        component: Globals
    }, {
        path: '/dashboard',
        component: Dashboard
    }, {
        path: '/structure',
        component: Structure
    }, {
        path: '/entities',
        component: Entities
    }, {
        path: '/extensions',
        component: Extensions
    }, {
        path: '/settings',
        component: Settings
    }, {
        status: 404,
        statusCode: 404,
        component: NoMatch
    }
]

export default class App extends React.Component<{}, S> {
    state = {
        links: [],
        pages: [],
        pathname: '',
        isOverflow: false
    }

    componentDidMount () {
        const path = location.pathname.split('/')

        this.handleLoadPages()

        if (typeof (path[1]) !== 'undefined') {
            this.handleChangePath(path[1])
        }
    }

    handleLoadPages = () => {
        axios
            .get('http://react-template.loc/api/pages')
            .then((response) => {
                if (typeof (response.data.json) !== 'undefined') {
                    this.setState({ ...this.state, pages: response.data.json })
                }
            })
            .catch((err) => {
                console.log('err: ', err)
            })
    }

    handleChangePath = (pathname: string) => {
        if (pathname !== this.state.pathname) {
            axios
                .get(`http://react-template.loc/api/${pathname}`)
                .then((response) => {
                    if (typeof (response.data.json) !== 'undefined') {
                        this.setState({ ...this.state, links: response.data.json, pathname })
                    }
                })
                .catch((err) => {
                    console.log('err: ', err)
                })
        } else {
            this.setState({ ...this.state, links: [] })
        }
    }

    render () {
        const { links, pages } = this.state

        return (
            <Router>
                <CoreLayout links={links} pages={pages}>
                    <Switch>

                        {routes.map(({ component: Component, ...rest }: any, key) => (
                            <Route {...rest} key={key} render={(props: any) => {
                                if (rest.path) {
                                    this.handleChangePath(rest.path)
                                }

                                return (
                                    <Transition timeout={1500}>
                                        <Component {...props} className={`fade fade-${status}`} />
                                    </Transition>
                                )
                            }} />
                        ))}

                    </Switch>
                </CoreLayout>
            </Router>
        )
    }
}
