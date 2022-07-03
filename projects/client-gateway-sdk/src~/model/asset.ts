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


export interface Asset { 
    /**
     *  asset id
     */
    id?: number;
    /**
     *  product id
     */
    product_id?: number;
    /**
     *  variant id
     */
    variant_id?: number;
    /**
     *  asset name
     */
    name?: string;
    /**
     *  display name
     */
    display_name?: string;
    /**
     *  full, public access url
     */
    url?: string;
    /**
     *  asset kind (0=unknown|1=image|2=document|3=audio|4=video|5=archive)
     */
    kind?: Asset.KindEnum;
    /**
     *  content type (mime type)
     */
    content_type?: string;
    /**
     *  sort order
     */
    sort_order?: number;
    /**
     *  map[tag:string]url:string
     */
    sizes?: object;
}
export namespace Asset {
    export type KindEnum = 0 | 1 | 2 | 3 | 4 | 5;
    export const KindEnum = {
        NUMBER_0: 0 as KindEnum,
        NUMBER_1: 1 as KindEnum,
        NUMBER_2: 2 as KindEnum,
        NUMBER_3: 3 as KindEnum,
        NUMBER_4: 4 as KindEnum,
        NUMBER_5: 5 as KindEnum
    };
}


