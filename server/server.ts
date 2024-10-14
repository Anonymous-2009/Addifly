import app from './src/app';
import 'dotenv/config';

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
};

startServer();
