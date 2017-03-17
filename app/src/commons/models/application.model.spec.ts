import {IApplication, Application} from "./Application.model";
import {expect} from 'chai';
import {UserContext} from "./UserContext.model";
describe('Application Model', function () {

    let mockAppState: IApplication;
    before(function () {
        mockAppState = {
            userContext: {
                user_id: 'lj-1',
                isAuthenticated: true
            },
            pageContext: {
                sideNavOpen: false
            },
            router: null
        };
    });


    it('Should create an immutable Application model', function () {
        const application = new Application(mockAppState);
        expect(application).to.not.be.undefined;
    });

    it('Should return a new instance when attribute is modified', function() {
       const application = new Application(mockAppState);
       const newState = application.setUserContext(new UserContext({
           user_id: 'lj-2',
           isAuthenticated: true
       }));
       expect(newState.userContext.user_id).to.equal('lj-2');
       expect(newState === application).to.be.false;
    });
});