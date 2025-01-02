
import { conteudoBlogEngenharia } from '@/component/engenharia/DadosPostEngenharia';
import PostList from '@/component/programacao/PostList';

export default function Post({ params }: { params: { id: string }}) {
    const post = conteudoBlogEngenharia.find((element) => element.id == params.id);

    return (
        <div>
            {post && <PostList key={post.id} id={post.id} title={post.title} description={post.description} link={post.link} post={post.post} />}
        </div>
    )
}
