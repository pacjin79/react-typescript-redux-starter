import {Map, Record} from 'immutable';
export interface IUserContext {
    user_id: string;
    isAuthenticated: boolean;
    authError?: any;
}

export const UserContextRecord = Record({
    user_id: null,
    isAuthenticated: false,
    authError: null
});

export class UserContext extends UserContextRecord implements IUserContext {
    authError?: any;
    user_id: string;
    isAuthenticated: boolean;

    constructor(u: IUserContext) {
        super(u);
    }

    setuserId(userId: string) {
        return super.set('user_id', userId) as UserContext;
    }

    setIsAuthenticated(auth: boolean) {
        return super.set('isAuthenticated', auth) as UserContext;
    }

    setAuthError(ae: any) {
        return super.set('authError', ae) as UserContext;
    }
}
