import { useState } from 'react'
import styles from './App.module.css'
import { Chat } from './components/Chat/Chat'
import { Control } from './components/Controls/Control';

function App() {

  const [messages, setMessges] = useState(MESSAGES);

  return (
    <div className={styles.App}>

      <header className={styles.Header}>
        <img src="robot.png" className={styles.Logo} alt="" />
        <h2 className={styles.Title}>AI Chatbot</h2>
      </header>

      <div className={styles.Content}>

        <Chat messages={messages} />

      </div>

      <Control />

    </div>
  )
}

const MESSAGES = [
  {
    role: "user",
    content: "how to console.log on react component",
  },
  {
    role: "assistant",
    content: "Want to go deeper? I can show you how to use custom hooks for logging, or even integrate logging with SweetAlert2 for visual feedback. Just say the word.",
  },
  {
    role: "user",
    content: "how to take all remaining space in css using flex",
  },
  {
    role: "assistant",
    content: "To make an element take up all the remaining space in a flex container, you can use the flex-grow property.",
  },
]

export default App
