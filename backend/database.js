const mongoose = require('mongoose');
const connection = "mongodb+srv://vanzyl.marne007@gmail.com:<Awesomebees>@<popiact-data.63sbu.mongodb.net>/<PopiAct-Solution>?retryWrites=true&w=majority";
//mongo "mongodb+srv://popiact-data.63sbu.mongodb.net/<dbname>" --username marnevanzyl
mongoose.connect(connection,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));