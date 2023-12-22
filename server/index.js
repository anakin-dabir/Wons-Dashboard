import app from './app.js';
import connectDb from './config/db.js';
import authRouter from './routes/authRouter.js';
const {MONGO_URL, PORT} = process.env;

app.get('/', (req, res) => res.json({message: 'F u'}));

app.use('/auth', authRouter);

connectDb(MONGO_URL);
app.listen(PORT, () => {
  console.log(`Server started on port http://localhost:${PORT}`);
});
