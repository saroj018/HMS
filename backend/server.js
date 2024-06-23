import { app } from './app.js';
import { connectDB } from './database/connectDB.js'


connectDB().then(() => {
    app.listen(4000, () => {
        console.log('server and db started successfully');
    })

})
    .catch((err) => {
        console.log('server error', err.message);
        process.exit()
    })