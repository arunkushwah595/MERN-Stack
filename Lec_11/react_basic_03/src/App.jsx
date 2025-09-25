import Counter from "./components/Counter";
import Mongambo from "./components/Mongambo";
import Person from "./components/Person";


function App() {
  return (
    <div>
      <h1>App</h1>
      <Person name="Ayush Chaudhary" age={21} favColor="blue" />
      <Person name="Arun Kushwah" age={20} favColor="Black" />
      {/* {Person()} */}
      <Mongambo naam="Arun" />
      <Counter />
    </div>
  )
}

export default App;