# humanresources-graphql

Example API built with NestJS/MongoDB using GraphQL with Docker.

### Local Development

* Copy `.env.example` to `.env`
* Use `docker-compose up -d` to bring up the needed containers.

> GraphQL will be available at: http://localhost:3000/graphql

### Notes

* `User.email` is unique

#### Graphql Examples

Get Users with department
```graphql
{
  users {
    id
    email
    role
    name
    department {
      id
      name
    }
    phone
  }
}
```

Create User
```graphql
mutation {
  createUser(input:{ name:"Worf", phone:"312903812098" email:"worf@gmail.com", role:"user", department:"5ff99578142156b9b4b6f9d0" }) {
    id
    name
    email
    phone
    role
  }
}
```

Create Department
```graphql
mutation {
  createDepartment(input:{name: "Hu-man Resources"}) {
    id
    name
  }
}
```
