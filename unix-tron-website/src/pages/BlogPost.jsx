const BlogPost = () => {
    // In a real app, you would get the post data based on the slug
    const post = {
      fields: {
        title: 'Getting Started with UnixTron',
        content: 'This is where your blog post content would appear...',
        publishDate: '2023-05-15',
        author: {
          fields: {
            name: 'John Doe'
          }
        },
        featuredImage: {
          fields: {
            file: {
              url: 'https://via.placeholder.com/800x400'
            }
          }
        }
      }
    };
  
    return (
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="prose lg:prose-xl mx-auto">
            <header className="mb-12">
              <h1 className="text-4xl font-bold mb-4">{post.fields.title}</h1>
              <div className="flex items-center space-x-4 text-gray-600">
                <span>
                  Published on{' '}
                  {new Date(post.fields.publishDate).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </span>
                {post.fields.author && (
                  <span>by {post.fields.author.fields.name}</span>
                )}
              </div>
            </header>
  
            <img
              src={post.fields.featuredImage.fields.file.url}
              alt={post.fields.title}
              className="w-full rounded-lg mb-8"
            />
  
            <div className="rich-text-content">
              {post.fields.content}
            </div>
          </article>
        </div>
      </div>
    );
  };
  
  export default BlogPost;