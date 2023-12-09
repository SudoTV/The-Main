# The-Main

[![Continuous Integration](https://github.com/SudoTV/The-Main/actions/workflows/ci.yml/badge.svg)](https://github.com/SudoTV/The-Main/actions/workflows/ci.yml)
[![Production Deployment](https://github.com/SudoTV/The-Main/actions/workflows/production.yml/badge.svg)](https://github.com/SudoTV/The-Main/actions/workflows/production.yml)

[![codecov](https://codecov.io/gh/SudoTV/The-Main/branch/main/graph/badge.svg)](https://codecov.io/gh/SudoTV/The-Main)
[![Checkly](https://api.checklyhq.com/v1/badges/checks/86d4e1ca-b922-4c45-aa73-3ce79c7abb70?style=flat&theme=default&responseTime=true)](https://app.checklyhq.com/)
[![GitHub License](https://img.shields.io/github/license/SudoTV/The-Main)](https://github.com/SudoTV/The-Main/blob/main/LICENSE)
[![Discord](https://img.shields.io/discord/1182374637544423514?logo=discord&logoColor=white&color=blueviolet)](https://discord.gg/Mr8dPdQ4)

The portal website for SudoTV

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

Contents of the `/docs` folder, `/src/dictionary` folder, and other "non-code" content within this repository are licensed under the [CC BY-NC-ND 4.0](http://creativecommons.org/licenses/by-nc-nd/4.0/) license unless otherwise specified.

## Development

To start development you will need to prepare a Github GraphQL API token. Which can be obtained from [Fine-grained personal access tokens](https://github.com/settings/tokens) page. Public access scope is good enough for The Main to work.

To start the development server run:

```bash
GRAPHQL_GITHUB_API_TOKEN="<YOUR-GITHUB-ACCESS-TOKEN>" npm run dev
```

## Deployment

Currently, this project is being deployed to Vercel. The deployment is done automatically on every push to the `main` branch via Github Action.

Also, when pull requests are created, a preview deployment is created automatically. The link to the preview deployment is added to the pull request description.
