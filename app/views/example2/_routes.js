const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

        var version = 'example2'; 

        router.post('/'+ version +'/index', function(request, response) {
            
            // first thing do is reset all the error valiables to false in case this is the first time we've been here
            // for this example we have an overall error data item and individual error data item for each message we're checking for
            request.session.data['error']= "false";
            request.session.data['error_detail1']= "false";
            request.session.data['error_detail2']= "false";
            request.session.data['error_detail3']= "false";
            request.session.data['error_detail4']= "false";
            
            // Lets check the first input to see if something has been entered
            if(request.session.data['name']==""){ //if the input is blank
                request.session.data['error']= "true"; // we have an error
                request.session.data['error_detail1']= "true"; // the error is with the name
            }

            // Lets check the second input to see if something has been entered
            if(request.session.data['age']==""){ //if the input is blank
                request.session.data['error']= "true"; // we have an error
                request.session.data['error_detail2']= "true"; // the error is no age has been entered
            }
            // We next check if the input is under 18
            else if(request.session.data['age']<18){
                request.session.data['error']= "true"; // we have an error
                request.session.data['error_detail3']= "true"; // the error is the age is under 18
            }
            
            // Finally we check if a selection has been made in the nationality
            if(request.session.data['nationality'] == null){ //if the input is blank
                request.session.data['error']= "true"; // we have an error
                request.session.data['error_detail4']= "true"; // the error is with the nationality
            }
            
            // once we have the errors set we can post back to the page if we've detected an issue
            // the in-page logic now identifies these session we've set to hid or show individual elements within the page 
            if(request.session.data['error']=="true"){
                response.redirect('/'+version+'/index');
            }
           else{
            // add a link to what you'd like to happen next
           }
            
            
        })
