// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
    // initialize variables
    var value = document.body.childNodes;
    var matched = [];

    // handle document body
    //...there has to be a better way to do this!!!
    if (document.body.classList.contains(className)) {
        matched.push(document.body);
    }

    // hoist classMe and run the first time
    classMe(value);

    function classMe(children) {
        // loop through child nodes
        for (var i = 0; i < children.length;i++){
            value = children[i];

            // guard against text nodes and include className matches
            if (value.nodeType !== 3 && value.classList.contains(className)) {

                // add matched nodes to result
                matched.push(value);
            }

            // run again if value has children
            if ( value.childNodes.length > 0) {
                value = value.childNodes;
                classMe(value);
            }
        }
    }
    // return results
    return matched;
};
