import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import client from '../../utils/contentfulClient';
import { AnimatedSection, AnimatedDiv } from '../common/AnimatedSection';

const BlogSection = ({ limit = 3 }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await client.getEntries({
          content_type: 'blogPost',
          order: '-fields.publishDate',
          limit: limit,
        });
        setPosts(response.items);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [limit]);

  if (loading) return <div className="text-center py-12">Loading...</div>;

  return (
    <AnimatedSection className="py-20 bg-unix-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedDiv className="text-center mb-12">
          <h2 className="text-3xl font-bold">Latest from Our Blog</h2>
          <p className="text-xl mt-4 max-w-2xl mx-auto">
            Insights, news, and updates from the UnixTron team
          </p>
        </AnimatedDiv>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <AnimatedDiv key={post.sys.id} delay={0.1 * index}>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                {post.fields.featuredImage && (
                  <img
                    src={post.fields.featuredImage.fields.file.url}
                    alt={post.fields.title}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-6">
                  <div className="text-sm text-unix-primary font-semibold mb-2">
                    {new Date(post.fields.publishDate).toLocaleDateString()}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{post.fields.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {post.fields.excerpt}
                  </p>
                  <Link
                    to={`/blog/${post.fields.slug}`}
                    className="text-unix-primary font-medium hover:underline"
                  >
                    Read more →
                  </Link>
                </div>
              </div>
            </AnimatedDiv>
          ))}
        </div>

        {limit && (
          <AnimatedDiv className="text-center mt-12" delay={0.3}>
            <Link
              to="/blog"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-unix-primary hover:bg-blue-700"
            >
              View All Articles
            </Link>
          </AnimatedDiv>
        )}
      </div>
    </AnimatedSection>
  );
};

export default BlogSection;