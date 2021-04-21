import {NextRouter} from "next/router";

export const buildQueryString = (params) => {
    if (!params) {
        return ''
    }

    const query = []

    Object.entries(params).map((param: [string, string]) => {
        let [key, value]: [string, string] = param
        // Replace all % with %25 so when browser decode url we will get correct query string param
        if (typeof value === typeof '') {
            value = value.split('%').join('%25')
            value = value.split('#').join('%23')
        }
        query.push(`${key}=${value}`)
    })

    return query.join('&')
}

export const getRouteQuery = (filter, router: NextRouter) => {
    const query: any = {}

    Object.keys(filter).forEach((key) => {
        if (typeof router.query[key] !== 'undefined') {
            let value = router.query[key] as any
            switch (typeof filter[key]) {
                case 'number':
                    value = Number(value)
                    break
                case 'boolean':
                    value = !!value
                    break
            }

            query[key] = value
        } else {
            query[key] = filter[key]
        }
    })

    query.limit = query.limit ? query.limit : 20
    if (!query.page) {
        query.page = '1'
    }
    console.log(Object.assign({}, router.query, query))
    return Object.assign({}, router.query, query)
}

export const handleUpdateRouteQuery = (router: NextRouter, filter: any, append = {}) => {
    let params = {...router.query}
    params = Object.assign(params, filter, append)

    let query = {}
    for (const key in params) {
        if (
            params.hasOwnProperty(key) &&
            params[key] &&
            params[key] != '' &&
            params[key] != '0'
        ) {
            query[key] = params[key]
        }
    }
    router.query = {...query}
    router.push(router,undefined,{ shallow: true })
}