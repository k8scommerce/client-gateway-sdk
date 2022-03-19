/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Customer = {
    /**
     *  customer id
     */
    id: number;
    /**
     *  first name
     */
    first_name: string;
    /**
     *  last or given name
     */
    last_name: string;
    /**
     *  email address
     */
    email: string;
    /**
     *  is_verified
     */
    is_verified?: boolean;
};
