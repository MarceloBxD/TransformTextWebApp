import { GlobalStyle } from "./GlobalStyle.js";
import OptionsAreaContainer from "./components/OptionsArea";
import Aside from "./components/Aside/index.js";
import InputTextArea from "./components/InputTextArea/index.js";
import ExitModal from "./components/ExitModal/index.js";
import { useApp } from "./contexts/ContextApi.js";
import MobileHeader from "./components/MobileHeader/index.js";
import { IconImage } from "./assets/images/svgs/index.js";

function App() {
  const { modalIsOpen }: any = useApp();
  return (
    <div>
      <Aside />
      <MobileHeader />
      {!modalIsOpen ? (
        <div className="flex flex-col items-center justify-center h-screen">
          <div className="flex w-10 flex-col items-center justify-center">
            <h1 className="text-3xl font-bold">Text Transform</h1>
            <img src={IconImage} />
          </div>
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
