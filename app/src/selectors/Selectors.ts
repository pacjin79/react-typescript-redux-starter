import {createSelector} from 'reselect';
import * as _ from 'lodash';

// export const PagesSelector = (state:IAppState) => state.pages;
// export const ProductsSelector = (state:IAppState) => state.products;
// export const ProductIdSelector = (_:any, props:any) => props.productId;
//
// export const ProductByIdSelector = createSelector(
//     ProductsSelector,
//     ProductIdSelector,
//     (products, productId) => {
//         return _.find(products, (p:any) => p.id === productId);
//     }
// );