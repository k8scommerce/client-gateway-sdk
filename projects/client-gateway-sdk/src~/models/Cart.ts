/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Address } from './Address';
import type { Item } from './Item';

export type Cart = {
    id?: string;
    store_id?: number;
    session?: string;
    customer_id?: number;
    first_name?: string;
    last_name?: string;
    company?: string;
    phone?: string;
    email?: string;
    billing_address?: Address;
    shipping_address?: Address;
    discount_id?: number;
    status?: number;
    currency?: string;
    expires_at?: string;
    abandoned_at?: string;
    /**
     *  a collection of Item
     */
    items?: Array<Item>;
    /**
     *  the sum total of the cart
     */
    total_price: number;
};
