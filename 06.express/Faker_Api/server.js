
// importing Express
const express = require("express")
// import Faker
const {faker} = require("@faker-js/faker")
// invoking express
const app = express();
const PORT = 8000;

// make sure these lines are above any app.get or app.post code blocks
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );





class User{
    constructor(password, email, phoneNumber, lastName, firstName, _id){
        this.password = faker.internet.password(),
        this.email = faker.internet.email(),
        this.phoneNumber = faker.phone.number(), 
        this.lastName = faker.name.lastName(),
        this.firstName = faker.name.firstName(),
        this._id = faker.datatype.uuid();
    }
}

class Company{
    constructor(id, name, address){
        this.id = faker.datatype.uuid();
        this.name = faker.company.name();
        this.address = {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }

    }
}


// Routing 
// axios get
app.get("/api",(req, res) =>{
    console.log(req);
    res.json({
        message: "Hello World",
        title: 25
    })
}) 

// app.get("/api/users/new", (req, res) =>{
//     res.json()
// })

app.get("/api/users/new", (req, res) => {
    console.log(req)

    const user = new User;
    res.json( {user} );
});

app.get("/api/companies/new", (req, res) => {
    const company = new Company;
    res.json({company})
})

app.get("/api/user/company", (req, res) => {
    const user = new User;
    const company = new Company;
    res.json({user, company})
})


app.listen(PORT, () => console.log(`>> SERVER is up on ${PORT} and is listening for REQuest and RESponse`))