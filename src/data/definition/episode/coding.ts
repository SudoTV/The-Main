/**
 * @author WMXPY
 * @namespace Data_Definition_Episode
 * @description Coding
 */

import { PracticeEntity } from "../practice/practice";

export type EpisodeEntitySwitchCodingGit = {

    readonly "before-tag": string;
    readonly "after-tag": string;
};

export type EpisodeEntitySwitchCoding = {

    readonly practices: PracticeEntity[];
    readonly git: EpisodeEntitySwitchCodingGit;
};
