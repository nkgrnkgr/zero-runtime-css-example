import { title } from "./app.css";
import { Message } from "./Message";

const App = () => {
  return (
    <div className={title}>
      Hello
      <Message />
    </div>
  );
};

export default App;
