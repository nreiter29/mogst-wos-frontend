/* eslint-disable */
import { useMutation, useQuery, UseMutationOptions, UseQueryOptions } from '@tanstack/react-query';
import { fetchVendure } from './fetchVendure';

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    DateTime: any;
    JSON: any;
    Upload: any;
};

export type ActiveOrderResult = NoActiveOrderError | Order;

export type AddCompanyAddressResult = CompanyAddress | CompanyNotFoundError;

export type AddDocumentToOrderInput = {
    name: Scalars['String'];
    orderId: Scalars['ID'];
    source?: InputMaybe<Scalars['String']>;
    type: Scalars['String'];
};

export type AddDocumentToOrderResult = OrderDocument | OrderNotFoundError;

export type AddPaymentToOrderResult = IneligiblePaymentMethodError | NoActiveOrderError | Order | OrderPaymentStateError | OrderStateTransitionError | PaymentDeclinedError | PaymentFailedError;

export type Address = Node & {
    __typename?: 'Address';
    city?: Maybe<Scalars['String']>;
    company?: Maybe<Scalars['String']>;
    country: Country;
    createdAt: Scalars['DateTime'];
    customFields?: Maybe<Scalars['JSON']>;
    defaultBillingAddress?: Maybe<Scalars['Boolean']>;
    defaultShippingAddress?: Maybe<Scalars['Boolean']>;
    fullName?: Maybe<Scalars['String']>;
    id: Scalars['ID'];
    phoneNumber?: Maybe<Scalars['String']>;
    postalCode?: Maybe<Scalars['String']>;
    province?: Maybe<Scalars['String']>;
    streetLine1: Scalars['String'];
    streetLine2?: Maybe<Scalars['String']>;
    updatedAt: Scalars['DateTime'];
};

export type AddressNotFoundError = ErrorResult & {
    __typename?: 'AddressNotFoundError';
    errorCode: ErrorCode;
    message: Scalars['String'];
};

export type Adjustment = {
    __typename?: 'Adjustment';
    adjustmentSource: Scalars['String'];
    amount: Scalars['Int'];
    description: Scalars['String'];
    type: AdjustmentType;
};

export enum AdjustmentType {
    DistributedOrderPromotion = 'DISTRIBUTED_ORDER_PROMOTION',
    Other = 'OTHER',
    Promotion = 'PROMOTION'
}

/** Returned when attempting to set the Customer for an Order when already logged in. */
export type AlreadyLoggedInError = ErrorResult & {
    __typename?: 'AlreadyLoggedInError';
    errorCode: ErrorCode;
    message: Scalars['String'];
};

export type ApplyCouponCodeResult = CouponCodeExpiredError | CouponCodeInvalidError | CouponCodeLimitError | Order;

export type Asset = Node & {
    __typename?: 'Asset';
    createdAt: Scalars['DateTime'];
    customFields?: Maybe<AssetCustomFields>;
    fileSize: Scalars['Int'];
    focalPoint?: Maybe<Coordinate>;
    height: Scalars['Int'];
    id: Scalars['ID'];
    mimeType: Scalars['String'];
    name: Scalars['String'];
    preview: Scalars['String'];
    source: Scalars['String'];
    type: AssetType;
    updatedAt: Scalars['DateTime'];
    width: Scalars['Int'];
};

export type AssetCustomFields = {
    __typename?: 'AssetCustomFields';
    pimcoreId?: Maybe<Scalars['Int']>;
};

export type AssetList = PaginatedList & {
    __typename?: 'AssetList';
    items: Array<Asset>;
    totalItems: Scalars['Int'];
};

export enum AssetType {
    Binary = 'BINARY',
    Image = 'IMAGE',
    Video = 'VIDEO'
}

export type AuthenticationInput = {
    native?: InputMaybe<NativeAuthInput>;
};

export type AuthenticationMethod = Node & {
    __typename?: 'AuthenticationMethod';
    createdAt: Scalars['DateTime'];
    id: Scalars['ID'];
    strategy: Scalars['String'];
    updatedAt: Scalars['DateTime'];
};

export type AuthenticationResult = CurrentUser | InvalidCredentialsError | NotVerifiedError;

export type B2BRegisterInput = {
    company?: InputMaybe<RegisterCompanyInput>;
    customer: RegisterCustomerInput;
};

export type Block = Node & {
    __typename?: 'Block';
    id: Scalars['ID'];
    itemHeadline?: Maybe<Scalars['String']>;
    itemText?: Maybe<Scalars['String']>;
};

export type BooleanCustomFieldConfig = CustomField & {
    __typename?: 'BooleanCustomFieldConfig';
    description?: Maybe<Array<LocalizedString>>;
    internal?: Maybe<Scalars['Boolean']>;
    label?: Maybe<Array<LocalizedString>>;
    list: Scalars['Boolean'];
    name: Scalars['String'];
    nullable?: Maybe<Scalars['Boolean']>;
    readonly?: Maybe<Scalars['Boolean']>;
    type: Scalars['String'];
    ui?: Maybe<Scalars['JSON']>;
};

/** Operators for filtering on a list of Boolean fields */
export type BooleanListOperators = {
    inList: Scalars['Boolean'];
};

/** Operators for filtering on a Boolean field */
export type BooleanOperators = {
    eq?: InputMaybe<Scalars['Boolean']>;
};

export type Channel = Node & {
    __typename?: 'Channel';
    code: Scalars['String'];
    createdAt: Scalars['DateTime'];
    currencyCode: CurrencyCode;
    customFields?: Maybe<Scalars['JSON']>;
    defaultLanguageCode: LanguageCode;
    defaultShippingZone?: Maybe<Zone>;
    defaultTaxZone?: Maybe<Zone>;
    id: Scalars['ID'];
    pricesIncludeTax: Scalars['Boolean'];
    token: Scalars['String'];
    updatedAt: Scalars['DateTime'];
};

export type Collection = Node & {
    __typename?: 'Collection';
    assets: Array<Asset>;
    breadcrumbs: Array<CollectionBreadcrumb>;
    children?: Maybe<Array<Collection>>;
    createdAt: Scalars['DateTime'];
    customFields?: Maybe<CollectionCustomFields>;
    description: Scalars['String'];
    featuredAsset?: Maybe<Asset>;
    filters: Array<ConfigurableOperation>;
    id: Scalars['ID'];
    languageCode?: Maybe<LanguageCode>;
    name: Scalars['String'];
    parent?: Maybe<Collection>;
    position: Scalars['Int'];
    productVariants: ProductVariantList;
    slug: Scalars['String'];
    translations: Array<CollectionTranslation>;
    updatedAt: Scalars['DateTime'];
};


export type CollectionProductVariantsArgs = {
    options?: InputMaybe<ProductVariantListOptions>;
};

export type CollectionBreadcrumb = {
    __typename?: 'CollectionBreadcrumb';
    id: Scalars['ID'];
    name: Scalars['String'];
    slug: Scalars['String'];
};

export type CollectionCustomFields = {
    __typename?: 'CollectionCustomFields';
    breadcrumbs?: Maybe<Scalars['String']>;
    hasDetailPage?: Maybe<Scalars['Boolean']>;
    pimcoreId?: Maybe<Scalars['Int']>;
    seoDescription?: Maybe<Scalars['String']>;
};

export type CollectionFilterParameter = {
    breadcrumbs?: InputMaybe<StringOperators>;
    createdAt?: InputMaybe<DateOperators>;
    description?: InputMaybe<StringOperators>;
    hasDetailPage?: InputMaybe<BooleanOperators>;
    id?: InputMaybe<IdOperators>;
    languageCode?: InputMaybe<StringOperators>;
    name?: InputMaybe<StringOperators>;
    pimcoreId?: InputMaybe<NumberOperators>;
    position?: InputMaybe<NumberOperators>;
    seoDescription?: InputMaybe<StringOperators>;
    slug?: InputMaybe<StringOperators>;
    updatedAt?: InputMaybe<DateOperators>;
};

export type CollectionList = PaginatedList & {
    __typename?: 'CollectionList';
    items: Array<Collection>;
    totalItems: Scalars['Int'];
};

export type CollectionListOptions = {
    /** Allows the results to be filtered */
    filter?: InputMaybe<CollectionFilterParameter>;
    /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
    filterOperator?: InputMaybe<LogicalOperator>;
    /** Skips the first n results, for use in pagination */
    skip?: InputMaybe<Scalars['Int']>;
    /** Specifies which properties to sort the results by */
    sort?: InputMaybe<CollectionSortParameter>;
    /** Takes n results, for use in pagination */
    take?: InputMaybe<Scalars['Int']>;
};

/**
 * Which Collections are present in the products returned
 * by the search, and in what quantity.
 */
export type CollectionResult = {
    __typename?: 'CollectionResult';
    collection: Collection;
    count: Scalars['Int'];
};

export type CollectionSortParameter = {
    breadcrumbs?: InputMaybe<SortOrder>;
    createdAt?: InputMaybe<SortOrder>;
    description?: InputMaybe<SortOrder>;
    hasDetailPage?: InputMaybe<SortOrder>;
    id?: InputMaybe<SortOrder>;
    name?: InputMaybe<SortOrder>;
    pimcoreId?: InputMaybe<SortOrder>;
    position?: InputMaybe<SortOrder>;
    seoDescription?: InputMaybe<SortOrder>;
    slug?: InputMaybe<SortOrder>;
    updatedAt?: InputMaybe<SortOrder>;
};

export type CollectionTranslation = {
    __typename?: 'CollectionTranslation';
    createdAt: Scalars['DateTime'];
    customFields?: Maybe<CollectionTranslationCustomFields>;
    description: Scalars['String'];
    id: Scalars['ID'];
    languageCode: LanguageCode;
    name: Scalars['String'];
    slug: Scalars['String'];
    updatedAt: Scalars['DateTime'];
};

export type CollectionTranslationCustomFields = {
    __typename?: 'CollectionTranslationCustomFields';
    seoDescription?: Maybe<Scalars['String']>;
};

export type Company = Node & {
    __typename?: 'Company';
    addresses: Array<CompanyAddress>;
    discounts?: Maybe<Array<Maybe<CustomerDiscount>>>;
    erpId?: Maybe<Scalars['String']>;
    id: Scalars['ID'];
    name: Scalars['String'];
    organization?: Maybe<Organization>;
    termsOfPayment?: Maybe<TermsOfPayment>;
    ust?: Maybe<Scalars['String']>;
    vat?: Maybe<Scalars['String']>;
};

export type CompanyAddress = Node & {
    __typename?: 'CompanyAddress';
    city?: Maybe<Scalars['String']>;
    countryCode?: Maybe<Scalars['String']>;
    defaultBillingAddress: Scalars['Boolean'];
    defaultShippingAddress: Scalars['Boolean'];
    fullName: Scalars['String'];
    id: Scalars['ID'];
    phoneNumber?: Maybe<Scalars['String']>;
    postalCode?: Maybe<Scalars['String']>;
    province?: Maybe<Scalars['String']>;
    streetLine1: Scalars['String'];
    streetLine2?: Maybe<Scalars['String']>;
};

export type CompanyList = PaginatedList & {
    __typename?: 'CompanyList';
    items: Array<Company>;
    totalItems: Scalars['Int'];
};

export type CompanyListOptions = {
    skip?: InputMaybe<Scalars['Int']>;
    take?: InputMaybe<Scalars['Int']>;
};

export type CompanyNotFoundError = ErrorResult & {
    __typename?: 'CompanyNotFoundError';
    errorCode: ErrorCode;
    message: Scalars['String'];
};

export type ConfigArg = {
    __typename?: 'ConfigArg';
    name: Scalars['String'];
    value: Scalars['String'];
};

export type ConfigArgDefinition = {
    __typename?: 'ConfigArgDefinition';
    defaultValue?: Maybe<Scalars['JSON']>;
    description?: Maybe<Scalars['String']>;
    label?: Maybe<Scalars['String']>;
    list: Scalars['Boolean'];
    name: Scalars['String'];
    required: Scalars['Boolean'];
    type: Scalars['String'];
    ui?: Maybe<Scalars['JSON']>;
};

export type ConfigArgInput = {
    name: Scalars['String'];
    /** A JSON stringified representation of the actual value */
    value: Scalars['String'];
};

export type ConfigurableOperation = {
    __typename?: 'ConfigurableOperation';
    args: Array<ConfigArg>;
    code: Scalars['String'];
};

export type ConfigurableOperationDefinition = {
    __typename?: 'ConfigurableOperationDefinition';
    args: Array<ConfigArgDefinition>;
    code: Scalars['String'];
    description: Scalars['String'];
};

export type ConfigurableOperationInput = {
    arguments: Array<ConfigArgInput>;
    code: Scalars['String'];
};

export type Coordinate = {
    __typename?: 'Coordinate';
    x: Scalars['Float'];
    y: Scalars['Float'];
};

export type Country = Node & {
    __typename?: 'Country';
    code: Scalars['String'];
    createdAt: Scalars['DateTime'];
    customFields?: Maybe<Scalars['JSON']>;
    enabled: Scalars['Boolean'];
    id: Scalars['ID'];
    languageCode: LanguageCode;
    name: Scalars['String'];
    translations: Array<CountryTranslation>;
    updatedAt: Scalars['DateTime'];
};

export type CountryList = PaginatedList & {
    __typename?: 'CountryList';
    items: Array<Country>;
    totalItems: Scalars['Int'];
};

export type CountryTranslation = {
    __typename?: 'CountryTranslation';
    createdAt: Scalars['DateTime'];
    id: Scalars['ID'];
    languageCode: LanguageCode;
    name: Scalars['String'];
    updatedAt: Scalars['DateTime'];
};

/** Returned if the provided coupon code is invalid */
export type CouponCodeExpiredError = ErrorResult & {
    __typename?: 'CouponCodeExpiredError';
    couponCode: Scalars['String'];
    errorCode: ErrorCode;
    message: Scalars['String'];
};

/** Returned if the provided coupon code is invalid */
export type CouponCodeInvalidError = ErrorResult & {
    __typename?: 'CouponCodeInvalidError';
    couponCode: Scalars['String'];
    errorCode: ErrorCode;
    message: Scalars['String'];
};

/** Returned if the provided coupon code is invalid */
export type CouponCodeLimitError = ErrorResult & {
    __typename?: 'CouponCodeLimitError';
    couponCode: Scalars['String'];
    errorCode: ErrorCode;
    limit: Scalars['Int'];
    message: Scalars['String'];
};

export type CreateAddressInput = {
    city?: InputMaybe<Scalars['String']>;
    company?: InputMaybe<Scalars['String']>;
    countryCode: Scalars['String'];
    customFields?: InputMaybe<Scalars['JSON']>;
    defaultBillingAddress?: InputMaybe<Scalars['Boolean']>;
    defaultShippingAddress?: InputMaybe<Scalars['Boolean']>;
    fullName?: InputMaybe<Scalars['String']>;
    phoneNumber?: InputMaybe<Scalars['String']>;
    postalCode?: InputMaybe<Scalars['String']>;
    province?: InputMaybe<Scalars['String']>;
    streetLine1: Scalars['String'];
    streetLine2?: InputMaybe<Scalars['String']>;
};

export type CreateCompanyAddressInput = {
    city?: InputMaybe<Scalars['String']>;
    countryCode: Scalars['String'];
    fullName?: InputMaybe<Scalars['String']>;
    phoneNumber?: InputMaybe<Scalars['String']>;
    postalCode?: InputMaybe<Scalars['String']>;
    province?: InputMaybe<Scalars['String']>;
    streetLine1: Scalars['String'];
    streetLine2?: InputMaybe<Scalars['String']>;
};

export type CreateCustomerCustomFieldsInput = {
    companyId?: InputMaybe<Scalars['ID']>;
    erpId?: InputMaybe<Scalars['String']>;
    salutation?: InputMaybe<Scalars['String']>;
};

export type CreateCustomerInput = {
    customFields?: InputMaybe<CreateCustomerCustomFieldsInput>;
    emailAddress: Scalars['String'];
    firstName: Scalars['String'];
    lastName: Scalars['String'];
    phoneNumber?: InputMaybe<Scalars['String']>;
    title?: InputMaybe<Scalars['String']>;
};

/**
 * @description
 * ISO 4217 currency code
 *
 * @docsCategory common
 */
export enum CurrencyCode {
    /** United Arab Emirates dirham */
    Aed = 'AED',
    /** Afghan afghani */
    Afn = 'AFN',
    /** Albanian lek */
    All = 'ALL',
    /** Armenian dram */
    Amd = 'AMD',
    /** Netherlands Antillean guilder */
    Ang = 'ANG',
    /** Angolan kwanza */
    Aoa = 'AOA',
    /** Argentine peso */
    Ars = 'ARS',
    /** Australian dollar */
    Aud = 'AUD',
    /** Aruban florin */
    Awg = 'AWG',
    /** Azerbaijani manat */
    Azn = 'AZN',
    /** Bosnia and Herzegovina convertible mark */
    Bam = 'BAM',
    /** Barbados dollar */
    Bbd = 'BBD',
    /** Bangladeshi taka */
    Bdt = 'BDT',
    /** Bulgarian lev */
    Bgn = 'BGN',
    /** Bahraini dinar */
    Bhd = 'BHD',
    /** Burundian franc */
    Bif = 'BIF',
    /** Bermudian dollar */
    Bmd = 'BMD',
    /** Brunei dollar */
    Bnd = 'BND',
    /** Boliviano */
    Bob = 'BOB',
    /** Brazilian real */
    Brl = 'BRL',
    /** Bahamian dollar */
    Bsd = 'BSD',
    /** Bhutanese ngultrum */
    Btn = 'BTN',
    /** Botswana pula */
    Bwp = 'BWP',
    /** Belarusian ruble */
    Byn = 'BYN',
    /** Belize dollar */
    Bzd = 'BZD',
    /** Canadian dollar */
    Cad = 'CAD',
    /** Congolese franc */
    Cdf = 'CDF',
    /** Swiss franc */
    Chf = 'CHF',
    /** Chilean peso */
    Clp = 'CLP',
    /** Renminbi (Chinese) yuan */
    Cny = 'CNY',
    /** Colombian peso */
    Cop = 'COP',
    /** Costa Rican colon */
    Crc = 'CRC',
    /** Cuban convertible peso */
    Cuc = 'CUC',
    /** Cuban peso */
    Cup = 'CUP',
    /** Cape Verde escudo */
    Cve = 'CVE',
    /** Czech koruna */
    Czk = 'CZK',
    /** Djiboutian franc */
    Djf = 'DJF',
    /** Danish krone */
    Dkk = 'DKK',
    /** Dominican peso */
    Dop = 'DOP',
    /** Algerian dinar */
    Dzd = 'DZD',
    /** Egyptian pound */
    Egp = 'EGP',
    /** Eritrean nakfa */
    Ern = 'ERN',
    /** Ethiopian birr */
    Etb = 'ETB',
    /** Euro */
    Eur = 'EUR',
    /** Fiji dollar */
    Fjd = 'FJD',
    /** Falkland Islands pound */
    Fkp = 'FKP',
    /** Pound sterling */
    Gbp = 'GBP',
    /** Georgian lari */
    Gel = 'GEL',
    /** Ghanaian cedi */
    Ghs = 'GHS',
    /** Gibraltar pound */
    Gip = 'GIP',
    /** Gambian dalasi */
    Gmd = 'GMD',
    /** Guinean franc */
    Gnf = 'GNF',
    /** Guatemalan quetzal */
    Gtq = 'GTQ',
    /** Guyanese dollar */
    Gyd = 'GYD',
    /** Hong Kong dollar */
    Hkd = 'HKD',
    /** Honduran lempira */
    Hnl = 'HNL',
    /** Croatian kuna */
    Hrk = 'HRK',
    /** Haitian gourde */
    Htg = 'HTG',
    /** Hungarian forint */
    Huf = 'HUF',
    /** Indonesian rupiah */
    Idr = 'IDR',
    /** Israeli new shekel */
    Ils = 'ILS',
    /** Indian rupee */
    Inr = 'INR',
    /** Iraqi dinar */
    Iqd = 'IQD',
    /** Iranian rial */
    Irr = 'IRR',
    /** Icelandic króna */
    Isk = 'ISK',
    /** Jamaican dollar */
    Jmd = 'JMD',
    /** Jordanian dinar */
    Jod = 'JOD',
    /** Japanese yen */
    Jpy = 'JPY',
    /** Kenyan shilling */
    Kes = 'KES',
    /** Kyrgyzstani som */
    Kgs = 'KGS',
    /** Cambodian riel */
    Khr = 'KHR',
    /** Comoro franc */
    Kmf = 'KMF',
    /** North Korean won */
    Kpw = 'KPW',
    /** South Korean won */
    Krw = 'KRW',
    /** Kuwaiti dinar */
    Kwd = 'KWD',
    /** Cayman Islands dollar */
    Kyd = 'KYD',
    /** Kazakhstani tenge */
    Kzt = 'KZT',
    /** Lao kip */
    Lak = 'LAK',
    /** Lebanese pound */
    Lbp = 'LBP',
    /** Sri Lankan rupee */
    Lkr = 'LKR',
    /** Liberian dollar */
    Lrd = 'LRD',
    /** Lesotho loti */
    Lsl = 'LSL',
    /** Libyan dinar */
    Lyd = 'LYD',
    /** Moroccan dirham */
    Mad = 'MAD',
    /** Moldovan leu */
    Mdl = 'MDL',
    /** Malagasy ariary */
    Mga = 'MGA',
    /** Macedonian denar */
    Mkd = 'MKD',
    /** Myanmar kyat */
    Mmk = 'MMK',
    /** Mongolian tögrög */
    Mnt = 'MNT',
    /** Macanese pataca */
    Mop = 'MOP',
    /** Mauritanian ouguiya */
    Mru = 'MRU',
    /** Mauritian rupee */
    Mur = 'MUR',
    /** Maldivian rufiyaa */
    Mvr = 'MVR',
    /** Malawian kwacha */
    Mwk = 'MWK',
    /** Mexican peso */
    Mxn = 'MXN',
    /** Malaysian ringgit */
    Myr = 'MYR',
    /** Mozambican metical */
    Mzn = 'MZN',
    /** Namibian dollar */
    Nad = 'NAD',
    /** Nigerian naira */
    Ngn = 'NGN',
    /** Nicaraguan córdoba */
    Nio = 'NIO',
    /** Norwegian krone */
    Nok = 'NOK',
    /** Nepalese rupee */
    Npr = 'NPR',
    /** New Zealand dollar */
    Nzd = 'NZD',
    /** Omani rial */
    Omr = 'OMR',
    /** Panamanian balboa */
    Pab = 'PAB',
    /** Peruvian sol */
    Pen = 'PEN',
    /** Papua New Guinean kina */
    Pgk = 'PGK',
    /** Philippine peso */
    Php = 'PHP',
    /** Pakistani rupee */
    Pkr = 'PKR',
    /** Polish złoty */
    Pln = 'PLN',
    /** Paraguayan guaraní */
    Pyg = 'PYG',
    /** Qatari riyal */
    Qar = 'QAR',
    /** Romanian leu */
    Ron = 'RON',
    /** Serbian dinar */
    Rsd = 'RSD',
    /** Russian ruble */
    Rub = 'RUB',
    /** Rwandan franc */
    Rwf = 'RWF',
    /** Saudi riyal */
    Sar = 'SAR',
    /** Solomon Islands dollar */
    Sbd = 'SBD',
    /** Seychelles rupee */
    Scr = 'SCR',
    /** Sudanese pound */
    Sdg = 'SDG',
    /** Swedish krona/kronor */
    Sek = 'SEK',
    /** Singapore dollar */
    Sgd = 'SGD',
    /** Saint Helena pound */
    Shp = 'SHP',
    /** Sierra Leonean leone */
    Sll = 'SLL',
    /** Somali shilling */
    Sos = 'SOS',
    /** Surinamese dollar */
    Srd = 'SRD',
    /** South Sudanese pound */
    Ssp = 'SSP',
    /** São Tomé and Príncipe dobra */
    Stn = 'STN',
    /** Salvadoran colón */
    Svc = 'SVC',
    /** Syrian pound */
    Syp = 'SYP',
    /** Swazi lilangeni */
    Szl = 'SZL',
    /** Thai baht */
    Thb = 'THB',
    /** Tajikistani somoni */
    Tjs = 'TJS',
    /** Turkmenistan manat */
    Tmt = 'TMT',
    /** Tunisian dinar */
    Tnd = 'TND',
    /** Tongan paʻanga */
    Top = 'TOP',
    /** Turkish lira */
    Try = 'TRY',
    /** Trinidad and Tobago dollar */
    Ttd = 'TTD',
    /** New Taiwan dollar */
    Twd = 'TWD',
    /** Tanzanian shilling */
    Tzs = 'TZS',
    /** Ukrainian hryvnia */
    Uah = 'UAH',
    /** Ugandan shilling */
    Ugx = 'UGX',
    /** United States dollar */
    Usd = 'USD',
    /** Uruguayan peso */
    Uyu = 'UYU',
    /** Uzbekistan som */
    Uzs = 'UZS',
    /** Venezuelan bolívar soberano */
    Ves = 'VES',
    /** Vietnamese đồng */
    Vnd = 'VND',
    /** Vanuatu vatu */
    Vuv = 'VUV',
    /** Samoan tala */
    Wst = 'WST',
    /** CFA franc BEAC */
    Xaf = 'XAF',
    /** East Caribbean dollar */
    Xcd = 'XCD',
    /** CFA franc BCEAO */
    Xof = 'XOF',
    /** CFP franc (franc Pacifique) */
    Xpf = 'XPF',
    /** Yemeni rial */
    Yer = 'YER',
    /** South African rand */
    Zar = 'ZAR',
    /** Zambian kwacha */
    Zmw = 'ZMW',
    /** Zimbabwean dollar */
    Zwl = 'ZWL'
}

export type CurrentUser = {
    __typename?: 'CurrentUser';
    channels: Array<CurrentUserChannel>;
    id: Scalars['ID'];
    identifier: Scalars['String'];
};

export type CurrentUserChannel = {
    __typename?: 'CurrentUserChannel';
    code: Scalars['String'];
    id: Scalars['ID'];
    permissions: Array<Permission>;
    token: Scalars['String'];
};

export type CustomField = {
    description?: Maybe<Array<LocalizedString>>;
    internal?: Maybe<Scalars['Boolean']>;
    label?: Maybe<Array<LocalizedString>>;
    list: Scalars['Boolean'];
    name: Scalars['String'];
    nullable?: Maybe<Scalars['Boolean']>;
    readonly?: Maybe<Scalars['Boolean']>;
    type: Scalars['String'];
    ui?: Maybe<Scalars['JSON']>;
};

export type CustomFieldConfig = BooleanCustomFieldConfig | DateTimeCustomFieldConfig | FloatCustomFieldConfig | IntCustomFieldConfig | LocaleStringCustomFieldConfig | RelationCustomFieldConfig | StringCustomFieldConfig | TextCustomFieldConfig;

export type Customer = Node & {
    __typename?: 'Customer';
    addresses?: Maybe<Array<Address>>;
    createdAt: Scalars['DateTime'];
    customFields?: Maybe<CustomerCustomFields>;
    emailAddress: Scalars['String'];
    firstName: Scalars['String'];
    groups: Array<CustomerGroup>;
    id: Scalars['ID'];
    lastName: Scalars['String'];
    orders: OrderList;
    phoneNumber?: Maybe<Scalars['String']>;
    title?: Maybe<Scalars['String']>;
    updatedAt: Scalars['DateTime'];
    user?: Maybe<User>;
};


export type CustomerOrdersArgs = {
    options?: InputMaybe<OrderListOptions>;
};

export type CustomerCustomFields = {
    __typename?: 'CustomerCustomFields';
    company?: Maybe<Company>;
    erpId?: Maybe<Scalars['String']>;
    pimcoreId?: Maybe<Scalars['Int']>;
    salutation?: Maybe<Scalars['String']>;
};

export type CustomerDiscount = Node & {
    __typename?: 'CustomerDiscount';
    customerDiscountPercentages?: Maybe<Array<Maybe<CustomerDiscountPercentage>>>;
    discountGroup?: Maybe<Scalars['String']>;
    discountType?: Maybe<Scalars['String']>;
    discountType2?: Maybe<Scalars['String']>;
    erpId?: Maybe<Scalars['String']>;
    id: Scalars['ID'];
    priceType?: Maybe<Scalars['String']>;
};

export type CustomerDiscountPercentage = Node & {
    __typename?: 'CustomerDiscountPercentage';
    id: Scalars['ID'];
    index?: Maybe<Scalars['Int']>;
    value?: Maybe<Scalars['Int']>;
};

export type CustomerFilterParameter = {
    createdAt?: InputMaybe<DateOperators>;
    emailAddress?: InputMaybe<StringOperators>;
    erpId?: InputMaybe<StringOperators>;
    firstName?: InputMaybe<StringOperators>;
    id?: InputMaybe<IdOperators>;
    lastName?: InputMaybe<StringOperators>;
    phoneNumber?: InputMaybe<StringOperators>;
    pimcoreId?: InputMaybe<NumberOperators>;
    salutation?: InputMaybe<StringOperators>;
    title?: InputMaybe<StringOperators>;
    updatedAt?: InputMaybe<DateOperators>;
};

