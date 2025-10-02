import "./App.css";
import ControlledField from "./components/ControlledField";
import CustomHookForm from "./components/CustomHookForm";
import FormData from "./components/FormData";
import ProductManagement from "./components/productManagement/ProductManagement";

import SimpleForm from "./components/SimpleForm";
import UnControlledField from "./components/UnControlledField";

function App() {
  return (
    <>
      <h1>Explore React Core Concepts</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <FormData></FormData> */}
      {/* <ControlledField></ControlledField> */}
      {/* <UnControlledField></UnControlledField> */}
      {/* <CustomHookForm></CustomHookForm> */}
      <ProductManagement></ProductManagement>
    </>
  );
}

export default App;
