# humanresources-graphql

Example API built with NestJS/MongoDB using GraphQL with Docker.

### Local Development

* Copy `.env.example` to `.env`
* Run `docker-compose up -d` to bring up the needed containers.
* Run `yarn run start:dev` to run API.

> GraphQL will be available at: http://localhost:3000/graphql

### Notes

* `User.email` is unique

### JWT

```
humanresources
```

#### Admin JWT
```jwt
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJyb2xlIjoiYWRtaW4ifQ.8gAo3wsNqtAgNdkA7rRXWRxnR60FAEAC9JI5s3-8Icw
```

#### User JWT
```jwt
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJyb2xlIjoidXNlciJ9.L61mLlkyUR4sX2QDIK6j8FnHeQjdSgEo1wfer3hZKp4
```

#### GraphQL Examples

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

#### Clean Up

* Run `docker-compose down`
