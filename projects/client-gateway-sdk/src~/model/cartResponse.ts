/**
 * Client Gateway API
 * client gateway api
 *
 * The version of the OpenAPI document: 1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { OthersBought } from './othersBought';
import { Cart } from './cart';
import { SimilarProducts } from './similarProducts';


export interface CartResponse { 
    cart: Cart;
    session_id: string;
    similar_products?: SimilarProducts;
    others_bought?: OthersBought;
}
