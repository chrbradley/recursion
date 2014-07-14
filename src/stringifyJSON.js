// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  // your code goes here
    // return null for function, null and undefined
    if ((typeof obj === "function") || (typeof obj === "null" || typeof obj === "undefined")) {
        return null;
    }
//    if (typeof obj === "undefined") {
//        return null;
//    }
//    if (typeof obj === "null") {
//        return null;
//    }
    // return single values ( simple data types ) immediately
    else if (typeof obj != "object") {

        // put " " around strings
        if (typeof obj == "string") obj = '"'+obj+'"';
        return String(obj);

    }

    // or recursively pass arrays and objects to the JSON.stringify function
    else {

        // recurse array or object
        var value;
        var json = [];
        var arr = Array.isArray(obj);

        // resulting values are added to the end of a JSON[] array as a "name: value" string
        // or just a single value for arrays
        for (var i in obj) {
            value = obj[i]; t = typeof(value);

            if (t == "string") value = '"'+value+'"';
            else if (t == "object" && value !== null) value = JSON.stringerBell(value);

            json.push((arr ? "" : '"' + i + '":') + String(value));
        }

        // The JSON array is converted to a comma-delimited list and returned within
        // array[] or object {} as necessary
        return (arr ? "[" : "{") + String(json) + (arr ? "]" : "}");
    }
};

