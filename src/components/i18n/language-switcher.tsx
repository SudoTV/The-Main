/**
 * @author WMXPY
 * @namespace Components_I18N
 * @description Language Switcher
 */

import * as React from "react";

export const LanguageSwitcher: React.FC = () => {

    return (
        <div>
            <select>
                <option value='en'>English</option>
                <option value='es'>Español</option>
            </select>
        </div>
    );
};
