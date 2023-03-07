# Next.js Sandbox

[![check](https://github.com/Developartment/nextjs-sandbox/actions/workflows/check.yml/badge.svg)](https://github.com/Developartment/nextjs-sandbox/actions/workflows/check.yml)

The default repository for Next.js projects.

## Development

This sandbox use Docker and Docker compose for development. You can easily start the whole app by one command listed bellow.

1. Run `docker-compose up` in the root of the project.
2. Open `http://localhost:3000` in your browser.

---

To execute a command inside running container, you can use `docker-compose exec nextjs-sandbox npm run check:prettier`.

To execute a command without a running container, you can use `docker-compose run --rm nextjs-sandbox npm run check:prettier`.

## Sentry

This sandbox use [Sentry](https://www.sentry.io). To be sure the sentry is working correctly, you have to add your info into [sentry.properties](sentry.properties) as well as you have to set up [environment](.env) properties.

### Create .sentryclirc

Create a `.sentryclirc` file into the root of the project. The content of the file should be like:

```
[auth]
token=your-auth-token
```

You can also create an environment property instead of `.sentryclirc` file.

```
SENTRY_AUTH_TOKEN=your-auth-token
```

It's necessary to create this file so Sentry CLI can create a release while app build. You can find your auth token [here](https://www.sentry.io/api).
