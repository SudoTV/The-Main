/**
 * @author WMXPY
 * @namespace Data_Definition_Practice
 * @description Practice
 */

import { InternationalizationEntity, UrlEntity } from "../common";

export enum PRACTICE_DIFFICULTY {

    BEGINNER = "BEGINNER",
    INTERMEDIATE = "INTERMEDIATE",
    ADVANCED = "ADVANCED",
    EXPERT = "EXPERT",
}

export type PracticeEntity = {

    readonly forum: InternationalizationEntity<UrlEntity>;
    readonly difficulty: PRACTICE_DIFFICULTY;
    readonly title: InternationalizationEntity;
    readonly description: InternationalizationEntity;
};
