export default {
  type: 'mongodb',
  url: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.${process.env.DB_CLUSTER}.mongodb.net/?retryWrites=true&w=majority`,
  useNewUrlParser: true,
  synchronize: true,
  logging: true,
  entities: ['src/entities/*.*'],
};
