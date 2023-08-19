const express = require('express');
const { generateFile, generateInput } = require('./generateFile');
const { executeCpp } = require('./executeCPP');
const cors  = require('cors');

const app = express();

//middleWares
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.send("WORKING FINE!");
})

app.post('/run', async (req, res) => {
    try {
        const { language = 'cpp', code, input } = req.body;
        if (code === undefined) {
            return res.status(404).json({ success: "false", error: "Empty code body!" });
        }
        const inputfile = await generateInput(input);
        const filePath = await generateFile(language, code);
        const output = await executeCpp(filePath);
        res.json({ filePath, output, inputfile });
        console.log(output);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: "Internal Server Error" });
    }
})

app.listen(5000, () => {
    console.log("Server started on port 5000!");
})

// const express = require('express');
// const {router} = require('./routes/route');
// const cors  = require('cors');

// const app = express();

// //middleWares
// app.use(cors());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// app.use('/',router);

// app.listen(5000, () => {
//     console.log("Server started on port 8000!");
// })