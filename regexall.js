$.regexall = function(type, value) {

    var pattern = '';

    switch (type) {
    	case 'email':
		 	pattern = '^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+[.]{1}[a-zA-Z]{2,4}$';
    	break;
    	case 'number':
    		pattern = '^[0-9]+$';
    	break;
    	case 'decimal':
    		pattern = '^[+-]?[0-9]+[.]{1}[0-9]+$';
    	break;
    	case 'ip':
    		pattern = '^[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}$';
    	break;
    	case 'domain':
    		pattern = /^((www\.)|(http:\/\/)|(https:\/\/))+[a-zA-Z]+([\.]{1})+[a-zA-Z]{2,6}$/;
		break;
		case 'htmlTag':
			pattern = /^<[a-zA-Z\s\/]+>$/;
    	break;
    }

    if (pattern == '') {
    	return false;
    }

    var reg = new RegExp(pattern);
    
    return reg.test(value);
};