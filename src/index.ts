import bodyParser from 'body-parser'
import 'dotenv/config'
import express, { Express, Request, Response } from 'express'
import path from 'path'

import { db } from './db/db'
import { todos } from './db/schema'

const app: Express = express()
const port = process.env.PORT || 4000

app.use(bodyParser.urlencoded({ extended: false }))
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// display new to-do page
app.get('/new', (req: Request, res: Response) => {
  res.render('new')
})

app.listen(port, () => {
  console.log(`🔥🔥🔥: Server is running at http://localhost:${port}`)
})