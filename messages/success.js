var success = {

    // 0 common ok
    ok: function(detail) {
        var ret = { code: 0, message: 'success' };
        if(detail) {
            ret.detail = detail;
        }
        return ret;
    }
};

module.exports = success;