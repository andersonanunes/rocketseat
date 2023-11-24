import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post({ author, publishedAt, content }) {
    return(
        <article className={ styles.post }>
            <header>
                <div className={ styles.author }>
                    <Avatar src={author.avatarUrl} />
                    <div className={ styles.authorInfo }>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title='23 novembro às 19:15' dateTime='2023-11-23'>Publicado há 1h</time>
            </header>
            <div className={ styles.content }>
                <p>Fala galeraa 👋</p>
                <p><a href=''>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</a></p>
                <p>👉{' '} jane.design/doctorcare</p>
                <p>
                    <a href='#'>#novoprojeto{' '}</a>
                    <a href='#'>#nlw {' '}</a>
                    <a href='#'>#rocketseat {' '}</a>
                </p>
            </div>
            <form className={ styles.commentForm }>
                <strong>Deixe seu feedback</strong>
                <textarea placeholder='Deixe um comentário'></textarea>
                <footer>
                    <button type='submit'>Comentar</button>
                </footer>
            </form>
            <div className={ styles.commentList }>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    );
}