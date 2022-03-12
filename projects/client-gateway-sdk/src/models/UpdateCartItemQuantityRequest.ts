/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpdateCartItemQuantityRequest = {
    /**
     *  a customer's id
     */
    customerId: number;
    /**
     *  an item's variant sku number
     */
    sku: string;
    /**
     *  a new quantity
     */
    quanity: number;
};
