/* eslint-disable */
/* tslint:disable:max-line-length */

import { loadComponent } from 'utils'

const locale: string = '/:locale(ru|en|de)'

export const routes: Route[] = [
    {
        exact: true,
        path: `${locale}?`,
        component: loadComponent(() =>
            import(/* webpackMode: "lazy", webpackChunkName: "MainPage" */ './')
        ),
        title: 'Main Page',
        description: 'React starter kit',
    }
]