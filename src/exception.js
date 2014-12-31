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
    
    console.log(errors);
    
    sendToAPI(errors);
}

// using jQuery to make a request

function sendToAPI(e) {
    
    $.ajax({
        type: "POST",
        url: "http://erros.api.co/js",
        data: { errorList: e },
        success: function(r) {
            console.log(r);
        }
    });
    
}