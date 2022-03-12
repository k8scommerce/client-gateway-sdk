/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Item } from './Item';

export type AddItemToCartRequest = {
    /**
     *  a customer's id
     */
    customerId: number;
    /**
     *  an Item object
     */
    item: Item;
};
