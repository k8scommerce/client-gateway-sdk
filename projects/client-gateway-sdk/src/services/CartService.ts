/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import type { Observable } from 'rxjs';

import type { AddItemRequest } from '../models/AddItemRequest';
import type { AttachCustomerRequest } from '../models/AttachCustomerRequest';
import type { BulkAddItemsRequest } from '../models/BulkAddItemsRequest';
import type { CartResponse } from '../models/CartResponse';
import type { ClearCartRequest } from '../models/ClearCartRequest';
import type { RemoveItemRequest } from '../models/RemoveItemRequest';
import type { UpdateCustomerDetailRequest } from '../models/UpdateCustomerDetailRequest';
import type { UpdateItemQuantityRequest } from '../models/UpdateItemQuantityRequest';
import type { UpdateStatusRequest } from '../models/UpdateStatusRequest';

import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

@Injectable()
export class CartService {

    constructor(public readonly http: HttpClient) {}

    /**
     * Create Cart
     * creates a new shopping cart for the store declared in the request header
     * @returns CartResponse A successful response.
     * @throws ApiError
     */
    public createCart(): Observable<CartResponse> {
        return __request(OpenAPI, this.http, {
            method: 'POST',
            url: '/v1/cart',
        });
    }

    /**
     * Get By Cart Id
     * returns a cart from the database
     * @param cartId the cart UUID
     * @returns CartResponse A successful response.
     * @throws ApiError
     */
    public getByCartId(
        cartId: string,
    ): Observable<CartResponse> {
        return __request(OpenAPI, this.http, {
            method: 'GET',
            url: '/v1/cart/{cart_id}',
            path: {
                'cart_id': cartId,
            },
        });
    }

    /**
     * Clear Cart
     * removes all cart items
     * @param cartId the cart UUID
     * @param body  clear cart
     * @returns CartResponse A successful response.
     * @throws ApiError
     */
    public clearCart(
        cartId: string,
        body: ClearCartRequest,
    ): Observable<CartResponse> {
        return __request(OpenAPI, this.http, {
            method: 'DELETE',
            url: '/v1/cart/{cart_id}',
            path: {
                'cart_id': cartId,
            },
            body: body,
        });
    }

    /**
     * Add Item
     * adds an item to cart
     * @param cartId the cart UUID
     * @param body  add item to cart
     * @returns CartResponse A successful response.
     * @throws ApiError
     */
    public addItem(
        cartId: string,
        body: AddItemRequest,
    ): Observable<CartResponse> {
        return __request(OpenAPI, this.http, {
            method: 'POST',
            url: '/v1/cart/{cart_id}',
            path: {
                'cart_id': cartId,
            },
            body: body,
        });
    }

    /**
     * Bulk Add Item
     * adds multiple items at once to a cart
     * @param cartId the cart UUID
     * @param body  bulk add items to cart
     * @returns CartResponse A successful response.
     * @throws ApiError
     */
    public bulkAddItems(
        cartId: string,
        body: BulkAddItemsRequest,
    ): Observable<CartResponse> {
        return __request(OpenAPI, this.http, {
            method: 'POST',
            url: '/v1/cart/{cart_id}/bulk',
            path: {
                'cart_id': cartId,
            },
            body: body,
        });
    }

    /**
     * Attach Customer
     * attaches a customer to the cart by email
     * @param cartId the cart UUID
     * @param body  attach customer
     * @returns CartResponse A successful response.
     * @throws ApiError
     */
    public attachCustomer(
        cartId: string,
        body: AttachCustomerRequest,
    ): Observable<CartResponse> {
        return __request(OpenAPI, this.http, {
            method: 'POST',
            url: '/v1/cart/{cart_id}/customer',
            path: {
                'cart_id': cartId,
            },
            body: body,
        });
    }

    /**
     * Update Customer Detail
     * updates a cart's personal details
     * @param cartId the cart UUID
     * @param body  update customer detail
     * @returns CartResponse A successful response.
     * @throws ApiError
     */
    public updateCustomerDetail(
        cartId: string,
        body: UpdateCustomerDetailRequest,
    ): Observable<CartResponse> {
        return __request(OpenAPI, this.http, {
            method: 'PUT',
            url: '/v1/cart/{cart_id}/customer',
            path: {
                'cart_id': cartId,
            },
            body: body,
        });
    }

    /**
     * Update Status
     * updates a cart's status to: unknown = 0, new = 1, checkout = 2, paid = 3, complete = 4, abandoned = 5
     * @param cartId the cart UUID
     * @param body  update status
     * @returns CartResponse A successful response.
     * @throws ApiError
     */
    public updateStatus(
        cartId: string,
        body: UpdateStatusRequest,
    ): Observable<CartResponse> {
        return __request(OpenAPI, this.http, {
            method: 'PUT',
            url: '/v1/cart/{cart_id}/status',
            path: {
                'cart_id': cartId,
            },
            body: body,
        });
    }

    /**
     * Get By Session Id
     * returns a cart from the session object
     * @param cartId the cart UUID
     * @param sessionId the cart session id
     * @returns CartResponse A successful response.
     * @throws ApiError
     */
    public getBySessionId(
        cartId: string,
        sessionId: string,
    ): Observable<CartResponse> {
        return __request(OpenAPI, this.http, {
            method: 'GET',
            url: '/v1/cart/{cart_id}/{session_id}',
            path: {
                'cart_id': cartId,
                'session_id': sessionId,
            },
        });
    }

    /**
     * Remove Item
     * removes a cart item
     * @param cartId the cart UUID
     * @param sku the item's sku
     * @param body  remove item in cart
     * @returns CartResponse A successful response.
     * @throws ApiError
     */
    public removeItem(
        cartId: string,
        sku: string,
        body: RemoveItemRequest,
    ): Observable<CartResponse> {
        return __request(OpenAPI, this.http, {
            method: 'DELETE',
            url: '/v1/cart/{cart_id}/{sku}',
            path: {
                'cart_id': cartId,
                'sku': sku,
            },
            body: body,
        });
    }

    /**
     * Update Item Quantity
     * updates an item's quantity
     * @param cartId the cart UUID
     * @param sku the item's sku
     * @param body  update item quantity in cart
     * @returns CartResponse A successful response.
     * @throws ApiError
     */
    public updateItemQuantity(
        cartId: string,
        sku: string,
        body: UpdateItemQuantityRequest,
    ): Observable<CartResponse> {
        return __request(OpenAPI, this.http, {
            method: 'PUT',
            url: '/v1/cart/{cart_id}/{sku}',
            path: {
                'cart_id': cartId,
                'sku': sku,
            },
            body: body,
        });
    }

}