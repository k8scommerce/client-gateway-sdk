/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import type { Observable } from 'rxjs';

import type { Category } from '../models/Category';
import type { GetAllCategoriesResponse } from '../models/GetAllCategoriesResponse';

import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

@Injectable()
export class CategoriesService {

    constructor(public readonly http: HttpClient) {}

    /**
     * Get All Categories
     * returns all categories belonging to a store
     * @returns GetAllCategoriesResponse A successful response.
     * @throws ApiError
     */
    public getAllCategories(): Observable<GetAllCategoriesResponse> {
        return __request(OpenAPI, this.http, {
            method: 'GET',
            url: '/v1/categories',
        });
    }

    /**
     * Get Category By Slug
     * returns all categories by slug belonging to a store
     * @param slug category slug
     * @returns Category A successful response.
     * @throws ApiError
     */
    public getCategoryBySlug(
        slug: string,
    ): Observable<Category> {
        return __request(OpenAPI, this.http, {
            method: 'GET',
            url: '/v1/category/slug/{slug}',
            path: {
                'slug': slug,
            },
        });
    }

    /**
     * Get Category By Id
     * returns all categories by id belonging to a store
     * @param id
     * @returns Category A successful response.
     * @throws ApiError
     */
    public getCategoryById(
        id: string,
    ): Observable<Category> {
        return __request(OpenAPI, this.http, {
            method: 'GET',
            url: '/v1/category/{id}',
            path: {
                'id': id,
            },
        });
    }

}