import {Map, Record} from 'immutable';
import {IUserContext, UserContext} from "./UserContext.model";
import {IPageContext, PageContext} from "./PageContext.model";

export interface IApplication {
    userContext: IUserContext;
    pageContext: IPageContext;
    router: any;
}

export const ApplicationRecord = Record({
    userContext: new UserContext({
        user_id: null,
        isAuthenticated: false
    }),
    pageContext: new PageContext(({
        sideNavOpen: false
    })),
    router: null
});

export class Application extends ApplicationRecord implements IApplication {
    userContext: UserContext;
    pageContext: PageContext;
    router: any;

    constructor(app: IApplication) {
        super(app);
    }

    setUserContext(uc: UserContext) {
        return this.set('userContext', uc) as Application;
    }
}