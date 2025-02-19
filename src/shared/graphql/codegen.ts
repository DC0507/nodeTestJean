import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
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

export default config;
