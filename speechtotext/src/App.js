import React from 'react';
import './App.css';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import useClipboard from "react-use-clipboard";

export default function App(){
  const [textToCopy, setTextToCopy] = React.useState();
  const [isCopied, setCopied] = useClipboard(textToCopy);
  const startListening = () => SpeechRecognition.startListening({ continuous: true, language:"en-IN" });
  const stopListening = () => SpeechRecognition.stopListening();
  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();
  if (!browserSupportsSpeechRecognition) {
    return null
  }
  return(
    <>
      <div className='container'>
        <h2>Speech to Text Converter</h2>
        <br/>
        <p>A React hook that convert speech from the microphone to text and makes it available to your React Component</p>
        <div className='main-content' onClick={()=>setTextToCopy(transcript)}> 
              {transcript}
        </div>
        <div className='btn-style'>
        <button onClick={setCopied}>
       {isCopied ? 'Copied!' : 'Copy To Clipboard'}
        </button>
            <button onClick={startListening}>Start Listening</button>
            <button onClick={stopListening}>Stop Listening</button>
        </div>

      </div>
    </>
  )
}