export type CustomerFoundError = ErrorResult & {
    __typename?: 'CustomerFoundError';
    errorCode: ErrorCode;
    message: Scalars['String'];
};

export type CustomerGroup = Node & {
    __typename?: 'CustomerGroup';
    createdAt: Scalars['DateTime'];
    customFields?: Maybe<Scalars['JSON']>;
    customers: CustomerList;
    id: Scalars['ID'];
    name: Scalars['String'];
    updatedAt: Scalars['DateTime'];
};


export type CustomerGroupCustomersArgs = {
    options?: InputMaybe<CustomerListOptions>;
};

export type CustomerList = PaginatedList & {
    __typename?: 'CustomerList';
    items: Array<Customer>;
    totalItems: Scalars['Int'];
};

export type CustomerListOptions = {
    /** Allows the results to be filtered */
    filter?: InputMaybe<CustomerFilterParameter>;
    /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
    filterOperator?: InputMaybe<LogicalOperator>;
    /** Skips the first n results, for use in pagination */
    skip?: InputMaybe<Scalars['Int']>;
    /** Specifies which properties to sort the results by */
    sort?: InputMaybe<CustomerSortParameter>;
    /** Takes n results, for use in pagination */
    take?: InputMaybe<Scalars['Int']>;
};

export type CustomerNotFoundError = ErrorResult & {
    __typename?: 'CustomerNotFoundError';
    errorCode: ErrorCode;
    message: Scalars['String'];
};

export type CustomerSortParameter = {
    company?: InputMaybe<SortOrder>;
    createdAt?: InputMaybe<SortOrder>;
    emailAddress?: InputMaybe<SortOrder>;
    erpId?: InputMaybe<SortOrder>;
    firstName?: InputMaybe<SortOrder>;
    id?: InputMaybe<SortOrder>;
    lastName?: InputMaybe<SortOrder>;
    phoneNumber?: InputMaybe<SortOrder>;
    pimcoreId?: InputMaybe<SortOrder>;
    salutation?: InputMaybe<SortOrder>;
    title?: InputMaybe<SortOrder>;
    updatedAt?: InputMaybe<SortOrder>;
};

export type CustomerSpecificPrice = {
    __typename?: 'CustomerSpecificPrice';
    basePrice: Scalars['Int'];
    price: Scalars['Int'];
};

/** Operators for filtering on a list of Date fields */
export type DateListOperators = {
    inList: Scalars['DateTime'];
};

/** Operators for filtering on a DateTime field */
export type DateOperators = {
    after?: InputMaybe<Scalars['DateTime']>;
    before?: InputMaybe<Scalars['DateTime']>;
    between?: InputMaybe<DateRange>;
    eq?: InputMaybe<Scalars['DateTime']>;
};

export type DateRange = {
    end: Scalars['DateTime'];
    start: Scalars['DateTime'];
};

/**
 * Expects the same validation formats as the `<input type="datetime-local">` HTML element.
 * See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/datetime-local#Additional_attributes
 */
export type DateTimeCustomFieldConfig = CustomField & {
    __typename?: 'DateTimeCustomFieldConfig';
    description?: Maybe<Array<LocalizedString>>;
    internal?: Maybe<Scalars['Boolean']>;
    label?: Maybe<Array<LocalizedString>>;
    list: Scalars['Boolean'];
    max?: Maybe<Scalars['String']>;
    min?: Maybe<Scalars['String']>;
    name: Scalars['String'];
    nullable?: Maybe<Scalars['Boolean']>;
    readonly?: Maybe<Scalars['Boolean']>;
    step?: Maybe<Scalars['Int']>;
    type: Scalars['String'];
    ui?: Maybe<Scalars['JSON']>;
};

export type DeleteCompanyAddressResult = AddressNotFoundError | Success;

export type DeleteCompanyResult = CompanyNotFoundError | CustomerFoundError | DeleteResult;

export type DeleteOrderDocumentResult = OrderDocumentNotFoundError | Success;

export type DeleteResult = {
    __typename?: 'DeleteResult';
    affected?: Maybe<Scalars['Int']>;
};

export type DeletionResponse = {
    __typename?: 'DeletionResponse';
    message?: Maybe<Scalars['String']>;
    result: DeletionResult;
};

export enum DeletionResult {
    /** The entity was successfully deleted */
    Deleted = 'DELETED',
    /** Deletion did not take place, reason given in message */
    NotDeleted = 'NOT_DELETED'
}

export type Discount = {
    __typename?: 'Discount';
    adjustmentSource: Scalars['String'];
    amount: Scalars['Int'];
    amountWithTax: Scalars['Int'];
    description: Scalars['String'];
    type: AdjustmentType;
};

export type Download = Node & {
    __typename?: 'Download';
    fileName: Scalars['String'];
    fileSize?: Maybe<Scalars['Int']>;
    id: Scalars['ID'];
    path: Scalars['String'];
};

/** Returned when attempting to create a Customer with an email address already registered to an existing User. */
export type EmailAddressConflictError = ErrorResult & {
    __typename?: 'EmailAddressConflictError';
    errorCode: ErrorCode;
    message: Scalars['String'];
};

export enum ErrorCode {
    AddressNotFoundError = 'ADDRESS_NOT_FOUND_ERROR',
    AlreadyLoggedInError = 'ALREADY_LOGGED_IN_ERROR',
    CompanyNotFoundError = 'COMPANY_NOT_FOUND_ERROR',
    CouponCodeExpiredError = 'COUPON_CODE_EXPIRED_ERROR',
    CouponCodeInvalidError = 'COUPON_CODE_INVALID_ERROR',
    CouponCodeLimitError = 'COUPON_CODE_LIMIT_ERROR',
    CustomerFoundError = 'CUSTOMER_FOUND_ERROR',
    CustomerNotFoundError = 'CUSTOMER_NOT_FOUND_ERROR',
    EmailAddressConflictError = 'EMAIL_ADDRESS_CONFLICT_ERROR',
    IdentifierChangeTokenExpiredError = 'IDENTIFIER_CHANGE_TOKEN_EXPIRED_ERROR',
    IdentifierChangeTokenInvalidError = 'IDENTIFIER_CHANGE_TOKEN_INVALID_ERROR',
    IneligiblePaymentMethodError = 'INELIGIBLE_PAYMENT_METHOD_ERROR',
    IneligibleShippingMethodError = 'INELIGIBLE_SHIPPING_METHOD_ERROR',
    InsufficientStockError = 'INSUFFICIENT_STOCK_ERROR',
    InvalidCredentialsError = 'INVALID_CREDENTIALS_ERROR',
    InvalidVatError = 'INVALID_VAT_ERROR',
    MissingPasswordError = 'MISSING_PASSWORD_ERROR',
    NativeAuthStrategyError = 'NATIVE_AUTH_STRATEGY_ERROR',
    NegativeQuantityError = 'NEGATIVE_QUANTITY_ERROR',
    NotAllowedError = 'NOT_ALLOWED_ERROR',
    NotVerifiedError = 'NOT_VERIFIED_ERROR',
    NoActiveOrderError = 'NO_ACTIVE_ORDER_ERROR',
    NoChannelForCountryCodeError = 'NO_CHANNEL_FOR_COUNTRY_CODE_ERROR',
    OrderDocumentNotFoundError = 'ORDER_DOCUMENT_NOT_FOUND_ERROR',
    OrderLimitError = 'ORDER_LIMIT_ERROR',
    OrderModificationError = 'ORDER_MODIFICATION_ERROR',
    OrderNotFoundError = 'ORDER_NOT_FOUND_ERROR',
    OrderPaymentStateError = 'ORDER_PAYMENT_STATE_ERROR',
    OrderStateTransitionError = 'ORDER_STATE_TRANSITION_ERROR',
    OrganizationNotFoundError = 'ORGANIZATION_NOT_FOUND_ERROR',
    PasswordAlreadySetError = 'PASSWORD_ALREADY_SET_ERROR',
    PasswordResetTokenExpiredError = 'PASSWORD_RESET_TOKEN_EXPIRED_ERROR',
    PasswordResetTokenInvalidError = 'PASSWORD_RESET_TOKEN_INVALID_ERROR',
    PasswordValidationError = 'PASSWORD_VALIDATION_ERROR',
    PaymentDeclinedError = 'PAYMENT_DECLINED_ERROR',
    PaymentFailedError = 'PAYMENT_FAILED_ERROR',
    UnknownError = 'UNKNOWN_ERROR',
    UserNotFoundError = 'USER_NOT_FOUND_ERROR',
    VerificationTokenExpiredError = 'VERIFICATION_TOKEN_EXPIRED_ERROR',
    VerificationTokenInvalidError = 'VERIFICATION_TOKEN_INVALID_ERROR'
}

export type ErrorResult = {
    errorCode: ErrorCode;
    message: Scalars['String'];
};

export type Facet = Node & {
    __typename?: 'Facet';
    code: Scalars['String'];
    createdAt: Scalars['DateTime'];
    customFields?: Maybe<Scalars['JSON']>;
    id: Scalars['ID'];
    languageCode: LanguageCode;
    name: Scalars['String'];
    translations: Array<FacetTranslation>;
    updatedAt: Scalars['DateTime'];
    values: Array<FacetValue>;
};

export type FacetCountData = {
    __typename?: 'FacetCountData';
    counts: Array<FacetCountItem>;
    fieldName: Scalars['String'];
    stats?: Maybe<FacetCountStats>;
};

export type FacetCountItem = {
    __typename?: 'FacetCountItem';
    count: Scalars['Int'];
    highlighted: Scalars['String'];
    value: Scalars['String'];
};

export type FacetCountStats = {
    __typename?: 'FacetCountStats';
    avg: Scalars['Float'];
    max: Scalars['Float'];
    min: Scalars['Float'];
    sum: Scalars['Float'];
};

export type FacetFilterParameter = {
    code?: InputMaybe<StringOperators>;
    createdAt?: InputMaybe<DateOperators>;
    id?: InputMaybe<IdOperators>;
    languageCode?: InputMaybe<StringOperators>;
    name?: InputMaybe<StringOperators>;
    updatedAt?: InputMaybe<DateOperators>;
};

export type FacetList = PaginatedList & {
    __typename?: 'FacetList';
    items: Array<Facet>;
    totalItems: Scalars['Int'];
};

export type FacetListOptions = {
    /** Allows the results to be filtered */
    filter?: InputMaybe<FacetFilterParameter>;
    /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
    filterOperator?: InputMaybe<LogicalOperator>;
    /** Skips the first n results, for use in pagination */
    skip?: InputMaybe<Scalars['Int']>;
    /** Specifies which properties to sort the results by */
    sort?: InputMaybe<FacetSortParameter>;
    /** Takes n results, for use in pagination */
    take?: InputMaybe<Scalars['Int']>;
};

export type FacetSortParameter = {
    code?: InputMaybe<SortOrder>;
    createdAt?: InputMaybe<SortOrder>;
    id?: InputMaybe<SortOrder>;
    name?: InputMaybe<SortOrder>;
    updatedAt?: InputMaybe<SortOrder>;
};

export type FacetTranslation = {
    __typename?: 'FacetTranslation';
    createdAt: Scalars['DateTime'];
    id: Scalars['ID'];
    languageCode: LanguageCode;
    name: Scalars['String'];
    updatedAt: Scalars['DateTime'];
};

export type FacetValue = Node & {
    __typename?: 'FacetValue';
    code: Scalars['String'];
    createdAt: Scalars['DateTime'];
    customFields?: Maybe<Scalars['JSON']>;
    facet: Facet;
    id: Scalars['ID'];
    languageCode: LanguageCode;
    name: Scalars['String'];
    translations: Array<FacetValueTranslation>;
    updatedAt: Scalars['DateTime'];
};

/**
 * Used to construct boolean expressions for filtering search results
 * by FacetValue ID. Examples:
 *
 * * ID=1 OR ID=2: `{ facetValueFilters: [{ or: [1,2] }] }`
 * * ID=1 AND ID=2: `{ facetValueFilters: [{ and: 1 }, { and: 2 }] }`
 * * ID=1 AND (ID=2 OR ID=3): `{ facetValueFilters: [{ and: 1 }, { or: [2,3] }] }`
 */
export type FacetValueFilterInput = {
    and?: InputMaybe<Scalars['ID']>;
    or?: InputMaybe<Array<Scalars['ID']>>;
};

/**
 * Which FacetValues are present in the products returned
 * by the search, and in what quantity.
 */
export type FacetValueResult = {
    __typename?: 'FacetValueResult';
    count: Scalars['Int'];
    facetValue: FacetValue;
};

export type FacetValueTranslation = {
    __typename?: 'FacetValueTranslation';
    createdAt: Scalars['DateTime'];
    id: Scalars['ID'];
    languageCode: LanguageCode;
    name: Scalars['String'];
    updatedAt: Scalars['DateTime'];
};

export type FindActiveCompanyResult = Company | CompanyNotFoundError;

export type FindCompaniesResult = CompanyList | CompanyNotFoundError | OrganizationNotFoundError;

export type FloatCustomFieldConfig = CustomField & {
    __typename?: 'FloatCustomFieldConfig';
    description?: Maybe<Array<LocalizedString>>;
    internal?: Maybe<Scalars['Boolean']>;
    label?: Maybe<Array<LocalizedString>>;
    list: Scalars['Boolean'];
    max?: Maybe<Scalars['Float']>;
    min?: Maybe<Scalars['Float']>;
    name: Scalars['String'];
    nullable?: Maybe<Scalars['Boolean']>;
    readonly?: Maybe<Scalars['Boolean']>;
    step?: Maybe<Scalars['Float']>;
    type: Scalars['String'];
    ui?: Maybe<Scalars['JSON']>;
};

export type Fulfillment = Node & {
    __typename?: 'Fulfillment';
    createdAt: Scalars['DateTime'];
    customFields?: Maybe<Scalars['JSON']>;
    id: Scalars['ID'];
    method: Scalars['String'];
    orderItems: Array<OrderItem>;
    state: Scalars['String'];
    summary: Array<FulfillmentLineSummary>;
    trackingCode?: Maybe<Scalars['String']>;
    updatedAt: Scalars['DateTime'];
};

export type FulfillmentLineSummary = {
    __typename?: 'FulfillmentLineSummary';
    orderLine: OrderLine;
    quantity: Scalars['Int'];
};

export type GetChannelResult = Channel | NoChannelForCountryCodeError;

export enum GlobalFlag {
    False = 'FALSE',
    Inherit = 'INHERIT',
    True = 'TRUE'
}

export type HistoryEntry = Node & {
    __typename?: 'HistoryEntry';
    createdAt: Scalars['DateTime'];
    data: Scalars['JSON'];
    id: Scalars['ID'];
    type: HistoryEntryType;
    updatedAt: Scalars['DateTime'];
};

export type HistoryEntryFilterParameter = {
    createdAt?: InputMaybe<DateOperators>;
    id?: InputMaybe<IdOperators>;
    type?: InputMaybe<StringOperators>;
    updatedAt?: InputMaybe<DateOperators>;
};

export type HistoryEntryList = PaginatedList & {
    __typename?: 'HistoryEntryList';
    items: Array<HistoryEntry>;
    totalItems: Scalars['Int'];
};

export type HistoryEntryListOptions = {
    /** Allows the results to be filtered */
    filter?: InputMaybe<HistoryEntryFilterParameter>;
    /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
    filterOperator?: InputMaybe<LogicalOperator>;
    /** Skips the first n results, for use in pagination */
    skip?: InputMaybe<Scalars['Int']>;
    /** Specifies which properties to sort the results by */
    sort?: InputMaybe<HistoryEntrySortParameter>;
    /** Takes n results, for use in pagination */
    take?: InputMaybe<Scalars['Int']>;
};

export type HistoryEntrySortParameter = {
    createdAt?: InputMaybe<SortOrder>;
    id?: InputMaybe<SortOrder>;
    updatedAt?: InputMaybe<SortOrder>;
};

export enum HistoryEntryType {
    CustomerAddedToGroup = 'CUSTOMER_ADDED_TO_GROUP',
    CustomerAddressCreated = 'CUSTOMER_ADDRESS_CREATED',
    CustomerAddressDeleted = 'CUSTOMER_ADDRESS_DELETED',
    CustomerAddressUpdated = 'CUSTOMER_ADDRESS_UPDATED',
    CustomerDetailUpdated = 'CUSTOMER_DETAIL_UPDATED',
    CustomerEmailUpdateRequested = 'CUSTOMER_EMAIL_UPDATE_REQUESTED',
    CustomerEmailUpdateVerified = 'CUSTOMER_EMAIL_UPDATE_VERIFIED',
    CustomerNote = 'CUSTOMER_NOTE',
    CustomerPasswordResetRequested = 'CUSTOMER_PASSWORD_RESET_REQUESTED',
    CustomerPasswordResetVerified = 'CUSTOMER_PASSWORD_RESET_VERIFIED',
    CustomerPasswordUpdated = 'CUSTOMER_PASSWORD_UPDATED',
    CustomerRegistered = 'CUSTOMER_REGISTERED',
    CustomerRemovedFromGroup = 'CUSTOMER_REMOVED_FROM_GROUP',
    CustomerVerified = 'CUSTOMER_VERIFIED',
    OrderCancellation = 'ORDER_CANCELLATION',
    OrderCouponApplied = 'ORDER_COUPON_APPLIED',
    OrderCouponRemoved = 'ORDER_COUPON_REMOVED',
    OrderFulfillment = 'ORDER_FULFILLMENT',
    OrderFulfillmentTransition = 'ORDER_FULFILLMENT_TRANSITION',
    OrderModified = 'ORDER_MODIFIED',
    OrderNote = 'ORDER_NOTE',
    OrderPaymentTransition = 'ORDER_PAYMENT_TRANSITION',
    OrderRefundTransition = 'ORDER_REFUND_TRANSITION',
    OrderStateTransition = 'ORDER_STATE_TRANSITION'
}

/** Operators for filtering on a list of ID fields */
export type IdListOperators = {
    inList: Scalars['ID'];
};

/** Operators for filtering on an ID field */
export type IdOperators = {
    eq?: InputMaybe<Scalars['String']>;
    in?: InputMaybe<Array<Scalars['String']>>;
    notEq?: InputMaybe<Scalars['String']>;
    notIn?: InputMaybe<Array<Scalars['String']>>;
};

/**
 * Returned if the token used to change a Customer's email address is valid, but has
 * expired according to the `verificationTokenDuration` setting in the AuthOptions.
 */
export type IdentifierChangeTokenExpiredError = ErrorResult & {
    __typename?: 'IdentifierChangeTokenExpiredError';
    errorCode: ErrorCode;
    message: Scalars['String'];
};

/**
 * Returned if the token used to change a Customer's email address is either
 * invalid or does not match any expected tokens.
 */
export type IdentifierChangeTokenInvalidError = ErrorResult & {
    __typename?: 'IdentifierChangeTokenInvalidError';
    errorCode: ErrorCode;
    message: Scalars['String'];
};

/** Returned when attempting to add a Payment using a PaymentMethod for which the Order is not eligible. */
export type IneligiblePaymentMethodError = ErrorResult & {
    __typename?: 'IneligiblePaymentMethodError';
    eligibilityCheckerMessage?: Maybe<Scalars['String']>;
    errorCode: ErrorCode;
    message: Scalars['String'];
};

/** Returned when attempting to set a ShippingMethod for which the Order is not eligible */
export type IneligibleShippingMethodError = ErrorResult & {
    __typename?: 'IneligibleShippingMethodError';
    errorCode: ErrorCode;
    message: Scalars['String'];
};

/** Returned when attempting to add more items to the Order than are available */
export type InsufficientStockError = ErrorResult & {
    __typename?: 'InsufficientStockError';
    errorCode: ErrorCode;
    message: Scalars['String'];
    order: Order;
    quantityAvailable: Scalars['Int'];
};

export type IntCustomFieldConfig = CustomField & {
    __typename?: 'IntCustomFieldConfig';
    description?: Maybe<Array<LocalizedString>>;
    internal?: Maybe<Scalars['Boolean']>;
    label?: Maybe<Array<LocalizedString>>;
    list: Scalars['Boolean'];
    max?: Maybe<Scalars['Int']>;
    min?: Maybe<Scalars['Int']>;
    name: Scalars['String'];
    nullable?: Maybe<Scalars['Boolean']>;
    readonly?: Maybe<Scalars['Boolean']>;
    step?: Maybe<Scalars['Int']>;
    type: Scalars['String'];
    ui?: Maybe<Scalars['JSON']>;
};

/** Returned if the user authentication credentials are not valid */
export type InvalidCredentialsError = ErrorResult & {
    __typename?: 'InvalidCredentialsError';
    authenticationError: Scalars['String'];
    errorCode: ErrorCode;
    message: Scalars['String'];
};

export type InvalidVatError = ErrorResult & {
    __typename?: 'InvalidVatError';
    errorCode: ErrorCode;
    message: Scalars['String'];
};

/**
 * @description
 * Languages in the form of a ISO 639-1 language code with optional
 * region or script modifier (e.g. de_AT). The selection available is based
 * on the [Unicode CLDR summary list](https://unicode-org.github.io/cldr-staging/charts/37/summary/root.html)
 * and includes the major spoken languages of the world and any widely-used variants.
 *
 * @docsCategory common
 */
export enum LanguageCode {
    /** Afrikaans */
    Af = 'af',
    /** Akan */
    Ak = 'ak',
    /** Amharic */
    Am = 'am',
    /** Arabic */
    Ar = 'ar',
    /** Assamese */
    As = 'as',
    /** Azerbaijani */
    Az = 'az',
    /** Belarusian */
    Be = 'be',
    /** Bulgarian */
    Bg = 'bg',
    /** Bambara */
    Bm = 'bm',
    /** Bangla */
    Bn = 'bn',
    /** Tibetan */
    Bo = 'bo',
    /** Breton */
    Br = 'br',
    /** Bosnian */
    Bs = 'bs',
    /** Catalan */
    Ca = 'ca',
    /** Chechen */
    Ce = 'ce',
    /** Corsican */
    Co = 'co',
    /** Czech */
    Cs = 'cs',
    /** Church Slavic */
    Cu = 'cu',
    /** Welsh */
    Cy = 'cy',
    /** Danish */
    Da = 'da',
    /** German */
    De = 'de',
    /** Austrian German */
    DeAt = 'de_AT',
    /** Swiss High German */
    DeCh = 'de_CH',
    /** Dzongkha */
    Dz = 'dz',
    /** Ewe */
    Ee = 'ee',
    /** Greek */
    El = 'el',
    /** English */
    En = 'en',
    /** Australian English */
    EnAu = 'en_AU',
    /** Canadian English */
    EnCa = 'en_CA',
    /** British English */
    EnGb = 'en_GB',
    /** American English */
    EnUs = 'en_US',
    /** Esperanto */
    Eo = 'eo',
    /** Spanish */
    Es = 'es',
    /** European Spanish */
    EsEs = 'es_ES',
    /** Mexican Spanish */
    EsMx = 'es_MX',
    /** Estonian */
    Et = 'et',
    /** Basque */
    Eu = 'eu',
    /** Persian */
    Fa = 'fa',
    /** Dari */
    FaAf = 'fa_AF',
    /** Fulah */
    Ff = 'ff',
    /** Finnish */
    Fi = 'fi',
    /** Faroese */
    Fo = 'fo',
    /** French */
    Fr = 'fr',
    /** Canadian French */
    FrCa = 'fr_CA',
    /** Swiss French */
    FrCh = 'fr_CH',
    /** Western Frisian */
    Fy = 'fy',
    /** Irish */
    Ga = 'ga',
    /** Scottish Gaelic */
    Gd = 'gd',
    /** Galician */
    Gl = 'gl',
    /** Gujarati */
    Gu = 'gu',
    /** Manx */
    Gv = 'gv',
    /** Hausa */
    Ha = 'ha',
    /** Hebrew */
    He = 'he',
    /** Hindi */
    Hi = 'hi',
    /** Croatian */
    Hr = 'hr',
    /** Haitian Creole */
    Ht = 'ht',
    /** Hungarian */
    Hu = 'hu',
    /** Armenian */
    Hy = 'hy',
    /** Interlingua */
    Ia = 'ia',
    /** Indonesian */
    Id = 'id',
    /** Igbo */
    Ig = 'ig',
    /** Sichuan Yi */
    Ii = 'ii',
    /** Icelandic */
    Is = 'is',
    /** Italian */
    It = 'it',
    /** Japanese */
    Ja = 'ja',
    /** Javanese */
    Jv = 'jv',
    /** Georgian */
    Ka = 'ka',
    /** Kikuyu */
    Ki = 'ki',
    /** Kazakh */
    Kk = 'kk',
    /** Kalaallisut */
    Kl = 'kl',
    /** Khmer */
    Km = 'km',
    /** Kannada */
    Kn = 'kn',
    /** Korean */
    Ko = 'ko',
    /** Kashmiri */
    Ks = 'ks',
    /** Kurdish */
    Ku = 'ku',
    /** Cornish */
    Kw = 'kw',
    /** Kyrgyz */
    Ky = 'ky',
    /** Latin */
    La = 'la',
    /** Luxembourgish */
    Lb = 'lb',
    /** Ganda */
    Lg = 'lg',
    /** Lingala */
    Ln = 'ln',
    /** Lao */
    Lo = 'lo',
    /** Lithuanian */
    Lt = 'lt',
    /** Luba-Katanga */
    Lu = 'lu',
    /** Latvian */
    Lv = 'lv',
    /** Malagasy */
    Mg = 'mg',
    /** Maori */
    Mi = 'mi',
    /** Macedonian */
    Mk = 'mk',
    /** Malayalam */
    Ml = 'ml',
    /** Mongolian */
    Mn = 'mn',
    /** Marathi */
    Mr = 'mr',
    /** Malay */
    Ms = 'ms',
    /** Maltese */
    Mt = 'mt',
    /** Burmese */
    My = 'my',
    /** Norwegian Bokmål */
    Nb = 'nb',
    /** North Ndebele */
    Nd = 'nd',
    /** Nepali */
    Ne = 'ne',
    /** Dutch */
    Nl = 'nl',
    /** Flemish */
    NlBe = 'nl_BE',
    /** Norwegian Nynorsk */
    Nn = 'nn',
    /** Nyanja */
    Ny = 'ny',
    /** Oromo */
    Om = 'om',
    /** Odia */
    Or = 'or',
    /** Ossetic */
    Os = 'os',
    /** Punjabi */
    Pa = 'pa',
    /** Polish */
    Pl = 'pl',
    /** Pashto */
    Ps = 'ps',
    /** Portuguese */
    Pt = 'pt',
    /** Brazilian Portuguese */
    PtBr = 'pt_BR',
    /** European Portuguese */
    PtPt = 'pt_PT',
    /** Quechua */
    Qu = 'qu',
    /** Romansh */
    Rm = 'rm',
    /** Rundi */
    Rn = 'rn',
    /** Romanian */
    Ro = 'ro',
    /** Moldavian */
    RoMd = 'ro_MD',
    /** Russian */
    Ru = 'ru',
    /** Kinyarwanda */
    Rw = 'rw',
    /** Sanskrit */
    Sa = 'sa',
    /** Sindhi */
    Sd = 'sd',
    /** Northern Sami */
    Se = 'se',
    /** Sango */
    Sg = 'sg',
    /** Sinhala */
    Si = 'si',
    /** Slovak */
    Sk = 'sk',
    /** Slovenian */
    Sl = 'sl',
    /** Samoan */
    Sm = 'sm',
    /** Shona */
    Sn = 'sn',
    /** Somali */
    So = 'so',
    /** Albanian */
    Sq = 'sq',
    /** Serbian */
    Sr = 'sr',
    /** Southern Sotho */
    St = 'st',
    /** Sundanese */
    Su = 'su',
    /** Swedish */
    Sv = 'sv',
    /** Swahili */
    Sw = 'sw',
    /** Congo Swahili */
    SwCd = 'sw_CD',
    /** Tamil */
    Ta = 'ta',
    /** Telugu */
    Te = 'te',
    /** Tajik */
    Tg = 'tg',
    /** Thai */
    Th = 'th',
    /** Tigrinya */
    Ti = 'ti',
    /** Turkmen */
    Tk = 'tk',
    /** Tongan */
    To = 'to',
    /** Turkish */
    Tr = 'tr',
    /** Tatar */
    Tt = 'tt',
    /** Uyghur */
    Ug = 'ug',
    /** Ukrainian */
    Uk = 'uk',
    /** Urdu */
    Ur = 'ur',
    /** Uzbek */
    Uz = 'uz',
    /** Vietnamese */
    Vi = 'vi',
    /** Volapük */
    Vo = 'vo',
    /** Wolof */
    Wo = 'wo',
    /** Xhosa */
    Xh = 'xh',
    /** Yiddish */
    Yi = 'yi',
    /** Yoruba */
    Yo = 'yo',
    /** Chinese */
    Zh = 'zh',
    /** Simplified Chinese */
    ZhHans = 'zh_Hans',
    /** Traditional Chinese */
    ZhHant = 'zh_Hant',
    /** Zulu */
    Zu = 'zu'
}

