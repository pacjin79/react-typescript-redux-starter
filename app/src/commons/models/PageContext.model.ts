import {Map, Record} from "immutable";
export interface IPageContext {
    sideNavOpen: boolean;
}

// export class PageContext {
//     private _immutableData: Map<string, any>;
//     constructor(sno: IPageContext) {
//         this._immutableData = Map({
//             sideNavOpen: sno.sideNavOpen
//         });
//     }
//
//     get sideNavOpen(){
//         return this._immutableData.get('sideNavOpen') as boolean;
//     }
//
//     openSideNave(){
//         return new PageContext(this._immutableData.set('sideNavOpen', true).toJS());
//     }
//
//     closeSideMenu() {
//         return new PageContext(this._immutableData.set('sideNavOpen',false).toJS());
//     }
// }

export const PageContextRecord = Record({
    sideNavOpen: false
});

export class PageContext extends PageContextRecord implements IPageContext {
    sideNavOpen: boolean;

    constructor(pg: IPageContext) {
        super(pg);
    }

    openSideNav() {
        return super.set('sideNavOpen', true) as PageContext;
    }

    closeSideNav() {
        return super.set('sideNavOpen', false) as PageContext;
    }

}

