db.createUser(
  {
    user: "humanresources",
    pwd: "humanresources",
    roles: [
      {
        role: "readWrite",
        db: "humanresources_dev",
      },
    ],
  },
);
