const app = require('./app');
const db = require('../../db/dbHelpers');

const port = 3005;

db.mongoose.connect('mongodb://localhost/silverspoon');
app.listen(port, () => { console.log(`listening on port: ${port}`); });

