// Libs
import express from 'express'

// Middlewares
import qraphqlMiddleware from 'express-graphql'

// Schemas
import { buildSchema } from 'graphql'

const app = express()

const schema = buildSchema(` 
    type Query {
        hello: String
        world: String
    }
`)

const resolver = {
    hello() {
        return 'Hello'
    },
    world() {
        return 'World'
    }
}

app.use('/', qraphqlMiddleware({
    schema,
    rootValue: resolver,
    graphiql: true
}))

app.listen(3000, () => {
    console.log(`Start server at port ${3000}.`)
})