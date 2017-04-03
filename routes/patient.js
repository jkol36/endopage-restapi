import { Router } from 'express'
import mongoose from 'mongoose'

const router = Router()

router.route('/')
  .get((req, res) => {
    mongoose
    .model('patient')
    .find({})
    .then(patients => res.json(patients))
    .catch(err => res.send(err))
  })
  .post((req, res) => {
    mongoose
    .model('patient')
    .create(req.body)
    .then(doctor => res.json(doctor))
  })


export default router