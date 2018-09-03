declare var __VERSION__: string
declare var __IN_DEBUG__: boolean

declare global {
    // how io-ts's `mixed` type is currently defined
    type unknown = { [key: string]: any } | object | number | string | boolean | symbol | undefined | null | void
}

// declare namespace React {
//     export interface ReactChild {
//         [elemName: string]: any;
//     }
// }

declare namespace JSX {
    export interface IntrinsicElements {
        [elemName: string]: any;
    }

    export interface ElementClass {
        render: any;
    }

    export interface ElementChildrenAttribute {
        children: {};
    }
}

declare module 'hocs'
declare module 'store'
declare module 'utils'
declare module 'theme'
declare module 'config'
declare module 'assets'
declare module 'typings'
declare module 'helpers'
declare module 'layouts'
declare module 'helpers/api'
declare module 'helpers/get'
declare module 'helpers/store'
declare module 'helpers/token'
declare module 'helpers/request'
declare module 'helpers/handlers'
declare module 'helpers/predicts'
declare module 'loadable-components'
declare module 'mobx'
declare module 'mobx-react'
declare module 'mobx-react-router'
declare module 'images'
declare module 'styles'
declare module 'scripts'
declare module 'svgstore'
declare module 'fragments'
declare module 'settings'
declare module 'settings/routes'
declare module 'settings/firebase'
declare module 'settings/constants'
declare module 'components'
declare module 'pages'
