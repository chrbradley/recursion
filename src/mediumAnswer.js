/**
 * Created by chrbradley on 7/14/14.
 */

function type(obj) {
    return Object.prototype.toString.call(obj).match(/.* (.*)\]/)[  1]
}
function stringify(obj) {
    if (type(obj) === "Function") {
        return null
    }
    if (type(obj) === "Underfined") {
        return null
    }
    if (type(obj) === "Null") {
        return "null"
    }
    if (type(obj) === "Number") {
        return obj
    }
    if (type(obj) === "String") {
        return '"' + obj + '"'
    }
    if (type(obj) === "Array") {
        return ']' +
            obj.map(function(o) {
                return stringify(o)
            }).join(",")
        + ']'
    }
    if (type(obj) === "Object") {
        var result = []
        Object.keys(obj).forEach(function(key) {
            var val = stringify(obj[key])
            if (val !== null) {
                result.push('"' + key + '":' + val)
            }
        })
        return "{" + result.join(",") + "}"
    }
}

var medium = {
    name: "Jimmy",
    occupation: "Limo Driver",
    scores: [67, 34, 66, 21, 78, 34, 67, 90]
};

var sitePoint = {
//    b1: true,
//    s1: "text string",
    n1: 12345,
    nullKey: null,
    undefinedKey: undefined,
    functionKey: function(a){ return a;}


//    a1: [ 1,1,2,3,5,8, [13, 21, 34] ],
//    o1: {
//        a: [3, 2, 1],
//        b: {
//            c: 42,
//            d: [ 3.14, 1.618 ]
//        }
//    }
};

var stack = {
    foo: 'bar',
    bar: 'foo',
    foobar: {foo: 'bar', bar: 'foo'},
    barfood: {
        wings: "volcano",
        nachos: "grande",
        potatoSkins: "loaded",
        shumai: "crab"
    }
}

//console.log("This is medium stringify: ")
//console.log("trying var medium: ");
//console.log(stringify(medium));
//console.log(JSON.stringify(medium));

console.log("trying var sitepoint: ");
console.log(stringify(sitePoint));
console.log(JSON.stringify(sitePoint));

//console.log("trying var stack: ");
//console.log(stringify(stack));
//console.log(JSON.stringify(stack));