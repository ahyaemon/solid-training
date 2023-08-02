import type { Component } from 'solid-js';

import styles from './App.module.css';
import TransitionTest from "./components/TransitionTest";
import TransitionTest2 from "./components/TransitionTest2";
import TransitionTest3 from "./components/TransitionTest3";
import TransitionTest4 from "./components/TransitionTest4";

const App: Component = () => {

  return (
    <div class={styles.app}>
      <TransitionTest/>
      <hr/>
      <TransitionTest2/>
      <hr/>
      <TransitionTest3/>
      <hr/>
      <TransitionTest4/>
    </div>
  );
};

export default App;
