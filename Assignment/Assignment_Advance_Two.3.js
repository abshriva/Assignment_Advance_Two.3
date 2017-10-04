var User = (function () {
    //Paramaterised constructor
    function User(name) {
        this.name = name;
    }
    Object.defineProperty(User.prototype, "Name", {
        //Get property
        get: function () {
            return this.CheckUser();
        },
        //Set property
        set: function (v) {
            this.name = v;
        },
        enumerable: true,
        configurable: true
    });
    //function to check whether user is valid or not
    User.prototype.CheckUser = function () {
        if (this.name == "Abhishek") {
            return "The user " + this.name + " is valid user";
        }
        else {
            return "The user " + this.name + " is not valid user";
        }
    };
    return User;
}());
var u1 = new User('Abhishek');
var res = u1.Name;
console.log('' + res);
u1.Name = '123456'; // Setting the value through set property
var res = u1.Name; // Getting the value through get property
console.log('' + res);
