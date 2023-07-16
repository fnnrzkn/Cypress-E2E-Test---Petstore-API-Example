it ('Create a user',()=>{
    let body = {
        "id": 1,
        "username": Cypress.env('username'),
        "firstName": "fa",
        "lastName": "fafaf",
        "email": "fafafafafa",
        "password": "afafafa",
        "phone": "fafafa",
        "userStatus": 121212
    }
    console.log(body)
    cy.request('POST','/user',body).as('createUser');
    //adds new Todo item by defining Todo name
    cy.get('@createUser').then(createUser=>{
        expect(createUser.status).to.eq(200);
    });
});