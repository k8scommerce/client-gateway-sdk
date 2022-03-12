/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Customer } from './Customer';
import type { JwtToken } from './JwtToken';

export type CustomerLoginResponse = {
    /**
     *  jwt token
     */
    jwt: JwtToken;
    /**
     *  Customer object
     */
    customer: Customer;
    /**
     *  success bool
     */
    success: boolean;
};
