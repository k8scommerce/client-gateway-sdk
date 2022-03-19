/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Customer } from './Customer';

export type UpdateCustomerResponse = {
    /**
     *  Customer object
     */
    customer: Customer;
    /**
     *  success bool
     */
    success: boolean;
};
