# The-Main

[![Continuous Integration](https://github.com/SudoTV/The-Main/actions/workflows/ci.yml/badge.svg)](https://github.com/SudoTV/The-Main/actions/workflows/ci.yml)
[![codecov](https://codecov.io/gh/SudoTV/The-Main/branch/main/graph/badge.svg)](https://codecov.io/gh/SudoTV/The-Main)

The portal website for SudoTV

## Development

To start development you will need to prepare a Github GraphQL API token. Which can be obtained [Fine-grained personal access tokens](https://github.com/settings/tokens). Public access scope is good enough for The Main to work.

To start the development server run:

```bash
GRAPHQL_GITHUB_API_TOKEN="<YOUR-GITHUB-ACCESS-TOKEN>" npm run dev
```

## Deployment

Currently, this project is being deployed to Cloudflare Pages. The deployment is done automatically on every push to the `main` branch.

Also, when pull requests are created, a preview deployment is created automatically. The link to the preview deployment is added to the pull request description.
