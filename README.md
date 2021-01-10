# humanresources-graphql

Example API built with NestJS/MongoDB using GraphQL with Docker.

### Local Development

* Instal dependencies with `yarn` 
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
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJyb2xlIjoiYWRtaW4iLCJ1aWQiOiI1ZmZhYzc1NDU5MmNkOGUxMTU0ZTU2OWIifQ.NLoIm25_a_oX3M81RmNNNnSPWjh9Cw_TB3DU81W7vQM
```

#### User JWT
```jwt
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJyb2xlIjoidXNlciIsInVpZCI6IjVmZmFjNzU0NTkyY2Q4ZTExNTRlNTY5YiJ9.8pojdnXifgJClLK-dDl8xfD-o9pN8uoJjsrXFrOHMpQ
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
