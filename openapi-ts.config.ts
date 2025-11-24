import { defineConfig } from '@hey-api/openapi-ts';

export default defineConfig({
  input: 'hey-api/backend',
  output: 'src/client',
  plugins: [
    '@hey-api/sdk',
    '@hey-api/typescript',
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
