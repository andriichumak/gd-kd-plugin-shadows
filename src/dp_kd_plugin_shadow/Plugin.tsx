// (C) 2021 GoodData Corporation
import {
    DashboardContext,
    DashboardPluginV1,
    IDashboardCustomizer,
    IDashboardEventHandling,
} from "@gooddata/sdk-ui-dashboard";
import React from 'react';

import packageJson from "../../package.json";

export class Plugin extends DashboardPluginV1 {
    public readonly author = packageJson.author;
    public readonly displayName = packageJson.name;
    public readonly version = packageJson.version;

    public register(
        _ctx: DashboardContext,
        customize: IDashboardCustomizer,
        _handlers: IDashboardEventHandling,
    ): void {
        customize.insightWidgets().withCustomDecorator(next => {
            return (insight, widget) => {
                function MyCustomDecorator(props: any) {
                    const Decorated = next(insight, widget);

                    return (
                        <div style={{boxShadow: '0px 0px 15px 0px #000000', flex: 1, borderRadius: 5, padding: 10}}>
                            <Decorated {...props} />
                        </div>
                    )
                }

                return MyCustomDecorator;
            }
        });
    }
}
