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


export interface Price { 
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
}

