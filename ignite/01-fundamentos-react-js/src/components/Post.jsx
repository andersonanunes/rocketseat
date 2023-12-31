import { useState } from 'react';
import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

export function Post({ author, publishedAt, content }) {

    const publishedDateFormatted = format(publishedAt, "dd 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR,
    });

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    })

    const [comments, setComments] = useState([
        'Post teste entendendo useState',
    ]);

    function handleCreateNewComment(e) {
        e.preventDefault();
        setComments([...comments, newCommentText]);
        setNewCommentText('');
    }

    const [newCommentText, setNewCommentText] = useState('');

    function handleNewCommentChange(e) {
        setNewCommentText(e.target.value);
        e.target.setCustomValidity('');
    }

    function handleNewCommentInvalid() {

    }

    function deleteComment(commentToDelete) {
        const commentWithoutDeleteOne = comments.filter(comment => {
            return comment =! commentToDelete;
        })
        setComments(commentWithoutDeleteOne);
    }

    const isNewCommentEmpty = newCommentText.length === 0;

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
                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>Publicado {publishedDateRelativeToNow}</time>
            </header>
            <div className={ styles.content }>
                {content.map(line => {
                    if(line.type === 'paragraph') {
                        return <p key={line.content}>{line.content}</p>;
                    } else if (line.type === 'link') {
                        return <p key={line.content}><a href='#'>{line.content}</a></p>;
                    }
                })}
                <p>
                    <a href='#'>#novoprojeto{' '}</a>
                    <a href='#'>#nlw {' '}</a>
                    <a href='#'>#rocketseat {' '}</a>
                </p>
            </div>
            <form onSubmit={handleCreateNewComment} className={ styles.commentForm }>
                <strong>Deixe seu feedback</strong>
                <textarea 
                    name='txtcomment'
                    value={newCommentText}
                    placeholder='Deixe um comentário'
                    onChange={handleNewCommentChange}
                    required
                    onInvalid={handleNewCommentInvalid}
                />
                <footer>
                    <button type='submit' disabled={isNewCommentEmpty}>
                        Comentar
                    </button>
                </footer>
            </form>
            <div className={ styles.commentList }>
                {comments.map(comment => {
                    return (
                        <Comment 
                            key={comment} 
                            content={comment} 
                            onDeleteComment={deleteComment} 
                        />
                    )
                })}
            </div>
        </article>
    );
}