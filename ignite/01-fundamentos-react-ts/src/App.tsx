import styles from './App.module.css';
import './global.css';

import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post, PostType } from "./components/Post"

// author: { avatarUrl: "", name: "", role: "" }
// publishedAt: Date
// content: String
// aqui simula o recebimento dos dados vindos do backend
const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/andersonanunes.png',
      name: 'Anderson Nunes',
      role: 'QA Software Engineer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date ('2023-11-23 19:15:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/leandroanunes.png',
      name: 'Leandro Nunes',
      role: 'Digital Designer'
    },
    publishedAt: new Date ('2023-11-24 09:21:00'),
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
  },
];

export function App() {

  return (
    <div>
      <Header />
      <div className={ styles.wrapper }>
        <Sidebar />
        <main>
          { posts.map(post => {
            return(
              <Post
                key={post.id}
                post={post}
              />
            )
          }) }
        </main>
      </div>
    </div>
  );
}
