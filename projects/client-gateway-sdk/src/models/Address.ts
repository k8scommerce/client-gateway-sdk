/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Address = {
    /**
     *  street name, ie: 1723 NW 23rd Ave.
     */
    street: string;
    /**
     *  apartment or suite
     */
    apt_suite?: string;
    /**
     *  city name
     */
    city: string;
    /**
     *  state or province name
     */
    state_province: string;
    /**
     *  IISO 3166-1 alpha-2 country code. https:en.wikipedia.org/wiki/List_of_ISO_3166_country_codes
     */
    country: string;
    /**
     *  postal or zip code
     */
    postal_code: string;
    /**
     *  indicates if this is a default address
     */
    is_default: boolean;
};
