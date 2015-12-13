var errors = {

    // 9900  - 9920  Common Error
    REQUEST_ERROR: function(err) {
        return { code: 9901, message: 'Request error.', detail: err };
    },
    MISSING_PARAMETERS: function(params) {
        return { code: 9902, message: 'Missing parameters: ' + params.join("") };
    },
    OPERATE_FAILED: function() {
        return { code: 9903, message: 'Operate failed.' };
    },

    // 9921  - 10000 Util Error
    

    // 10001 - 11000 User Error
    
    // 11001 - 12000 Project Error
    
    // 12001 - 13000 Report Error
    
    // 13001 - 14000 Datasource Error

};

module.exports = errors;