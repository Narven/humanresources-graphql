db.createUser(
  {
    user: "shipserv",
    pwd: "shipserv",
    roles: [
      {
        role: "readWrite",
        db: "shipserv_dev",
      },
    ],
  },
);
