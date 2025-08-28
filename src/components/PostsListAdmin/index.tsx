import { findAllPostsAdmin } from '@/lib/post/queries/admin';
import clsx from 'clsx';
import Link from 'next/link';
import { DeletePostBtn } from '../admin/DeletePostBtn';

export default async function PostsListAdmin() {
  const posts = await findAllPostsAdmin();

  return (
    <div className='flex flex-col gap-4'>
      {posts.map(post => {
        return (
          <div
            key={post.id}
            className={clsx(
              'p-2',
              !post.published && 'bg-slate-300',
              'flex gap-2 items-center justify-between',
            )}
          >
            <Link href={`/admin/post/${post.id}`}>{post.title}</Link>

            {!post.published && (
              <span className='text-xs text-slate-600 italic'>
                (Não publicado)
              </span>
            )}

            <DeletePostBtn id={post.id} title={post.title} />
          </div>
        );
      })}
    </div>
  );
}
