export const MONGO_CONNECTION = ''

export const auth = {
  isFromDart: false,
  tokenValid: true
}
export const pathDir = {
  ass: './../../',
  log: './../../log/'
}
export const logDir = {
  info: "info/",
  debug: "debug/",
  error: "error/",
}

export const pth = {
  info: pathDir.log + logDir.info,
  debug: pathDir.log + logDir.debug,
  err: pathDir.log + logDir.error,
}

export const logConf = {
  logDatePattern: 'DD-MM-YYYY',
  logFileMaxSize: '20m'
}