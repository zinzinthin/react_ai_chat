import { useState } from 'react'
import styles from './App.module.css'
import { Chat } from './components/Chat/Chat'
import { Control } from './components/Controls/Control';

function App() {

  const [messages, setMessages] = useState([]);

  function handleContentSend(content) {
    setMessages((prevMessages) => [...prevMessages, { role: "user", content }]);
  }

  return (
    <div className={styles.App}>

      <header className={styles.Header}>
        <img src="robot.png" className={styles.Logo} alt="" />
        <h2 className={styles.Title}>AI Chatbot</h2>
      </header>

      <div className={styles.Content}>

        <Chat messages={messages} />

      </div>

      <Control onSend={handleContentSend} />

    </div>
  )
}

export default App
