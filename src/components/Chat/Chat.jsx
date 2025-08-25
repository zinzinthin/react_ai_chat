import styles from './Chat.module.css'

const WELCOME_MESSAGE = {
    role: 'assistant',
    content: 'Hello! How can I assist you?'
}

export function Chat({ messages }) {
    return (
        <div className={styles.Chat}>
            {
                [WELCOME_MESSAGE, ...messages].map(({ role, content }, idx) => (
                    <div key={idx} className={styles.Message} data-role={role}>
                        {content}
                    </div>
                ))
            }
        </div>
    );
}