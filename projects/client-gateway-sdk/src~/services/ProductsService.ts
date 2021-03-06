/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import type { Observable } from 'rxjs';

import type { GetAllProductsResponse } from '../models/GetAllProductsResponse';
import type { GetProductsByCategoryIdResponse } from '../models/GetProductsByCategoryIdResponse';
import type { Product } from '../models/Product';

import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

@Injectable()
export class ProductsService {

    constructor(public readonly http: HttpClient) {}

    /**
     * Get Product By Sku
     * returns all products by sku belonging to a store
     * @param sku product sku
     * @returns Product A successful response.
     * @throws ApiError
     */
    public getProductBySku(
        sku: string,
    ): Observable<Product> {
        return __request(OpenAPI, this.http, {
            method: 'GET',
            url: '/v1/product/sku/{sku}',
            path: {
                'sku': sku,
            },
        });
    }

    /**
     * Get Product By Slug
     * returns matching product by slug
     * @param slug product slug
     * @returns Product A successful response.
     * @throws ApiError
     */
    public getProductBySlug(
        slug: string,
    ): Observable<Product> {
        return __request(OpenAPI, this.http, {
            method: 'GET',
            url: '/v1/product/slug/{slug}',
            path: {
                'slug': slug,
            },
        });
    }

    /**
     * Get Product By Id
     * returns matching product by id
     * @param id product id
     * @returns Product A successful response.
     * @throws ApiError
     */
    public getProductById(
        id: number,
    ): Observable<Product> {
        return __request(OpenAPI, this.http, {
            method: 'GET',
            url: '/v1/product/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Get Products By Category Id
     * returns all products by category id belonging to a store
     * @param categoryId category id
     * @param currentPage current page number
     * @param pageSize number of records per page
     * @param filter
     * @param sortOn
     * @returns GetProductsByCategoryIdResponse A successful response.
     * @throws ApiError
     */
    public getProductsByCategoryId(
        categoryId: number,
        currentPage: number,
        pageSize: number,
        filter?: string,
        sortOn?: string,
    ): Observable<GetProductsByCategoryIdResponse> {
        return __request(OpenAPI, this.http, {
            method: 'GET',
            url: '/v1/products/{category_id}/{current_page}/{page_size}',
            path: {
                'category_id': categoryId,
                'current_page': currentPage,
                'page_size': pageSize,
            },
            query: {
                'filter': filter,
                'sortOn': sortOn,
            },
        });
    }

    /**
     * Get All Products
     * returns all products belonging to a store
     * @param currentPage current page number
     * @param pageSize number of records per page
     * @param filter
     * @param sortOn
     * @returns GetAllProductsResponse A successful response.
     * @throws ApiError
     */
    public getAllProducts(
        currentPage: number,
        pageSize: number,
        filter?: string,
        sortOn?: string,
    ): Observable<GetAllProductsResponse> {
        return __request(OpenAPI, this.http, {
            method: 'GET',
            url: '/v1/products/{current_page}/{page_size}',
            path: {
                'current_page': currentPage,
                'page_size': pageSize,
            },
            query: {
                'filter': filter,
                'sortOn': sortOn,
            },
        });
    }

}