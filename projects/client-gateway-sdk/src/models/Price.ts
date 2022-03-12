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
    salePrice: number;
    /**
     *  formatted sale price
     */
    formattedSalePrice: string;
    /**
     *  retail price
     */
    retailPrice?: number;
    /**
     *  formatted retail price
     */
    formattedRetailPrice?: string;
    /**
     *  currency. example: USD, CAN, etc.
     */
    currency?: string;
};
