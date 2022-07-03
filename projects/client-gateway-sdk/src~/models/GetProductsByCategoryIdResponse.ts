/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Product } from './Product';

export type GetProductsByCategoryIdResponse = {
    products: Array<Product>;
    total_records: number;
    total_pages: number;
};
