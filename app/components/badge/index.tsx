import React, { PureComponent } from 'react'
import { oneOf, oneOfType, string, object, bool } from 'prop-types'
import css from './styles.scss'

export default class Badge extends PureComponent {
    static propTypes = {
        title: string.isRequred,
        bolded: bool,
        variant: oneOf([
            'info',
            'default',
            'primary',
            'success',
            'warning',
            'danger'
        ]),
        className: string,
        children: oneOfType([
            string,
            object
        ])
    }

    static defaultProps = {
        bolded: false,
        className: '',
        variant: 'default'
    }

    render () {
        const cn = []

        const { title, children, variant, bolded, className } : {
            title: string,
            bolded: boolean,
            variant: string,
            children: any,
            className: string
        } = this.props

        cn.push(css.badge)
        cn.push(`${css[`${variant}`]}`)

        if (className) {
            cn.push(className)
        }

        if (bolded) {
            cn.push(css.bold)
        }

        return (
            <div className={cn.join(' ')}>{ title || children }</div>
        )
    }
}
