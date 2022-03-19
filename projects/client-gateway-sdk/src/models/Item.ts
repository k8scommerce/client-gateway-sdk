/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Item = {
    /**
     *  an item's variant sku number
     */
    sku: string;
    /**
     *  how many of identical items
     */
    quantity: number;
    /**
     *  the item's price
     */
    price: number;
    /**
     *  when this item expires in the cart
     */
    expires_at: string;
};
