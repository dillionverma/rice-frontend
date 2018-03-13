import errorMiddleware from './errorMiddleware'
import logger from './logger'
import promiseMiddleware from './promiseMiddleware'

export default [logger, errorMiddleware, promiseMiddleware];
