import { Plugin } from "@elizaos/core";
import { conductSystemUptimeAnalysisAction } from "./actions/conduct-system-uptime-analysis.ts";
import { opportunityVelocityProvider } from "./providers/opportunity-velocity.ts";

export * as actions from "./actions";
export * as evaluators from "./evaluators";
export * as providers from "./providers";

export const justEnergySystemPlugin: Plugin = {
    name: "justenergy-system",
    description: "Plugin to help evaluate Just Energy system.",
    actions: [
        conductSystemUptimeAnalysisAction
    ],
    evaluators: [],
    providers: [opportunityVelocityProvider],
};
