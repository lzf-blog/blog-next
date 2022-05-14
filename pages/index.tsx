import type { GetStaticProps, NextPage } from 'next'
import type { BlogPost } from '../src/types/BlogPost'
import getBlogPosts from '../server/blog/getBlogPosts.js'
import BlogpostsSection from '../src/components/BlogpostsSection'
import My from '../src/components/My'

type Props = {
  posts: BlogPost[]
}

const Home: NextPage<Props> = ({ posts }) => {
  return (
    <>
      <My />
      <BlogpostsSection posts={posts} />
    </>
  )
}
export const getStaticProps: GetStaticProps<Props> = async () => {
  const posts = (await getBlogPosts({ size: 5 })) as BlogPost[]
  return {
    props: { posts },
    revalidate: 60 // unit second
  }
}
export default Home
