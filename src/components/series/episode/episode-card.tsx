/**
* @author WMXPY
* @namespace Components_Series_Episode
* @description Episode Card
*/

import * as React from "react";
import { RedirectionCard } from "../../common/redirection-card";

export type SeriesEpisodeCardProps = {
};

export const SeriesEpisodeCard: React.FC<SeriesEpisodeCardProps> = (
    props: SeriesEpisodeCardProps,
) => {

    return (<RedirectionCard
        title={"Episode"}
    />);
};
