/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Item } from './Item';

export type Cart = {
    /**
     *  a collection of Item
     */
    items: Array<Item>;
    /**
     *  the sum total of the cart
     */
    totalPrice: number;
};
