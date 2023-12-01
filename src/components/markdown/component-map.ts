/**
* @author WMXPY
* @namespace Components_Markdown
* @description Component Map
*/

import * as React from "react";
import { MDX_A } from "../mdx/a";
import { MDX_Blockquote } from "../mdx/blockquote";
import { MDX_Code } from "../mdx/code";
import { MDX_H1 } from "../mdx/h1";
import { MDX_H2 } from "../mdx/h2";
import { MDX_H3 } from "../mdx/h3";
import { MDX_H4 } from "../mdx/h4";
import { MDX_H5 } from "../mdx/h5";
import { MDX_H6 } from "../mdx/h6";
import { MDX_Li } from "../mdx/li";
import { MDX_Ol } from "../mdx/ol";
import { MDX_P } from "../mdx/p";
import { MDX_Pre } from "../mdx/pre";
import { MDX_Table } from "../mdx/table";
import { MDX_Td } from "../mdx/td";
import { MDX_Th } from "../mdx/th";
import { MDX_Tr } from "../mdx/tr";
import { MDX_Ul } from "../mdx/ul";

export const markdownComponentsMap: Record<string, React.ComponentType<any>> = {

    h1: MDX_H1,
    h2: MDX_H2,
    h3: MDX_H3,
    h4: MDX_H4,
    h5: MDX_H5,
    h6: MDX_H6,
    a: MDX_A,
    p: MDX_P,
    code: MDX_Code,
    pre: MDX_Pre,
    table: MDX_Table,
    tr: MDX_Tr,
    th: MDX_Th,
    td: MDX_Td,
    blockquote: MDX_Blockquote,
    ul: MDX_Ul,
    ol: MDX_Ol,
    li: MDX_Li,
};
