// const { generateFile, generateInput } = require("../generateFile");
// const { executeCpp } = require("../executeCPP");
// const fs = require("fs");
// const path = require("path");

// const outputPath = path.join(__dirname, "..", "outputs");

// const runCode = async (req, res) => {
//   const { language = "cpp", code ,input} = req.body;

//   if (code === undefined) {
//     return res.status(400).json({ success: false, error: "empty code body" });
//   }

//   try {
//     const inputfile = await generateInput(input);
//     const filepath = await generateFile(language, code);
//     const output = await executeCpp(filepath);
//     fs.emptyDirSync(outputPath);
//     console.log(output);
//     return res.json({ filepath, output, inputfile});
//   } catch (err) {
//       res.status(500).json({ err:"ERROR" });
//   }
// };

// module.exports = {
//   runCode,
// };