/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import type { Observable } from 'rxjs';

import type { CheckForExistingEmailRequest } from '../models/CheckForExistingEmailRequest';
import type { CheckForExistingEmailResponse } from '../models/CheckForExistingEmailResponse';
import type { CreateCustomerRequest } from '../models/CreateCustomerRequest';
import type { CreateCustomerResponse } from '../models/CreateCustomerResponse';
import type { CustomerLoginRequest } from '../models/CustomerLoginRequest';
import type { CustomerLoginResponse } from '../models/CustomerLoginResponse';
import type { GetCustomerResponse } from '../models/GetCustomerResponse';

import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

@Injectable()
export class CustomersService {

    constructor(public readonly http: HttpClient) {}

    /**
     * Login
     * login for customers
     * @returns GetCustomerResponse A successful response.
     * @throws ApiError
     */
    public getCustomer(): Observable<GetCustomerResponse> {
        return __request(OpenAPI, this.http, {
            method: 'GET',
            url: '/v1/customer',
        });
    }

    /**
     * Create Customer
     * creates a new customer
     * @param body  create customer
     * @returns CreateCustomerResponse A successful response.
     * @throws ApiError
     */
    public createCustomer(
        body: CreateCustomerRequest,
    ): Observable<CreateCustomerResponse> {
        return __request(OpenAPI, this.http, {
            method: 'POST',
            url: '/v1/customer',
            body: body,
        });
    }

    /**
     * Check for Existing Email
     * verifies the email address is unique
     * @param body  email
     * @returns CheckForExistingEmailResponse A successful response.
     * @throws ApiError
     */
    public checkForExistingEmail(
        body: CheckForExistingEmailRequest,
    ): Observable<CheckForExistingEmailResponse> {
        return __request(OpenAPI, this.http, {
            method: 'POST',
            url: '/v1/customer/email',
            body: body,
        });
    }

    /**
     * Login
     * login for customers
     * @param body , requests & responses,, login
     * @returns CustomerLoginResponse A successful response.
     * @throws ApiError
     */
    public login(
        body: CustomerLoginRequest,
    ): Observable<CustomerLoginResponse> {
        return __request(OpenAPI, this.http, {
            method: 'POST',
            url: '/v1/customer/login',
            body: body,
        });
    }

}