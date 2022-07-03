/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Asset } from './Asset';
import type { CategoryPair } from './CategoryPair';
import type { Variant } from './Variant';

export type Product = {
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
    /**
     *  default Asset object of image type
     */
    default_image?: Asset;
    /**
     *  array of Asset objects of image type
     */
    images?: Array<Asset>;
    /**
     *  array of Asset objects of image type
     */
    categories?: Array<CategoryPair>;
};
