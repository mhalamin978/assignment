
function megaFriend(array) {
    var lgth = 0;
    var longest;
    for (var i = 0; i < array.length; i++) {
        
        if (array[i].length > lgth) {
            var lgth = array[i].length;
            longest = array[i];
        }
    }
    return longest;
}
var result = megaFriend(["karim","rahman","kalamuddin"]);
console.log(result);