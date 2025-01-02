"use client";
import { contentBlog } from '@/component/programacao/DadosPost'
import PostList from '@/component/programacao/PostList';

export default function Post({ params }: { params: { id: string }}) {
    const post = contentBlog.find((element) => element.id == params.id);

    return (
        <div style={{backgroundColor: 'white'}}>
            {post && <PostList key={post.id} id={post.id} title={post.title} description={post.description} link={post.link} post={post.post} />}
        </div>
    )
}
