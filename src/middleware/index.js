import errorMiddleware from './errorMiddleware'
import logger from './logger'
import promiseMiddleware from './promiseMiddleware'
import normalizeMiddleware from './normalizeMiddleware'

export default [logger, errorMiddleware, normalizeMiddleware, promiseMiddleware];
