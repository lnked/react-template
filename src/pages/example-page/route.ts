/* eslint-disable */
/* tslint:disable:max-line-length */

import { loadComponent } from 'utils'

const locale: string = '/:locale(ru|en|de)'

export const routes: Route[] = [
    {
        path: `${locale}/example`,
        component: loadComponent(() =>
            import(/* webpackMode: "lazy", webpackPrefetch: true, webpackChunkName: "ExamplePage" */ './')
        ),
        title: 'Example Page',
        description: 'React starter kit',
    }
]