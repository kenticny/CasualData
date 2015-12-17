exports.validateNullFields = function(data, callback) {
    if(typeof data !== 'object') {
        return ['all'];
    }

    var nullFields = [];
    for(var i in data) {
        if(!data[i]) nullFields.push(i);
        if(Array.isArray(data[i]) && data[i].length == 0)
            nullFields.push(i);
    }
    return nullFields;
};