var user1 = "hcl";
var password = "hcl";
var arrUser = ["A", "HCL", "hcl"];
var arrPassword = ["A", "HCL", "hcl"];
for (var i = 0; i < 3; i++) {
    if (arrUser[i] == user1 && arrPassword[i] == password) {
        console.log("Account is validated");
    }
    else {
        console.log("Account is not valid, please try again...attempt #" + (i + 1));
    }
}
var arr = [10, 20, 30, 40];
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var val = arr_1[_i];
    console.log(val); // prints values: 10, 20, 30, 40
}
for (var _a = 0, arr_2 = arr; _a < arr_2.length; _a++) {
    var val = arr_2[_a];
    console.log(val); // prints values: 10, 20, 30, 40
}
