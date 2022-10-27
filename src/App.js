import "./App.css";
import New from "./components/New";

function App() {
  const blasty = (something) => {
    const data = {
      ...something,
    };
    console.log(data);
  };

  return (
    <>
      <div>HERE BOI</div>
      <New GetBlasted={blasty} />
    </>
  );
}

export default App;
