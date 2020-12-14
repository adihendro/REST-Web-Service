'use strict';

exports.ok = function(req,res){
    var data = {
        'status':200,
        'values':values,
    }
    res.json(data);
    res.end();
}