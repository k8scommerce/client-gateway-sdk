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
import { Variant } from './variant';
import { Asset } from './asset';
import { CategoryPair } from './categoryPair';


export interface Product { 
    /**
     *  product id
     */
    id: number;
    /**
     *  product slug
     */
    slug: string;
    /**
     *  product name
     */
    name: string;
    /**
     *  product short description. used in category pages
     */
    short_description?: string;
    /**
     *  category description
     */
    description?: string;
    /**
     *  metatag title for SEO
     */
    meta_title?: string;
    /**
     *  metatag description for SEO
     */
    meta_description?: string;
    /**
     *  metatag keywords for SEO
     */
    meta_keywords?: string;
    /**
     *  collection of Variant objects
     */
    variants?: Array<Variant>;
    default_image?: Asset;
    /**
     *  array of Asset objects of image type
     */
    images?: Array<Asset>;
    /**
     *  array of Asset objects of image type
     */
    categories?: Array<CategoryPair>;
}

