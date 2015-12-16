var errors = {

    handle: function(err) {
        if(typeof err == 'object' && err.code) {
            return err;
        }
        if(typeof err == 'string' || !err.code) {
            return { code: 9900, message: 'Error:' + JSON.stringify(err) };
        }
    },

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
    PROJECT_NAME_EXIST: function() {
        return { code: 11001, message: 'the project name already exist' };
    },
    
    // 12001 - 13000 Report Error
    
    // 13001 - 14000 Datasource Error

};

module.exports = errors;