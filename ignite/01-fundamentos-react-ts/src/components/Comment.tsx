import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';
import { ThumbsUp, Trash } from 'phosphor-react';

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {

    const [likeCount, setLikeCount] = useState(0);

    function handleLikeComment() {
        setLikeCount((state) => {
            return state + 1;
        });
    }

    function handleDeleteComment() {
        console.log('deletado');
        onDeleteComment(content);
    }

    return(
        <div className={ styles.comment }>
            <Avatar hasBorder={false} src='https://github.com/diego3g.png' alt='' />
            <div className={ styles.commentBox }>
                <div className={ styles.commentContent }>
                    <header>
                        <div className={ styles.authorAndTime }>
                            <strong>Anderson Nunes</strong>
                            <time title='23 novembro às 19:15' dateTime='2023-11-23'>Cerca de 1h</time>
                        </div>
                        <button onClick={handleDeleteComment} title='Excluir Comentário'>
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp size={20} />
                        curtir
                        <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}