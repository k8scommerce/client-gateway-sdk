/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Cart } from './Cart';
import type { OthersBought } from './OthersBought';
import type { SimilarProducts } from './SimilarProducts';

export type CartResponse = {
    cart: Cart;
    session_id: string;
    similar_products?: SimilarProducts;
    others_bought?: OthersBought;
};
