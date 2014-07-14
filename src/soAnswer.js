/**
 * Created by chrbradley on 7/14/14.
 */

var my_stringify1 = function (obj) {
    var objKeys = Object.keys(obj);
    var keyValueArray = new Array();
    for (var i = 0; i < objKeys.length; i++) {
        console.log("i is " + objKeys[i] +" typeof i is: " + typeof objKeys[i]);
        var keyValueString = '"' + objKeys[i] + '":';
        var objValue = obj[objKeys[i]];
        if (typeof objValue == "string") {
            keyValueString = keyValueString + '"' + objValue + '"';
        } else {
            keyValueString = keyValueString + my_stringify1(objValue);
        }
        keyValueArray.push(keyValueString);
    }
    return "{" + keyValueArray.join(",") + "}";
}

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
    foo: 'bar',
    bar: 'foo',
    nullKey: null,
    foobar: {foo: 'bar', bar: 'foo'},
    barfood: {
        wings: "volcano",
        nachos: "grande",
        potatoSkins: "loaded",
        shumai: "crab"
    }
}

console.log("This is SO stringify1: ")
//console.log(my_stringify1(medium));
//console.log(my_stringify1(sitePoint));
console.log(my_stringify1(stack));