// A barrel file for our reducers, which will be combined and passed into the Redux store we create;
// The aliases of reducers in this file will be assigned as the names of the keys in the Redux store, with the values being the respective individual reducers;
export { default as allItems } from "../store/utilities/allItems";
export { default as item } from "../store/utilities/item";
export {default as order} from "../store/utilities/order";

export { default as shoppingCart } from "../store/utilities/shoppingCart";
export {default as orderHistory} from "../store/utilities/orderHistory";
export { default as user } from '../store/utilities/user';
export { default as view } from '../store/utilities/view';

