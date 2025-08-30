import styles from './App.module.css'
import { useState } from 'react'
import { Assistant } from './assistants/openai'
import { Loader } from './components/Loader/Loader'
import { Chat } from './components/Chat/Chat'
import { Control } from './components/Controls/Control';

function App() {

  const assistant = new Assistant();
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function addMessage(message) {
    setMessages((prevMessages) => [...prevMessages, message]);
  }

  async function handleContentSend(content) {
    addMessage({ content, role: "user" });
    setIsLoading(true);
    try {
      const result = await assistant.chat(content, messages);
      addMessage({ content: result, role: "assistant" });
    } catch (error) {
      addMessage({
        content: "Sorry, I couldn't process your requesst. Please try again!",
        role: "system",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className={styles.App}>
      {/* {isLoading ? <Loader/> : null} */}
      {isLoading && <Loader />}
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
