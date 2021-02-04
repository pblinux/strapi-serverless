// Envirovment config for database
const databaseConfig = ({ env }) => {
  if (
    process.env.NODE_ENV === 'development' ||
    env("LAMBDA_RUNTIME_DIR", null) === null
  ) {
    // Local or offline lambda
    return {
      connector: "bookshelf",
      settings: {
        client: "sqlite",
        filename: env("DATABASE_FILENAME", ".tmp/data.db"),
      },
      options: {
        useNullAsDefault: true,
      },
    };
  } else {
    // For Lambda
    return {
      connector: "bookshelf",
      settings: {
        client: "sqlite",
        filename: env("DATABASE_FILENAME", "/tmp/data.db"),
      },
      options: {
        useNullAsDefault: true,
      },
    };
  }
};

module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: databaseConfig({ env }),
  },
});
