/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel-plugin for production.
 */
const documents = {
    "\n      mutation RegisterCustomerAccount {\n        registerCustomerAccount(\n          input: {\n            emailAddress: \"\"\n            title: \"\"\n            firstName: \"\"\n            lastName: \"\"\n            phoneNumber: \"\"\n            password: \"\"\n            customFields: {\n              salutation: \"\"\n            }\n          }\n        ) {\n          __typename\n          ... on Success {\n            success\n          }\n          ... on MissingPasswordError {\n            errorCode\n            message\n          }\n          ... on PasswordValidationError {\n            errorCode\n            message\n          }\n          ... on NativeAuthStrategyError {\n            errorCode\n            message\n          }\n        }\n      }\n    ": types.RegisterCustomerAccountDocument,
    "\n      query ActiveCustomer {\n        activeCustomer {\n          title\n          firstName\n          lastName\n          customFields {\n            salutation\n          }\n        }\n      }\n    ": types.ActiveCustomerDocument,
    "\n      query Product {\n        product(slug: \"\") {\n          description\n          name\n          variants {\n            sku\n            name\n            stockLevel\n            priceWithTax\n            assets {\n              name\n              source\n            }\n          }\n        }\n      }\n    ": types.ProductDocument,
    "\n  query Search {\n    search(input: { inStock: true, term: \"\", sort: { name: ASC } }) {\n      items {\n        sku\n        slug\n        productId\n        productName\n        productVariantId\n        productVariantName\n        description\n        priceWithTax {\n          ... on SinglePrice {\n            value\n          }\n        }\n        productVariantAsset {\n          preview\n        }\n      }\n    }\n  }\n  ": types.SearchDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      mutation RegisterCustomerAccount {\n        registerCustomerAccount(\n          input: {\n            emailAddress: \"\"\n            title: \"\"\n            firstName: \"\"\n            lastName: \"\"\n            phoneNumber: \"\"\n            password: \"\"\n            customFields: {\n              salutation: \"\"\n            }\n          }\n        ) {\n          __typename\n          ... on Success {\n            success\n          }\n          ... on MissingPasswordError {\n            errorCode\n            message\n          }\n          ... on PasswordValidationError {\n            errorCode\n            message\n          }\n          ... on NativeAuthStrategyError {\n            errorCode\n            message\n          }\n        }\n      }\n    "): (typeof documents)["\n      mutation RegisterCustomerAccount {\n        registerCustomerAccount(\n          input: {\n            emailAddress: \"\"\n            title: \"\"\n            firstName: \"\"\n            lastName: \"\"\n            phoneNumber: \"\"\n            password: \"\"\n            customFields: {\n              salutation: \"\"\n            }\n          }\n        ) {\n          __typename\n          ... on Success {\n            success\n          }\n          ... on MissingPasswordError {\n            errorCode\n            message\n          }\n          ... on PasswordValidationError {\n            errorCode\n            message\n          }\n          ... on NativeAuthStrategyError {\n            errorCode\n            message\n          }\n        }\n      }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      query ActiveCustomer {\n        activeCustomer {\n          title\n          firstName\n          lastName\n          customFields {\n            salutation\n          }\n        }\n      }\n    "): (typeof documents)["\n      query ActiveCustomer {\n        activeCustomer {\n          title\n          firstName\n          lastName\n          customFields {\n            salutation\n          }\n        }\n      }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      query Product {\n        product(slug: \"\") {\n          description\n          name\n          variants {\n            sku\n            name\n            stockLevel\n            priceWithTax\n            assets {\n              name\n              source\n            }\n          }\n        }\n      }\n    "): (typeof documents)["\n      query Product {\n        product(slug: \"\") {\n          description\n          name\n          variants {\n            sku\n            name\n            stockLevel\n            priceWithTax\n            assets {\n              name\n              source\n            }\n          }\n        }\n      }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Search {\n    search(input: { inStock: true, term: \"\", sort: { name: ASC } }) {\n      items {\n        sku\n        slug\n        productId\n        productName\n        productVariantId\n        productVariantName\n        description\n        priceWithTax {\n          ... on SinglePrice {\n            value\n          }\n        }\n        productVariantAsset {\n          preview\n        }\n      }\n    }\n  }\n  "): (typeof documents)["\n  query Search {\n    search(input: { inStock: true, term: \"\", sort: { name: ASC } }) {\n      items {\n        sku\n        slug\n        productId\n        productName\n        productVariantId\n        productVariantName\n        description\n        priceWithTax {\n          ... on SinglePrice {\n            value\n          }\n        }\n        productVariantAsset {\n          preview\n        }\n      }\n    }\n  }\n  "];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;