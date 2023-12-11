/**
* @author WMXPY
* @namespace Components_Product_Section
* @description Section
*/

import { PRODUCT_TYPE, ProductEntity } from "@/data/definition/product/product";
import { productInternationalization } from "@/dictionary/product/_intl";
import { PRODUCT_PROFILE } from "@/dictionary/product/_profile";
import { IETF_LOCALE } from "@sudoo/locale";
import * as React from "react";
import { Header2 } from "../../typography/header-2";
import { Section } from "../../typography/section";
import { ProductsSectionItem } from "./item";

export type ProductsSectionProps = {

    readonly products: Array<ProductEntity<PRODUCT_TYPE>>;
    readonly locale: IETF_LOCALE;
};

export const ProductsSection: React.FC<ProductsSectionProps> = (
    props: ProductsSectionProps,
) => {

    const format = productInternationalization.format(props.locale);

    if (!Array.isArray(props.products)
        || props.products.length === 0) {

        return null;
    }

    return (
        <Section
            marginTop
        >
            <Header2>
                {format.get(PRODUCT_PROFILE.PRODUCT_CREATED)}
            </Header2>
            <div>
                {props.products.map((each: ProductEntity<PRODUCT_TYPE>) => {
                    return (
                        <ProductsSectionItem
                            key={each.identifier}
                            product={each}
                            locale={props.locale}
                        />
                    );
                })}
            </div>
        </Section>
    );
};
