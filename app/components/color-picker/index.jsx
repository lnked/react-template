import React, { Component } from 'react'
import { string } from 'prop-types'
import css from './styles.scss'

export default class ColorPicker extends Component {
    static propTypes = {
        color: string
    }

    static defaultProps = {
        color: 'ffffff'
    }

    constructor (props) {
        super(props)

        this.state = {
            color: this.props.color
        }

        this.handleClear = this.handleClear.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange (e) {
        const value = e.target.value
        const symbol = value[value.length - 1]
        const isColor = /^([0-9a-f])$/i

        if (isColor.test(symbol) || !value) {
            this.setState({...this.state, color: value})
        }
    }

    handleClear () {
        this.setState({...this.state, color: ''})
    }

    renderControl () {
        const clearButton = []

        if (this.state.color) {
            clearButton.push(
                <span className={css.clear} key="clear" onClick={this.handleClear.bind(this)}>
                    <svg className={css.clear__icon} role="image">
                        <use xlinkHref="#clear"/>
                    </svg>
                </span>
            )
        }

        return (
            <div className={css.control}>
                <div className={css.grill}>#</div>

                <input
                    name="color"
                    maxLength={6}
                    placeholder=""
                    className={css.input}
                    value={this.state.color}
                    onChange={this.handleChange.bind(this)}
                />

                { clearButton }
            </div>
        )
    }

    renderPaint () {
        let { color } = this.state
        const isColor = /^(?:[0-9a-f]{3}){1,2}$/i

        if (!isColor.test(color)) {
            color = 'ffffff'
        }

        const style = {
            backgroundColor: `#${color}`
        }

        return (
            <div className={css.paint} style={style} />
        )
    }

    render () {
        return (
            <div className={css.picker}>
                { this.renderControl() }
                { this.renderPaint() }
            </div>
        )
    }
}