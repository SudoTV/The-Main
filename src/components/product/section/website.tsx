/**
* @author WMXPY
* @namespace Components_Product_Section
* @description Website
*/

import { PRODUCT_TYPE, ProductEntity } from "@/data/definition/product/product";
import { HrefConfig } from "@/util/href";
import { SIZE } from "@/util/size";
import { IETF_LOCALE } from "@sudoo/locale";
import * as React from "react";
import { RedirectionCard } from "../../common/redirection-card";

export type ProductsSectionWebsiteProps = {

    readonly product: ProductEntity<PRODUCT_TYPE.WEBSITE>;
    readonly locale: IETF_LOCALE;
};

export const ProductsSectionWebsite: React.FC<ProductsSectionWebsiteProps> = (
    props: ProductsSectionWebsiteProps,
) => {

    return (
        <RedirectionCard
            size={SIZE.SMALL}
            leadTitle={props.product.link.url}
            title={props.product.title[props.locale]}
            titleHref={HrefConfig.external(props.product.link.url)}
            subtitle={props.product.description[props.locale]}
        />
    );
};
