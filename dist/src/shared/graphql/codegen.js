"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    overwrite: true,
    schema: 'http://localhost:3000/graphql',
    documents: ['src/shared/graphql/operations/*.graphql'],
    generates: {
        './src/shared/graphql/jarvis.ts': {
            plugins: [
                'typescript',
                'typescript-operations',
                'typescript-graphql-request',
            ],
            config: {
                withCompositionFunctions: true,
                //useTypeImports: true,
                dedupeOperationSuffix: true,
                dedupeFragments: true,
                // enumsAsTypes: true,
                // futureProofEnums: true,
            },
        },
        './src/shared/graphql/jarvis.schema.json': {
            plugins: ['introspection'],
        },
    },
};
exports.default = config;
//# sourceMappingURL=codegen.js.map