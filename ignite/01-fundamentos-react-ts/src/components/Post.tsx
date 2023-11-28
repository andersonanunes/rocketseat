import { useState, FormEvent, ChangeEvent, InvalidEvent } from 'react';
import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

interface Author {
    name: string;
    role: string;
    avatarUrl: string;
}

interface Content {
    type: 'paragraph' | 'link';
    content: string;
}

export interface PostType {
    id: number;
    author: Author;
    publishedAt: Date;
    content: Content[];
}

interface PostProps {
    post: PostType
}

export function Post({ post }:PostProps) {

    const publishedDateFormatted = format(post.publishedAt, "dd 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR,
    });

    const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
        locale: ptBR,
        addSuffix: true,
    })

    const [comments, setComments] = useState([
        'Post teste entendendo useState',
    ]);

    function handleCreateNewComment(e:FormEvent) {
        e.preventDefault();
        setComments([...comments, newCommentText]);
        setNewCommentText('');
    }

    const [newCommentText, setNewCommentText] = useState('');

    function handleNewCommentChange(e:ChangeEvent<HTMLTextAreaElement>) {
        e.target.setCustomValidity('');
        setNewCommentText(e.target.value);
    }

    function handleNewCommentInvalid(e:InvalidEvent<HTMLTextAreaElement>) {
        e.target.setCustomValidity('Esse campo é obrigatório!');
    }

    function deleteComment(commentToDelete: string) {
        const commentWithoutDeleteOne = comments.filter(comment => {
            return comment != commentToDelete;
        })
        setComments(commentWithoutDeleteOne);
    }

    const isNewCommentEmpty = newCommentText.length === 0;

    return(
        <article className={ styles.post }>
            <header>
                <div className={ styles.author }>
                    <Avatar src={post.author.avatarUrl} />
                    <div className={ styles.authorInfo }>
                        <strong>{post.author.name}</strong>
                        <span>{post.author.role}</span>
                    </div>
                </div>
                <time title={publishedDateFormatted} dateTime={post.publishedAt.toISOString()}>Publicado {publishedDateRelativeToNow}</time>
            </header>
            <div className={ styles.content }>
                {post.content.map(line => {
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