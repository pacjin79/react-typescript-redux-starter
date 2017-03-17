import {Record} from 'immutable';
export interface IUser {
    firstName: string;
    lastName: string;
    id: string;
}

export const UserRecord = Record({
    firstName: null,
    lastName: null,
    id: null
});
export class User extends UserRecord implements IUser {
    firstName: string;
    lastName: string;
    id: string;

    constructor(u:IUser) {
        super(u);
    }

    setFirstName(f:string) {
        return super.set('firstName', f) as User;
    }

    setLastName(l:string) {
        return super.set('lastName', l) as User;
    }

    setId(i:string){
        return super.set('id', i) as User;
    }

    // private _immutableData: Map<string, any>;
    // constructor(u: IUser){
    //     this._immutableData = Map(u) as any;
    // }
    //
    // get firstName () {
    //     return this._immutableData.get('firstName') as string;
    // }
    //
    // get lastName() {
    //     return this._immutableData.get('lastName') as string;
    // }
    //
    // get id() {
    //     return this._immutableData.get('id') as string;
    // }

}