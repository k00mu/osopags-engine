import "reflect-metadata";
import express from 'express';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Analytics Service is running on port ${PORT}`);
});