import styles from "./style.module.css"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark as SyntaxTheme } from 'react-syntax-highlighter/dist/esm/styles/prism';

const defaultCodeString = `def greet(name):
    print(f"Hellso, {name}!")

greet("John")`;

const CodeBox = ({ children = defaultCodeString, language = "python" }) => {

    return (
        <SyntaxHighlighter className={styles.codebox} language={language} style={SyntaxTheme}>
            {children}
        </SyntaxHighlighter>
    );
};


export default CodeBox