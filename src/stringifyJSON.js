// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
    // initialize variables
    var type = typeof obj;
    var json = [];
    var value;
    var ifArray = Array.isArray(obj);

    // handle simple data types and null
    if ( type !== 'object' || obj === null) {
        // format strings
        if( type === 'string') {
            obj = '"'+obj+'"';
        }
        return (String(obj));
    }
    // or handle objects
    else {
        for (var i in obj) {
            value = obj[i];
            type = typeof value;
//        console.log("Value is " + value + " and has type of " + type);
            // guard against undefined and function value types
            if (type !== "undefined" && type !== "function") {

                // handle strings
                if (type == "string") {
                    value = '"' + value + '"';
                }

                // recursion for object types
                else if (type == "object" && value !== null) {
                    value = stringifyJSON(value);
                }

                // add array values as string to container
                if (ifArray) {
                    json.push(String(value));
                }
                // or format object keys and values then add to container
                else {
                    json.push(('"' + i + '":') + String(value));
                }
            }
        }
        // return stringified array
        if (ifArray) {
            return '[' + String(json) + ']';
        }
        // or return stringified object
        else {
            return '{' + String(json) + '}';
        }
    }
};
