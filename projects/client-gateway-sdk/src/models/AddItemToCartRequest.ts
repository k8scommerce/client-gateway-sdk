/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Item } from './Item';

export type AddItemToCartRequest = {
    /**
     *  a customer's id
     */
    customer_id: number;
    /**
     *  an Item object
     */
    item: Item;
};
