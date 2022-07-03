/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Item } from './Item';

export type BulkAddItemsRequest = {
    cart_id: string;
    items: Array<Item>;
};