export type LocaleStringCustomFieldConfig = CustomField & {
    __typename?: 'LocaleStringCustomFieldConfig';
    description?: Maybe<Array<LocalizedString>>;
    internal?: Maybe<Scalars['Boolean']>;
    label?: Maybe<Array<LocalizedString>>;
    length?: Maybe<Scalars['Int']>;
    list: Scalars['Boolean'];
    name: Scalars['String'];
    nullable?: Maybe<Scalars['Boolean']>;
    pattern?: Maybe<Scalars['String']>;
    readonly?: Maybe<Scalars['Boolean']>;
    type: Scalars['String'];
    ui?: Maybe<Scalars['JSON']>;
};

export type LocalizedString = {
    __typename?: 'LocalizedString';
    languageCode: LanguageCode;
    value: Scalars['String'];
};

export enum LogicalOperator {
    And = 'AND',
    Or = 'OR'
}

/** Returned when attempting to register or verify a customer account without a password, when one is required. */
export type MissingPasswordError = ErrorResult & {
    __typename?: 'MissingPasswordError';
    errorCode: ErrorCode;
    message: Scalars['String'];
};

export type Mutation = {
    __typename?: 'Mutation';
    addCompanyAddress: AddCompanyAddressResult;
    /** Adds an item to the order. If custom fields are defined on the OrderLine entity, a third argument 'customFields' will be available. */
    addItemToOrder: UpdateOrderItemsResult;
    /** Add a Payment to the Order */
    addPaymentToOrder: AddPaymentToOrderResult;
    /** Adjusts an OrderLine. If custom fields are defined on the OrderLine entity, a third argument 'customFields' of type `OrderLineCustomFieldsInput` will be available. */
    adjustOrderLine: UpdateOrderItemsResult;
    /** Applies the given coupon code to the active Order */
    applyCouponCode: ApplyCouponCodeResult;
    /** Authenticates the user using a named authentication strategy */
    authenticate: AuthenticationResult;
    /** Create a new Customer Address */
    createCustomerAddress: Address;
    deleteCompanyAddress: DeleteCompanyAddressResult;
    /** Delete an existing Address */
    deleteCustomerAddress: Success;
    logSearchListViewed: Scalars['Boolean'];
    logSearchResultClicked: Scalars['Boolean'];
    /** Authenticates the user using the native authentication strategy. This mutation is an alias for `authenticate({ native: { ... }})` */
    login: NativeAuthenticationResult;
    /** End the current authenticated session */
    logout: Success;
    /** Regenerate and send a verification token for a new Customer registration. Only applicable if `authOptions.requireVerification` is set to true. */
    refreshCustomerVerification: RefreshCustomerVerificationResult;
    registerB2BCustomer: RegisterB2BCustomerAccountResult;
    /**
     * Register a Customer account with the given credentials. There are three possible registration flows:
     *
     * _If `authOptions.requireVerification` is set to `true`:_
     *
     * 1. **The Customer is registered _with_ a password**. A verificationToken will be created (and typically emailed to the Customer). That
     *    verificationToken would then be passed to the `verifyCustomerAccount` mutation _without_ a password. The Customer is then
     *    verified and authenticated in one step.
     * 2. **The Customer is registered _without_ a password**. A verificationToken will be created (and typically emailed to the Customer). That
     *    verificationToken would then be passed to the `verifyCustomerAccount` mutation _with_ the chosen password of the Customer. The Customer is then
     *    verified and authenticated in one step.
     *
     * _If `authOptions.requireVerification` is set to `false`:_
     *
     * 3. The Customer _must_ be registered _with_ a password. No further action is needed - the Customer is able to authenticate immediately.
     */
    registerCustomerAccount: RegisterCustomerAccountResult;
    /** Remove all OrderLine from the Order */
    removeAllOrderLines: RemoveOrderItemsResult;
    /** Removes the given coupon code from the active Order */
    removeCouponCode?: Maybe<Order>;
    /** Remove an OrderLine from the Order */
    removeOrderLine: RemoveOrderItemsResult;
    /** Requests a password reset email to be sent */
    requestPasswordReset?: Maybe<RequestPasswordResetResult>;
    /**
     * Request to update the emailAddress of the active Customer. If `authOptions.requireVerification` is enabled
     * (as is the default), then the `identifierChangeToken` will be assigned to the current User and
     * a IdentifierChangeRequestEvent will be raised. This can then be used e.g. by the EmailPlugin to email
     * that verification token to the Customer, which is then used to verify the change of email address.
     */
    requestUpdateCustomerEmailAddress: RequestUpdateCustomerEmailAddressResult;
    /** Resets a Customer's password based on the provided token */
    resetPassword: ResetPasswordResult;
    setActiveCompany: SetActiveCompanyResult;
    /** Set the Customer for the Order. Required only if the Customer is not currently logged in */
    setCustomerForOrder: SetCustomerForOrderResult;
    /** Sets the billing address for this order */
    setOrderBillingAddress: ActiveOrderResult;
    /** Allows any custom fields to be set for the active order */
    setOrderCustomFields: ActiveOrderResult;
    setOrderPaymentMethod: SetOrderPaymentMethodResult;
    /** Sets the shipping address for this order */
    setOrderShippingAddress: ActiveOrderResult;
    /** Sets the shipping method by id, which can be obtained with the `eligibleShippingMethods` query */
    setOrderShippingMethod: SetOrderShippingMethodResult;
    subscribeToNewsletter: Success;
    /** Transitions an Order to a new state. Valid next states can be found by querying `nextOrderStates` */
    transitionOrderToState?: Maybe<TransitionOrderToStateResult>;
    unsubscribeToNewsletter: Success;
    updateCompanyAddress: UpdateCompanyAddressResult;
    /** Update an existing Customer */
    updateCustomer: Customer;
    /** Update an existing Address */
    updateCustomerAddress: Address;
    /**
     * Confirm the update of the emailAddress with the provided token, which has been generated by the
     * `requestUpdateCustomerEmailAddress` mutation.
     */
    updateCustomerEmailAddress: UpdateCustomerEmailAddressResult;
    /** Update the password of the active Customer */
    updateCustomerPassword: UpdateCustomerPasswordResult;
    /**
     * Verify a Customer email address with the token sent to that address. Only applicable if `authOptions.requireVerification` is set to true.
     *
     * If the Customer was not registered with a password in the `registerCustomerAccount` mutation, the password _must_ be
     * provided here.
     */
    verifyCustomerAccount: VerifyCustomerAccountResult;
};


export type MutationAddCompanyAddressArgs = {
    address: CreateCompanyAddressInput;
};


export type MutationAddItemToOrderArgs = {
    productVariantId: Scalars['ID'];
    quantity: Scalars['Int'];
};


export type MutationAddPaymentToOrderArgs = {
    input: PaymentInput;
};


export type MutationAdjustOrderLineArgs = {
    orderLineId: Scalars['ID'];
    quantity: Scalars['Int'];
};


export type MutationApplyCouponCodeArgs = {
    couponCode: Scalars['String'];
};


