const UnauthorizedError = require('./unauthorized-error')
const ServerError = require('./server-error')

module.exports = class httpResponse {
  static badRequest (error) {
    return {
      statusCode: 400,
      body: error
    }
  }

  static severError () {
    return {
      statusCode: 500,
      body: new ServerError()
    }
  }

  static unauthorizedError () {
    return {
      statusCode: 401,
      body: new UnauthorizedError()
    }
  }

  static ok (data) {
    return {
      statusCode: 200,
      body: data
    }
  }
}
