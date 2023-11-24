import styles from './App.module.css';
import './global.css';

import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/header";
import { Post } from "./components/Post"

export function App() {

  return (
    <div>
      <Header />
      <div className={ styles.wrapper }>
        <Sidebar />
        <Post />
        <main>
          <Post 
            author="Anderson Nunes" 
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem expedita a reiciendis sed culpa perspiciatis, optio omnis dolor quia eos neque, recusandae cum, qui praesentium assumenda atque quas dolorem pariatur? " />
        </main>
      </div>
    </div>
  );
}
