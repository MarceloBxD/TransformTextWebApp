import { GlobalStyle } from "./GlobalStyle.js";
import OptionsAreaContainer from "./components/OptionsArea";
import Aside from "./components/Aside/index.js";
import InputTextArea from "./components/InputTextArea/index.js";
import ExitModal from "./components/ExitModal/index.js";
import { useApp } from "./contexts/ContextApi.js";
import MobileHeader from "./components/MobileHeader/index.js";

function App() {
  const { modalIsOpen }: any = useApp();
  return (
    <div>
      <Aside />
      <MobileHeader />
      {!modalIsOpen ? (
        <div className="flex flex-col justify-center h-screen">
          <OptionsAreaContainer />
          <InputTextArea />
          <GlobalStyle />
        </div>
      ) : (
        <ExitModal />
      )}
    </div>
  );
}

export default App;
