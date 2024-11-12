import i18next from "i18next";
import AppRouter from "./router/AppRouter";
import { I18nextProvider } from "react-i18next";


function App() {
  return (
<I18nextProvider i18n={i18next}>
<AppRouter />
</I18nextProvider>
  );
}

export default App;
