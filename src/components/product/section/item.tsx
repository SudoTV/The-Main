/**
* @author WMXPY
* @namespace Components_Product_Section
* @description Item
*/

import { IETF_LOCALE } from "@sudoo/locale";
import * as React from "react";
import { PRODUCT_TYPE, ProductEntity } from "../../../data/definition/product/product";
import { ProductsSectionWebsite } from "./website";

export type ProductsSectionItemProps = {

    readonly product: ProductEntity<PRODUCT_TYPE>;
    readonly locale: IETF_LOCALE;
};

export const ProductsSectionItem: React.FC<ProductsSectionItemProps> = (
    props: ProductsSectionItemProps,
) => {

    switch (props.product.type) {

        case PRODUCT_TYPE.WEBSITE: {

            return (<ProductsSectionWebsite
                product={props.product}
                locale={props.locale}
            />);
        }
    }
};
