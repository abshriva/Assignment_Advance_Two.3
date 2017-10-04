class User
{
    //private property
    private name:string;

    //Paramaterised constructor
    constructor(name:string)
    {
        this.name=name;
    }

    //Get property
    public get Name() : string {
        return this.CheckUser();
    }

    //Set property
    public set Name(v : string) {
        this.name=v;
    }

    //function to check whether user is valid or not
    public CheckUser()
    {
        if(this.name == "Abhishek")
        {
            return "The user "+this.name+" is valid user";
        }
        else
        {
            return "The user "+this.name+" is not valid user";
        }
    }
    
}

var u1 = new User('Abhishek');
var res= u1.Name;
console.log(''+res);
u1.Name='123456' // Setting the value through set property
var res = u1.Name;// Getting the value through get property
console.log(''+res);



