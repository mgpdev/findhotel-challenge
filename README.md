# FindHotel Challenge

This is an implementation of a front-end code challenge for [FindHotel](https://careers.findhotel.net/).

## How to run?

### With Docker (Not tested because my installation is broken)

The simplest way to run the application is using [`docker-compose`](https://docs.docker.com/compose/):

```bash
docker-compose build
docker-compose up
```

### Standalone

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn run dev

# build for production and launch server
$ yarn run build
$ yarn start

# generate static project
$ yarn run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).

## How to test?

To run the tests using [Jest](https://jestjs.io/) and [Vue Test Utils](https://vue-test-utils.vuejs.org/):

```bash
$ yarn install
$ yarn run test
```

## How to access?

```bash
http://localhost:3000
```

## Things TODO

- [ ] Improve the sync of data between the mobile and desktop filter components.
- [ ] Implement more unit and integration tests.
- [ ] Add a internationalization plugin like [vue-i18n](https://www.npmjs.com/package/vue-i18n).
- [ ] Configure the project to use a component explorer like [Storybook](https://storybook.js.org/basics/guide-vue/).
