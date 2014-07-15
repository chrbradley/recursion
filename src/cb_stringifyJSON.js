/**
 * Created by christopherbradley on 7/14/14.
 */
var stringifiableValues = [
    9,
    null,
    true,
    false,
    "Hello world",
    [],
    [8],
    ["hi"],
    [8, "hi"],
    [1, 0, -1, -0.3, 0.3, 1343.32, 3345, 0.00011999999999999999],
    [8, [[],3,4]],
    [[[["foo"]]]],
    {},
    {"a": "apple"},
    {"foo": true, "bar": false, "baz": null},
    {"boolean, true": true, "boolean, false": false, "null": null },
    // basic nesting
    {"a":{"b":"c"}},
    {"a":["b", "c"]},
    [{"a":"b"}, {"c":"d"}],
    {"a":[],"c": {}, "b": true}
];

var sitePoint = {
    b1: true,
    s1: "text string",
    n1: 12345,
    n2: null,
    n3: undefined,
    a1: [ 1,1,2,3,5,8, [13, 21, 34] ],
    o1: {
        a: [3, 2, 1],
        b: {
            c: 42,
            d: [ 3.14, 1.618 ]
        }
    }
};

var stack = {
    foo: 'bar',
    bar: 'foo',
    undefinedKey: undefined,
    nullKey: null,
    functionKey: function(){return"a";},
    foobar: {foo: 'bar', bar: 'foo'},
    barfood: {
        wings: "volcano",
        nachos: "grande",
        potatoSkins: "loaded",
        shumai: "crab"
    }
}

// used for stringifyJSON spec
// hint: JSON does not allow you to stringify functions or
// undefined values, so you should skip those key/value pairs.
unstringifiableValues = [
    {
        'functions': function(){},
        'undefined': undefined
    }
];

JSON.stringer = function (obj) {

    var t = typeof (obj);
    if (t != "object" || obj === null) {

        // simple data type
        if (t == "string") obj = '"'+obj+'"';
        return String(obj);

    }
    else {

        // recurse array or object
        var n, v, json = [], arr = (obj && obj.constructor == Array);

        for (n in obj) {
            v = obj[n]; t = typeof(v);

            if (t == "string") v = '"'+v+'"';
            else if (t == "object" && v !== null) v = JSON.stringify(v);

            json.push((arr ? "" : '"' + n + '":') + String(v));
        }

        return (arr ? "[" : "{") + String(json) + (arr ? "]" : "}");
    }
};


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
}

//var type = {};
//
console.log(stringifyJSON(stringifiableValues));
//console.log(JSON.stringer(stringifiableValues));
console.log(JSON.stringify(stringifiableValues));

//console.log(stringifyJSON(type));
//console.log(JSON.stringer(type));
//console.log(JSON.stringify(type));

//console.log(stringifyJSON(sitePoint));
//console.log(JSON.stringify(sitePoint));

console.log(stringifyJSON(stack));
//console.log(JSON.stringer(stack));
console.log(JSON.stringify(stack));

console.log(stringifyJSON(unstringifiableValues));
//console.log(JSON.stringer(unstringifiableValues));
console.log(JSON.stringify(unstringifiableValues));

console.log(stringifyJSON(9));
console.log(JSON.stringify(9));

console.log(stringifyJSON(null));
console.log(JSON.stringify(null));

console.log(stringifyJSON(true));
console.log(JSON.stringify(true));

console.log(stringifyJSON(false));
console.log(JSON.stringify(false));

console.log(stringifyJSON("hello world"));
console.log(JSON.stringify("hello world"));

console.log(stringifyJSON([]));
console.log(JSON.stringify([]));


//console.log(Array.isArray([]));