import resolvers from './resolvers'
import { ApolloServer } from 'apollo-server-express'
import typeDefs from './schema'
import { createConnection } from 'typeorm'
import dotenv from 'dotenv'
import cloudinary from 'cloudinary'
import { isUserLoggedIn } from './utils/isUserLoggedIn'
import express from 'express'
dotenv.config()
;(async () => {
  const app = express()

  cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
  })

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: async ({ req }) => {
      const user = await isUserLoggedIn(req)

      return { user }
    }
  })
  const PORT = process.env.PORT || 4000

  await createConnection()

  server.applyMiddleware({ app })

  app.listen(PORT, () =>
    console.log(`Server listening on http://localhost:${PORT}`)
  )
})()
