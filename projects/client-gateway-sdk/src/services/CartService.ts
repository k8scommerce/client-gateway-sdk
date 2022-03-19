/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import type { Observable } from 'rxjs';

import type { AddItemToCartRequest } from '../models/AddItemToCartRequest';
import type { AddItemToCartResponse } from '../models/AddItemToCartResponse';
import type { ClearCartRequest } from '../models/ClearCartRequest';
import type { ClearCartResponse } from '../models/ClearCartResponse';
import type { GetCartResponse } from '../models/GetCartResponse';
import type { RemoveCartItemRequest } from '../models/RemoveCartItemRequest';
import type { RemoveCartItemResponse } from '../models/RemoveCartItemResponse';
import type { UpdateCartItemQuantityRequest } from '../models/UpdateCartItemQuantityRequest';
import type { UpdateCartItemQuantityResponse } from '../models/UpdateCartItemQuantityResponse';

import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

@Injectable()
export class CartService {

    constructor(public readonly http: HttpClient) {}

    /**
     * Get Cart
     * returns a shopping cart if one exists
     * @param customerId a customer's id
     * @returns GetCartResponse A successful response.
     * @throws ApiError
     */
    public getCart(
        customerId: string,
    ): Observable<GetCartResponse> {
        return __request(OpenAPI, this.http, {
            method: 'GET',
            url: '/v1/cart/{customerId}',
            path: {
                'customerId': customerId,
            },
        });
    }

    /**
     * Clear Cart
     * clear a customer's cart
     * @param customerId a customer's id
     * @param body  clear cart
     * @returns ClearCartResponse A successful response.
     * @throws ApiError
     */
    public clearCart(
        customerId: string,
        body: ClearCartRequest,
    ): Observable<ClearCartResponse> {
        return __request(OpenAPI, this.http, {
            method: 'DELETE',
            url: '/v1/cart/{customerId}',
            path: {
                'customerId': customerId,
            },
            body: body,
        });
    }

    /**
     * Add Item to Cart
     * adds an item to an existing cart
     * @param customerId a customer's id
     * @param body  add item to cart
     * @returns AddItemToCartResponse A successful response.
     * @throws ApiError
     */
    public addItemToCart(
        customerId: string,
        body: AddItemToCartRequest,
    ): Observable<AddItemToCartResponse> {
        return __request(OpenAPI, this.http, {
            method: 'POST',
            url: '/v1/cart/{customerId}',
            path: {
                'customerId': customerId,
            },
            body: body,
        });
    }

    /**
     * Remove Item
     * removes an item from a customer's cart
     * @param customerId a customer's id
     * @param sku an Item's sku
     * @param body  remove item
     * @returns RemoveCartItemResponse A successful response.
     * @throws ApiError
     */
    public removeCartItem(
        customerId: string,
        sku: string,
        body: RemoveCartItemRequest,
    ): Observable<RemoveCartItemResponse> {
        return __request(OpenAPI, this.http, {
            method: 'DELETE',
            url: '/v1/cart/{customerId}/{sku}',
            path: {
                'customerId': customerId,
                'sku': sku,
            },
            body: body,
        });
    }

    /**
     * Update Item Quantity
     * updates a cart item's quantity
     * @param customerId a customer's id
     * @param sku an item's sku
     * @param body  update cart item quantity
     * @returns UpdateCartItemQuantityResponse A successful response.
     * @throws ApiError
     */
    public updateCartItemQuantity(
        customerId: string,
        sku: string,
        body: UpdateCartItemQuantityRequest,
    ): Observable<UpdateCartItemQuantityResponse> {
        return __request(OpenAPI, this.http, {
            method: 'PUT',
            url: '/v1/cart/{customerId}/{sku}',
            path: {
                'customerId': customerId,
                'sku': sku,
            },
            body: body,
        });
    }

}