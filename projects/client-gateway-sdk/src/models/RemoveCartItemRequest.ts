/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type RemoveCartItemRequest = {
    /**
     *  a customer's id
     */
    customer_id: number;
    /**
     *  an item's variant sku number
     */
    sku: string;
    /**
     *  a new quantity
     */
    quanity: number;
};
