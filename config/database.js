module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "mongoose",
      settings: {
        //host: env("DATABASE_HOST", "cluster0.rcr62.mongodb.net"),
        //srv: env.bool("DATABASE_SRV", true),
        //port: env.int("DATABASE_PORT", 27017),
        //database: env("DATABASE_NAME", "my-cms"),
        //username: env("DATABASE_USERNAME", "Admin"),
        //password: env("DATABASE_PASSWORD", "Kacper_275"),

        host: env("DATABASE_HOST", "mongodb.server495677.nazwa.pl"),
        srv: env.bool("DATABASE_SRV", true),
        port: env.int("DATABASE_PORT", 4019),
        database: env("DATABASE_NAME", "server495677_masterbee"),
        username: env("DATABASE_USERNAME", "Admin"),
        password: env("DATABASE_PASSWORD", "Kacper275"),
      },
      options: {
        authenticationDatabase: env("AUTHENTICATION_DATABASE", null),
        ssl: env.bool("DATABASE_SSL", true),
      },
    },
  },
});

// module.exports = ({ env }) => ({
//   defaultConnection: "default",
//   connections: {
//     default: {
//       connector: "mongoose",
//       settings: {
//         host: env("DATABASE_HOST"),
//         srv: env.bool("DATABASE_SRV", true),
//         port: env.int("DATABASE_PORT", 27017),
//         database: env("DATABASE_NAME"),
//         username: env("DATABASE_USERNAME"),
//         password: env("DATABASE_PASSWORD"),
//       },
//       options: {
//         authenticationDatabase: env("AUTHENTICATION_DATABASE", null),
//         ssl: env.bool("DATABASE_SSL", true),
//       },
//     },
//   },
// });