export type MutationAuthenticateArgs = {
    input: AuthenticationInput;
    rememberMe?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateCustomerAddressArgs = {
    input: CreateAddressInput;
};


export type MutationDeleteCompanyAddressArgs = {
    addressId: Scalars['ID'];
};


export type MutationDeleteCustomerAddressArgs = {
    id: Scalars['ID'];
};


export type MutationLogSearchListViewedArgs = {
    input: SearchListViewedEventInput;
};


export type MutationLogSearchResultClickedArgs = {
    input: SearchResultClickedEventInput;
};


export type MutationLoginArgs = {
    password: Scalars['String'];
    rememberMe?: InputMaybe<Scalars['Boolean']>;
    username: Scalars['String'];
};


export type MutationRefreshCustomerVerificationArgs = {
    emailAddress: Scalars['String'];
};


export type MutationRegisterB2BCustomerArgs = {
    input?: InputMaybe<B2BRegisterInput>;
};


export type MutationRegisterCustomerAccountArgs = {
    input: RegisterCustomerInput;
};


export type MutationRemoveCouponCodeArgs = {
    couponCode: Scalars['String'];
};


export type MutationRemoveOrderLineArgs = {
    orderLineId: Scalars['ID'];
};


export type MutationRequestPasswordResetArgs = {
    emailAddress: Scalars['String'];
};


export type MutationRequestUpdateCustomerEmailAddressArgs = {
    newEmailAddress: Scalars['String'];
    password: Scalars['String'];
};


export type MutationResetPasswordArgs = {
    password: Scalars['String'];
    token: Scalars['String'];
};


export type MutationSetActiveCompanyArgs = {
    companyId: Scalars['ID'];
};


export type MutationSetCustomerForOrderArgs = {
    input: CreateCustomerInput;
};


export type MutationSetOrderBillingAddressArgs = {
    input: CreateAddressInput;
};


export type MutationSetOrderCustomFieldsArgs = {
    input: UpdateOrderInput;
};


export type MutationSetOrderPaymentMethodArgs = {
    input: PaymentInput;
};


export type MutationSetOrderShippingAddressArgs = {
    input: CreateAddressInput;
};


export type MutationSetOrderShippingMethodArgs = {
    shippingMethodId: Scalars['ID'];
};


export type MutationSubscribeToNewsletterArgs = {
    input: NewsletterAddress;
};


export type MutationTransitionOrderToStateArgs = {
    state: Scalars['String'];
};


export type MutationUnsubscribeToNewsletterArgs = {
    input: NewsletterAddress;
};


export type MutationUpdateCompanyAddressArgs = {
    address: UpdateCompanyAddressInput;
};


export type MutationUpdateCustomerArgs = {
    input: UpdateCustomerInput;
};


export type MutationUpdateCustomerAddressArgs = {
    input: UpdateAddressInput;
};


export type MutationUpdateCustomerEmailAddressArgs = {
    token: Scalars['String'];
};


export type MutationUpdateCustomerPasswordArgs = {
    currentPassword: Scalars['String'];
    newPassword: Scalars['String'];
};


export type MutationVerifyCustomerAccountArgs = {
    password?: InputMaybe<Scalars['String']>;
    token: Scalars['String'];
};

export type NativeAuthInput = {
    password: Scalars['String'];
    username: Scalars['String'];
};

/** Returned when attempting an operation that relies on the NativeAuthStrategy, if that strategy is not configured. */
export type NativeAuthStrategyError = ErrorResult & {
    __typename?: 'NativeAuthStrategyError';
    errorCode: ErrorCode;
    message: Scalars['String'];
};

export type NativeAuthenticationResult = CurrentUser | InvalidCredentialsError | NativeAuthStrategyError | NotVerifiedError;

/** Returned when attempting to set a negative OrderLine quantity. */
export type NegativeQuantityError = ErrorResult & {
    __typename?: 'NegativeQuantityError';
    errorCode: ErrorCode;
    message: Scalars['String'];
};

export type NewsletterAddress = {
    city?: InputMaybe<Scalars['String']>;
    company?: InputMaybe<Scalars['String']>;
    email: Scalars['String'];
    name?: InputMaybe<Scalars['String']>;
    street?: InputMaybe<Scalars['String']>;
    zip?: InputMaybe<Scalars['String']>;
};

/**
 * Returned when invoking a mutation which depends on there being an active Order on the
 * current session.
 */
export type NoActiveOrderError = ErrorResult & {
    __typename?: 'NoActiveOrderError';
    errorCode: ErrorCode;
    message: Scalars['String'];
};

export type NoChannelForCountryCodeError = ErrorResult & {
    __typename?: 'NoChannelForCountryCodeError';
    errorCode: ErrorCode;
    message: Scalars['String'];
};

export type Node = {
    id: Scalars['ID'];
};

export type NotAllowedError = ErrorResult & {
    __typename?: 'NotAllowedError';
    errorCode: ErrorCode;
    message: Scalars['String'];
};

/**
 * Returned if `authOptions.requireVerification` is set to `true` (which is the default)
 * and an unverified user attempts to authenticate.
 */
export type NotVerifiedError = ErrorResult & {
    __typename?: 'NotVerifiedError';
    errorCode: ErrorCode;
    message: Scalars['String'];
};

/** Operators for filtering on a list of Number fields */
export type NumberListOperators = {
    inList: Scalars['Float'];
};

/** Operators for filtering on a Int or Float field */
export type NumberOperators = {
    between?: InputMaybe<NumberRange>;
    eq?: InputMaybe<Scalars['Float']>;
    gt?: InputMaybe<Scalars['Float']>;
    gte?: InputMaybe<Scalars['Float']>;
    lt?: InputMaybe<Scalars['Float']>;
    lte?: InputMaybe<Scalars['Float']>;
};

export type NumberRange = {
    end: Scalars['Float'];
    start: Scalars['Float'];
};

export type Order = Node & {
    __typename?: 'Order';
    /** An order is active as long as the payment process has not been completed */
    active: Scalars['Boolean'];
    billingAddress?: Maybe<OrderAddress>;
    /** A unique code for the Order */
    code: Scalars['String'];
    /** An array of all coupon codes applied to the Order */
    couponCodes: Array<Scalars['String']>;
    createdAt: Scalars['DateTime'];
    currencyCode: CurrencyCode;
    customFields?: Maybe<OrderCustomFields>;
    customer?: Maybe<Customer>;
    discounts: Array<Discount>;
    fulfillments?: Maybe<Array<Fulfillment>>;
    history: HistoryEntryList;
    id: Scalars['ID'];
    lines: Array<OrderLine>;
    /**
     * The date & time that the Order was placed, i.e. the Customer
     * completed the checkout and the Order is no longer "active"
     */
    orderPlacedAt?: Maybe<Scalars['DateTime']>;
    payments?: Maybe<Array<Payment>>;
    /** Promotions applied to the order. Only gets populated after the payment process has completed. */
    promotions: Array<Promotion>;
    shipping: Scalars['Int'];
    shippingAddress?: Maybe<OrderAddress>;
    shippingLines: Array<ShippingLine>;
    shippingWithTax: Scalars['Int'];
    state: Scalars['String'];
    /**
     * The subTotal is the total of all OrderLines in the Order. This figure also includes any Order-level
     * discounts which have been prorated (proportionally distributed) amongst the OrderItems.
     * To get a total of all OrderLines which does not account for prorated discounts, use the
     * sum of `OrderLine.discountedLinePrice` values.
     */
    subTotal: Scalars['Int'];
    /** Same as subTotal, but inclusive of tax */
    subTotalWithTax: Scalars['Int'];
    /**
     * Surcharges are arbitrary modifications to the Order total which are neither
     * ProductVariants nor discounts resulting from applied Promotions. For example,
     * one-off discounts based on customer interaction, or surcharges based on payment
     * methods.
     */
    surcharges: Array<Surcharge>;
    /** A summary of the taxes being applied to this Order */
    taxSummary: Array<OrderTaxSummary>;
    /** Equal to subTotal plus shipping */
    total: Scalars['Int'];
    totalQuantity: Scalars['Int'];
    /** The final payable amount. Equal to subTotalWithTax plus shippingWithTax */
    totalWithTax: Scalars['Int'];
    updatedAt: Scalars['DateTime'];
};


export type OrderHistoryArgs = {
    options?: InputMaybe<HistoryEntryListOptions>;
};

export type OrderAddress = {
    __typename?: 'OrderAddress';
    city?: Maybe<Scalars['String']>;
    company?: Maybe<Scalars['String']>;
    country?: Maybe<Scalars['String']>;
    countryCode?: Maybe<Scalars['String']>;
    customFields?: Maybe<Scalars['JSON']>;
    fullName?: Maybe<Scalars['String']>;
    phoneNumber?: Maybe<Scalars['String']>;
    postalCode?: Maybe<Scalars['String']>;
    province?: Maybe<Scalars['String']>;
    streetLine1?: Maybe<Scalars['String']>;
    streetLine2?: Maybe<Scalars['String']>;
};

export type OrderCustomFields = {
    __typename?: 'OrderCustomFields';
    comment?: Maybe<Scalars['String']>;
    commission?: Maybe<Scalars['String']>;
    erpId?: Maybe<Scalars['String']>;
    reference?: Maybe<Scalars['String']>;
    savedPaymentMethod?: Maybe<Scalars['String']>;
};

export type OrderDocument = Node & {
    __typename?: 'OrderDocument';
    id: Scalars['ID'];
    name: Scalars['String'];
    order: Order;
    source?: Maybe<Scalars['String']>;
    type: Scalars['String'];
};

export type OrderDocumentFilter = {
    orderId: Scalars['ID'];
};

export type OrderDocumentFilterParameter = {
    id?: InputMaybe<IdOperators>;
    name?: InputMaybe<StringOperators>;
    source?: InputMaybe<StringOperators>;
    type?: InputMaybe<StringOperators>;
};

export type OrderDocumentList = PaginatedList & {
    __typename?: 'OrderDocumentList';
    items: Array<OrderDocument>;
    totalItems: Scalars['Int'];
};

export type OrderDocumentListOptions = {
    filter: OrderDocumentFilter;
    /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
    filterOperator?: InputMaybe<LogicalOperator>;
    skip?: InputMaybe<Scalars['Int']>;
    /** Specifies which properties to sort the results by */
    sort?: InputMaybe<OrderDocumentSortParameter>;
    take?: InputMaybe<Scalars['Int']>;
};

export type OrderDocumentNotFoundError = ErrorResult & {
    __typename?: 'OrderDocumentNotFoundError';
    errorCode: ErrorCode;
    message: Scalars['String'];
};

export type OrderDocumentSortParameter = {
    id?: InputMaybe<SortOrder>;
    name?: InputMaybe<SortOrder>;
    source?: InputMaybe<SortOrder>;
    type?: InputMaybe<SortOrder>;
};

export type OrderFilterParameter = {
    active?: InputMaybe<BooleanOperators>;
    code?: InputMaybe<StringOperators>;
    comment?: InputMaybe<StringOperators>;
    commission?: InputMaybe<StringOperators>;
    createdAt?: InputMaybe<DateOperators>;
    currencyCode?: InputMaybe<StringOperators>;
    erpId?: InputMaybe<StringOperators>;
    id?: InputMaybe<IdOperators>;
    orderPlacedAt?: InputMaybe<DateOperators>;
    reference?: InputMaybe<StringOperators>;
    savedPaymentMethod?: InputMaybe<StringOperators>;
    shipping?: InputMaybe<NumberOperators>;
    shippingWithTax?: InputMaybe<NumberOperators>;
    state?: InputMaybe<StringOperators>;
    subTotal?: InputMaybe<NumberOperators>;
    subTotalWithTax?: InputMaybe<NumberOperators>;
    total?: InputMaybe<NumberOperators>;
    totalQuantity?: InputMaybe<NumberOperators>;
    totalWithTax?: InputMaybe<NumberOperators>;
    updatedAt?: InputMaybe<DateOperators>;
};

export type OrderItem = Node & {
    __typename?: 'OrderItem';
    adjustments: Array<Adjustment>;
    cancelled: Scalars['Boolean'];
    createdAt: Scalars['DateTime'];
    /**
     * The price of a single unit including discounts, excluding tax.
     *
     * If Order-level discounts have been applied, this will not be the
     * actual taxable unit price (see `proratedUnitPrice`), but is generally the
     * correct price to display to customers to avoid confusion
     * about the internal handling of distributed Order-level discounts.
     */
    discountedUnitPrice: Scalars['Int'];
    /** The price of a single unit including discounts and tax */
    discountedUnitPriceWithTax: Scalars['Int'];
    fulfillment?: Maybe<Fulfillment>;
    id: Scalars['ID'];
    /**
     * The actual unit price, taking into account both item discounts _and_ prorated (proportionally-distributed)
     * Order-level discounts. This value is the true economic value of the OrderItem, and is used in tax
     * and refund calculations.
     */
    proratedUnitPrice: Scalars['Int'];
    /** The proratedUnitPrice including tax */
    proratedUnitPriceWithTax: Scalars['Int'];
    refundId?: Maybe<Scalars['ID']>;
    taxLines: Array<TaxLine>;
    taxRate: Scalars['Float'];
    /** The price of a single unit, excluding tax and discounts */
    unitPrice: Scalars['Int'];
    /** The price of a single unit, including tax but excluding discounts */
    unitPriceWithTax: Scalars['Int'];
    unitTax: Scalars['Int'];
    updatedAt: Scalars['DateTime'];
};

/** Returned when the maximum order size limit has been reached. */
export type OrderLimitError = ErrorResult & {
    __typename?: 'OrderLimitError';
    errorCode: ErrorCode;
    maxItems: Scalars['Int'];
    message: Scalars['String'];
};

export type OrderLine = Node & {
    __typename?: 'OrderLine';
    createdAt: Scalars['DateTime'];
    customFields?: Maybe<Scalars['JSON']>;
    /** The price of the line including discounts, excluding tax */
    discountedLinePrice: Scalars['Int'];
    /** The price of the line including discounts and tax */
    discountedLinePriceWithTax: Scalars['Int'];
    /**
     * The price of a single unit including discounts, excluding tax.
     *
     * If Order-level discounts have been applied, this will not be the
     * actual taxable unit price (see `proratedUnitPrice`), but is generally the
     * correct price to display to customers to avoid confusion
     * about the internal handling of distributed Order-level discounts.
     */
    discountedUnitPrice: Scalars['Int'];
    /** The price of a single unit including discounts and tax */
    discountedUnitPriceWithTax: Scalars['Int'];
    discounts: Array<Discount>;
    featuredAsset?: Maybe<Asset>;
    fulfillments?: Maybe<Array<Fulfillment>>;
    id: Scalars['ID'];
    items: Array<OrderItem>;
    /** The total price of the line excluding tax and discounts. */
    linePrice: Scalars['Int'];
    /** The total price of the line including tax but excluding discounts. */
    linePriceWithTax: Scalars['Int'];
    /** The total tax on this line */
    lineTax: Scalars['Int'];
    order: Order;
    productVariant: ProductVariant;
    /**
     * The actual line price, taking into account both item discounts _and_ prorated (proportionally-distributed)
     * Order-level discounts. This value is the true economic value of the OrderLine, and is used in tax
     * and refund calculations.
     */
    proratedLinePrice: Scalars['Int'];
    /** The proratedLinePrice including tax */
    proratedLinePriceWithTax: Scalars['Int'];
    /**
     * The actual unit price, taking into account both item discounts _and_ prorated (proportionally-distributed)
     * Order-level discounts. This value is the true economic value of the OrderItem, and is used in tax
     * and refund calculations.
     */
    proratedUnitPrice: Scalars['Int'];
    /** The proratedUnitPrice including tax */
    proratedUnitPriceWithTax: Scalars['Int'];
    quantity: Scalars['Int'];
    taxLines: Array<TaxLine>;
    taxRate: Scalars['Float'];
    /** The price of a single unit, excluding tax and discounts */
    unitPrice: Scalars['Int'];
    /** Non-zero if the unitPrice has changed since it was initially added to Order */
    unitPriceChangeSinceAdded: Scalars['Int'];
    /** The price of a single unit, including tax but excluding discounts */
    unitPriceWithTax: Scalars['Int'];
    /** Non-zero if the unitPriceWithTax has changed since it was initially added to Order */
    unitPriceWithTaxChangeSinceAdded: Scalars['Int'];
    updatedAt: Scalars['DateTime'];
};

export type OrderList = PaginatedList & {
    __typename?: 'OrderList';
    items: Array<Order>;
    totalItems: Scalars['Int'];
};

export type OrderListOptions = {
    /** Allows the results to be filtered */
    filter?: InputMaybe<OrderFilterParameter>;
    /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
    filterOperator?: InputMaybe<LogicalOperator>;
    /** Skips the first n results, for use in pagination */
    skip?: InputMaybe<Scalars['Int']>;
    /** Specifies which properties to sort the results by */
    sort?: InputMaybe<OrderSortParameter>;
    /** Takes n results, for use in pagination */
    take?: InputMaybe<Scalars['Int']>;
};

/** Returned when attempting to modify the contents of an Order that is not in the `AddingItems` state. */
export type OrderModificationError = ErrorResult & {
    __typename?: 'OrderModificationError';
    errorCode: ErrorCode;
    message: Scalars['String'];
};

export type OrderNotFoundError = ErrorResult & {
    __typename?: 'OrderNotFoundError';
    errorCode: ErrorCode;
    message: Scalars['String'];
};

/** Returned when attempting to add a Payment to an Order that is not in the `ArrangingPayment` state. */
export type OrderPaymentStateError = ErrorResult & {
    __typename?: 'OrderPaymentStateError';
    errorCode: ErrorCode;
    message: Scalars['String'];
};

export type OrderSortParameter = {
    code?: InputMaybe<SortOrder>;
    comment?: InputMaybe<SortOrder>;
    commission?: InputMaybe<SortOrder>;
    createdAt?: InputMaybe<SortOrder>;
    erpId?: InputMaybe<SortOrder>;
    id?: InputMaybe<SortOrder>;
    orderPlacedAt?: InputMaybe<SortOrder>;
    reference?: InputMaybe<SortOrder>;
    savedPaymentMethod?: InputMaybe<SortOrder>;
    shipping?: InputMaybe<SortOrder>;
    shippingWithTax?: InputMaybe<SortOrder>;
    state?: InputMaybe<SortOrder>;
    subTotal?: InputMaybe<SortOrder>;
    subTotalWithTax?: InputMaybe<SortOrder>;
    total?: InputMaybe<SortOrder>;
    totalQuantity?: InputMaybe<SortOrder>;
    totalWithTax?: InputMaybe<SortOrder>;
    updatedAt?: InputMaybe<SortOrder>;
};

/** Returned if there is an error in transitioning the Order state */
export type OrderStateTransitionError = ErrorResult & {
    __typename?: 'OrderStateTransitionError';
    errorCode: ErrorCode;
    fromState: Scalars['String'];
    message: Scalars['String'];
    toState: Scalars['String'];
    transitionError: Scalars['String'];
};

/**
 * A summary of the taxes being applied to this order, grouped
 * by taxRate.
 */
export type OrderTaxSummary = {
    __typename?: 'OrderTaxSummary';
    /** A description of this tax */
    description: Scalars['String'];
    /** The total net price or OrderItems to which this taxRate applies */
    taxBase: Scalars['Int'];
    /** The taxRate as a percentage */
    taxRate: Scalars['Float'];
    /** The total tax being applied to the Order at this taxRate */
    taxTotal: Scalars['Int'];
};

export type Organization = Node & {
    __typename?: 'Organization';
    id: Scalars['ID'];
    name?: Maybe<Scalars['String']>;
};

export type OrganizationNotFoundError = ErrorResult & {
    __typename?: 'OrganizationNotFoundError';
    errorCode: ErrorCode;
    message: Scalars['String'];
};

export type PaginatedList = {
    items: Array<Node>;
    totalItems: Scalars['Int'];
};

/** Returned when attempting to verify a customer account with a password, when a password has already been set. */
export type PasswordAlreadySetError = ErrorResult & {
    __typename?: 'PasswordAlreadySetError';
    errorCode: ErrorCode;
    message: Scalars['String'];
};

/**
 * Returned if the token used to reset a Customer's password is valid, but has
 * expired according to the `verificationTokenDuration` setting in the AuthOptions.
 */
export type PasswordResetTokenExpiredError = ErrorResult & {
    __typename?: 'PasswordResetTokenExpiredError';
    errorCode: ErrorCode;
    message: Scalars['String'];
};

/**
 * Returned if the token used to reset a Customer's password is either
 * invalid or does not match any expected tokens.
 */
export type PasswordResetTokenInvalidError = ErrorResult & {
    __typename?: 'PasswordResetTokenInvalidError';
    errorCode: ErrorCode;
    message: Scalars['String'];
};

/** Returned when attempting to register or verify a customer account where the given password fails password validation. */
export type PasswordValidationError = ErrorResult & {
    __typename?: 'PasswordValidationError';
    errorCode: ErrorCode;
    message: Scalars['String'];
    validationErrorMessage: Scalars['String'];
};

export type Payment = Node & {
    __typename?: 'Payment';
    amount: Scalars['Int'];
    createdAt: Scalars['DateTime'];
    errorMessage?: Maybe<Scalars['String']>;
    id: Scalars['ID'];
    metadata?: Maybe<Scalars['JSON']>;
    method: Scalars['String'];
    refunds: Array<Refund>;
    state: Scalars['String'];
    transactionId?: Maybe<Scalars['String']>;
    updatedAt: Scalars['DateTime'];
};

/** Returned when a Payment is declined by the payment provider. */
export type PaymentDeclinedError = ErrorResult & {
    __typename?: 'PaymentDeclinedError';
    errorCode: ErrorCode;
    message: Scalars['String'];
    paymentErrorMessage: Scalars['String'];
};

/** Returned when a Payment fails due to an error. */
export type PaymentFailedError = ErrorResult & {
    __typename?: 'PaymentFailedError';
    errorCode: ErrorCode;
    message: Scalars['String'];
    paymentErrorMessage: Scalars['String'];
};

/** Passed as input to the `addPaymentToOrder` mutation. */
export type PaymentInput = {
    /**
     * This field should contain arbitrary data passed to the specified PaymentMethodHandler's `createPayment()` method
     * as the "metadata" argument. For example, it could contain an ID for the payment and other
     * data generated by the payment provider.
     */
    metadata: Scalars['JSON'];
    /** This field should correspond to the `code` property of a PaymentMethod. */
    method: Scalars['String'];
};

export type PaymentMethod = Node & {
    __typename?: 'PaymentMethod';
    checker?: Maybe<ConfigurableOperation>;
    code: Scalars['String'];
    createdAt: Scalars['DateTime'];
    customFields?: Maybe<Scalars['JSON']>;
    description: Scalars['String'];
    enabled: Scalars['Boolean'];
    handler: ConfigurableOperation;
    id: Scalars['ID'];
    name: Scalars['String'];
    updatedAt: Scalars['DateTime'];
};

export type PaymentMethodQuote = {
    __typename?: 'PaymentMethodQuote';
    code: Scalars['String'];
    customFields?: Maybe<Scalars['JSON']>;
    description: Scalars['String'];
    eligibilityMessage?: Maybe<Scalars['String']>;
    id: Scalars['ID'];
    isEligible: Scalars['Boolean'];
    name: Scalars['String'];
};

/**
 * @description
 * Permissions for administrators and customers. Used to control access to
 * GraphQL resolvers via the {@link Allow} decorator.
 *
 * ## Understanding Permission.Owner
 *
 * `Permission.Owner` is a special permission which is used in some Vendure resolvers to indicate that that resolver should only
 * be accessible to the "owner" of that resource.
 *
 * For example, the Shop API `activeCustomer` query resolver should only return the Customer object for the "owner" of that Customer, i.e.
 * based on the activeUserId of the current session. As a result, the resolver code looks like this:
 *
 * @example
 * ```TypeScript
 * \@Query()
 * \@Allow(Permission.Owner)
 * async activeCustomer(\@Ctx() ctx: RequestContext): Promise<Customer | undefined> {
 *   const userId = ctx.activeUserId;
 *   if (userId) {
 *     return this.customerService.findOneByUserId(ctx, userId);
 *   }
 * }
 * ```
 *
 * Here we can see that the "ownership" must be enforced by custom logic inside the resolver. Since "ownership" cannot be defined generally
 * nor statically encoded at build-time, any resolvers using `Permission.Owner` **must** include logic to enforce that only the owner
 * of the resource has access. If not, then it is the equivalent of using `Permission.Public`.
 *
 *
 * @docsCategory common
 */
export enum Permission {
    /** Authenticated means simply that the user is logged in */
    Authenticated = 'Authenticated',
    /** Grants permission to create Administrator */
    CreateAdministrator = 'CreateAdministrator',
    /** Grants permission to create Asset */
    CreateAsset = 'CreateAsset',
    /** Grants permission to create Products, Facets, Assets, Collections */
    CreateCatalog = 'CreateCatalog',
    /** Grants permission to create Channel */
    CreateChannel = 'CreateChannel',
    /** Grants permission to create Collection */
    CreateCollection = 'CreateCollection',
    /** Grants permission to create Country */
    CreateCountry = 'CreateCountry',
    /** Grants permission to create Customer */
    CreateCustomer = 'CreateCustomer',
    /** Grants permission to create CustomerGroup */
    CreateCustomerGroup = 'CreateCustomerGroup',
    /** Grants permission to create Facet */
    CreateFacet = 'CreateFacet',
    /** Grants permission to create Order */
    CreateOrder = 'CreateOrder',
    /** Grants permission to create PaymentMethod */
    CreatePaymentMethod = 'CreatePaymentMethod',
    /** Grants permission to create Product */
    CreateProduct = 'CreateProduct',
    /** Grants permission to create Promotion */
    CreatePromotion = 'CreatePromotion',
    /** Grants permission to create PaymentMethods, ShippingMethods, TaxCategories, TaxRates, Zones, Countries, System & GlobalSettings */
    CreateSettings = 'CreateSettings',
    /** Grants permission to create ShippingMethod */
    CreateShippingMethod = 'CreateShippingMethod',
    /** Grants permission to create System */
    CreateSystem = 'CreateSystem',
    /** Grants permission to create Tag */
    CreateTag = 'CreateTag',
    /** Grants permission to create TaxCategory */
    CreateTaxCategory = 'CreateTaxCategory',
    /** Grants permission to create TaxRate */
    CreateTaxRate = 'CreateTaxRate',
    /** Grants permission to create Zone */
    CreateZone = 'CreateZone',
    /** Enables configuration & curation of advanced search */
    CurateSearch = 'CurateSearch',
    /** Grants permission to delete Administrator */
    DeleteAdministrator = 'DeleteAdministrator',
    /** Grants permission to delete Asset */
    DeleteAsset = 'DeleteAsset',
    /** Grants permission to delete Products, Facets, Assets, Collections */
    DeleteCatalog = 'DeleteCatalog',
    /** Grants permission to delete Channel */
    DeleteChannel = 'DeleteChannel',
    /** Grants permission to delete Collection */
    DeleteCollection = 'DeleteCollection',
    /** Grants permission to delete Country */
    DeleteCountry = 'DeleteCountry',
    /** Grants permission to delete Customer */
    DeleteCustomer = 'DeleteCustomer',
    /** Grants permission to delete CustomerGroup */
    DeleteCustomerGroup = 'DeleteCustomerGroup',
    /** Grants permission to delete Facet */
    DeleteFacet = 'DeleteFacet',
    /** Grants permission to delete Order */
    DeleteOrder = 'DeleteOrder',
    /** Grants permission to delete PaymentMethod */
    DeletePaymentMethod = 'DeletePaymentMethod',
    /** Grants permission to delete Product */
    DeleteProduct = 'DeleteProduct',
    /** Grants permission to delete Promotion */
    DeletePromotion = 'DeletePromotion',
    /** Grants permission to delete PaymentMethods, ShippingMethods, TaxCategories, TaxRates, Zones, Countries, System & GlobalSettings */
    DeleteSettings = 'DeleteSettings',
    /** Grants permission to delete ShippingMethod */
    DeleteShippingMethod = 'DeleteShippingMethod',
    /** Grants permission to delete System */
    DeleteSystem = 'DeleteSystem',
    /** Grants permission to delete Tag */
    DeleteTag = 'DeleteTag',
    /** Grants permission to delete TaxCategory */
    DeleteTaxCategory = 'DeleteTaxCategory',
    /** Grants permission to delete TaxRate */
    DeleteTaxRate = 'DeleteTaxRate',
    /** Grants permission to delete Zone */
    DeleteZone = 'DeleteZone',
    /** Owner means the user owns this entity, e.g. a Customer's own Order */
    Owner = 'Owner',
    /** Public means any unauthenticated user may perform the operation */
    Public = 'Public',
    /** Grants permission to read Administrator */
    ReadAdministrator = 'ReadAdministrator',
    /** Grants permission to read Asset */
    ReadAsset = 'ReadAsset',
    /** Grants permission to read Products, Facets, Assets, Collections */
    ReadCatalog = 'ReadCatalog',
    /** Grants permission to read Channel */
    ReadChannel = 'ReadChannel',
    /** Grants permission to read Collection */
    ReadCollection = 'ReadCollection',
    /** Grants permission to read Country */
    ReadCountry = 'ReadCountry',
    /** Grants permission to read Customer */
    ReadCustomer = 'ReadCustomer',
    /** Grants permission to read CustomerGroup */
    ReadCustomerGroup = 'ReadCustomerGroup',
    /** Grants permission to read Facet */
    ReadFacet = 'ReadFacet',
    /** Grants permission to read Order */
    ReadOrder = 'ReadOrder',
    /** Grants permission to read PaymentMethod */
    ReadPaymentMethod = 'ReadPaymentMethod',
    /** Grants permission to read Product */
    ReadProduct = 'ReadProduct',
    /** Grants permission to read Promotion */
    ReadPromotion = 'ReadPromotion',
    /** Grants permission to read PaymentMethods, ShippingMethods, TaxCategories, TaxRates, Zones, Countries, System & GlobalSettings */
    ReadSettings = 'ReadSettings',
    /** Grants permission to read ShippingMethod */
    ReadShippingMethod = 'ReadShippingMethod',
    /** Grants permission to read System */
    ReadSystem = 'ReadSystem',
    /** Grants permission to read Tag */
    ReadTag = 'ReadTag',
    /** Grants permission to read TaxCategory */
    ReadTaxCategory = 'ReadTaxCategory',
    /** Grants permission to read TaxRate */
    ReadTaxRate = 'ReadTaxRate',
    /** Grants permission to read Zone */
    ReadZone = 'ReadZone',
    /** SuperAdmin has unrestricted access to all operations */
    SuperAdmin = 'SuperAdmin',
    /** Grants permission to update Administrator */
    UpdateAdministrator = 'UpdateAdministrator',
    /** Grants permission to update Asset */
    UpdateAsset = 'UpdateAsset',
    /** Grants permission to update Products, Facets, Assets, Collections */
    UpdateCatalog = 'UpdateCatalog',
    /** Grants permission to update Channel */
    UpdateChannel = 'UpdateChannel',
    /** Grants permission to update Collection */
    UpdateCollection = 'UpdateCollection',
    /** Grants permission to update Country */
    UpdateCountry = 'UpdateCountry',
    /** Grants permission to update Customer */
    UpdateCustomer = 'UpdateCustomer',
    /** Grants permission to update CustomerGroup */
    UpdateCustomerGroup = 'UpdateCustomerGroup',
    /** Grants permission to update Facet */
    UpdateFacet = 'UpdateFacet',
    /** Grants permission to update GlobalSettings */
    UpdateGlobalSettings = 'UpdateGlobalSettings',
    /** Grants permission to update Order */
    UpdateOrder = 'UpdateOrder',
    /** Grants permission to update PaymentMethod */
    UpdatePaymentMethod = 'UpdatePaymentMethod',
    /** Grants permission to update Product */
    UpdateProduct = 'UpdateProduct',
    /** Grants permission to update Promotion */
    UpdatePromotion = 'UpdatePromotion',
    /** Grants permission to update PaymentMethods, ShippingMethods, TaxCategories, TaxRates, Zones, Countries, System & GlobalSettings */
    UpdateSettings = 'UpdateSettings',
    /** Grants permission to update ShippingMethod */
    UpdateShippingMethod = 'UpdateShippingMethod',
    /** Grants permission to update System */
    UpdateSystem = 'UpdateSystem',
    /** Grants permission to update Tag */
    UpdateTag = 'UpdateTag',
    /** Grants permission to update TaxCategory */
    UpdateTaxCategory = 'UpdateTaxCategory',
    /** Grants permission to update TaxRate */
    UpdateTaxRate = 'UpdateTaxRate',
    /** Grants permission to update Zone */
    UpdateZone = 'UpdateZone'
}

/** The price range where the result has more than one price */
export type PriceRange = {
    __typename?: 'PriceRange';
    max: Scalars['Int'];
    min: Scalars['Int'];
};

export type PriceRangeInput = {
    max: Scalars['Int'];
    min: Scalars['Int'];
};

export type Product = Node & {
    __typename?: 'Product';
    assets: Array<Asset>;
    collections: Array<Collection>;
    createdAt: Scalars['DateTime'];
    customFields?: Maybe<ProductCustomFields>;
    description: Scalars['String'];
    facetValues: Array<FacetValue>;
    featuredAsset?: Maybe<Asset>;
    id: Scalars['ID'];
    languageCode: LanguageCode;
    name: Scalars['String'];
    optionGroups: Array<ProductOptionGroup>;
    slug: Scalars['String'];
    translations: Array<ProductTranslation>;
    updatedAt: Scalars['DateTime'];
    /** Returns a paginated, sortable, filterable list of ProductVariants */
    variantList: ProductVariantList;
    /** Returns all ProductVariants */
    variants: Array<ProductVariant>;
};


export type ProductVariantListArgs = {
    options?: InputMaybe<ProductVariantListOptions>;
};

export type ProductCustomFields = {
    __typename?: 'ProductCustomFields';
    additionalProducts?: Maybe<Array<Product>>;
    classification?: Maybe<Array<Block>>;
    customAttributes?: Maybe<Array<Block>>;
    downloads?: Maybe<Array<Download>>;
    infoText?: Maybe<Scalars['String']>;
    onSiteImages?: Maybe<Array<Asset>>;
    pimcoreId?: Maybe<Scalars['Int']>;
    productDetailName?: Maybe<Scalars['String']>;
    systemInformationItems?: Maybe<Array<Block>>;
};

export type ProductFilterParameter = {
    createdAt?: InputMaybe<DateOperators>;
    description?: InputMaybe<StringOperators>;
    id?: InputMaybe<IdOperators>;
    infoText?: InputMaybe<StringOperators>;
    languageCode?: InputMaybe<StringOperators>;
    name?: InputMaybe<StringOperators>;
    pimcoreId?: InputMaybe<NumberOperators>;
    productDetailName?: InputMaybe<StringOperators>;
    slug?: InputMaybe<StringOperators>;
    updatedAt?: InputMaybe<DateOperators>;
};

export type ProductList = PaginatedList & {
    __typename?: 'ProductList';
    items: Array<Product>;
    totalItems: Scalars['Int'];
};

export type ProductListOptions = {
    /** Allows the results to be filtered */
    filter?: InputMaybe<ProductFilterParameter>;
    /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
    filterOperator?: InputMaybe<LogicalOperator>;
    /** Skips the first n results, for use in pagination */
    skip?: InputMaybe<Scalars['Int']>;
    /** Specifies which properties to sort the results by */
    sort?: InputMaybe<ProductSortParameter>;
    /** Takes n results, for use in pagination */
    take?: InputMaybe<Scalars['Int']>;
};

export type ProductOption = Node & {
    __typename?: 'ProductOption';
    code: Scalars['String'];
    createdAt: Scalars['DateTime'];
    customFields?: Maybe<Scalars['JSON']>;
    group: ProductOptionGroup;
    groupId: Scalars['ID'];
    id: Scalars['ID'];
    languageCode: LanguageCode;
    name: Scalars['String'];
    translations: Array<ProductOptionTranslation>;
    updatedAt: Scalars['DateTime'];
};

export type ProductOptionGroup = Node & {
    __typename?: 'ProductOptionGroup';
    code: Scalars['String'];
    createdAt: Scalars['DateTime'];
    customFields?: Maybe<Scalars['JSON']>;
    id: Scalars['ID'];
    languageCode: LanguageCode;
    name: Scalars['String'];
    options: Array<ProductOption>;
    translations: Array<ProductOptionGroupTranslation>;
    updatedAt: Scalars['DateTime'];
};

export type ProductOptionGroupTranslation = {
    __typename?: 'ProductOptionGroupTranslation';
    createdAt: Scalars['DateTime'];
    id: Scalars['ID'];
    languageCode: LanguageCode;
    name: Scalars['String'];
    updatedAt: Scalars['DateTime'];
};

export type ProductOptionTranslation = {
    __typename?: 'ProductOptionTranslation';
    createdAt: Scalars['DateTime'];
    id: Scalars['ID'];
    languageCode: LanguageCode;
    name: Scalars['String'];
    updatedAt: Scalars['DateTime'];
};

export type ProductSortParameter = {
    createdAt?: InputMaybe<SortOrder>;
    description?: InputMaybe<SortOrder>;
    id?: InputMaybe<SortOrder>;
    infoText?: InputMaybe<SortOrder>;
    name?: InputMaybe<SortOrder>;
    pimcoreId?: InputMaybe<SortOrder>;
    productDetailName?: InputMaybe<SortOrder>;
    slug?: InputMaybe<SortOrder>;
    updatedAt?: InputMaybe<SortOrder>;
};

export type ProductTranslation = {
    __typename?: 'ProductTranslation';
    createdAt: Scalars['DateTime'];
    customFields?: Maybe<ProductTranslationCustomFields>;
    description: Scalars['String'];
    id: Scalars['ID'];
    languageCode: LanguageCode;
    name: Scalars['String'];
    slug: Scalars['String'];
    updatedAt: Scalars['DateTime'];
};

export type ProductTranslationCustomFields = {
    __typename?: 'ProductTranslationCustomFields';
    infoText?: Maybe<Scalars['String']>;
    productDetailName?: Maybe<Scalars['String']>;
};

export type ProductVariant = Node & {
    __typename?: 'ProductVariant';
    assets: Array<Asset>;
    createdAt: Scalars['DateTime'];
    currencyCode: CurrencyCode;
    customFields?: Maybe<ProductVariantCustomFields>;
    facetValues: Array<FacetValue>;
    featuredAsset?: Maybe<Asset>;
    id: Scalars['ID'];
    languageCode: LanguageCode;
    name: Scalars['String'];
    options: Array<ProductOption>;
    price: Scalars['Int'];
    priceWithTax: Scalars['Int'];
    product: Product;
    productId: Scalars['ID'];
    sku: Scalars['String'];
    stockLevel: Scalars['String'];
    taxCategory: TaxCategory;
    taxRateApplied: TaxRate;
    translations: Array<ProductVariantTranslation>;
    updatedAt: Scalars['DateTime'];
};

export type ProductVariantCustomFields = {
    __typename?: 'ProductVariantCustomFields';
    additionalProducts?: Maybe<Array<Product>>;
    categoryHierarchy?: Maybe<Scalars['String']>;
    classification?: Maybe<Array<Block>>;
    customAttributes?: Maybe<Array<Block>>;
    downloads?: Maybe<Array<Download>>;
    infoText?: Maybe<Scalars['String']>;
    onSiteImages?: Maybe<Array<Asset>>;
    pimcoreId?: Maybe<Scalars['Int']>;
    productDetailName?: Maybe<Scalars['String']>;
    systemInformationItems?: Maybe<Array<Block>>;
};

export type ProductVariantFilterParameter = {
    categoryHierarchy?: InputMaybe<StringOperators>;
    createdAt?: InputMaybe<DateOperators>;
    currencyCode?: InputMaybe<StringOperators>;
    id?: InputMaybe<IdOperators>;
    infoText?: InputMaybe<StringOperators>;
    languageCode?: InputMaybe<StringOperators>;
    name?: InputMaybe<StringOperators>;
    pimcoreId?: InputMaybe<NumberOperators>;
    price?: InputMaybe<NumberOperators>;
    priceWithTax?: InputMaybe<NumberOperators>;
    productDetailName?: InputMaybe<StringOperators>;
    productId?: InputMaybe<IdOperators>;
    sku?: InputMaybe<StringOperators>;
    stockLevel?: InputMaybe<StringOperators>;
    updatedAt?: InputMaybe<DateOperators>;
};

export type ProductVariantList = PaginatedList & {
    __typename?: 'ProductVariantList';
    items: Array<ProductVariant>;
    totalItems: Scalars['Int'];
};

export type ProductVariantListOptions = {
    /** Allows the results to be filtered */
    filter?: InputMaybe<ProductVariantFilterParameter>;
    /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
    filterOperator?: InputMaybe<LogicalOperator>;
    /** Skips the first n results, for use in pagination */
    skip?: InputMaybe<Scalars['Int']>;
    /** Specifies which properties to sort the results by */
    sort?: InputMaybe<ProductVariantSortParameter>;
    /** Takes n results, for use in pagination */
    take?: InputMaybe<Scalars['Int']>;
};

export type ProductVariantSortParameter = {
    categoryHierarchy?: InputMaybe<SortOrder>;
    createdAt?: InputMaybe<SortOrder>;
    id?: InputMaybe<SortOrder>;
    infoText?: InputMaybe<SortOrder>;
    name?: InputMaybe<SortOrder>;
    pimcoreId?: InputMaybe<SortOrder>;
    price?: InputMaybe<SortOrder>;
    priceWithTax?: InputMaybe<SortOrder>;
    productDetailName?: InputMaybe<SortOrder>;
    productId?: InputMaybe<SortOrder>;
    sku?: InputMaybe<SortOrder>;
    stockLevel?: InputMaybe<SortOrder>;
    updatedAt?: InputMaybe<SortOrder>;
};

export type ProductVariantTranslation = {
    __typename?: 'ProductVariantTranslation';
    createdAt: Scalars['DateTime'];
    customFields?: Maybe<ProductVariantTranslationCustomFields>;
    id: Scalars['ID'];
    languageCode: LanguageCode;
    name: Scalars['String'];
    updatedAt: Scalars['DateTime'];
};

export type ProductVariantTranslationCustomFields = {
    __typename?: 'ProductVariantTranslationCustomFields';
    categoryHierarchy?: Maybe<Scalars['String']>;
    infoText?: Maybe<Scalars['String']>;
    productDetailName?: Maybe<Scalars['String']>;
};

export type Promotion = Node & {
    __typename?: 'Promotion';
    actions: Array<ConfigurableOperation>;
    conditions: Array<ConfigurableOperation>;
    couponCode?: Maybe<Scalars['String']>;
    createdAt: Scalars['DateTime'];
    customFields?: Maybe<Scalars['JSON']>;
    enabled: Scalars['Boolean'];
    endsAt?: Maybe<Scalars['DateTime']>;
    id: Scalars['ID'];
    name: Scalars['String'];
    perCustomerUsageLimit?: Maybe<Scalars['Int']>;
    startsAt?: Maybe<Scalars['DateTime']>;
    updatedAt: Scalars['DateTime'];
};

export type PromotionList = PaginatedList & {
    __typename?: 'PromotionList';
    items: Array<Promotion>;
    totalItems: Scalars['Int'];
};

export type Query = {
    __typename?: 'Query';
    /** The active Channel */
    activeChannel: Channel;
    activeCompany?: Maybe<FindActiveCompanyResult>;
    /** The active Customer */
    activeCustomer?: Maybe<Customer>;
    /**
     * The active Order. Will be `null` until an Order is created via `addItemToOrder`. Once an Order reaches the
     * state of `PaymentAuthorized` or `PaymentSettled`, then that Order is no longer considered "active" and this
     * query will once again return `null`.
     */
    activeOrder?: Maybe<Order>;
    /** An array of supported Countries */
    availableCountries: Array<Country>;
    channel: GetChannelResult;
    /** Returns a Collection either by its id or slug. If neither 'id' nor 'slug' is specified, an error will result. */
    collection?: Maybe<Collection>;
    /** A list of Collections available to the shop */
    collections: CollectionList;
    companies: FindCompaniesResult;
    customerSpecificPrice: CustomerSpecificPrice;
    /** Returns a list of payment methods and their eligibility based on the current active Order */
    eligiblePaymentMethods: Array<PaymentMethodQuote>;
    /** Returns a list of eligible shipping methods based on the current active Order */
    eligibleShippingMethods: Array<ShippingMethodQuote>;
    /** Returns a Facet by its id */
    facet?: Maybe<Facet>;
    /** A list of Facets available to the shop */
    facets: FacetList;
    /** Returns information about the current authenticated User */
    me?: Maybe<CurrentUser>;
    /** Returns the possible next states that the activeOrder can transition to */
    nextOrderStates: Array<Scalars['String']>;
    /**
     * Returns an Order based on the id. Note that in the Shop API, only orders belonging to the
     * currently-authenticated User may be queried.
     */
    order?: Maybe<Order>;
    /**
     * Returns an Order based on the order `code`. For guest Orders (i.e. Orders placed by non-authenticated Customers)
     * this query will only return the Order within 2 hours of the Order being placed. This allows an Order confirmation
     * screen to be shown immediately after completion of a guest checkout, yet prevents security risks of allowing
     * general anonymous access to Order data.
     */
    orderByCode?: Maybe<Order>;
    orderDocuments: OrderDocumentList;
    /** Get a Product either by id or slug. If neither 'id' nor 'slug' is specified, an error will result. */
    product?: Maybe<Product>;
    /** Get a list of Products */
    products: ProductList;
    promotions: Array<Promotion>;
    /** Search Products based on the criteria set by the `SearchInput` */
    search: SearchResponse;
    variant?: Maybe<ProductVariant>;
};


export type QueryChannelArgs = {
    countryCode: Scalars['String'];
};


export type QueryCollectionArgs = {
    id?: InputMaybe<Scalars['ID']>;
    slug?: InputMaybe<Scalars['String']>;
};


export type QueryCollectionsArgs = {
    options?: InputMaybe<CollectionListOptions>;
};


export type QueryCompaniesArgs = {
    options?: InputMaybe<CompanyListOptions>;
};


export type QueryCustomerSpecificPriceArgs = {
    channelCode: Scalars['String'];
    variantId: Scalars['String'];
};


export type QueryFacetArgs = {
    id: Scalars['ID'];
};


export type QueryFacetsArgs = {
    options?: InputMaybe<FacetListOptions>;
};


export type QueryOrderArgs = {
    id: Scalars['ID'];
};


export type QueryOrderByCodeArgs = {
    code: Scalars['String'];
};


export type QueryOrderDocumentsArgs = {
    options?: InputMaybe<OrderDocumentListOptions>;
};


export type QueryProductArgs = {
    id?: InputMaybe<Scalars['ID']>;
    slug?: InputMaybe<Scalars['String']>;
};


export type QueryProductsArgs = {
    options?: InputMaybe<ProductListOptions>;
};


export type QueryPromotionsArgs = {
    productIds?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};


export type QuerySearchArgs = {
    input: SearchInput;
};


export type QueryVariantArgs = {
    variantId?: InputMaybe<Scalars['ID']>;
};

export type RefreshCustomerVerificationResult = NativeAuthStrategyError | Success;

export type Refund = Node & {
    __typename?: 'Refund';
    adjustment: Scalars['Int'];
    createdAt: Scalars['DateTime'];
    id: Scalars['ID'];
    items: Scalars['Int'];
    metadata?: Maybe<Scalars['JSON']>;
    method?: Maybe<Scalars['String']>;
    orderItems: Array<OrderItem>;
    paymentId: Scalars['ID'];
    reason?: Maybe<Scalars['String']>;
    shipping: Scalars['Int'];
    state: Scalars['String'];
    total: Scalars['Int'];
    transactionId?: Maybe<Scalars['String']>;
    updatedAt: Scalars['DateTime'];
};

export type RegisterB2BCustomerAccountResult = InvalidVatError | MissingPasswordError | NativeAuthStrategyError | PasswordValidationError | Success;

export type RegisterCompanyInput = {
    address: CreateCompanyAddressInput;
    name: Scalars['String'];
    vat?: InputMaybe<Scalars['String']>;
};

export type RegisterCustomerAccountResult = MissingPasswordError | NativeAuthStrategyError | PasswordValidationError | Success;

export type RegisterCustomerCustomFieldsInput = {
    companyId?: InputMaybe<Scalars['ID']>;
    erpId?: InputMaybe<Scalars['String']>;
    salutation?: InputMaybe<Scalars['String']>;
};

export type RegisterCustomerInput = {
    customFields?: InputMaybe<RegisterCustomerCustomFieldsInput>;
    emailAddress: Scalars['String'];
    firstName?: InputMaybe<Scalars['String']>;
    lastName?: InputMaybe<Scalars['String']>;
    password?: InputMaybe<Scalars['String']>;
    phoneNumber?: InputMaybe<Scalars['String']>;
    title?: InputMaybe<Scalars['String']>;
};

export type RelationCustomFieldConfig = CustomField & {
    __typename?: 'RelationCustomFieldConfig';
    description?: Maybe<Array<LocalizedString>>;
    entity: Scalars['String'];
    internal?: Maybe<Scalars['Boolean']>;
    label?: Maybe<Array<LocalizedString>>;
    list: Scalars['Boolean'];
    name: Scalars['String'];
    nullable?: Maybe<Scalars['Boolean']>;
    readonly?: Maybe<Scalars['Boolean']>;
    scalarFields: Array<Scalars['String']>;
    type: Scalars['String'];
    ui?: Maybe<Scalars['JSON']>;
};

export type RemoveOrderItemsResult = Order | OrderModificationError;

export type RequestPasswordResetResult = NativeAuthStrategyError | Success;

export type RequestUpdateCustomerEmailAddressResult = EmailAddressConflictError | InvalidCredentialsError | NativeAuthStrategyError | Success;

export type ResetPasswordResult = CurrentUser | NativeAuthStrategyError | NotVerifiedError | PasswordResetTokenExpiredError | PasswordResetTokenInvalidError | PasswordValidationError;

export type ResultHighlight = {
    __typename?: 'ResultHighlight';
    field: Scalars['String'];
    matchedTokens: Array<Scalars['String']>;
    snippet: Scalars['String'];
};

export type Role = Node & {
    __typename?: 'Role';
    channels: Array<Channel>;
    code: Scalars['String'];
    createdAt: Scalars['DateTime'];
    description: Scalars['String'];
    id: Scalars['ID'];
    permissions: Array<Permission>;
    updatedAt: Scalars['DateTime'];
};

export type RoleList = PaginatedList & {
    __typename?: 'RoleList';
    items: Array<Role>;
    totalItems: Scalars['Int'];
};

export type SearchInput = {
    /** Whether to apply curations to the results */
    applyCurations?: InputMaybe<Scalars['Boolean']>;
    collectionId?: InputMaybe<Scalars['ID']>;
    collectionSlug?: InputMaybe<Scalars['String']>;
    facetValueFilters?: InputMaybe<Array<FacetValueFilterInput>>;
    facetValueIds?: InputMaybe<Array<Scalars['ID']>>;
    facetValueOperator?: InputMaybe<LogicalOperator>;
    groupByProduct?: InputMaybe<Scalars['Boolean']>;
    /** Allows filtering by stock status */
    inStock?: InputMaybe<Scalars['Boolean']>;
    /** Whether to log this search in the analytics store. If true, the result will include a queryId */
    logAnalytics?: InputMaybe<Scalars['Boolean']>;
    maxFacetValues?: InputMaybe<Scalars['Int']>;
    /** If true, will use the search term as a prefix. Intended in live search (autocomplete) use cases. */
    prefixMode?: InputMaybe<Scalars['Boolean']>;
    /** Allows filtering by price range */
    priceRange?: InputMaybe<PriceRangeInput>;
    /** Allows filtering by price range (including taxes) */
    priceRangeWithTax?: InputMaybe<PriceRangeInput>;
    skip?: InputMaybe<Scalars['Int']>;
    sort?: InputMaybe<SearchResultSortParameter>;
    take?: InputMaybe<Scalars['Int']>;
    term?: InputMaybe<Scalars['String']>;
    /** Sample to top collections from the first n results, defaults to 10 */
    topCollectionsFromTop?: InputMaybe<Scalars['Int']>;
};

export type SearchListViewedEventInput = {
    queryId: Scalars['String'];
};

export type SearchReindexResponse = {
    __typename?: 'SearchReindexResponse';
    success: Scalars['Boolean'];
};

export type SearchResponse = {
    __typename?: 'SearchResponse';
    collections: Array<CollectionResult>;
    facetCounts: Array<FacetCountData>;
    facetValues: Array<FacetValueResult>;
    items: Array<SearchResult>;
    prices: SearchResponsePriceData;
    queryId?: Maybe<Scalars['String']>;
    topCollections: Array<Maybe<TopCollectionResult>>;
    totalItems: Scalars['Int'];
};

export type SearchResponsePriceData = {
    __typename?: 'SearchResponsePriceData';
    range: PriceRange;
    rangeWithTax: PriceRange;
};

export type SearchResult = {
    __typename?: 'SearchResult';
    /** An array of ids of the Collections in which this result appears */
    collectionIds: Array<Scalars['ID']>;
    collectionSlugs: Array<Scalars['String']>;
    currencyCode: CurrencyCode;
    customMappings: SearchResultCustomMappings;
    description: Scalars['String'];
    facetIds: Array<Scalars['ID']>;
    facetValueIds: Array<Scalars['ID']>;
    highlights: Array<ResultHighlight>;
    id: Scalars['String'];
    inStock: Scalars['Boolean'];
    price: SearchResultPrice;
    priceWithTax: SearchResultPrice;
    productAsset?: Maybe<SearchResultAsset>;
    productId: Scalars['ID'];
    productName: Scalars['String'];
    productVariantAsset?: Maybe<SearchResultAsset>;
    productVariantId: Scalars['ID'];
    productVariantName: Scalars['String'];
    /** A relevance score for the result. Differs between database implementations */
    score: Scalars['Float'];
    sku: Scalars['String'];
    slug: Scalars['String'];
};

export type SearchResultAsset = {
    __typename?: 'SearchResultAsset';
    focalPoint?: Maybe<Coordinate>;
    id: Scalars['ID'];
    preview: Scalars['String'];
};

export type SearchResultClickedEventInput = {
    position: Scalars['Int'];
    queryId: Scalars['String'];
    resultId: Scalars['String'];
};

export type SearchResultCustomMappings = {
    __typename?: 'SearchResultCustomMappings';
    classification?: Maybe<Scalars['String']>;
    collectionBreadcrumbslvl0: Scalars['String'];
    collectionBreadcrumbslvl1: Scalars['String'];
    collectionBreadcrumbslvl2: Scalars['String'];
    collectionBreadcrumbslvl3: Scalars['String'];
    diameterMax?: Maybe<Scalars['Int']>;
    diameterMin?: Maybe<Scalars['Int']>;
    facets: Array<Scalars['String']>;
    sortName: Scalars['String'];
};

/** The price of a search result product, either as a range or as a single price */
export type SearchResultPrice = PriceRange | SinglePrice;

export type SearchResultSortParameter = {
    name?: InputMaybe<SortOrder>;
    price?: InputMaybe<SortOrder>;
    productVariantId?: InputMaybe<SortOrder>;
    sku?: InputMaybe<SortOrder>;
    sortName?: InputMaybe<SortOrder>;
};

export type SetActiveCompanyResult = CompanyNotFoundError | Customer | NotAllowedError;

export type SetCustomerForOrderResult = AlreadyLoggedInError | EmailAddressConflictError | NoActiveOrderError | Order;

export type SetOrderPaymentMethodResult = IneligiblePaymentMethodError | NoActiveOrderError | Order | OrderPaymentStateError;

export type SetOrderShippingMethodResult = IneligibleShippingMethodError | NoActiveOrderError | Order | OrderModificationError;

export type ShippingLine = {
    __typename?: 'ShippingLine';
    discountedPrice: Scalars['Int'];
    discountedPriceWithTax: Scalars['Int'];
    discounts: Array<Discount>;
    id: Scalars['ID'];
    price: Scalars['Int'];
    priceWithTax: Scalars['Int'];
    shippingMethod: ShippingMethod;
};

export type ShippingMethod = Node & {
    __typename?: 'ShippingMethod';
    calculator: ConfigurableOperation;
    checker: ConfigurableOperation;
    code: Scalars['String'];
    createdAt: Scalars['DateTime'];
    customFields?: Maybe<Scalars['JSON']>;
    description: Scalars['String'];
    fulfillmentHandlerCode: Scalars['String'];
    id: Scalars['ID'];
    languageCode: LanguageCode;
    name: Scalars['String'];
    translations: Array<ShippingMethodTranslation>;
    updatedAt: Scalars['DateTime'];
};

export type ShippingMethodList = PaginatedList & {
    __typename?: 'ShippingMethodList';
    items: Array<ShippingMethod>;
    totalItems: Scalars['Int'];
};

export type ShippingMethodQuote = {
    __typename?: 'ShippingMethodQuote';
    code: Scalars['String'];
    customFields?: Maybe<Scalars['JSON']>;
    description: Scalars['String'];
    id: Scalars['ID'];
    /** Any optional metadata returned by the ShippingCalculator in the ShippingCalculationResult */
    metadata?: Maybe<Scalars['JSON']>;
    name: Scalars['String'];
    price: Scalars['Int'];
    priceWithTax: Scalars['Int'];
};

export type ShippingMethodTranslation = {
    __typename?: 'ShippingMethodTranslation';
    createdAt: Scalars['DateTime'];
    description: Scalars['String'];
    id: Scalars['ID'];
    languageCode: LanguageCode;
    name: Scalars['String'];
    updatedAt: Scalars['DateTime'];
};

/** The price value where the result has a single price */
export type SinglePrice = {
    __typename?: 'SinglePrice';
    value: Scalars['Int'];
};

export enum SortOrder {
    Asc = 'ASC',
    Desc = 'DESC'
}

export type StringCustomFieldConfig = CustomField & {
    __typename?: 'StringCustomFieldConfig';
    description?: Maybe<Array<LocalizedString>>;
    internal?: Maybe<Scalars['Boolean']>;
    label?: Maybe<Array<LocalizedString>>;
    length?: Maybe<Scalars['Int']>;
    list: Scalars['Boolean'];
    name: Scalars['String'];
    nullable?: Maybe<Scalars['Boolean']>;
    options?: Maybe<Array<StringFieldOption>>;
    pattern?: Maybe<Scalars['String']>;
    readonly?: Maybe<Scalars['Boolean']>;
    type: Scalars['String'];
    ui?: Maybe<Scalars['JSON']>;
};

export type StringFieldOption = {
    __typename?: 'StringFieldOption';
    label?: Maybe<Array<LocalizedString>>;
    value: Scalars['String'];
};

/** Operators for filtering on a list of String fields */
export type StringListOperators = {
    inList: Scalars['String'];
};

/** Operators for filtering on a String field */
export type StringOperators = {
    contains?: InputMaybe<Scalars['String']>;
    eq?: InputMaybe<Scalars['String']>;
    in?: InputMaybe<Array<Scalars['String']>>;
    notContains?: InputMaybe<Scalars['String']>;
    notEq?: InputMaybe<Scalars['String']>;
    notIn?: InputMaybe<Array<Scalars['String']>>;
    regex?: InputMaybe<Scalars['String']>;
};

/** Indicates that an operation succeeded, where we do not want to return any more specific information. */
export type Success = {
    __typename?: 'Success';
    success: Scalars['Boolean'];
};

export type Surcharge = Node & {
    __typename?: 'Surcharge';
    createdAt: Scalars['DateTime'];
    description: Scalars['String'];
    id: Scalars['ID'];
    price: Scalars['Int'];
    priceWithTax: Scalars['Int'];
    sku?: Maybe<Scalars['String']>;
    taxLines: Array<TaxLine>;
    taxRate: Scalars['Float'];
    updatedAt: Scalars['DateTime'];
};

export type Tag = Node & {
    __typename?: 'Tag';
    createdAt: Scalars['DateTime'];
    id: Scalars['ID'];
    updatedAt: Scalars['DateTime'];
    value: Scalars['String'];
};

export type TagList = PaginatedList & {
    __typename?: 'TagList';
    items: Array<Tag>;
    totalItems: Scalars['Int'];
};

export type TaxCategory = Node & {
    __typename?: 'TaxCategory';
    createdAt: Scalars['DateTime'];
    customFields?: Maybe<Scalars['JSON']>;
    id: Scalars['ID'];
    isDefault: Scalars['Boolean'];
    name: Scalars['String'];
    updatedAt: Scalars['DateTime'];
};

export type TaxLine = {
    __typename?: 'TaxLine';
    description: Scalars['String'];
    taxRate: Scalars['Float'];
};

export type TaxRate = Node & {
    __typename?: 'TaxRate';
    category: TaxCategory;
    createdAt: Scalars['DateTime'];
    customFields?: Maybe<Scalars['JSON']>;
    customerGroup?: Maybe<CustomerGroup>;
    enabled: Scalars['Boolean'];
    id: Scalars['ID'];
    name: Scalars['String'];
    updatedAt: Scalars['DateTime'];
    value: Scalars['Float'];
    zone: Zone;
};

export type TaxRateList = PaginatedList & {
    __typename?: 'TaxRateList';
    items: Array<TaxRate>;
    totalItems: Scalars['Int'];
};

export type TermsOfPayment = Node & {
    __typename?: 'TermsOfPayment';
    amount?: Maybe<Scalars['Int']>;
    companyId?: Maybe<Scalars['ID']>;
    contactPerson?: Maybe<Scalars['String']>;
    id: Scalars['ID'];
    paymentId?: Maybe<Scalars['String']>;
    text?: Maybe<Scalars['String']>;
};

export type TextCustomFieldConfig = CustomField & {
    __typename?: 'TextCustomFieldConfig';
    description?: Maybe<Array<LocalizedString>>;
    internal?: Maybe<Scalars['Boolean']>;
    label?: Maybe<Array<LocalizedString>>;
    list: Scalars['Boolean'];
    name: Scalars['String'];
    nullable?: Maybe<Scalars['Boolean']>;
    readonly?: Maybe<Scalars['Boolean']>;
    type: Scalars['String'];
    ui?: Maybe<Scalars['JSON']>;
};

export type TopCollectionResult = {
    __typename?: 'TopCollectionResult';
    collection: Collection;
    score: Scalars['Int'];
};

export type TransitionOrderToStateResult = Order | OrderStateTransitionError;

export type UpdateAddressInput = {
    city?: InputMaybe<Scalars['String']>;
    company?: InputMaybe<Scalars['String']>;
    countryCode?: InputMaybe<Scalars['String']>;
    customFields?: InputMaybe<Scalars['JSON']>;
    defaultBillingAddress?: InputMaybe<Scalars['Boolean']>;
    defaultShippingAddress?: InputMaybe<Scalars['Boolean']>;
    fullName?: InputMaybe<Scalars['String']>;
    id: Scalars['ID'];
    phoneNumber?: InputMaybe<Scalars['String']>;
    postalCode?: InputMaybe<Scalars['String']>;
    province?: InputMaybe<Scalars['String']>;
    streetLine1?: InputMaybe<Scalars['String']>;
    streetLine2?: InputMaybe<Scalars['String']>;
};

export type UpdateCompanyAddressInput = {
    city?: InputMaybe<Scalars['String']>;
    countryCode?: InputMaybe<Scalars['String']>;
    fullName?: InputMaybe<Scalars['String']>;
    id: Scalars['ID'];
    phoneNumber?: InputMaybe<Scalars['String']>;
    postalCode?: InputMaybe<Scalars['String']>;
    province?: InputMaybe<Scalars['String']>;
    streetLine1?: InputMaybe<Scalars['String']>;
    streetLine2?: InputMaybe<Scalars['String']>;
};

export type UpdateCompanyAddressResult = AddressNotFoundError | CompanyAddress;

export type UpdateCompanyInput = {
    erpId?: InputMaybe<Scalars['String']>;
    name?: InputMaybe<Scalars['String']>;
    ust?: InputMaybe<Scalars['String']>;
    vat?: InputMaybe<Scalars['String']>;
};

export type UpdateCompanyResult = Company | CompanyNotFoundError;

export type UpdateCustomerCustomFieldsInput = {
    companyId?: InputMaybe<Scalars['ID']>;
    erpId?: InputMaybe<Scalars['String']>;
    salutation?: InputMaybe<Scalars['String']>;
};

export type UpdateCustomerEmailAddressResult = IdentifierChangeTokenExpiredError | IdentifierChangeTokenInvalidError | NativeAuthStrategyError | Success;

export type UpdateCustomerInput = {
    customFields?: InputMaybe<UpdateCustomerCustomFieldsInput>;
    firstName?: InputMaybe<Scalars['String']>;
    lastName?: InputMaybe<Scalars['String']>;
    phoneNumber?: InputMaybe<Scalars['String']>;
    title?: InputMaybe<Scalars['String']>;
};

export type UpdateCustomerPasswordResult = InvalidCredentialsError | NativeAuthStrategyError | PasswordValidationError | Success;

export type UpdateOrderCustomFieldsInput = {
    comment?: InputMaybe<Scalars['String']>;
    commission?: InputMaybe<Scalars['String']>;
    erpId?: InputMaybe<Scalars['String']>;
    reference?: InputMaybe<Scalars['String']>;
    savedPaymentMethod?: InputMaybe<Scalars['String']>;
};

export type UpdateOrderDocumentInput = {
    id: Scalars['ID'];
    name?: InputMaybe<Scalars['String']>;
    source?: InputMaybe<Scalars['String']>;
    type?: InputMaybe<Scalars['String']>;
};

export type UpdateOrderDocumentResult = OrderDocument | OrderDocumentNotFoundError;

export type UpdateOrderInput = {
    customFields?: InputMaybe<UpdateOrderCustomFieldsInput>;
};

export type UpdateOrderItemsResult = InsufficientStockError | NegativeQuantityError | Order | OrderLimitError | OrderModificationError;

export type User = Node & {
    __typename?: 'User';
    authenticationMethods: Array<AuthenticationMethod>;
    createdAt: Scalars['DateTime'];
    customFields?: Maybe<Scalars['JSON']>;
    id: Scalars['ID'];
    identifier: Scalars['String'];
    lastLogin?: Maybe<Scalars['DateTime']>;
    roles: Array<Role>;
    updatedAt: Scalars['DateTime'];
    verified: Scalars['Boolean'];
};

export type UserNotFoundError = ErrorResult & {
    __typename?: 'UserNotFoundError';
    errorCode: ErrorCode;
    message: Scalars['String'];
};

/**
 * Returned if the verification token (used to verify a Customer's email address) is valid, but has
 * expired according to the `verificationTokenDuration` setting in the AuthOptions.
 */
export type VerificationTokenExpiredError = ErrorResult & {
    __typename?: 'VerificationTokenExpiredError';
    errorCode: ErrorCode;
    message: Scalars['String'];
};

/**
 * Returned if the verification token (used to verify a Customer's email address) is either
 * invalid or does not match any expected tokens.
 */
export type VerificationTokenInvalidError = ErrorResult & {
    __typename?: 'VerificationTokenInvalidError';
    errorCode: ErrorCode;
    message: Scalars['String'];
};

export type VerifyCustomerAccountResult = CurrentUser | MissingPasswordError | NativeAuthStrategyError | PasswordAlreadySetError | PasswordValidationError | VerificationTokenExpiredError | VerificationTokenInvalidError;

export type VerifyCustomerResult = Customer | CustomerNotFoundError | UserNotFoundError;

export type Zone = Node & {
    __typename?: 'Zone';
    createdAt: Scalars['DateTime'];
    customFields?: Maybe<Scalars['JSON']>;
    id: Scalars['ID'];
    members: Array<Country>;
    name: Scalars['String'];
    updatedAt: Scalars['DateTime'];
};

export type AddressFragment = { __typename?: 'Address', id: string, createdAt: any, updatedAt: any, fullName?: string | null, streetLine1: string, streetLine2?: string | null, city?: string | null, province?: string | null, postalCode?: string | null, customFields?: any | null, country: { __typename?: 'Country', id: string, languageCode: LanguageCode, code: string, name: string, enabled: boolean, customFields?: any | null } };

export type CompanyAddressFragment = { __typename?: 'CompanyAddress', id: string, fullName: string, streetLine1: string, streetLine2?: string | null, province?: string | null, countryCode?: string | null, city?: string | null, postalCode?: string | null, phoneNumber?: string | null, defaultBillingAddress: boolean, defaultShippingAddress: boolean };

export type AssetFragment = { __typename?: 'Asset', width: number, height: number, source: string };

export type BreadcrumbFragment = { __typename?: 'CollectionBreadcrumb', name: string, id: string, slug: string };

export type CountryFragment = { __typename?: 'Country', id: string, languageCode: LanguageCode, code: string, name: string, enabled: boolean, customFields?: any | null };

export type ActiveOrderFragment = { __typename?: 'Order', id: string, state: string, updatedAt: any, createdAt: any, total: number, totalWithTax: number, subTotal: number, subTotalWithTax: number, shipping: number, currencyCode: CurrencyCode, shippingWithTax: number, totalQuantity: number, lines: Array<{ __typename?: 'OrderLine', id: string, linePrice: number, discountedLinePrice: number, unitPrice: number, quantity: number, productVariant: { __typename?: 'ProductVariant', currencyCode: CurrencyCode, id: string, name: string, sku: string, price: number, assets: Array<{ __typename?: 'Asset', id: string, source: string }> } }> };

export type OrderAddressFragment = { __typename?: 'OrderAddress', fullName?: string | null, company?: string | null, streetLine1?: string | null, streetLine2?: string | null, city?: string | null, province?: string | null, postalCode?: string | null, country?: string | null, countryCode?: string | null, phoneNumber?: string | null, customFields?: any | null };

export type ProductVariantCustomFieldFragment = { __typename?: 'ProductVariantCustomFields', productDetailName?: string | null, infoText?: string | null, customAttributes?: Array<{ __typename?: 'Block', itemText?: string | null, itemHeadline?: string | null }> | null, onSiteImages?: Array<{ __typename?: 'Asset', name: string, source: string }> | null, systemInformationItems?: Array<{ __typename?: 'Block', itemText?: string | null, itemHeadline?: string | null }> | null, additionalProducts?: Array<{ __typename?: 'Product', id: string, name: string }> | null };

export type ProductVariantFragment = { __typename?: 'ProductVariant', id: string, name: string, sku: string, stockLevel: string, currencyCode: CurrencyCode, price: number, facetValues: Array<{ __typename?: 'FacetValue', name: string, facet: { __typename?: 'Facet', name: string } }>, customFields?: { __typename?: 'ProductVariantCustomFields', productDetailName?: string | null, infoText?: string | null, customAttributes?: Array<{ __typename?: 'Block', itemText?: string | null, itemHeadline?: string | null }> | null, onSiteImages?: Array<{ __typename?: 'Asset', name: string, source: string }> | null, systemInformationItems?: Array<{ __typename?: 'Block', itemText?: string | null, itemHeadline?: string | null }> | null, additionalProducts?: Array<{ __typename?: 'Product', id: string, name: string }> | null } | null, assets: Array<{ __typename?: 'Asset', width: number, height: number, source: string }> };

export type CustomerDataFragment = { __typename?: 'Customer', id: string, firstName: string, lastName: string, emailAddress: string, title?: string | null, phoneNumber?: string | null, customFields?: { __typename?: 'CustomerCustomFields', salutation?: string | null } | null };

export type AddItemToOrderMutationVariables = Exact<{
    productVariantId: Scalars['ID'];
    quantity: Scalars['Int'];
    withCustomFields?: InputMaybe<Scalars['Boolean']>;
}>;


export type AddItemToOrderMutation = { __typename?: 'Mutation', addItemToOrder: { __typename: 'InsufficientStockError', errorCode: ErrorCode, message: string, quantityAvailable: number } | { __typename: 'NegativeQuantityError', errorCode: ErrorCode, message: string } | { __typename: 'Order', id: string, state: string, customer?: { __typename?: 'Customer', id: string, firstName: string, lastName: string, emailAddress: string, title?: string | null, phoneNumber?: string | null, customFields?: { __typename?: 'CustomerCustomFields', salutation?: string | null } | null } | null } | { __typename: 'OrderLimitError', message: string, maxItems: number } | { __typename: 'OrderModificationError', errorCode: ErrorCode, message: string } };

export type AddPaymentMutationVariables = Exact<{
    input: PaymentInput;
}>;


export type AddPaymentMutation = { __typename?: 'Mutation', addPaymentToOrder: { __typename: 'IneligiblePaymentMethodError', errorCode: ErrorCode, message: string } | { __typename: 'NoActiveOrderError', errorCode: ErrorCode, message: string } | { __typename: 'Order', id: string, code: string, state: string, updatedAt: any, createdAt: any, total: number, totalWithTax: number, subTotal: number, subTotalWithTax: number, shipping: number, currencyCode: CurrencyCode, shippingWithTax: number, totalQuantity: number, lines: Array<{ __typename?: 'OrderLine', id: string, linePrice: number, discountedLinePrice: number, unitPrice: number, quantity: number, productVariant: { __typename?: 'ProductVariant', currencyCode: CurrencyCode, id: string, name: string, sku: string, price: number, assets: Array<{ __typename?: 'Asset', id: string, source: string }> } }> } | { __typename: 'OrderPaymentStateError', errorCode: ErrorCode, message: string } | { __typename: 'OrderStateTransitionError', errorCode: ErrorCode, message: string, transitionError: string, fromState: string, toState: string } | { __typename: 'PaymentDeclinedError', errorCode: ErrorCode, message: string, paymentErrorMessage: string } | { __typename: 'PaymentFailedError', errorCode: ErrorCode, message: string } };

export type UpdateCompanyAddressMutationVariables = Exact<{
    input: UpdateCompanyAddressInput;
}>;


export type UpdateCompanyAddressMutation = { __typename?: 'Mutation', updateCompanyAddress: { __typename: 'AddressNotFoundError', errorCode: ErrorCode, message: string } | { __typename: 'CompanyAddress', id: string } };

export type DeleteCompanyAddressMutationVariables = Exact<{
    id: Scalars['ID'];
}>;


export type DeleteCompanyAddressMutation = { __typename?: 'Mutation', deleteCompanyAddress: { __typename: 'AddressNotFoundError', errorCode: ErrorCode, message: string } | { __typename: 'Success', success: boolean } };

export type CreateCompanyAddressMutationVariables = Exact<{
    input: CreateCompanyAddressInput;
}>;


export type CreateCompanyAddressMutation = { __typename?: 'Mutation', addCompanyAddress: { __typename: 'CompanyAddress', id: string } | { __typename: 'CompanyNotFoundError', errorCode: ErrorCode, message: string } };

export type AdjustOrderLineMutationVariables = Exact<{
    orderLineId: Scalars['ID'];
    quantity: Scalars['Int'];
}>;


export type AdjustOrderLineMutation = { __typename?: 'Mutation', adjustOrderLine: { __typename?: 'InsufficientStockError', errorCode: ErrorCode, message: string, quantityAvailable: number } | { __typename?: 'NegativeQuantityError', errorCode: ErrorCode, message: string } | { __typename?: 'Order', id: string, totalQuantity: number, lines: Array<{ __typename?: 'OrderLine', quantity: number }> } | { __typename?: 'OrderLimitError', errorCode: ErrorCode, message: string } | { __typename?: 'OrderModificationError', errorCode: ErrorCode, message: string } };

export type CreateAddressMutationVariables = Exact<{
    city: Scalars['String'];
    company: Scalars['String'];
    countryCode: Scalars['String'];
    fullName: Scalars['String'];
    postalCode: Scalars['String'];
    province: Scalars['String'];
    streetLine1: Scalars['String'];
    streetLine2: Scalars['String'];
    phoneNumber: Scalars['String'];
}>;


export type CreateAddressMutation = { __typename?: 'Mutation', createCustomerAddress: { __typename?: 'Address', id: string } };

export type CreateCustomerAddressMutationVariables = Exact<{
    input: CreateAddressInput;
}>;


export type CreateCustomerAddressMutation = { __typename?: 'Mutation', createCustomerAddress: { __typename?: 'Address', id: string, createdAt: any } };

export type LoginUserMutationVariables = Exact<{
    username: Scalars['String'];
    password: Scalars['String'];
    rememberMe: Scalars['Boolean'];
}>;


export type LoginUserMutation = { __typename?: 'Mutation', login: { __typename: 'CurrentUser', id: string, identifier: string } | { __typename: 'InvalidCredentialsError', errorCode: ErrorCode, message: string } | { __typename: 'NativeAuthStrategyError', errorCode: ErrorCode, message: string } | { __typename: 'NotVerifiedError', errorCode: ErrorCode, message: string } };

export type LogoutUserMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutUserMutation = { __typename?: 'Mutation', logout: { __typename: 'Success', success: boolean } };

export type SubscribeToNewsletterMutationVariables = Exact<{
    input: NewsletterAddress;
}>;


export type SubscribeToNewsletterMutation = { __typename?: 'Mutation', subscribeToNewsletter: { __typename?: 'Success', success: boolean } };

export type UnsubscribeToNewsletterMutationVariables = Exact<{
    input: NewsletterAddress;
}>;


export type UnsubscribeToNewsletterMutation = { __typename?: 'Mutation', unsubscribeToNewsletter: { __typename?: 'Success', success: boolean } };

export type PasswordResetMutationVariables = Exact<{
    password: Scalars['String'];
    token: Scalars['String'];
}>;


export type PasswordResetMutation = { __typename?: 'Mutation', resetPassword: { __typename: 'CurrentUser', id: string } | { __typename: 'NativeAuthStrategyError', errorCode: ErrorCode, message: string } | { __typename: 'NotVerifiedError', errorCode: ErrorCode, message: string } | { __typename: 'PasswordResetTokenExpiredError', errorCode: ErrorCode, message: string } | { __typename: 'PasswordResetTokenInvalidError', errorCode: ErrorCode, message: string } | { __typename: 'PasswordValidationError', errorCode: ErrorCode, message: string, validationErrorMessage: string } };

export type RegisterMutationVariables = Exact<{
    input: B2BRegisterInput;
}>;


export type RegisterMutation = { __typename?: 'Mutation', registerB2BCustomer: { __typename: 'InvalidVatError', errorCode: ErrorCode, message: string } | { __typename: 'MissingPasswordError', errorCode: ErrorCode, message: string } | { __typename: 'NativeAuthStrategyError', errorCode: ErrorCode, message: string } | { __typename: 'PasswordValidationError', errorCode: ErrorCode, message: string } | { __typename: 'Success', success: boolean } };

export type RemoveAllOrderLinesMutationVariables = Exact<{ [key: string]: never; }>;


export type RemoveAllOrderLinesMutation = { __typename?: 'Mutation', removeAllOrderLines: { __typename: 'Order', id: string } | { __typename: 'OrderModificationError', message: string } };

export type RemoveItemFromOrderMutationVariables = Exact<{
    orderLineID: Scalars['ID'];
}>;


export type RemoveItemFromOrderMutation = { __typename?: 'Mutation', removeOrderLine: { __typename?: 'Order', id: string } | { __typename?: 'OrderModificationError', errorCode: ErrorCode, message: string } };

export type RequestPasswordResetMutationVariables = Exact<{
    email: Scalars['String'];
}>;


export type RequestPasswordResetMutation = { __typename?: 'Mutation', requestPasswordReset?: { __typename: 'NativeAuthStrategyError', errorCode: ErrorCode, message: string } | { __typename: 'Success', success: boolean } | null };

export type SetActiveCompanyMutationVariables = Exact<{
    companyId: Scalars['ID'];
}>;


export type SetActiveCompanyMutation = { __typename?: 'Mutation', setActiveCompany: { __typename?: 'CompanyNotFoundError', errorCode: ErrorCode, message: string } | { __typename?: 'Customer', id: string, firstName: string, lastName: string } | { __typename?: 'NotAllowedError', errorCode: ErrorCode, message: string } };

export type SetShippingAddressMutationVariables = Exact<{
    input: CreateAddressInput;
}>;


export type SetShippingAddressMutation = { __typename?: 'Mutation', setOrderShippingAddress: { __typename?: 'NoActiveOrderError', errorCode: ErrorCode, message: string } | { __typename?: 'Order', id: string, state: string, updatedAt: any, createdAt: any, total: number, totalWithTax: number, subTotal: number, subTotalWithTax: number, shipping: number, currencyCode: CurrencyCode, shippingWithTax: number, totalQuantity: number, lines: Array<{ __typename?: 'OrderLine', id: string, linePrice: number, discountedLinePrice: number, unitPrice: number, quantity: number, productVariant: { __typename?: 'ProductVariant', currencyCode: CurrencyCode, id: string, name: string, sku: string, price: number, assets: Array<{ __typename?: 'Asset', id: string, source: string }> } }> } };

export type SetBillingAddressMutationVariables = Exact<{
    input: CreateAddressInput;
}>;


export type SetBillingAddressMutation = { __typename?: 'Mutation', setOrderBillingAddress: { __typename?: 'NoActiveOrderError', errorCode: ErrorCode, message: string } | { __typename?: 'Order', id: string, state: string, updatedAt: any, createdAt: any, total: number, totalWithTax: number, subTotal: number, subTotalWithTax: number, shipping: number, currencyCode: CurrencyCode, shippingWithTax: number, totalQuantity: number, lines: Array<{ __typename?: 'OrderLine', id: string, linePrice: number, discountedLinePrice: number, unitPrice: number, quantity: number, productVariant: { __typename?: 'ProductVariant', currencyCode: CurrencyCode, id: string, name: string, sku: string, price: number, assets: Array<{ __typename?: 'Asset', id: string, source: string }> } }> } };

export type SetOrderCustomFieldsMutationVariables = Exact<{
    comment?: InputMaybe<Scalars['String']>;
    reference?: InputMaybe<Scalars['String']>;
    commission?: InputMaybe<Scalars['String']>;
}>;


export type SetOrderCustomFieldsMutation = { __typename?: 'Mutation', setOrderCustomFields: { __typename?: 'NoActiveOrderError', errorCode: ErrorCode, message: string } | { __typename?: 'Order', id: string } };

export type SetShippingMethodMutationVariables = Exact<{
    shippingMethodId: Scalars['ID'];
}>;


export type SetShippingMethodMutation = { __typename?: 'Mutation', setOrderShippingMethod: { __typename?: 'IneligibleShippingMethodError', errorCode: ErrorCode, message: string } | { __typename?: 'NoActiveOrderError', errorCode: ErrorCode, message: string } | { __typename?: 'Order', id: string, state: string, updatedAt: any, createdAt: any, total: number, totalWithTax: number, subTotal: number, subTotalWithTax: number, shipping: number, currencyCode: CurrencyCode, shippingWithTax: number, totalQuantity: number, lines: Array<{ __typename?: 'OrderLine', id: string, linePrice: number, discountedLinePrice: number, unitPrice: number, quantity: number, productVariant: { __typename?: 'ProductVariant', currencyCode: CurrencyCode, id: string, name: string, sku: string, price: number, assets: Array<{ __typename?: 'Asset', id: string, source: string }> } }> } | { __typename?: 'OrderModificationError', errorCode: ErrorCode, message: string } };

export type TransitionOrderMutationVariables = Exact<{
    state: Scalars['String'];
}>;


export type TransitionOrderMutation = { __typename?: 'Mutation', transitionOrderToState?: { __typename?: 'Order', id: string, state: string, updatedAt: any, createdAt: any, total: number, totalWithTax: number, subTotal: number, subTotalWithTax: number, shipping: number, currencyCode: CurrencyCode, shippingWithTax: number, totalQuantity: number, lines: Array<{ __typename?: 'OrderLine', id: string, linePrice: number, discountedLinePrice: number, unitPrice: number, quantity: number, productVariant: { __typename?: 'ProductVariant', currencyCode: CurrencyCode, id: string, name: string, sku: string, price: number, assets: Array<{ __typename?: 'Asset', id: string, source: string }> } }> } | { __typename?: 'OrderStateTransitionError', errorCode: ErrorCode, message: string, transitionError: string, fromState: string, toState: string } | null };

export type UpdateCustomerMutationVariables = Exact<{
    title?: InputMaybe<Scalars['String']>;
    firstName: Scalars['String'];
    lastName: Scalars['String'];
    phoneNumber?: InputMaybe<Scalars['String']>;
    salutation?: InputMaybe<Scalars['String']>;
}>;


export type UpdateCustomerMutation = { __typename?: 'Mutation', updateCustomer: { __typename?: 'Customer', id: string } };

export type UpdateCustomerPasswordMutationVariables = Exact<{
    currentPassword: Scalars['String'];
    newPassword: Scalars['String'];
}>;


export type UpdateCustomerPasswordMutation = { __typename?: 'Mutation', updateCustomerPassword: { __typename: 'InvalidCredentialsError', errorCode: ErrorCode, message: string } | { __typename: 'NativeAuthStrategyError', errorCode: ErrorCode, message: string } | { __typename: 'PasswordValidationError', errorCode: ErrorCode, message: string } | { __typename: 'Success', success: boolean } };

export type RequestUpdateCustomerEmailMutationVariables = Exact<{
    password: Scalars['String'];
    newEmailAddress: Scalars['String'];
}>;


export type RequestUpdateCustomerEmailMutation = { __typename?: 'Mutation', requestUpdateCustomerEmailAddress: { __typename: 'EmailAddressConflictError', errorCode: ErrorCode, message: string } | { __typename: 'InvalidCredentialsError', errorCode: ErrorCode, message: string } | { __typename: 'NativeAuthStrategyError', errorCode: ErrorCode, message: string } | { __typename: 'Success', success: boolean } };

export type ActiveChannelQueryVariables = Exact<{ [key: string]: never; }>;


export type ActiveChannelQuery = { __typename?: 'Query', activeChannel: { __typename?: 'Channel', id: string, code: string, currencyCode: CurrencyCode, pricesIncludeTax: boolean, token: string, defaultLanguageCode: LanguageCode, defaultShippingZone?: { __typename?: 'Zone', id: string, name: string, members: Array<{ __typename?: 'Country', id: string, name: string }> } | null } };

export type ActiveCompanyQueryVariables = Exact<{ [key: string]: never; }>;


export type ActiveCompanyQuery = { __typename?: 'Query', activeCompany?: { __typename: 'Company', name: string, vat?: string | null, termsOfPayment?: { __typename?: 'TermsOfPayment', paymentId?: string | null, contactPerson?: string | null, text?: string | null, amount?: number | null } | null, discounts?: Array<{ __typename?: 'CustomerDiscount', id: string, discountType?: string | null, discountGroup?: string | null, discountType2?: string | null, customerDiscountPercentages?: Array<{ __typename?: 'CustomerDiscountPercentage', id: string, value?: number | null, index?: number | null } | null> | null } | null> | null } | { __typename: 'CompanyNotFoundError' } | null };

export type ActiveCompanyAddressesQueryVariables = Exact<{ [key: string]: never; }>;


export type ActiveCompanyAddressesQuery = { __typename?: 'Query', activeCompany?: { __typename: 'Company', addresses: Array<{ __typename?: 'CompanyAddress', id: string, fullName: string, streetLine1: string, streetLine2?: string | null, province?: string | null, countryCode?: string | null, city?: string | null, postalCode?: string | null, phoneNumber?: string | null, defaultBillingAddress: boolean, defaultShippingAddress: boolean }> } | { __typename: 'CompanyNotFoundError', errorCode: ErrorCode, message: string } | null };

export type ActiveCustomerQueryVariables = Exact<{
    withCustomFields?: InputMaybe<Scalars['Boolean']>;
}>;


export type ActiveCustomerQuery = { __typename?: 'Query', activeCustomer?: { __typename?: 'Customer', id: string, firstName: string, lastName: string, emailAddress: string, title?: string | null, phoneNumber?: string | null, customFields?: { __typename?: 'CustomerCustomFields', salutation?: string | null } | null } | null };

export type ActiveCustomerRolesQueryVariables = Exact<{ [key: string]: never; }>;


export type ActiveCustomerRolesQuery = { __typename?: 'Query', activeCustomer?: { __typename?: 'Customer', groups: Array<{ __typename?: 'CustomerGroup', id: string, name: string }> } | null };

export type ActiveCustomerForCheckoutQueryVariables = Exact<{ [key: string]: never; }>;


export type ActiveCustomerForCheckoutQuery = { __typename?: 'Query', activeCustomer?: { __typename?: 'Customer', firstName: string, lastName: string, addresses?: Array<{ __typename?: 'Address', id: string, createdAt: any, updatedAt: any, fullName?: string | null, streetLine1: string, streetLine2?: string | null, city?: string | null, province?: string | null, postalCode?: string | null, customFields?: any | null, country: { __typename?: 'Country', id: string, languageCode: LanguageCode, code: string, name: string, enabled: boolean, customFields?: any | null } }> | null } | null };

export type ActiveCustomerOrdersQueryVariables = Exact<{ [key: string]: never; }>;


export type ActiveCustomerOrdersQuery = { __typename?: 'Query', activeCustomer?: { __typename?: 'Customer', orders: { __typename?: 'OrderList', items: Array<{ __typename?: 'Order', id: string, code: string, state: string, total: number, currencyCode: CurrencyCode, orderPlacedAt?: any | null }> } } | null };

export type ActiveOrderCartQueryVariables = Exact<{ [key: string]: never; }>;


export type ActiveOrderCartQuery = { __typename?: 'Query', activeOrder?: { __typename?: 'Order', state: string, subTotal: number, shipping: number, total: number, totalWithTax: number, currencyCode: CurrencyCode, subTotalWithTax: number, shippingWithTax: number, totalQuantity: number, taxSummary: Array<{ __typename?: 'OrderTaxSummary', taxRate: number, taxBase: number, taxTotal: number }>, lines: Array<{ __typename?: 'OrderLine', id: string, discountedLinePrice: number, unitPrice: number, linePrice: number, quantity: number, productVariant: { __typename?: 'ProductVariant', currencyCode: CurrencyCode, price: number, name: string, sku: string, assets: Array<{ __typename?: 'Asset', source: string }>, facetValues: Array<{ __typename?: 'FacetValue', id: string, name: string, facet: { __typename?: 'Facet', name: string } }>, product: { __typename?: 'Product', name: string, slug: string } } }> } | null };

export type ActiveOrderCheckoutQueryVariables = Exact<{ [key: string]: never; }>;


export type ActiveOrderCheckoutQuery = { __typename?: 'Query', activeOrder?: { __typename?: 'Order', id: string, state: string, updatedAt: any, createdAt: any, total: number, totalWithTax: number, subTotal: number, subTotalWithTax: number, shipping: number, currencyCode: CurrencyCode, shippingWithTax: number, totalQuantity: number, taxSummary: Array<{ __typename?: 'OrderTaxSummary', taxRate: number, taxBase: number, taxTotal: number }>, shippingAddress?: { __typename?: 'OrderAddress', fullName?: string | null, company?: string | null, streetLine1?: string | null, streetLine2?: string | null, city?: string | null, province?: string | null, postalCode?: string | null, country?: string | null, countryCode?: string | null, phoneNumber?: string | null, customFields?: any | null } | null, billingAddress?: { __typename?: 'OrderAddress', fullName?: string | null, company?: string | null, streetLine1?: string | null, streetLine2?: string | null, city?: string | null, province?: string | null, postalCode?: string | null, country?: string | null, countryCode?: string | null, phoneNumber?: string | null, customFields?: any | null } | null, shippingLines: Array<{ __typename?: 'ShippingLine', shippingMethod: { __typename?: 'ShippingMethod', id: string, languageCode: LanguageCode, code: string, name: string, description: string } }>, lines: Array<{ __typename?: 'OrderLine', id: string, linePrice: number, discountedLinePrice: number, unitPrice: number, quantity: number, productVariant: { __typename?: 'ProductVariant', currencyCode: CurrencyCode, id: string, name: string, sku: string, price: number, product: { __typename?: 'Product', id: string, name: string, slug: string }, facetValues: Array<{ __typename?: 'FacetValue', id: string, name: string, facet: { __typename?: 'Facet', name: string } }>, assets: Array<{ __typename?: 'Asset', id: string, source: string }> } }> } | null };

export type ActiveOrderNavigationQueryVariables = Exact<{ [key: string]: never; }>;


export type ActiveOrderNavigationQuery = { __typename?: 'Query', activeOrder?: { __typename?: 'Order', lines: Array<{ __typename?: 'OrderLine', quantity: number }> } | null };

export type AllCollectionsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllCollectionsQuery = { __typename?: 'Query', collections: { __typename?: 'CollectionList', items: Array<{ __typename?: 'Collection', slug: string, breadcrumbs: Array<{ __typename?: 'CollectionBreadcrumb', name: string, id: string, slug: string }> }> } };

export type AvailableCompaniesQueryVariables = Exact<{ [key: string]: never; }>;


export type AvailableCompaniesQuery = { __typename?: 'Query', companies: { __typename: 'CompanyList', items: Array<{ __typename?: 'Company', id: string, name: string, erpId?: string | null, vat?: string | null, ust?: string | null, addresses: Array<{ __typename?: 'CompanyAddress', fullName: string, streetLine1: string }> }> } | { __typename: 'CompanyNotFoundError' } | { __typename: 'OrganizationNotFoundError' } };

export type AvailableCountriesQueryVariables = Exact<{ [key: string]: never; }>;


export type AvailableCountriesQuery = { __typename?: 'Query', availableCountries: Array<{ __typename?: 'Country', id: string, languageCode: LanguageCode, code: string, name: string, enabled: boolean, customFields?: any | null }> };

export type CollectionQueryVariables = Exact<{
    slug?: InputMaybe<Scalars['String']>;
}>;


export type CollectionQuery = { __typename?: 'Query', collection?: { __typename?: 'Collection', id: string, slug: string, name: string, description: string, customFields?: { __typename?: 'CollectionCustomFields', seoDescription?: string | null, hasDetailPage?: boolean | null } | null, breadcrumbs: Array<{ __typename?: 'CollectionBreadcrumb', name: string, id: string, slug: string }>, assets: Array<{ __typename?: 'Asset', width: number, height: number, source: string }> } | null };

export type CustomerSpecificPriceQueryVariables = Exact<{
    channelCode: Scalars['String'];
    variantId: Scalars['String'];
}>;


export type CustomerSpecificPriceQuery = { __typename?: 'Query', customerSpecificPrice: { __typename?: 'CustomerSpecificPrice', basePrice: number, price: number } };

export type EligiblePaymentMethodsQueryVariables = Exact<{ [key: string]: never; }>;


export type EligiblePaymentMethodsQuery = { __typename?: 'Query', eligiblePaymentMethods: Array<{ __typename?: 'PaymentMethodQuote', id: string, code: string, name: string, description: string, isEligible: boolean, eligibilityMessage?: string | null, customFields?: any | null }> };

export type EligibleShippingMethodsQueryVariables = Exact<{ [key: string]: never; }>;


export type EligibleShippingMethodsQuery = { __typename?: 'Query', eligibleShippingMethods: Array<{ __typename?: 'ShippingMethodQuote', id: string, price: number, priceWithTax: number, code: string, name: string, description: string, metadata?: any | null, customFields?: any | null }> };

export type NextOrderStatesQueryVariables = Exact<{ [key: string]: never; }>;


export type NextOrderStatesQuery = { __typename?: 'Query', nextOrderStates: Array<string> };

export type OrderQueryVariables = Exact<{
    code: Scalars['String'];
}>;


export type OrderQuery = { __typename?: 'Query', orderByCode?: { __typename?: 'Order', id: string, code: string, state: string, active: boolean, currencyCode: CurrencyCode, shipping: number, customer?: { __typename?: 'Customer', id: string, firstName: string, lastName: string, phoneNumber?: string | null } | null, shippingAddress?: { __typename?: 'OrderAddress', fullName?: string | null, company?: string | null, streetLine1?: string | null, streetLine2?: string | null, city?: string | null, province?: string | null, postalCode?: string | null, country?: string | null, countryCode?: string | null, phoneNumber?: string | null, customFields?: any | null } | null, billingAddress?: { __typename?: 'OrderAddress', fullName?: string | null, company?: string | null, streetLine1?: string | null, streetLine2?: string | null, city?: string | null, province?: string | null, postalCode?: string | null, country?: string | null, countryCode?: string | null, phoneNumber?: string | null, customFields?: any | null } | null, shippingLines: Array<{ __typename?: 'ShippingLine', shippingMethod: { __typename?: 'ShippingMethod', id: string, languageCode: LanguageCode, code: string, name: string, description: string } }>, lines: Array<{ __typename?: 'OrderLine', id: string, linePrice: number, discountedLinePrice: number, unitPrice: number, quantity: number, productVariant: { __typename?: 'ProductVariant', currencyCode: CurrencyCode, id: string, name: string, sku: string, price: number, product: { __typename?: 'Product', id: string, name: string, slug: string }, assets: Array<{ __typename?: 'Asset', id: string, source: string }> } }>, payments?: Array<{ __typename?: 'Payment', method: string }> | null } | null };

export type ProductQueryVariables = Exact<{
    slug?: InputMaybe<Scalars['String']>;
    withCustomFields?: InputMaybe<Scalars['Boolean']>;
    isPreRender?: InputMaybe<Scalars['Boolean']>;
}>;


export type ProductQuery = { __typename?: 'Query', product?: { __typename?: 'Product', id: string, name: string, description: string, customFields?: { __typename?: 'ProductCustomFields', productDetailName?: string | null, downloads?: Array<{ __typename?: 'Download', id: string, fileName: string, fileSize?: number | null, path: string }> | null } | null, assets: Array<{ __typename?: 'Asset', width: number, height: number, source: string }>, collections: Array<{ __typename?: 'Collection', id: string, breadcrumbs: Array<{ __typename?: 'CollectionBreadcrumb', name: string, id: string, slug: string }> }>, variants: Array<{ __typename?: 'ProductVariant', id: string, name: string, sku: string, stockLevel: string, currencyCode: CurrencyCode, price: number, facetValues: Array<{ __typename?: 'FacetValue', name: string, facet: { __typename?: 'Facet', name: string } }>, customFields?: { __typename?: 'ProductVariantCustomFields', productDetailName?: string | null, infoText?: string | null, customAttributes?: Array<{ __typename?: 'Block', itemText?: string | null, itemHeadline?: string | null }> | null, onSiteImages?: Array<{ __typename?: 'Asset', name: string, source: string }> | null, systemInformationItems?: Array<{ __typename?: 'Block', itemText?: string | null, itemHeadline?: string | null }> | null, additionalProducts?: Array<{ __typename?: 'Product', id: string, name: string }> | null } | null, assets: Array<{ __typename?: 'Asset', width: number, height: number, source: string }> }> } | null };

export type ProductsQueryVariables = Exact<{
    skip?: InputMaybe<Scalars['Int']>;
}>;


export type ProductsQuery = { __typename?: 'Query', products: { __typename?: 'ProductList', items: Array<{ __typename?: 'Product', slug: string }> } };

export type SearchQueryVariables = Exact<{
    input: Scalars['String'];
    prefixMode?: InputMaybe<Scalars['Boolean']>;
}>;


export type SearchQuery = {
    __typename?: 'Query', search: {
        items: Array<{
            __typename?: 'SearchResult',
            id: string, sku: string, slug: string, productId: string, productName: string,
            productVariantId: string, productVariantName: string, description: string, priceWithTax: {
                value: string
            }, productVariantAsset: {
                preview: string
            }
        }>
    }
};

export type VariantQueryVariables = Exact<{
    id: Scalars['ID'];
    withCustomFields?: InputMaybe<Scalars['Boolean']>;
    isPreRender?: InputMaybe<Scalars['Boolean']>;
}>;


export type VariantQuery = { __typename?: 'Query', variant?: { __typename?: 'ProductVariant', id: string, name: string, sku: string, stockLevel: string, currencyCode: CurrencyCode, price: number, facetValues: Array<{ __typename?: 'FacetValue', name: string, facet: { __typename?: 'Facet', name: string } }>, customFields?: { __typename?: 'ProductVariantCustomFields', productDetailName?: string | null, infoText?: string | null, customAttributes?: Array<{ __typename?: 'Block', itemText?: string | null, itemHeadline?: string | null }> | null, onSiteImages?: Array<{ __typename?: 'Asset', name: string, source: string }> | null, systemInformationItems?: Array<{ __typename?: 'Block', itemText?: string | null, itemHeadline?: string | null }> | null, additionalProducts?: Array<{ __typename?: 'Product', id: string, name: string }> | null } | null, assets: Array<{ __typename?: 'Asset', width: number, height: number, source: string }> } | null };

export type VariantDetailsQueryVariables = Exact<{
    id: Scalars['ID'];
    includeImages?: InputMaybe<Scalars['Boolean']>;
    includeSystemInformation?: InputMaybe<Scalars['Boolean']>;
    includeDownloads?: InputMaybe<Scalars['Boolean']>;
    includeAdditionalProducts?: InputMaybe<Scalars['Boolean']>;
}>;


export type VariantDetailsQuery = { __typename?: 'Query', variant?: { __typename?: 'ProductVariant', customFields?: { __typename?: 'ProductVariantCustomFields', onSiteImages?: Array<{ __typename?: 'Asset', name: string, source: string }> | null, systemInformationItems?: Array<{ __typename?: 'Block', itemText?: string | null, itemHeadline?: string | null }> | null, downloads?: Array<{ __typename?: 'Download', id: string, fileName: string, fileSize?: number | null, path: string }> | null, additionalProducts?: Array<{ __typename?: 'Product', id: string, slug: string, name: string, featuredAsset?: { __typename?: 'Asset', source: string } | null }> | null } | null } | null };

export const CountryFragmentDoc = `
    fragment Country on Country {
  id
  languageCode
  code
  name
  enabled
  customFields
}
    `;
export const AddressFragmentDoc = `
    fragment Address on Address {
  id
  createdAt
  updatedAt
  fullName
  streetLine1
  streetLine2
  city
  province
  postalCode
  country {
    ...Country
  }
  customFields
}
    `;
export const CompanyAddressFragmentDoc = `
    fragment CompanyAddress on CompanyAddress {
  id
  fullName
  streetLine1
  streetLine2
  province
  countryCode
  city
  postalCode
  phoneNumber
  defaultBillingAddress
  defaultShippingAddress
}
    `;
export const BreadcrumbFragmentDoc = `
    fragment Breadcrumb on CollectionBreadcrumb {
  name
  id
  slug
}
    `;
export const ActiveOrderFragmentDoc = `
    fragment ActiveOrder on Order {
  id
  state
  updatedAt
  createdAt
  total
  totalWithTax
  subTotal
  subTotalWithTax
  shipping
  currencyCode
  shippingWithTax
  totalQuantity
  lines {
    id
    linePrice
    discountedLinePrice
    unitPrice
    quantity
    productVariant {
      currencyCode
      id
      name
      sku
      price
      assets {
        id
        source
      }
    }
  }
}
    `;
export const OrderAddressFragmentDoc = `
    fragment OrderAddress on OrderAddress {
  fullName
  company
  streetLine1
  streetLine2
  city
  province
  postalCode
  country
  countryCode
  phoneNumber
  customFields
}
    `;
export const ProductVariantCustomFieldFragmentDoc = `
    fragment ProductVariantCustomField on ProductVariantCustomFields {
  productDetailName @include(if: $isPreRender)
  infoText @include(if: $isPreRender)
  customAttributes @include(if: $isPreRender) {
    itemText
    itemHeadline
  }
  onSiteImages @skip(if: $isPreRender) {
    name
    source
  }
  systemInformationItems @skip(if: $isPreRender) {
    itemText
    itemHeadline
  }
  additionalProducts @skip(if: $isPreRender) {
    id
    name
  }
}
    `;
export const AssetFragmentDoc = `
    fragment Asset on Asset {
  width
  height
  source
}
    `;
export const ProductVariantFragmentDoc = `
    fragment ProductVariant on ProductVariant {
  id
  name
  sku
  stockLevel
  currencyCode
  price
  facetValues {
    facet {
      name
    }
    name
  }
  customFields @include(if: $withCustomFields) {
    ...ProductVariantCustomField
  }
  assets {
    ...Asset
  }
}
    `;
export const CustomerDataFragmentDoc = `
    fragment CustomerData on Customer {
  id
  firstName
  lastName
  emailAddress
  title
  phoneNumber
  customFields @include(if: $withCustomFields) {
    salutation
  }
}
    `;
export const AddItemToOrderDocument = `
    mutation AddItemToOrder($productVariantId: ID!, $quantity: Int!, $withCustomFields: Boolean = false) {
  addItemToOrder(productVariantId: $productVariantId, quantity: $quantity) {
    __typename
    ... on Order {
      id
      customer {
        ...CustomerData
      }
      state
    }
    ... on OrderModificationError {
      errorCode
      message
      __typename
    }
    ... on OrderLimitError {
      message
      maxItems
      __typename
    }
    ... on NegativeQuantityError {
      errorCode
      message
      __typename
    }
    ... on InsufficientStockError {
      errorCode
      message
      quantityAvailable
      __typename
    }
  }
}
    ${CustomerDataFragmentDoc}`;
export const useAddItemToOrderMutation = <
    TError = unknown,
    TContext = unknown
>(options?: UseMutationOptions<AddItemToOrderMutation, TError, AddItemToOrderMutationVariables, TContext>) =>
    useMutation<AddItemToOrderMutation, TError, AddItemToOrderMutationVariables, TContext>(
        ['AddItemToOrder'],
        (variables?: AddItemToOrderMutationVariables) => fetchVendure<AddItemToOrderMutation, AddItemToOrderMutationVariables>(AddItemToOrderDocument, variables)(),
        options
    );
useAddItemToOrderMutation.fetcher = (variables: AddItemToOrderMutationVariables, options?: RequestInit['headers']) => fetchVendure<AddItemToOrderMutation, AddItemToOrderMutationVariables>(AddItemToOrderDocument, variables, options);
export const AddPaymentDocument = `
    mutation AddPayment($input: PaymentInput!) {
  addPaymentToOrder(input: $input) {
    __typename
    ...ActiveOrder
    ... on Order {
      id
      code
    }
    ... on OrderPaymentStateError {
      errorCode
      message
    }
    ... on IneligiblePaymentMethodError {
      errorCode
      message
    }
    ... on PaymentFailedError {
      errorCode
      message
    }
    ... on PaymentDeclinedError {
      errorCode
      message
      paymentErrorMessage
    }
    ... on OrderStateTransitionError {
      errorCode
      message
      transitionError
      fromState
      toState
    }
    ... on NoActiveOrderError {
      errorCode
      message
    }
    ... on ErrorResult {
      errorCode
      message
    }
  }
}
    ${ActiveOrderFragmentDoc}`;
export const useAddPaymentMutation = <
    TError = unknown,
    TContext = unknown
>(options?: UseMutationOptions<AddPaymentMutation, TError, AddPaymentMutationVariables, TContext>) =>
    useMutation<AddPaymentMutation, TError, AddPaymentMutationVariables, TContext>(
        ['AddPayment'],
        (variables?: AddPaymentMutationVariables) => fetchVendure<AddPaymentMutation, AddPaymentMutationVariables>(AddPaymentDocument, variables)(),
        options
    );
useAddPaymentMutation.fetcher = (variables: AddPaymentMutationVariables, options?: RequestInit['headers']) => fetchVendure<AddPaymentMutation, AddPaymentMutationVariables>(AddPaymentDocument, variables, options);
export const UpdateCompanyAddressDocument = `
    mutation UpdateCompanyAddress($input: UpdateCompanyAddressInput!) {
  updateCompanyAddress(address: $input) {
    __typename
    ... on AddressNotFoundError {
      errorCode
      message
    }
    ... on CompanyAddress {
      id
    }
    ... on ErrorResult {
      errorCode
      message
    }
    ... on Node {
      id
    }
  }
}
    `;
export const useUpdateCompanyAddressMutation = <
    TError = unknown,
    TContext = unknown
>(options?: UseMutationOptions<UpdateCompanyAddressMutation, TError, UpdateCompanyAddressMutationVariables, TContext>) =>
    useMutation<UpdateCompanyAddressMutation, TError, UpdateCompanyAddressMutationVariables, TContext>(
        ['UpdateCompanyAddress'],
        (variables?: UpdateCompanyAddressMutationVariables) => fetchVendure<UpdateCompanyAddressMutation, UpdateCompanyAddressMutationVariables>(UpdateCompanyAddressDocument, variables)(),
        options
    );
useUpdateCompanyAddressMutation.fetcher = (variables: UpdateCompanyAddressMutationVariables, options?: RequestInit['headers']) => fetchVendure<UpdateCompanyAddressMutation, UpdateCompanyAddressMutationVariables>(UpdateCompanyAddressDocument, variables, options);
export const DeleteCompanyAddressDocument = `
    mutation DeleteCompanyAddress($id: ID!) {
  deleteCompanyAddress(addressId: $id) {
    __typename
    ... on AddressNotFoundError {
      errorCode
      message
    }
    ... on ErrorResult {
      errorCode
      message
    }
    ... on Success {
      success
    }
  }
}
    `;
export const useDeleteCompanyAddressMutation = <
    TError = unknown,
    TContext = unknown
>(options?: UseMutationOptions<DeleteCompanyAddressMutation, TError, DeleteCompanyAddressMutationVariables, TContext>) =>
    useMutation<DeleteCompanyAddressMutation, TError, DeleteCompanyAddressMutationVariables, TContext>(
        ['DeleteCompanyAddress'],
        (variables?: DeleteCompanyAddressMutationVariables) => fetchVendure<DeleteCompanyAddressMutation, DeleteCompanyAddressMutationVariables>(DeleteCompanyAddressDocument, variables)(),
        options
    );
useDeleteCompanyAddressMutation.fetcher = (variables: DeleteCompanyAddressMutationVariables, options?: RequestInit['headers']) => fetchVendure<DeleteCompanyAddressMutation, DeleteCompanyAddressMutationVariables>(DeleteCompanyAddressDocument, variables, options);
export const CreateCompanyAddressDocument = `
    mutation CreateCompanyAddress($input: CreateCompanyAddressInput!) {
  addCompanyAddress(address: $input) {
    __typename
    ... on CompanyNotFoundError {
      errorCode
      message
    }
    ... on CompanyAddress {
      id
    }
    ... on ErrorResult {
      errorCode
      message
    }
    ... on Node {
      id
    }
  }
}
    `;
export const useCreateCompanyAddressMutation = <
    TError = unknown,
    TContext = unknown
>(options?: UseMutationOptions<CreateCompanyAddressMutation, TError, CreateCompanyAddressMutationVariables, TContext>) =>
    useMutation<CreateCompanyAddressMutation, TError, CreateCompanyAddressMutationVariables, TContext>(
        ['CreateCompanyAddress'],
        (variables?: CreateCompanyAddressMutationVariables) => fetchVendure<CreateCompanyAddressMutation, CreateCompanyAddressMutationVariables>(CreateCompanyAddressDocument, variables)(),
        options
    );
useCreateCompanyAddressMutation.fetcher = (variables: CreateCompanyAddressMutationVariables, options?: RequestInit['headers']) => fetchVendure<CreateCompanyAddressMutation, CreateCompanyAddressMutationVariables>(CreateCompanyAddressDocument, variables, options);
export const AdjustOrderLineDocument = `
    mutation AdjustOrderLine($orderLineId: ID!, $quantity: Int!) {
  adjustOrderLine(orderLineId: $orderLineId, quantity: $quantity) {
    ... on Order {
      id
      totalQuantity
      lines {
        quantity
      }
    }
    ... on OrderModificationError {
      errorCode
      message
    }
    ... on OrderLimitError {
      errorCode
      message
    }
    ... on NegativeQuantityError {
      errorCode
      message
    }
    ... on InsufficientStockError {
      errorCode
      message
      quantityAvailable
    }
  }
}
    `;
export const useAdjustOrderLineMutation = <
    TError = unknown,
    TContext = unknown
>(options?: UseMutationOptions<AdjustOrderLineMutation, TError, AdjustOrderLineMutationVariables, TContext>) =>
    useMutation<AdjustOrderLineMutation, TError, AdjustOrderLineMutationVariables, TContext>(
        ['AdjustOrderLine'],
        (variables?: AdjustOrderLineMutationVariables) => fetchVendure<AdjustOrderLineMutation, AdjustOrderLineMutationVariables>(AdjustOrderLineDocument, variables)(),
        options
    );
useAdjustOrderLineMutation.fetcher = (variables: AdjustOrderLineMutationVariables, options?: RequestInit['headers']) => fetchVendure<AdjustOrderLineMutation, AdjustOrderLineMutationVariables>(AdjustOrderLineDocument, variables, options);
export const CreateAddressDocument = `
    mutation CreateAddress($city: String!, $company: String!, $countryCode: String!, $fullName: String!, $postalCode: String!, $province: String!, $streetLine1: String!, $streetLine2: String!, $phoneNumber: String!) {
  createCustomerAddress(
    input: {city: $city, company: $company, countryCode: $countryCode, fullName: $fullName, postalCode: $postalCode, province: $province, streetLine1: $streetLine1, streetLine2: $streetLine2, phoneNumber: $phoneNumber}
  ) {
    id
  }
}
    `;
export const useCreateAddressMutation = <
    TError = unknown,
    TContext = unknown
>(options?: UseMutationOptions<CreateAddressMutation, TError, CreateAddressMutationVariables, TContext>) =>
    useMutation<CreateAddressMutation, TError, CreateAddressMutationVariables, TContext>(
        ['CreateAddress'],
        (variables?: CreateAddressMutationVariables) => fetchVendure<CreateAddressMutation, CreateAddressMutationVariables>(CreateAddressDocument, variables)(),
        options
    );
useCreateAddressMutation.fetcher = (variables: CreateAddressMutationVariables, options?: RequestInit['headers']) => fetchVendure<CreateAddressMutation, CreateAddressMutationVariables>(CreateAddressDocument, variables, options);
export const CreateCustomerAddressDocument = `
    mutation createCustomerAddress($input: CreateAddressInput!) {
  createCustomerAddress(input: $input) {
    id
    createdAt
  }
}
    `;
export const useCreateCustomerAddressMutation = <
    TError = unknown,
    TContext = unknown
>(options?: UseMutationOptions<CreateCustomerAddressMutation, TError, CreateCustomerAddressMutationVariables, TContext>) =>
    useMutation<CreateCustomerAddressMutation, TError, CreateCustomerAddressMutationVariables, TContext>(
        ['createCustomerAddress'],
        (variables?: CreateCustomerAddressMutationVariables) => fetchVendure<CreateCustomerAddressMutation, CreateCustomerAddressMutationVariables>(CreateCustomerAddressDocument, variables)(),
        options
    );
useCreateCustomerAddressMutation.fetcher = (variables: CreateCustomerAddressMutationVariables, options?: RequestInit['headers']) => fetchVendure<CreateCustomerAddressMutation, CreateCustomerAddressMutationVariables>(CreateCustomerAddressDocument, variables, options);
export const LoginUserDocument = `
    mutation LoginUser($username: String!, $password: String!, $rememberMe: Boolean!) {
  login(username: $username, password: $password, rememberMe: $rememberMe) {
    __typename
    ... on CurrentUser {
      id
      identifier
    }
    ... on InvalidCredentialsError {
      errorCode
      message
    }
    ... on NotVerifiedError {
      errorCode
      message
    }
    ... on NativeAuthStrategyError {
      errorCode
      message
    }
  }
}
    `;
export const useLoginUserMutation = <
    TError = unknown,
    TContext = unknown
>(options?: UseMutationOptions<LoginUserMutation, TError, LoginUserMutationVariables, TContext>) =>
    useMutation<LoginUserMutation, TError, LoginUserMutationVariables, TContext>(
        ['LoginUser'],
        (variables?: LoginUserMutationVariables) => fetchVendure<LoginUserMutation, LoginUserMutationVariables>(LoginUserDocument, variables)(),
        options
    );
useLoginUserMutation.fetcher = (variables: LoginUserMutationVariables, options?: RequestInit['headers']) => fetchVendure<LoginUserMutation, LoginUserMutationVariables>(LoginUserDocument, variables, options);
export const LogoutUserDocument = `
    mutation LogoutUser {
  logout {
    success
    __typename
  }
}
    `;
export const useLogoutUserMutation = <
    TError = unknown,
    TContext = unknown
>(options?: UseMutationOptions<LogoutUserMutation, TError, LogoutUserMutationVariables, TContext>) =>
    useMutation<LogoutUserMutation, TError, LogoutUserMutationVariables, TContext>(
        ['LogoutUser'],
        (variables?: LogoutUserMutationVariables) => fetchVendure<LogoutUserMutation, LogoutUserMutationVariables>(LogoutUserDocument, variables)(),
        options
    );
useLogoutUserMutation.fetcher = (variables?: LogoutUserMutationVariables, options?: RequestInit['headers']) => fetchVendure<LogoutUserMutation, LogoutUserMutationVariables>(LogoutUserDocument, variables, options);
export const SubscribeToNewsletterDocument = `
    mutation SubscribeToNewsletter($input: NewsletterAddress!) {
  subscribeToNewsletter(input: $input) {
    success
  }
}
    `;
export const useSubscribeToNewsletterMutation = <
    TError = unknown,
    TContext = unknown
>(options?: UseMutationOptions<SubscribeToNewsletterMutation, TError, SubscribeToNewsletterMutationVariables, TContext>) =>
    useMutation<SubscribeToNewsletterMutation, TError, SubscribeToNewsletterMutationVariables, TContext>(
        ['SubscribeToNewsletter'],
        (variables?: SubscribeToNewsletterMutationVariables) => fetchVendure<SubscribeToNewsletterMutation, SubscribeToNewsletterMutationVariables>(SubscribeToNewsletterDocument, variables)(),
        options
    );
useSubscribeToNewsletterMutation.fetcher = (variables: SubscribeToNewsletterMutationVariables, options?: RequestInit['headers']) => fetchVendure<SubscribeToNewsletterMutation, SubscribeToNewsletterMutationVariables>(SubscribeToNewsletterDocument, variables, options);
export const UnsubscribeToNewsletterDocument = `
    mutation UnsubscribeToNewsletter($input: NewsletterAddress!) {
  unsubscribeToNewsletter(input: $input) {
    success
  }
}
    `;
export const useUnsubscribeToNewsletterMutation = <
    TError = unknown,
    TContext = unknown
>(options?: UseMutationOptions<UnsubscribeToNewsletterMutation, TError, UnsubscribeToNewsletterMutationVariables, TContext>) =>
    useMutation<UnsubscribeToNewsletterMutation, TError, UnsubscribeToNewsletterMutationVariables, TContext>(
        ['UnsubscribeToNewsletter'],
        (variables?: UnsubscribeToNewsletterMutationVariables) => fetchVendure<UnsubscribeToNewsletterMutation, UnsubscribeToNewsletterMutationVariables>(UnsubscribeToNewsletterDocument, variables)(),
        options
    );
useUnsubscribeToNewsletterMutation.fetcher = (variables: UnsubscribeToNewsletterMutationVariables, options?: RequestInit['headers']) => fetchVendure<UnsubscribeToNewsletterMutation, UnsubscribeToNewsletterMutationVariables>(UnsubscribeToNewsletterDocument, variables, options);
export const PasswordResetDocument = `
    mutation PasswordReset($password: String!, $token: String!) {
  resetPassword(password: $password, token: $token) {
    ... on CurrentUser {
      __typename
      id
    }
    ... on ErrorResult {
      __typename
      errorCode
      message
    }
    ... on NotVerifiedError {
      __typename
      errorCode
      message
    }
    ... on PasswordResetTokenExpiredError {
      __typename
      errorCode
      message
    }
    ... on PasswordResetTokenInvalidError {
      __typename
      errorCode
      message
    }
    ... on PasswordValidationError {
      __typename
      errorCode
      message
      validationErrorMessage
    }
  }
}
    `;
export const usePasswordResetMutation = <
    TError = unknown,
    TContext = unknown
>(options?: UseMutationOptions<PasswordResetMutation, TError, PasswordResetMutationVariables, TContext>) =>
    useMutation<PasswordResetMutation, TError, PasswordResetMutationVariables, TContext>(
        ['PasswordReset'],
        (variables?: PasswordResetMutationVariables) => fetchVendure<PasswordResetMutation, PasswordResetMutationVariables>(PasswordResetDocument, variables)(),
        options
    );
usePasswordResetMutation.fetcher = (variables: PasswordResetMutationVariables, options?: RequestInit['headers']) => fetchVendure<PasswordResetMutation, PasswordResetMutationVariables>(PasswordResetDocument, variables, options);
export const RegisterDocument = `
    mutation Register($input: B2BRegisterInput!) {
  registerB2BCustomer(input: $input) {
    __typename
    ... on Success {
      success
    }
    ... on MissingPasswordError {
      errorCode
      message
    }
    ... on PasswordValidationError {
      errorCode
      message
    }
    ... on NativeAuthStrategyError {
      errorCode
      message
    }
    ... on ErrorResult {
      errorCode
      message
    }
    ... on InvalidVatError {
      errorCode
      message
    }
  }
}
    `;
export const useRegisterMutation = <
    TError = unknown,
    TContext = unknown
>(options?: UseMutationOptions<RegisterMutation, TError, RegisterMutationVariables, TContext>) =>
    useMutation<RegisterMutation, TError, RegisterMutationVariables, TContext>(
        ['Register'],
        (variables?: RegisterMutationVariables) => fetchVendure<RegisterMutation, RegisterMutationVariables>(RegisterDocument, variables)(),
        options
    );
useRegisterMutation.fetcher = (variables: RegisterMutationVariables, options?: RequestInit['headers']) => fetchVendure<RegisterMutation, RegisterMutationVariables>(RegisterDocument, variables, options);
export const RemoveAllOrderLinesDocument = `
    mutation RemoveAllOrderLines {
  removeAllOrderLines {
    __typename
    ... on Order {
      id
    }
    ... on OrderModificationError {
      message
    }
  }
}
    `;
export const useRemoveAllOrderLinesMutation = <
    TError = unknown,
    TContext = unknown
>(options?: UseMutationOptions<RemoveAllOrderLinesMutation, TError, RemoveAllOrderLinesMutationVariables, TContext>) =>
    useMutation<RemoveAllOrderLinesMutation, TError, RemoveAllOrderLinesMutationVariables, TContext>(
        ['RemoveAllOrderLines'],
        (variables?: RemoveAllOrderLinesMutationVariables) => fetchVendure<RemoveAllOrderLinesMutation, RemoveAllOrderLinesMutationVariables>(RemoveAllOrderLinesDocument, variables)(),
        options
    );
useRemoveAllOrderLinesMutation.fetcher = (variables?: RemoveAllOrderLinesMutationVariables, options?: RequestInit['headers']) => fetchVendure<RemoveAllOrderLinesMutation, RemoveAllOrderLinesMutationVariables>(RemoveAllOrderLinesDocument, variables, options);
export const RemoveItemFromOrderDocument = `
    mutation RemoveItemFromOrder($orderLineID: ID!) {
  removeOrderLine(orderLineId: $orderLineID) {
    ... on Order {
      id
    }
    ... on OrderModificationError {
      errorCode
      message
    }
  }
}
    `;
export const useRemoveItemFromOrderMutation = <
    TError = unknown,
    TContext = unknown
>(options?: UseMutationOptions<RemoveItemFromOrderMutation, TError, RemoveItemFromOrderMutationVariables, TContext>) =>
    useMutation<RemoveItemFromOrderMutation, TError, RemoveItemFromOrderMutationVariables, TContext>(
        ['RemoveItemFromOrder'],
        (variables?: RemoveItemFromOrderMutationVariables) => fetchVendure<RemoveItemFromOrderMutation, RemoveItemFromOrderMutationVariables>(RemoveItemFromOrderDocument, variables)(),
        options
    );
useRemoveItemFromOrderMutation.fetcher = (variables: RemoveItemFromOrderMutationVariables, options?: RequestInit['headers']) => fetchVendure<RemoveItemFromOrderMutation, RemoveItemFromOrderMutationVariables>(RemoveItemFromOrderDocument, variables, options);
export const RequestPasswordResetDocument = `
    mutation RequestPasswordReset($email: String!) {
  requestPasswordReset(emailAddress: $email) {
    ... on Success {
      __typename
      success
    }
    ... on ErrorResult {
      __typename
      errorCode
      message
    }
    ... on NativeAuthStrategyError {
      __typename
      errorCode
      message
    }
  }
}
    `;
export const useRequestPasswordResetMutation = <
    TError = unknown,
    TContext = unknown
>(options?: UseMutationOptions<RequestPasswordResetMutation, TError, RequestPasswordResetMutationVariables, TContext>) =>
    useMutation<RequestPasswordResetMutation, TError, RequestPasswordResetMutationVariables, TContext>(
        ['RequestPasswordReset'],
        (variables?: RequestPasswordResetMutationVariables) => fetchVendure<RequestPasswordResetMutation, RequestPasswordResetMutationVariables>(RequestPasswordResetDocument, variables)(),
        options
    );
useRequestPasswordResetMutation.fetcher = (variables: RequestPasswordResetMutationVariables, options?: RequestInit['headers']) => fetchVendure<RequestPasswordResetMutation, RequestPasswordResetMutationVariables>(RequestPasswordResetDocument, variables, options);
export const SetActiveCompanyDocument = `
    mutation SetActiveCompany($companyId: ID!) {
  setActiveCompany(companyId: $companyId) {
    ... on NotAllowedError {
      errorCode
      message
    }
    ... on CompanyNotFoundError {
      errorCode
      message
    }
    ... on ErrorResult {
      errorCode
      message
    }
    ... on Customer {
      id
      firstName
      lastName
    }
  }
}
    `;
export const useSetActiveCompanyMutation = <
    TError = unknown,
    TContext = unknown
>(options?: UseMutationOptions<SetActiveCompanyMutation, TError, SetActiveCompanyMutationVariables, TContext>) =>
    useMutation<SetActiveCompanyMutation, TError, SetActiveCompanyMutationVariables, TContext>(
        ['SetActiveCompany'],
        (variables?: SetActiveCompanyMutationVariables) => fetchVendure<SetActiveCompanyMutation, SetActiveCompanyMutationVariables>(SetActiveCompanyDocument, variables)(),
        options
    );
useSetActiveCompanyMutation.fetcher = (variables: SetActiveCompanyMutationVariables, options?: RequestInit['headers']) => fetchVendure<SetActiveCompanyMutation, SetActiveCompanyMutationVariables>(SetActiveCompanyDocument, variables, options);
export const SetShippingAddressDocument = `
    mutation SetShippingAddress($input: CreateAddressInput!) {
  setOrderShippingAddress(input: $input) {
    ...ActiveOrder
    ... on ErrorResult {
      errorCode
      message
    }
  }
}
    ${ActiveOrderFragmentDoc}`;
export const useSetShippingAddressMutation = <
    TError = unknown,
    TContext = unknown
>(options?: UseMutationOptions<SetShippingAddressMutation, TError, SetShippingAddressMutationVariables, TContext>) =>
    useMutation<SetShippingAddressMutation, TError, SetShippingAddressMutationVariables, TContext>(
        ['SetShippingAddress'],
        (variables?: SetShippingAddressMutationVariables) => fetchVendure<SetShippingAddressMutation, SetShippingAddressMutationVariables>(SetShippingAddressDocument, variables)(),
        options
    );
useSetShippingAddressMutation.fetcher = (variables: SetShippingAddressMutationVariables, options?: RequestInit['headers']) => fetchVendure<SetShippingAddressMutation, SetShippingAddressMutationVariables>(SetShippingAddressDocument, variables, options);
export const SetBillingAddressDocument = `
    mutation SetBillingAddress($input: CreateAddressInput!) {
  setOrderBillingAddress(input: $input) {
    ...ActiveOrder
    ... on ErrorResult {
      errorCode
      message
    }
  }
}
    ${ActiveOrderFragmentDoc}`;
export const useSetBillingAddressMutation = <
    TError = unknown,
    TContext = unknown
>(options?: UseMutationOptions<SetBillingAddressMutation, TError, SetBillingAddressMutationVariables, TContext>) =>
    useMutation<SetBillingAddressMutation, TError, SetBillingAddressMutationVariables, TContext>(
        ['SetBillingAddress'],
        (variables?: SetBillingAddressMutationVariables) => fetchVendure<SetBillingAddressMutation, SetBillingAddressMutationVariables>(SetBillingAddressDocument, variables)(),
        options
    );
useSetBillingAddressMutation.fetcher = (variables: SetBillingAddressMutationVariables, options?: RequestInit['headers']) => fetchVendure<SetBillingAddressMutation, SetBillingAddressMutationVariables>(SetBillingAddressDocument, variables, options);
export const SetOrderCustomFieldsDocument = `
    mutation SetOrderCustomFields($comment: String, $reference: String, $commission: String) {
  setOrderCustomFields(
    input: {customFields: {comment: $comment, reference: $reference, commission: $commission}}
  ) {
    ... on Order {
      id
    }
    ... on NoActiveOrderError {
      errorCode
      message
    }
  }
}
    `;
export const useSetOrderCustomFieldsMutation = <
    TError = unknown,
    TContext = unknown
>(options?: UseMutationOptions<SetOrderCustomFieldsMutation, TError, SetOrderCustomFieldsMutationVariables, TContext>) =>
    useMutation<SetOrderCustomFieldsMutation, TError, SetOrderCustomFieldsMutationVariables, TContext>(
        ['SetOrderCustomFields'],
        (variables?: SetOrderCustomFieldsMutationVariables) => fetchVendure<SetOrderCustomFieldsMutation, SetOrderCustomFieldsMutationVariables>(SetOrderCustomFieldsDocument, variables)(),
        options
    );
useSetOrderCustomFieldsMutation.fetcher = (variables?: SetOrderCustomFieldsMutationVariables, options?: RequestInit['headers']) => fetchVendure<SetOrderCustomFieldsMutation, SetOrderCustomFieldsMutationVariables>(SetOrderCustomFieldsDocument, variables, options);
export const SetShippingMethodDocument = `
    mutation SetShippingMethod($shippingMethodId: ID!) {
  setOrderShippingMethod(shippingMethodId: $shippingMethodId) {
    ...ActiveOrder
    ... on ErrorResult {
      errorCode
      message
    }
  }
}
    ${ActiveOrderFragmentDoc}`;
export const useSetShippingMethodMutation = <
    TError = unknown,
    TContext = unknown
>(options?: UseMutationOptions<SetShippingMethodMutation, TError, SetShippingMethodMutationVariables, TContext>) =>
    useMutation<SetShippingMethodMutation, TError, SetShippingMethodMutationVariables, TContext>(
        ['SetShippingMethod'],
        (variables?: SetShippingMethodMutationVariables) => fetchVendure<SetShippingMethodMutation, SetShippingMethodMutationVariables>(SetShippingMethodDocument, variables)(),
        options
    );
useSetShippingMethodMutation.fetcher = (variables: SetShippingMethodMutationVariables, options?: RequestInit['headers']) => fetchVendure<SetShippingMethodMutation, SetShippingMethodMutationVariables>(SetShippingMethodDocument, variables, options);
export const TransitionOrderDocument = `
    mutation TransitionOrder($state: String!) {
  transitionOrderToState(state: $state) {
    ...ActiveOrder
    ... on ErrorResult {
      errorCode
      message
    }
    ... on OrderStateTransitionError {
      errorCode
      message
      transitionError
      fromState
      toState
    }
  }
}
    ${ActiveOrderFragmentDoc}`;
export const useTransitionOrderMutation = <
    TError = unknown,
    TContext = unknown
>(options?: UseMutationOptions<TransitionOrderMutation, TError, TransitionOrderMutationVariables, TContext>) =>
    useMutation<TransitionOrderMutation, TError, TransitionOrderMutationVariables, TContext>(
        ['TransitionOrder'],
        (variables?: TransitionOrderMutationVariables) => fetchVendure<TransitionOrderMutation, TransitionOrderMutationVariables>(TransitionOrderDocument, variables)(),
        options
    );
useTransitionOrderMutation.fetcher = (variables: TransitionOrderMutationVariables, options?: RequestInit['headers']) => fetchVendure<TransitionOrderMutation, TransitionOrderMutationVariables>(TransitionOrderDocument, variables, options);
export const UpdateCustomerDocument = `
    mutation UpdateCustomer($title: String, $firstName: String!, $lastName: String!, $phoneNumber: String, $salutation: String) {
  updateCustomer(
    input: {title: $title, firstName: $firstName, lastName: $lastName, phoneNumber: $phoneNumber, customFields: {salutation: $salutation}}
  ) {
    id
  }
}
    `;
export const useUpdateCustomerMutation = <
    TError = unknown,
    TContext = unknown
>(options?: UseMutationOptions<UpdateCustomerMutation, TError, UpdateCustomerMutationVariables, TContext>) =>
    useMutation<UpdateCustomerMutation, TError, UpdateCustomerMutationVariables, TContext>(
        ['UpdateCustomer'],
        (variables?: UpdateCustomerMutationVariables) => fetchVendure<UpdateCustomerMutation, UpdateCustomerMutationVariables>(UpdateCustomerDocument, variables)(),
        options
    );
useUpdateCustomerMutation.fetcher = (variables: UpdateCustomerMutationVariables, options?: RequestInit['headers']) => fetchVendure<UpdateCustomerMutation, UpdateCustomerMutationVariables>(UpdateCustomerDocument, variables, options);
export const UpdateCustomerPasswordDocument = `
    mutation UpdateCustomerPassword($currentPassword: String!, $newPassword: String!) {
  updateCustomerPassword(
    currentPassword: $currentPassword
    newPassword: $newPassword
  ) {
    __typename
    ... on Success {
      success
    }
    ... on InvalidCredentialsError {
      errorCode
      message
    }
    ... on ErrorResult {
      errorCode
      message
    }
    ... on NativeAuthStrategyError {
      errorCode
      message
    }
    ... on PasswordValidationError {
      errorCode
      message
    }
  }
}
    `;
export const useUpdateCustomerPasswordMutation = <
    TError = unknown,
    TContext = unknown
>(options?: UseMutationOptions<UpdateCustomerPasswordMutation, TError, UpdateCustomerPasswordMutationVariables, TContext>) =>
    useMutation<UpdateCustomerPasswordMutation, TError, UpdateCustomerPasswordMutationVariables, TContext>(
        ['UpdateCustomerPassword'],
        (variables?: UpdateCustomerPasswordMutationVariables) => fetchVendure<UpdateCustomerPasswordMutation, UpdateCustomerPasswordMutationVariables>(UpdateCustomerPasswordDocument, variables)(),
        options
    );
useUpdateCustomerPasswordMutation.fetcher = (variables: UpdateCustomerPasswordMutationVariables, options?: RequestInit['headers']) => fetchVendure<UpdateCustomerPasswordMutation, UpdateCustomerPasswordMutationVariables>(UpdateCustomerPasswordDocument, variables, options);
export const RequestUpdateCustomerEmailDocument = `
    mutation RequestUpdateCustomerEmail($password: String!, $newEmailAddress: String!) {
  requestUpdateCustomerEmailAddress(
    password: $password
    newEmailAddress: $newEmailAddress
  ) {
    __typename
    ... on Success {
      success
    }
    ... on InvalidCredentialsError {
      errorCode
      message
    }
    ... on ErrorResult {
      errorCode
      message
    }
    ... on NativeAuthStrategyError {
      errorCode
      message
    }
    ... on EmailAddressConflictError {
      errorCode
      message
    }
  }
}
    `;
export const useRequestUpdateCustomerEmailMutation = <
    TError = unknown,
    TContext = unknown
>(options?: UseMutationOptions<RequestUpdateCustomerEmailMutation, TError, RequestUpdateCustomerEmailMutationVariables, TContext>) =>
    useMutation<RequestUpdateCustomerEmailMutation, TError, RequestUpdateCustomerEmailMutationVariables, TContext>(
        ['RequestUpdateCustomerEmail'],
        (variables?: RequestUpdateCustomerEmailMutationVariables) => fetchVendure<RequestUpdateCustomerEmailMutation, RequestUpdateCustomerEmailMutationVariables>(RequestUpdateCustomerEmailDocument, variables)(),
        options
    );
useRequestUpdateCustomerEmailMutation.fetcher = (variables: RequestUpdateCustomerEmailMutationVariables, options?: RequestInit['headers']) => fetchVendure<RequestUpdateCustomerEmailMutation, RequestUpdateCustomerEmailMutationVariables>(RequestUpdateCustomerEmailDocument, variables, options);
export const ActiveChannelDocument = `
    query ActiveChannel {
  activeChannel {
    id
    code
    currencyCode
    pricesIncludeTax
    token
    defaultLanguageCode
    defaultShippingZone {
      id
      name
      members {
        id
        name
      }
    }
  }
}
    `;
export const useActiveChannelQuery = <
    TData = ActiveChannelQuery,
    TError = unknown
>(
    variables?: ActiveChannelQueryVariables,
    options?: UseQueryOptions<ActiveChannelQuery, TError, TData>
) =>
    useQuery<ActiveChannelQuery, TError, TData>(
        variables === undefined ? ['ActiveChannel'] : ['ActiveChannel', variables],
        fetchVendure<ActiveChannelQuery, ActiveChannelQueryVariables>(ActiveChannelDocument, variables),
        options
    );

useActiveChannelQuery.getKey = (variables?: ActiveChannelQueryVariables) => variables === undefined ? ['ActiveChannel'] : ['ActiveChannel', variables];
;

useActiveChannelQuery.fetcher = (variables?: ActiveChannelQueryVariables, options?: RequestInit['headers']) => fetchVendure<ActiveChannelQuery, ActiveChannelQueryVariables>(ActiveChannelDocument, variables, options);
export const ActiveCompanyDocument = `
    query ActiveCompany {
  activeCompany {
    __typename
    ... on Company {
      name
      vat
      termsOfPayment {
        paymentId
        contactPerson
        text
        amount
      }
      discounts {
        id
        discountType
        discountGroup
        discountType2
        customerDiscountPercentages {
          id
          value
          index
        }
      }
    }
  }
}
    `;
export const useActiveCompanyQuery = <
    TData = ActiveCompanyQuery,
    TError = unknown
>(
    variables?: ActiveCompanyQueryVariables,
    options?: UseQueryOptions<ActiveCompanyQuery, TError, TData>
) =>
    useQuery<ActiveCompanyQuery, TError, TData>(
        variables === undefined ? ['ActiveCompany'] : ['ActiveCompany', variables],
        fetchVendure<ActiveCompanyQuery, ActiveCompanyQueryVariables>(ActiveCompanyDocument, variables),
        options
    );

useActiveCompanyQuery.getKey = (variables?: ActiveCompanyQueryVariables) => variables === undefined ? ['ActiveCompany'] : ['ActiveCompany', variables];
;

useActiveCompanyQuery.fetcher = (variables?: ActiveCompanyQueryVariables, options?: RequestInit['headers']) => fetchVendure<ActiveCompanyQuery, ActiveCompanyQueryVariables>(ActiveCompanyDocument, variables, options);
export const ActiveCompanyAddressesDocument = `
    query ActiveCompanyAddresses {
  activeCompany {
    __typename
    ... on Company {
      addresses {
        ...CompanyAddress
      }
    }
    ... on CompanyNotFoundError {
      errorCode
      message
    }
  }
}
    ${CompanyAddressFragmentDoc}`;
export const useActiveCompanyAddressesQuery = <
    TData = ActiveCompanyAddressesQuery,
    TError = unknown
>(
    variables?: ActiveCompanyAddressesQueryVariables,
    options?: UseQueryOptions<ActiveCompanyAddressesQuery, TError, TData>
) =>
    useQuery<ActiveCompanyAddressesQuery, TError, TData>(
        variables === undefined ? ['ActiveCompanyAddresses'] : ['ActiveCompanyAddresses', variables],
        fetchVendure<ActiveCompanyAddressesQuery, ActiveCompanyAddressesQueryVariables>(ActiveCompanyAddressesDocument, variables),
        options
    );

useActiveCompanyAddressesQuery.getKey = (variables?: ActiveCompanyAddressesQueryVariables) => variables === undefined ? ['ActiveCompanyAddresses'] : ['ActiveCompanyAddresses', variables];
;

useActiveCompanyAddressesQuery.fetcher = (variables?: ActiveCompanyAddressesQueryVariables, options?: RequestInit['headers']) => fetchVendure<ActiveCompanyAddressesQuery, ActiveCompanyAddressesQueryVariables>(ActiveCompanyAddressesDocument, variables, options);
export const ActiveCustomerDocument = `
    query ActiveCustomer($withCustomFields: Boolean = false) {
  activeCustomer {
    ...CustomerData
  }
}
    ${CustomerDataFragmentDoc}`;
export const useActiveCustomerQuery = <
    TData = ActiveCustomerQuery,
    TError = unknown
>(
    variables?: ActiveCustomerQueryVariables,
    options?: UseQueryOptions<ActiveCustomerQuery, TError, TData>
) =>
    useQuery<ActiveCustomerQuery, TError, TData>(
        variables === undefined ? ['ActiveCustomer'] : ['ActiveCustomer', variables],
        fetchVendure<ActiveCustomerQuery, ActiveCustomerQueryVariables>(ActiveCustomerDocument, variables),
        options
    );

useActiveCustomerQuery.getKey = (variables?: ActiveCustomerQueryVariables) => variables === undefined ? ['ActiveCustomer'] : ['ActiveCustomer', variables];
;

useActiveCustomerQuery.fetcher = (variables?: ActiveCustomerQueryVariables, options?: RequestInit['headers']) => fetchVendure<ActiveCustomerQuery, ActiveCustomerQueryVariables>(ActiveCustomerDocument, variables, options);
export const ActiveCustomerRolesDocument = `
    query ActiveCustomerRoles {
  activeCustomer {
    groups {
      id
      name
    }
  }
}
    `;
export const useActiveCustomerRolesQuery = <
    TData = ActiveCustomerRolesQuery,
    TError = unknown
>(
    variables?: ActiveCustomerRolesQueryVariables,
    options?: UseQueryOptions<ActiveCustomerRolesQuery, TError, TData>
) =>
    useQuery<ActiveCustomerRolesQuery, TError, TData>(
        variables === undefined ? ['ActiveCustomerRoles'] : ['ActiveCustomerRoles', variables],
        fetchVendure<ActiveCustomerRolesQuery, ActiveCustomerRolesQueryVariables>(ActiveCustomerRolesDocument, variables),
        options
    );

useActiveCustomerRolesQuery.getKey = (variables?: ActiveCustomerRolesQueryVariables) => variables === undefined ? ['ActiveCustomerRoles'] : ['ActiveCustomerRoles', variables];
;

useActiveCustomerRolesQuery.fetcher = (variables?: ActiveCustomerRolesQueryVariables, options?: RequestInit['headers']) => fetchVendure<ActiveCustomerRolesQuery, ActiveCustomerRolesQueryVariables>(ActiveCustomerRolesDocument, variables, options);
export const ActiveCustomerForCheckoutDocument = `
    query ActiveCustomerForCheckout {
  activeCustomer {
    firstName
    lastName
    addresses {
      ...Address
    }
  }
}
    ${AddressFragmentDoc}
${CountryFragmentDoc}`;
export const useActiveCustomerForCheckoutQuery = <
    TData = ActiveCustomerForCheckoutQuery,
    TError = unknown
>(
    variables?: ActiveCustomerForCheckoutQueryVariables,
    options?: UseQueryOptions<ActiveCustomerForCheckoutQuery, TError, TData>
) =>
    useQuery<ActiveCustomerForCheckoutQuery, TError, TData>(
        variables === undefined ? ['ActiveCustomerForCheckout'] : ['ActiveCustomerForCheckout', variables],
        fetchVendure<ActiveCustomerForCheckoutQuery, ActiveCustomerForCheckoutQueryVariables>(ActiveCustomerForCheckoutDocument, variables),
        options
    );

useActiveCustomerForCheckoutQuery.getKey = (variables?: ActiveCustomerForCheckoutQueryVariables) => variables === undefined ? ['ActiveCustomerForCheckout'] : ['ActiveCustomerForCheckout', variables];
;

useActiveCustomerForCheckoutQuery.fetcher = (variables?: ActiveCustomerForCheckoutQueryVariables, options?: RequestInit['headers']) => fetchVendure<ActiveCustomerForCheckoutQuery, ActiveCustomerForCheckoutQueryVariables>(ActiveCustomerForCheckoutDocument, variables, options);
export const ActiveCustomerOrdersDocument = `
    query ActiveCustomerOrders {
  activeCustomer {
    orders {
      items {
        id
        code
        state
        total
        currencyCode
        orderPlacedAt
      }
    }
  }
}
    `;
export const useActiveCustomerOrdersQuery = <
    TData = ActiveCustomerOrdersQuery,
    TError = unknown
>(
    variables?: ActiveCustomerOrdersQueryVariables,
    options?: UseQueryOptions<ActiveCustomerOrdersQuery, TError, TData>
) =>
    useQuery<ActiveCustomerOrdersQuery, TError, TData>(
        variables === undefined ? ['ActiveCustomerOrders'] : ['ActiveCustomerOrders', variables],
        fetchVendure<ActiveCustomerOrdersQuery, ActiveCustomerOrdersQueryVariables>(ActiveCustomerOrdersDocument, variables),
        options
    );

useActiveCustomerOrdersQuery.getKey = (variables?: ActiveCustomerOrdersQueryVariables) => variables === undefined ? ['ActiveCustomerOrders'] : ['ActiveCustomerOrders', variables];
;

useActiveCustomerOrdersQuery.fetcher = (variables?: ActiveCustomerOrdersQueryVariables, options?: RequestInit['headers']) => fetchVendure<ActiveCustomerOrdersQuery, ActiveCustomerOrdersQueryVariables>(ActiveCustomerOrdersDocument, variables, options);
export const ActiveOrderCartDocument = `
    query ActiveOrderCart {
  activeOrder {
    state
    subTotal
    shipping
    total
    totalWithTax
    currencyCode
    subTotalWithTax
    shippingWithTax
    totalQuantity
    taxSummary {
      taxRate
      taxBase
      taxTotal
    }
    lines {
      id
      discountedLinePrice
      productVariant {
        currencyCode
        price
        assets {
          source
        }
        facetValues {
          id
          name
          facet {
            name
          }
        }
        name
        sku
        product {
          name
          slug
        }
      }
      unitPrice
      linePrice
      quantity
    }
  }
}
    `;
export const useActiveOrderCartQuery = <
    TData = ActiveOrderCartQuery,
    TError = unknown
>(
    variables?: ActiveOrderCartQueryVariables,
    options?: UseQueryOptions<ActiveOrderCartQuery, TError, TData>
) =>
    useQuery<ActiveOrderCartQuery, TError, TData>(
        variables === undefined ? ['ActiveOrderCart'] : ['ActiveOrderCart', variables],
        fetchVendure<ActiveOrderCartQuery, ActiveOrderCartQueryVariables>(ActiveOrderCartDocument, variables),
        options
    );

useActiveOrderCartQuery.getKey = (variables?: ActiveOrderCartQueryVariables) => variables === undefined ? ['ActiveOrderCart'] : ['ActiveOrderCart', variables];
;

useActiveOrderCartQuery.fetcher = (variables?: ActiveOrderCartQueryVariables, options?: RequestInit['headers']) => fetchVendure<ActiveOrderCartQuery, ActiveOrderCartQueryVariables>(ActiveOrderCartDocument, variables, options);
export const ActiveOrderCheckoutDocument = `
    query ActiveOrderCheckout {
  activeOrder {
    id
    state
    updatedAt
    createdAt
    total
    totalWithTax
    subTotal
    subTotalWithTax
    shipping
    currencyCode
    shippingWithTax
    totalQuantity
    taxSummary {
      taxRate
      taxBase
      taxTotal
    }
    shippingAddress {
      ...OrderAddress
    }
    billingAddress {
      ...OrderAddress
    }
    shippingLines {
      shippingMethod {
        id
        languageCode
        code
        name
        description
      }
    }
    lines {
      id
      linePrice
      discountedLinePrice
      unitPrice
      quantity
      productVariant {
        currencyCode
        id
        name
        sku
        price
        product {
          id
          name
          slug
        }
        facetValues {
          id
          name
          facet {
            name
          }
        }
        sku
        assets {
          id
          source
        }
      }
    }
  }
}
    ${OrderAddressFragmentDoc}`;
export const useActiveOrderCheckoutQuery = <
    TData = ActiveOrderCheckoutQuery,
    TError = unknown
>(
    variables?: ActiveOrderCheckoutQueryVariables,
    options?: UseQueryOptions<ActiveOrderCheckoutQuery, TError, TData>
) =>
    useQuery<ActiveOrderCheckoutQuery, TError, TData>(
        variables === undefined ? ['ActiveOrderCheckout'] : ['ActiveOrderCheckout', variables],
        fetchVendure<ActiveOrderCheckoutQuery, ActiveOrderCheckoutQueryVariables>(ActiveOrderCheckoutDocument, variables),
        options
    );

useActiveOrderCheckoutQuery.getKey = (variables?: ActiveOrderCheckoutQueryVariables) => variables === undefined ? ['ActiveOrderCheckout'] : ['ActiveOrderCheckout', variables];
;

useActiveOrderCheckoutQuery.fetcher = (variables?: ActiveOrderCheckoutQueryVariables, options?: RequestInit['headers']) => fetchVendure<ActiveOrderCheckoutQuery, ActiveOrderCheckoutQueryVariables>(ActiveOrderCheckoutDocument, variables, options);
export const ActiveOrderNavigationDocument = `
    query ActiveOrderNavigation {
  activeOrder {
    lines {
      quantity
    }
  }
}
    `;
export const useActiveOrderNavigationQuery = <
    TData = ActiveOrderNavigationQuery,
    TError = unknown
>(
    variables?: ActiveOrderNavigationQueryVariables,
    options?: UseQueryOptions<ActiveOrderNavigationQuery, TError, TData>
) =>
    useQuery<ActiveOrderNavigationQuery, TError, TData>(
        variables === undefined ? ['ActiveOrderNavigation'] : ['ActiveOrderNavigation', variables],
        fetchVendure<ActiveOrderNavigationQuery, ActiveOrderNavigationQueryVariables>(ActiveOrderNavigationDocument, variables),
        options
    );

useActiveOrderNavigationQuery.getKey = (variables?: ActiveOrderNavigationQueryVariables) => variables === undefined ? ['ActiveOrderNavigation'] : ['ActiveOrderNavigation', variables];
;

useActiveOrderNavigationQuery.fetcher = (variables?: ActiveOrderNavigationQueryVariables, options?: RequestInit['headers']) => fetchVendure<ActiveOrderNavigationQuery, ActiveOrderNavigationQueryVariables>(ActiveOrderNavigationDocument, variables, options);
export const AllCollectionsDocument = `
    query AllCollections {
  collections {
    items {
      breadcrumbs {
        ...Breadcrumb
      }
      slug
    }
  }
}
    ${BreadcrumbFragmentDoc}`;
export const useAllCollectionsQuery = <
    TData = AllCollectionsQuery,
    TError = unknown
>(
    variables?: AllCollectionsQueryVariables,
    options?: UseQueryOptions<AllCollectionsQuery, TError, TData>
) =>
    useQuery<AllCollectionsQuery, TError, TData>(
        variables === undefined ? ['AllCollections'] : ['AllCollections', variables],
        fetchVendure<AllCollectionsQuery, AllCollectionsQueryVariables>(AllCollectionsDocument, variables),
        options
    );

useAllCollectionsQuery.getKey = (variables?: AllCollectionsQueryVariables) => variables === undefined ? ['AllCollections'] : ['AllCollections', variables];
;

useAllCollectionsQuery.fetcher = (variables?: AllCollectionsQueryVariables, options?: RequestInit['headers']) => fetchVendure<AllCollectionsQuery, AllCollectionsQueryVariables>(AllCollectionsDocument, variables, options);
export const AvailableCompaniesDocument = `
    query AvailableCompanies {
  companies {
    __typename
    ... on CompanyList {
      items {
        id
        name
        erpId
        vat
        ust
        addresses {
          fullName
          streetLine1
        }
      }
    }
  }
}
    `;
export const useAvailableCompaniesQuery = <
    TData = AvailableCompaniesQuery,
    TError = unknown
>(
    variables?: AvailableCompaniesQueryVariables,
    options?: UseQueryOptions<AvailableCompaniesQuery, TError, TData>
) =>
    useQuery<AvailableCompaniesQuery, TError, TData>(
        variables === undefined ? ['AvailableCompanies'] : ['AvailableCompanies', variables],
        fetchVendure<AvailableCompaniesQuery, AvailableCompaniesQueryVariables>(AvailableCompaniesDocument, variables),
        options
    );

useAvailableCompaniesQuery.getKey = (variables?: AvailableCompaniesQueryVariables) => variables === undefined ? ['AvailableCompanies'] : ['AvailableCompanies', variables];
;

useAvailableCompaniesQuery.fetcher = (variables?: AvailableCompaniesQueryVariables, options?: RequestInit['headers']) => fetchVendure<AvailableCompaniesQuery, AvailableCompaniesQueryVariables>(AvailableCompaniesDocument, variables, options);
export const AvailableCountriesDocument = `
    query AvailableCountries {
  availableCountries {
    ...Country
  }
}
    ${CountryFragmentDoc}`;
export const useAvailableCountriesQuery = <
    TData = AvailableCountriesQuery,
    TError = unknown
>(
    variables?: AvailableCountriesQueryVariables,
    options?: UseQueryOptions<AvailableCountriesQuery, TError, TData>
) =>
    useQuery<AvailableCountriesQuery, TError, TData>(
        variables === undefined ? ['AvailableCountries'] : ['AvailableCountries', variables],
        fetchVendure<AvailableCountriesQuery, AvailableCountriesQueryVariables>(AvailableCountriesDocument, variables),
        options
    );

useAvailableCountriesQuery.getKey = (variables?: AvailableCountriesQueryVariables) => variables === undefined ? ['AvailableCountries'] : ['AvailableCountries', variables];
;

useAvailableCountriesQuery.fetcher = (variables?: AvailableCountriesQueryVariables, options?: RequestInit['headers']) => fetchVendure<AvailableCountriesQuery, AvailableCountriesQueryVariables>(AvailableCountriesDocument, variables, options);
export const CollectionDocument = `
    query Collection($slug: String) {
  collection(slug: $slug) {
    id
    slug
    customFields {
      seoDescription
    }
    breadcrumbs {
      ...Breadcrumb
    }
    name
    description
    assets {
      ...Asset
    }
    customFields {
      hasDetailPage
    }
  }
}
    ${BreadcrumbFragmentDoc}
${AssetFragmentDoc}`;
export const useCollectionQuery = <
    TData = CollectionQuery,
    TError = unknown
>(
    variables?: CollectionQueryVariables,
    options?: UseQueryOptions<CollectionQuery, TError, TData>
) =>
    useQuery<CollectionQuery, TError, TData>(
        variables === undefined ? ['Collection'] : ['Collection', variables],
        fetchVendure<CollectionQuery, CollectionQueryVariables>(CollectionDocument, variables),
        options
    );

useCollectionQuery.getKey = (variables?: CollectionQueryVariables) => variables === undefined ? ['Collection'] : ['Collection', variables];
;

useCollectionQuery.fetcher = (variables?: CollectionQueryVariables, options?: RequestInit['headers']) => fetchVendure<CollectionQuery, CollectionQueryVariables>(CollectionDocument, variables, options);
export const CustomerSpecificPriceDocument = `
    query CustomerSpecificPrice($channelCode: String!, $variantId: String!) {
  customerSpecificPrice(channelCode: $channelCode, variantId: $variantId) {
    basePrice
    price
  }
}
    `;
export const useCustomerSpecificPriceQuery = <
    TData = CustomerSpecificPriceQuery,
    TError = unknown
>(
    variables: CustomerSpecificPriceQueryVariables,
    options?: UseQueryOptions<CustomerSpecificPriceQuery, TError, TData>
) =>
    useQuery<CustomerSpecificPriceQuery, TError, TData>(
        ['CustomerSpecificPrice', variables],
        fetchVendure<CustomerSpecificPriceQuery, CustomerSpecificPriceQueryVariables>(CustomerSpecificPriceDocument, variables),
        options
    );

useCustomerSpecificPriceQuery.getKey = (variables: CustomerSpecificPriceQueryVariables) => ['CustomerSpecificPrice', variables];
;

useCustomerSpecificPriceQuery.fetcher = (variables: CustomerSpecificPriceQueryVariables, options?: RequestInit['headers']) => fetchVendure<CustomerSpecificPriceQuery, CustomerSpecificPriceQueryVariables>(CustomerSpecificPriceDocument, variables, options);
export const EligiblePaymentMethodsDocument = `
    query EligiblePaymentMethods {
  eligiblePaymentMethods {
    id
    code
    name
    description
    isEligible
    eligibilityMessage
    customFields
  }
}
    `;
export const useEligiblePaymentMethodsQuery = <
    TData = EligiblePaymentMethodsQuery,
    TError = unknown
>(
    variables?: EligiblePaymentMethodsQueryVariables,
    options?: UseQueryOptions<EligiblePaymentMethodsQuery, TError, TData>
) =>
    useQuery<EligiblePaymentMethodsQuery, TError, TData>(
        variables === undefined ? ['EligiblePaymentMethods'] : ['EligiblePaymentMethods', variables],
        fetchVendure<EligiblePaymentMethodsQuery, EligiblePaymentMethodsQueryVariables>(EligiblePaymentMethodsDocument, variables),
        options
    );

useEligiblePaymentMethodsQuery.getKey = (variables?: EligiblePaymentMethodsQueryVariables) => variables === undefined ? ['EligiblePaymentMethods'] : ['EligiblePaymentMethods', variables];
;

useEligiblePaymentMethodsQuery.fetcher = (variables?: EligiblePaymentMethodsQueryVariables, options?: RequestInit['headers']) => fetchVendure<EligiblePaymentMethodsQuery, EligiblePaymentMethodsQueryVariables>(EligiblePaymentMethodsDocument, variables, options);
export const EligibleShippingMethodsDocument = `
    query EligibleShippingMethods {
  eligibleShippingMethods {
    id
    price
    priceWithTax
    code
    name
    description
    metadata
    customFields
  }
}
    `;
export const useEligibleShippingMethodsQuery = <
    TData = EligibleShippingMethodsQuery,
    TError = unknown
>(
    variables?: EligibleShippingMethodsQueryVariables,
    options?: UseQueryOptions<EligibleShippingMethodsQuery, TError, TData>
) =>
    useQuery<EligibleShippingMethodsQuery, TError, TData>(
        variables === undefined ? ['EligibleShippingMethods'] : ['EligibleShippingMethods', variables],
        fetchVendure<EligibleShippingMethodsQuery, EligibleShippingMethodsQueryVariables>(EligibleShippingMethodsDocument, variables),
        options
    );

useEligibleShippingMethodsQuery.getKey = (variables?: EligibleShippingMethodsQueryVariables) => variables === undefined ? ['EligibleShippingMethods'] : ['EligibleShippingMethods', variables];
;

useEligibleShippingMethodsQuery.fetcher = (variables?: EligibleShippingMethodsQueryVariables, options?: RequestInit['headers']) => fetchVendure<EligibleShippingMethodsQuery, EligibleShippingMethodsQueryVariables>(EligibleShippingMethodsDocument, variables, options);
export const NextOrderStatesDocument = `
    query NextOrderStates {
  nextOrderStates
}
    `;
export const useNextOrderStatesQuery = <
    TData = NextOrderStatesQuery,
    TError = unknown
>(
    variables?: NextOrderStatesQueryVariables,
    options?: UseQueryOptions<NextOrderStatesQuery, TError, TData>
) =>
    useQuery<NextOrderStatesQuery, TError, TData>(
        variables === undefined ? ['NextOrderStates'] : ['NextOrderStates', variables],
        fetchVendure<NextOrderStatesQuery, NextOrderStatesQueryVariables>(NextOrderStatesDocument, variables),
        options
    );

useNextOrderStatesQuery.getKey = (variables?: NextOrderStatesQueryVariables) => variables === undefined ? ['NextOrderStates'] : ['NextOrderStates', variables];
;

useNextOrderStatesQuery.fetcher = (variables?: NextOrderStatesQueryVariables, options?: RequestInit['headers']) => fetchVendure<NextOrderStatesQuery, NextOrderStatesQueryVariables>(NextOrderStatesDocument, variables, options);
export const OrderDocument = `
    query Order($code: String!) {
  orderByCode(code: $code) {
    id
    customer {
      id
      firstName
      lastName
      phoneNumber
    }
    code
    state
    active
    currencyCode
    shipping
    shippingAddress {
      fullName
      company
      streetLine1
      streetLine2
      city
      province
      postalCode
      country
      countryCode
      phoneNumber
      customFields
    }
    billingAddress {
      fullName
      company
      streetLine1
      streetLine2
      city
      province
      postalCode
      country
      countryCode
      phoneNumber
      customFields
    }
    shippingLines {
      shippingMethod {
        id
        languageCode
        code
        name
        description
      }
    }
    lines {
      id
      linePrice
      discountedLinePrice
      unitPrice
      quantity
      productVariant {
        currencyCode
        id
        name
        sku
        price
        product {
          id
          name
          slug
        }
        assets {
          id
          source
        }
      }
    }
    payments {
      method
    }
  }
}
    `;
export const useOrderQuery = <
    TData = OrderQuery,
    TError = unknown
>(
    variables: OrderQueryVariables,
    options?: UseQueryOptions<OrderQuery, TError, TData>
) =>
    useQuery<OrderQuery, TError, TData>(
        ['Order', variables],
        fetchVendure<OrderQuery, OrderQueryVariables>(OrderDocument, variables),
        options
    );

useOrderQuery.getKey = (variables: OrderQueryVariables) => ['Order', variables];
;

useOrderQuery.fetcher = (variables: OrderQueryVariables, options?: RequestInit['headers']) => fetchVendure<OrderQuery, OrderQueryVariables>(OrderDocument, variables, options);
export const ProductDocument = `
    query Product($slug: String, $withCustomFields: Boolean = false, $isPreRender: Boolean = true) {
  product(slug: $slug) {
    id
    name
    description
    customFields {
      productDetailName
    }
    assets {
      ...Asset
    }
    collections {
      id
      breadcrumbs {
        ...Breadcrumb
      }
    }
    variants {
      ...ProductVariant
    }
    customFields {
      downloads {
        id
        fileName
        fileSize
        path
      }
    }
  }
}
    ${AssetFragmentDoc}
${BreadcrumbFragmentDoc}
${ProductVariantFragmentDoc}
${ProductVariantCustomFieldFragmentDoc}`;
export const useProductQuery = <
    TData = ProductQuery,
    TError = unknown
>(
    variables?: ProductQueryVariables,
    options?: UseQueryOptions<ProductQuery, TError, TData>
) =>
    useQuery<ProductQuery, TError, TData>(
        variables === undefined ? ['Product'] : ['Product', variables],
        fetchVendure<ProductQuery, ProductQueryVariables>(ProductDocument, variables),
        options
    );

useProductQuery.getKey = (variables?: ProductQueryVariables) => variables === undefined ? ['Product'] : ['Product', variables];
;

useProductQuery.fetcher = (variables?: ProductQueryVariables, options?: RequestInit['headers']) => fetchVendure<ProductQuery, ProductQueryVariables>(ProductDocument, variables, options);
export const ProductsDocument = `
    query Products($skip: Int) {
  products(options: {take: 100, skip: $skip}) {
    items {
      slug
    }
  }
}
    `;
export const useProductsQuery = <
    TData = ProductsQuery,
    TError = unknown
>(
    variables?: ProductsQueryVariables,
    options?: UseQueryOptions<ProductsQuery, TError, TData>
) =>
    useQuery<ProductsQuery, TError, TData>(
        variables === undefined ? ['Products'] : ['Products', variables],
        fetchVendure<ProductsQuery, ProductsQueryVariables>(ProductsDocument, variables),
        options
    );

useProductsQuery.getKey = (variables?: ProductsQueryVariables) => variables === undefined ? ['Products'] : ['Products', variables];
;

useProductsQuery.fetcher = (variables?: ProductsQueryVariables, options?: RequestInit['headers']) => fetchVendure<ProductsQuery, ProductsQueryVariables>(ProductsDocument, variables, options);
export const SearchDocument = `
query Search($input: String!) {
    search(input: { inStock: true, term: $input }) {
      items {
        sku
        slug
        productId
        productName
        productVariantId
        productVariantName
        description
        priceWithTax {
          ... on SinglePrice {
            value
          }
        }
        productVariantAsset {
          preview
        }
      }
    }
  }
    `;
export const useSearchQuery = <
    TData = SearchQuery,
    TError = unknown
>(
    variables: SearchQueryVariables,
    options?: UseQueryOptions<SearchQuery, TError, TData>
) =>
    useQuery<SearchQuery, TError, TData>(
        ['Search', variables],
        fetchVendure<SearchQuery, SearchQueryVariables>(SearchDocument, variables),
        options
    );

useSearchQuery.getKey = (variables: SearchQueryVariables) => ['Search', variables];
;

useSearchQuery.fetcher = (variables: SearchQueryVariables, options?: RequestInit['headers']) => fetchVendure<SearchQuery, SearchQueryVariables>(SearchDocument, variables, options);
export const VariantDocument = `
    query Variant($id: ID!, $withCustomFields: Boolean = false, $isPreRender: Boolean = true) {
  variant(variantId: $id) {
    ...ProductVariant
  }
}
    ${ProductVariantFragmentDoc}
${ProductVariantCustomFieldFragmentDoc}
${AssetFragmentDoc}`;
export const useVariantQuery = <
    TData = VariantQuery,
    TError = unknown
>(
    variables: VariantQueryVariables,
    options?: UseQueryOptions<VariantQuery, TError, TData>
) =>
    useQuery<VariantQuery, TError, TData>(
        ['Variant', variables],
        fetchVendure<VariantQuery, VariantQueryVariables>(VariantDocument, variables),
        options
    );

useVariantQuery.getKey = (variables: VariantQueryVariables) => ['Variant', variables];
;

useVariantQuery.fetcher = (variables: VariantQueryVariables, options?: RequestInit['headers']) => fetchVendure<VariantQuery, VariantQueryVariables>(VariantDocument, variables, options);
export const VariantDetailsDocument = `
    query VariantDetails($id: ID!, $includeImages: Boolean = false, $includeSystemInformation: Boolean = false, $includeDownloads: Boolean = false, $includeAdditionalProducts: Boolean = false) {
  variant(variantId: $id) {
    customFields {
      onSiteImages @include(if: $includeImages) {
        name
        source
      }
      onSiteImages @include(if: $includeImages) {
        name
        source
      }
      systemInformationItems @include(if: $includeSystemInformation) {
        itemText
        itemHeadline
      }
      downloads @include(if: $includeDownloads) {
        id
        fileName
        fileSize
        path
      }
      additionalProducts @include(if: $includeAdditionalProducts) {
        id
        slug
        featuredAsset {
          source
        }
        name
      }
    }
  }
}
    `;
export const useVariantDetailsQuery = <
    TData = VariantDetailsQuery,
    TError = unknown
>(
    variables: VariantDetailsQueryVariables,
    options?: UseQueryOptions<VariantDetailsQuery, TError, TData>
) =>
    useQuery<VariantDetailsQuery, TError, TData>(
        ['VariantDetails', variables],
        fetchVendure<VariantDetailsQuery, VariantDetailsQueryVariables>(VariantDetailsDocument, variables),
        options
    );

useVariantDetailsQuery.getKey = (variables: VariantDetailsQueryVariables) => ['VariantDetails', variables];
;

useVariantDetailsQuery.fetcher = (variables: VariantDetailsQueryVariables, options?: RequestInit['headers']) => fetchVendure<VariantDetailsQuery, VariantDetailsQueryVariables>(VariantDetailsDocument, variables, options);