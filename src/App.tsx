import { GlobalStyle } from "./GlobalStyle.js";
import OptionsAreaContainer from "./components/OptionsArea";
import Aside from "./components/Aside/index.js";
import InputTextArea from "./components/InputTextArea/index.js";

function App() {
  return (
    <>
      <Aside />
      
      <OptionsAreaContainer />
      <InputTextArea />
      <GlobalStyle />
    </>
  );
}

export default App;
