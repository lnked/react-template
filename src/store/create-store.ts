/* global __DEV__ */

import { configure } from 'mobx'

import { enableLogging } from 'mobx-logger'

import { UiStore, AppStore } from 'store'

import { STORE_UI, STORE_APP, STORE_ROUTER } from 'settings/constants'

configure({
    enforceActions: 'observed', // 'never' | 'always' | 'observed'
})

enableLogging({
    predicate: () => __DEV__ && Boolean(window.navigator.userAgent),
    action: true,
    reaction: false,
    transaction: false,
    compute: false,
})

export const createStore = (routingStore: any, initialState: any) => {
    const { ui, app } = initialState

    const uiStore = new UiStore(ui)
    const appStore = new AppStore(app)

    return {
        [STORE_UI]: uiStore,
        [STORE_APP]: appStore,
        [STORE_ROUTER]: routingStore,
    }
}
