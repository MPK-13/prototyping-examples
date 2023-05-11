//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here
require('./views/example1/_routes') // each time you create a new version add this link that points to the _routes.js file in it
require('./views/example2/_routes') 
// this is an example ---> require('./views/example2/_routes')

// These lines of code essentially build a single routs file using the different versions

module.exports = router
