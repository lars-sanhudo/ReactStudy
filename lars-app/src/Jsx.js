//const name = 'Lars Sanhudo';
//const element = <h1>Hello, {name}</h1>;





function formatName(user){
    return user.firstName + ' ' +user.lastName;
}

const user = {
    firstName : "Lars",
    lastName : "Sanhudo"
};

const element = (
    <h1>
        Hello, {formatName(user)}!
    </h1>
)

