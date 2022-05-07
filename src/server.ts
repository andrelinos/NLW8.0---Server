import express from 'express';
import cors from 'cors';
import { routes } from './routes';

const app = express();

app.use(express.json({ limit: '50mb' }));
app.use(
    express.urlencoded({
        limit: '200mb',
        extended: true,
        parameterLimit: 50000,
    }),
);
app.use(express.text({ limit: '200mb' }));
app.use(cors());
app.use(routes);

app.listen(process.env.SERVER_API_PORT || 3333, () => {
    console.log(
        '🔥 HTTP server is running on port 3333 🚀 | Feito com 💜 por Andrelino Silva',
    );
});
