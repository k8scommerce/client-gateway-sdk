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
import type { ForgotPasswordRequest } from '../models/ForgotPasswordRequest';
import type { ForgotPasswordResponse } from '../models/ForgotPasswordResponse';
import type { GetCustomerResponse } from '../models/GetCustomerResponse';
import type { ResendConfirmEmailRequest } from '../models/ResendConfirmEmailRequest';
import type { ResendConfirmEmailResponse } from '../models/ResendConfirmEmailResponse';
import type { VerifyEmailAddressRequest } from '../models/VerifyEmailAddressRequest';
import type { VerifyEmailAddressResponse } from '../models/VerifyEmailAddressResponse';

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
     * Forgot Password
     * send forgot password email to customer
     * @param body , Emails,, forgot password
     * @returns ForgotPasswordResponse A successful response.
     * @throws ApiError
     */
    public forgotPassword(
        body: ForgotPasswordRequest,
    ): Observable<ForgotPasswordResponse> {
        return __request(OpenAPI, this.http, {
            method: 'POST',
            url: '/v1/customer/forgot-password',
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

    /**
     * Resend Email Address Confirm Email
     * resend email address confirmation email
     * @param body  resend confirm email
     * @returns ResendConfirmEmailResponse A successful response.
     * @throws ApiError
     */
    public resendConfirmEmail(
        body: ResendConfirmEmailRequest,
    ): Observable<ResendConfirmEmailResponse> {
        return __request(OpenAPI, this.http, {
            method: 'POST',
            url: '/v1/customer/resend-confirm-email',
            body: body,
        });
    }

    /**
     * Verify Email Address
     * verifies an email address via code contained in resendConfirmEmail
     * @param body  verify customer email address
     * @returns VerifyEmailAddressResponse A successful response.
     * @throws ApiError
     */
    public verifyEmailAddress(
        body: VerifyEmailAddressRequest,
    ): Observable<VerifyEmailAddressResponse> {
        return __request(OpenAPI, this.http, {
            method: 'POST',
            url: '/v1/customer/verfify-email-address',
            body: body,
        });
    }

}