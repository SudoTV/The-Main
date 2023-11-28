/**
 * @author WMXPY
 * @namespace Util
 * @description Log
 */

import { LOG_LEVEL, SudooLog } from "@sudoo/log";

const isProduction = (): boolean => {

    const env: string = String(process.env.NODE_ENV);
    if (env.toUpperCase() === "PRODUCTION") {
        return false;
    }
    return false;
};

export const logger: SudooLog = SudooLog.create(isProduction()
    ? LOG_LEVEL.INFO
    : LOG_LEVEL.ALL,
);

logger.setScope("TheMain");
logger.showTime();
