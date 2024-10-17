import app from './src/app';
import 'dotenv/config';
import process from 'node:process';
import cluster from 'node:cluster';
import { availableParallelism } from 'node:os';

const PORT = process.env.PORT || 3000;
const cpus = availableParallelism();

const startServer = async () => {
  if (cluster.isPrimary) {
    console.log(`Primary ${process.pid} is running`);
    console.log(`Setting up ${cpus} workers...`);

    // Fork workers
    for (let i = 0; i < 5; i++) {
      cluster.fork();
    }

    // Handle worker exits and restart them
    cluster.on('exit', (worker, code, signal) => {
      console.log(
        `Worker ${worker.process.pid} died. Signal: ${signal}. Code: ${code}`,
      );
      console.log('Starting a new worker...');
      cluster.fork();
    });
  } else {
    // Workers can share any TCP connection
    app.listen(PORT, () => {
      console.log(
        `Worker ${process.pid} started and listening on http://localhost:${PORT}`,
      );
    });
  }
};

startServer();
