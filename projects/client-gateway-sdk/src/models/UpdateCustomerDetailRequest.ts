/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Address } from './Address';

export type UpdateCustomerDetailRequest = {
    cart_id: string;
    first_nameoptional?: string;
    last_name?: string;
    company?: string;
    phone?: string;
    email?: string;
    billing_address?: Address;
    shipping_address?: Address;
};
