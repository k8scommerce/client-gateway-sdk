/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Price = {
    /**
     *  price id
     */
    id?: number;
    /**
     *  sale price
     */
    sale_price: number;
    /**
     *  formatted sale price
     */
    formatted_sale_price: string;
    /**
     *  retail price
     */
    retail_price?: number;
    /**
     *  formatted retail price
     */
    formatted_retail_price?: string;
    /**
     *  currency. example: USD, CAN, etc.
     */
    currency?: string;
};
