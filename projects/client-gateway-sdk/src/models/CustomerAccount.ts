/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Address } from './Address';

export type CustomerAccount = {
    /**
     *  customer id
     */
    id: number;
    /**
     *  Address object
     */
    billing_address: Address;
    /**
     *  array of Address objects
     */
    shipping_addresses: Array<Address>;
};
