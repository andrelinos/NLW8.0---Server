import express from 'express';
import cors from 'cors';
import { routes } from './routes';

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);

app.listen(process.env.SERVER_API_PORT || 3333, () => {
    console.log(
        '🔥 HTTP server is running on port 4000 🚀 | Feito com 💜 por Andrelino Silva',
    );
});
