const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

        var version = 'example1'; //This should identically replicate the folder name
        // We're going to use the version variable able to predefine the folder this version is in. Its then quick to update when you create a new version.

        // This is an example post
        router.post('/'+ version +'/index', function(request, response) {
            response.redirect(version +'completed');
        })
