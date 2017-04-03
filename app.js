import server from './server'
import { initializeDatabase } from './config'
import mongoose from 'mongoose'


initializeDatabase()
  .then(() => {
    console.log()
    server.listen(5000, () => console.log('Listening on 5000'))
  })




