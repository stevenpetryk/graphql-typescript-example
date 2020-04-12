# Rails, GraphQL, and TypeScript: a monolith worth trying

This is the example Rails repository to go along with my blog post, [Rails, GraphQL, and TypeScript: a monolith worth trying](https://stevenpetryk.com/blog/rails-graphql-typescript-stack/).

## Setup

Use Ruby 2.7. Install dependencies like this:

```bash
bin/setup
```

## Usage

Start the Rails server:

```bash
rails s
```

Optionally, start a separate webpack dev server (for faster compilation):

```bash
bin/webpack-dev-server
```

Then visit some pages:

- http://localhost:3000/
- http://localhost:3000/graphiql
