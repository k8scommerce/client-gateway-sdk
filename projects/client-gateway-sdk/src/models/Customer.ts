/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Address } from './Address';

export type Customer = {
    /**
     *  customer id
     */
    id?: number;
    /**
     *  first name
     */
    first_name?: string;
    /**
     *  last or given name
     */
    last_name?: string;
    /**
     *  email address
     */
    email?: string;
    /**
     *  is_verified
     */
    is_verified?: boolean;
    /**
     *  Address object
     */
    billing_addresses?: Array<Address>;
    /**
     *  array of Address objects
     */
    shipping_addresses?: Array<Address>;
};
