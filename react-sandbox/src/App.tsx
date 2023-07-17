import { Counter, Layout } from "./components";

function App() {
  return (
    <Layout>
      <Counter>{(count) => <>Current count1 state is: {count}</>}</Counter>
      <Counter>{(count) => <>Current count2 state is: {count}</>}</Counter>
      <Counter />
    </Layout>
  );
}

export default App;
