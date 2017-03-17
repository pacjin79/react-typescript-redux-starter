import {Record} from 'immutable';
export interface IRoute {
    pathname: string;
    search: string;
    hash: string;
}

export const RouteRecord = Record({
    pathname: '',
    search: '',
    hash: ''
});

export class Route extends RouteRecord implements IRoute {
    pathname: string;
    search: string;
    hash: string;

    constructor(r: IRoute) {
        super(r);
    }

    setPathName(p: string) {
        return this.set('pathname', p) as Route;
    }

    setSearch(s: string) {
        return this.set('search', s) as Route;
    }

    setHash(h: string) {
        return this.set('hash', h) as Route;
    }
}