/**
 * @author WMXPY
 * @namespace Test
 * @description TS Hook
 */

require("global-jsdom/register");

const ts_node = require("ts-node");
const tsconfig_paths = require("tsconfig-paths");

const path = require("path");

process.env = Object.assign(process.env, {
    NODE_ENV: "test",
});

ts_node.register({
    project: path.join(__dirname, "tsconfig.test.json"),
});

const baseURL = path.join(__dirname, "..", "src");

console.log(baseURL);

tsconfig_paths.register({
    baseUrl: path.join(__dirname, "..", "src"),
    paths: {
        "@/components/*": [
            "components/*",
        ],
        "@/data/*": [
            "data/*",
        ],
        "@/dictionary/*": [
            "dictionary/*",
        ],
        "@/error/*": [
            "error/*",
        ],
        "@/i18n/*": [
            "i18n/*",
        ],
        "@/styles/*": [
            "styles/*",
        ],
        "@/util/*": [
            "util/*",
        ],
    },
});
