import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatedSection, AnimatedDiv } from '../components/common/AnimatedSection';

const Blog = () => {
  const [posts] = useState([
    {
      id: '1',
      fields: {
        title: 'Getting Started with UnixTron',
        excerpt: 'Learn how to implement our solutions in your business with this comprehensive guide to onboarding and deployment.',
        slug: 'getting-started',
        publishDate: '2023-05-15',
        featuredImage: {
          fields: {
            file: {
              url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80'
            }
          }
        },
        category: 'Onboarding'
      }
    },
    {
      id: '2',
      fields: {
        title: 'Tech Trends 2023',
        excerpt: 'Our expert predictions for the most impactful technologies this year and how they can transform your business operations.',
        slug: 'tech-trends',
        publishDate: '2023-04-10',
        featuredImage: {
          fields: {
            file: {
              url: 'https://images.unsplash.com/photo-1677442135136-760c813cd9d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80'
            }
          }
        },
        category: 'Insights'
      }
    },
    {
      id: '3',
      fields: {
        title: 'Why Choose UnixTron',
        excerpt: 'Discover the unique advantages and differentiators that make our solutions stand out in the competitive tech landscape.',
        slug: 'why-choose',
        publishDate: '2023-03-22',
        featuredImage: {
          fields: {
            file: {
              url: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80'
            }
          }
        },
        category: 'Company'
      }
    }
  ]);

  return (
    <AnimatedSection className="py-10 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
            Insights & Updates
          </span>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest technology trends, company news, and expert insights from our team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <AnimatedDiv 
              key={post.id} 
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative">
                <img
                  src={post.fields.featuredImage.fields.file.url}
                  alt={post.fields.title}
                  className="w-full h-60 object-cover"
                  loading="lazy"
                />
                <div className="absolute top-4 right-4">
                  <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                    {post.fields.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  {new Date(post.fields.publishDate).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  {post.fields.title}
                </h3>
                <p className="text-gray-600 mb-5">{post.fields.excerpt}</p>
                <Link
                  to={`/blog/${post.fields.slug}`}
                  className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
                >
                  Read more
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </AnimatedDiv>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-500 mb-6">
            Want to see more articles? Browse our complete blog archive.
          </p>
          <Link
            to="/blog/archive"
            className="inline-block bg-gray-900 hover:bg-gray-800 text-white font-medium py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all"
          >
            View All Posts
          </Link>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Blog;