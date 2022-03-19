/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Address } from './Address';

export type NewCustomer = {
    /**
     *  first name
     */
    first_name: string;
    /**
     *  last or given name
     */
    last_name: string;
    /**
     *  email address, unique per store id
     */
    email: string;
    /**
     *  Address object
     */
    billing_address?: Address;
    /**
     *  Address object
     */
    shipping_address?: Address;
};
