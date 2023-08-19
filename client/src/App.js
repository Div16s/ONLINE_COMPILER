import './App.css';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [code, setCode] = useState('');
  const [input,setInput] = useState('');
  const [output, setOutput] = useState('');
  const [textarea, setTextAreaValue] = useState(output);
  //console.log(code);
  const handleSubmit = async () => {
  
    const payload = {
      language: 'cpp',
      code,
      input
    }

    try {
      const { data } = await axios.post('http://localhost:5000/run', payload);
      setOutput(data.output);
      console.log(data);
    }
    catch (error) {
      console.log("Error response:", error.response);
      console.log("Error message:", error.message);
      console.log("Error stack:", error.stack);
      console.log("ERROR: Can't run the code!");
    }
  }
  return (
    <>
      <div className='editor'>
        <h1 className='heading'>CodeSphere Online Compiler</h1>
        {/* <input type='text'></input> */}
        <select className='selectBox'>
          <option value='c'>C</option>
          <option value='cpp'>C++</option>
          <option value='java'>Java</option>
          <option value='py'>Python</option>
        </select>
        <br></br>
        <div className='row'>
          <div className='col-md'>
            <textarea rows='21' cols='75' className='textarea lineNumber'
              value={code}
              onChange={(e) => { setCode(e.target.value); }}
            >
            </textarea>
          </div>
          <div className='col-md'>
            <div className='row-sm'>
              <h5 className='input-heading'>CUSTOM INPUT</h5>
              <textarea rows='10' cols='35' className='inputArea'
              value={input}
              onChange={(e) => {setInput(e.target.value); }}
              >
                
              </textarea>
            </div>
            <div className='row-sm outputArea'>
              <h5 className='output-heading'>OUTPUT</h5>
              {/* <p className='outputContainer'>{output}</p> */}
              <p className='outputContainer' dangerouslySetInnerHTML={{ __html: output.replace(/\n/g, '<br>') }}></p>
            </div>
          </div>
        </div>
        <br></br>
        <button className='button' onClick={handleSubmit}>Submit</button>
        
      </div>
    </>
  );
}

export default App;
