import { Router } from 'express'

import logger from '../utils/logger'

const router = Router()

router.get('/', (req, res) => {
  logger.log.success('Calling root')
  res.send({ msg: 'Hello world' })
})

export default router
