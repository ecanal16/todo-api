import { Router } from 'express'

import logger from '../utils/logger'

const router = Router()

router.get('/', (req, res) => {
  logger.log.success('Eric Canales, Calling root')
  res.send({ msg: 'Hello world' })
})

export default router
