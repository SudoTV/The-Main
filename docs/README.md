# The-Main

[![Continuous Integration](https://github.com/SudoTV/The-Main/actions/workflows/ci.yml/badge.svg)](https://github.com/SudoTV/The-Main/actions/workflows/ci.yml)
[![codecov](https://codecov.io/gh/SudoTV/The-Main/branch/main/graph/badge.svg)](https://codecov.io/gh/SudoTV/The-Main)

The portal website for SudoTV

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

Contents of the `docs/` folder, `src/dictionary` folder, and other "non-code" content within this project are licensed under the [CC BY-NC-ND 4.0](http://creativecommons.org/licenses/by-nc-nd/4.0/) license.

## Development

To start development you will need to prepare a Github GraphQL API token. Which can be obtained from [Fine-grained personal access tokens](https://github.com/settings/tokens) page. Public access scope is good enough for The Main to work.

To start the development server run:

```bash
GRAPHQL_GITHUB_API_TOKEN="<YOUR-GITHUB-ACCESS-TOKEN>" npm run dev
```

## Deployment

Currently, this project is being deployed to Cloudflare Pages. The deployment is done automatically on every push to the `main` branch.

Also, when pull requests are created, a preview deployment is created automatically. The link to the preview deployment is added to the pull request description.
