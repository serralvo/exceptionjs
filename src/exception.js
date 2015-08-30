window.onerror = function (errorMsg, url, lineNumber) {
    
    errors = { 
        msg: errorMsg, 
        file: url, 
        line: lineNumber,
        date: new Date(),
        browserData: navigator.userAgent,
        browserName: navigator.appCodeName,
        platform: navigator.platform
    };
    
    sendToYourBackend(errors);
}

// using jQuery to make the request
function sendToYourBackend(errors) {
    
    $.ajax({
        type: "POST",
        url: "http://errors.yourbackend.co/js",
        data: { errorList: errors },
        success: function(r) {
            console.log(r);
        }
    });
    
}
