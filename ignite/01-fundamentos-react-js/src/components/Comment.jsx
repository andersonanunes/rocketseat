import styles from './Comment.module.css';
import { ThumbsUp, Trash } from 'phosphor-react';

export function Comment() {
    return(
        <div className={ styles.comment }>
            <img className={ styles.avatar } src='https://github.com/andersonanunes.png' />
            <div className={ styles.commentBox }>
                <div className={ styles.commentContent }>
                    <header>
                        <div className={ styles.authorAndTime }>
                            <strong>Anderson Nunes</strong>
                            <time title='23 novembro às 19:15' dateTime='2023-11-23'>Cerca de 1h</time>
                        </div>
                        <button title='Excluir Comentário'>
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>Muito bom Devon, parabéns!! 👏👏</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp size={20} />
                        curtir
                        <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}