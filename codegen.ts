
import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema: 'http://localhost:3001/shop-api',
  documents: 'operations/**/*.tsx',
  generates: {
    './operations/generated/': {
      preset: 'client',
      plugins: [],
    },
  },
}

export default config
