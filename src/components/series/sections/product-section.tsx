/**
* @author WMXPY
* @namespace Components_Series_Sections
* @description Product Section
*/

import { IETF_LOCALE } from "@sudoo/locale";
import * as React from "react";
import { SERIES_TYPE, SeriesEntity } from "../../../data/definition/series/series";
import { ProductsSection } from "../../product/section/section";

export type SeriesProductSectionProps = {

    readonly series: SeriesEntity<SERIES_TYPE>;
    readonly locale: IETF_LOCALE;
};

export const SeriesProductSection: React.FC<SeriesProductSectionProps> = (
    props: SeriesProductSectionProps,
) => {

    switch (props.series.type) {

        case SERIES_TYPE.SOFTWARE_ENGINEERING: {

            const series = props.series as SeriesEntity<SERIES_TYPE.SOFTWARE_ENGINEERING>;
            return (<ProductsSection
                products={series.products}
                locale={props.locale}
            />);
        }
    }
    return null;
};
