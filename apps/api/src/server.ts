import 'reflect-metadata';
import { createConnection } from 'typeorm';
import app from './app';
import dbConfig from '../ormconfig';

createConnection({
  type: 'mongodb',
  url: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.${process.env.DB_CLUSTER}.mongodb.net/?retryWrites=true&w=majority`,
  useNewUrlParser: true,
  synchronize: true,
  logging: true,
  entities: ['src/entity/*.*'],
})
  .then(() => {
    const PORT = process.env.PORT ?? 3000;
    console.log('Database connected');
    app.listen(PORT, () =>
      console.log(`App is running on http//localhost:${PORT}`)
    );
  })
  .catch((err) => console.log(err));
