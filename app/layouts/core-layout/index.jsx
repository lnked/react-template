import React, { Component } from 'react'
import PropTypes from 'prop-types'
import css from './styles.scss'

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import { SvgFixer } from 'utils'
import { Navigation } from 'components'
import { Sidebar } from 'segments'
import { Load, Page1 } from 'containers'

export default class CoreLayout extends Component {

    static propTypes = {
        children: PropTypes.oneOfType([
            PropTypes.object,
            PropTypes.string,
            PropTypes.array
        ])
    }

    componentWillMount () {
        window.prerenderReady = true
    }

    componentDidMount () {
        SvgFixer()
    }

    render () {
        return (
            <Router>
                <div className={css.layout}>
                    <header className={css.header}>
                        <Navigation />
                    </header>

                    <sidebar className={css.sidebar}>
                        <Sidebar />
                    </sidebar>

                    <section className={css.main}>
                        <div className={css.content}>
                            {this.props.children}
                            <Route exact path="/site" component={Page1}/>
                            <Route path="/site/*" component={Load}/>
                            <Route path="/marketing" component={Page1}/>
                            <Route path="/seo" component={Page1}/>
                            <Route path="/users" component={Page1}/>
                            <Route path="/shop" component={Page1}/>
                            <Route path="/system" component={Page1}/>
                        </div>
                    </section>
                </div>
            </Router>
        )
    }
}