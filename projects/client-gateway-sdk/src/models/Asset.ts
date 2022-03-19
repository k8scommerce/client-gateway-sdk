/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Asset = {
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
    kind?: number;
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
    sizes?: any;
};
