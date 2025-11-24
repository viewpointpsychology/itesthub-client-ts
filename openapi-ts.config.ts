import { defineConfig } from '@hey-api/openapi-ts';

export default defineConfig({
//  input: 'https://gitlab.com/viewpoint1/viewpoint-website/-/raw/master/openapi.yaml',
  input: 'itesthub.yaml',
  output: {
    indexFile: false,
    path: 'src',
  },
  plugins: [
    '@hey-api/schemas',
    {
      dates: true,
      name: '@hey-api/transformers',
    },
    {
      enums: 'javascript',
      name: '@hey-api/typescript',
    },
    {
      name: '@hey-api/sdk',
      transformer: true,
    },
    {
      name: '@tanstack/react-query',
      queryOptions: true,
      queryKeys: {
        tags: true,
      },
      mutationOptions: true,
    },
  ],
});


// useQuery: true
