/**
 * Created by chrbradley on 7/14/14.
 */

// create a JSON variable that points to the native JSON object or an empty object if it is unavailable
//var JSON = JSON || {};

// implement JSON.stringify serialization

// if JSON.stringify is UNAVAILABLE define a function that accepts a single parameter
// The parameter can be a single value, an array, or a complex object
JSON.stringerBell = function (obj) {

//    console.log("obj is " + obj + " and has type of " + typeof obj);
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
            value = obj[i];
            var type = typeof(value);
            console.log("i is " + i);
            console.log("value is "+ value);
            var isNull = (value === null);
            var bangNull = (value !== null);
            console.log("is value null: " + isNull);
            console.log("value bang null: "+bangNull);
            console.log("value has typeof "+type);


            if (type = "object" && value !== null) {
                value = JSON.stringerBell(value);
            }


//            if (type !== undefined) {
//                if (type == "string") {
//                    value = '"' + value + '"';
//                }
//                else if (type == "object" && value !== null) {
//                    value = JSON.stringerBell(value);
//                }
//            }

            json.push((arr ? "" : '"' + i + '":') + String(value));
        }

        // The JSON array is converted to a comma-delimited list and returned within
        // array[] or object {} as necessary
        return (arr ? "[" : "{") + String(json) + (arr ? "]" : "}");
    }
};

var medium = {
    name: "Jimmy",
    occupation: "Limo Driver",
    scores: [67, 34, 66, 21, 78, 34, 67, 90]
};

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
//    foo: 'bar',
//    bar: 'foo',
    undefinedKey: undefined,
    nullKey: null,
//    functionKey: function(){return"a";},
//    foobar: {foo: 'bar', bar: 'foo'},
//    barfood: {
//        wings: "volcano",
//        nachos: "grande",
//        potatoSkins: "loaded",
//        shumai: "crab"
//    }
}

var aria = [ 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

var unstringifiableValues = [
    {
        'functions': function(){},
        'undefined': undefined
    }
];


console.log("This is sitePoint JSON.stringerBell: ")
//console.log(JSON.stringerBell(medium));
//console.log(JSON.stringify(medium));
//console.log(JSON.stringerBell(sitePoint));
//console.log(JSON.stringify(sitePoint));
console.log(JSON.stringerBell(stack));
console.log(JSON.stringify(stack));
//console.log(JSON.stringerBell(aria));
//console.log(JSON.stringify(aria));
console.log(JSON.stringerBell(unstringifiableValues));
console.log(JSON.stringify(unstringifiableValues));