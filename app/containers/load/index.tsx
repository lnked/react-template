import * as React from 'react'
import { oneOfType, object, string, array } from 'prop-types'
import { Posts } from 'segments'

import 'whatwg-fetch'

export default class Load extends React.Component<{}, {}> {
    static propTypes = {
        subreddit: string,
        posts: oneOfType([
            object,
            array
        ])
    }

    static defaultProps = {
        subreddit: 'reactjs'
    }

    state = {
        posts: []
    }

    componentDidMount () {
        this.handleRedditLoad(this.props.subreddit)
    }

    handleRedditLoad (type) {
        fetch(`https://www.reddit.com/r/${type}.json`)
            .then((response) => response.json())
            .then((response) => {
                const posts = response.data.children.map((obj) => obj.data)

                this.setState({ posts })
            })
    }

    render () {
        return (
            <Posts data={this.state.posts} title={this.props.subreddit} />
        )
    }
}