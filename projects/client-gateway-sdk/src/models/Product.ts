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
    shortDescription?: string;
    /**
     *  category description
     */
    description?: string;
    /**
     *  metatag title for SEO
     */
    metaTitle?: string;
    /**
     *  metatag description for SEO
     */
    metaDescription?: string;
    /**
     *  metatag keywords for SEO
     */
    metaKeywords?: string;
    /**
     *  collection of Variant objects
     */
    variants?: Array<Variant>;
    /**
     *  default Asset object of image type
     */
    defaultImage?: Asset;
    /**
     *  array of Asset objects of image type
     */
    images?: Array<Asset>;
    /**
     *  array of Asset objects of image type
     */
    categories?: Array<CategoryPair>;
};
