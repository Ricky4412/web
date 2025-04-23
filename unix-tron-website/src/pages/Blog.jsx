import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatedSection, AnimatedDiv } from '../components/common/AnimatedSection';

const Blog = () => {
  const [posts] = useState([
    {
      id: '1',
      fields: {
        title: 'Getting Started with Unixtron',
        excerpt: 'Learn how to implement our solutions in your business with this comprehensive guide to onboarding and deployment.',
        slug: 'getting-started',
        publishDate: '2023-05-15',
        featuredImage: {
          fields: {
            file: {
              url: 'https://plus.unsplash.com/premium_photo-1663050633633-2856e875dcc7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
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
              url: 'https://plus.unsplash.com/premium_photo-1661727547850-3d7c020a64a8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            }
          }
        },
        category: 'Insights'
      }
    },
    {
      id: '3',
      fields: {
        title: 'Why Choose Unixtron',
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
    <AnimatedSection className="py-16 bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <AnimatedDiv delay={0.1}>
            <span className="inline-block px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm font-semibold tracking-wide mb-4 backdrop-blur-sm">
              INSIGHTS & UPDATES
            </span>
          </AnimatedDiv>
          <AnimatedDiv delay={0.2}>
            <h2 className="text-4xl font-bold text-white mb-6 mt-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-300">
                UnixTron Blog
              </span>
            </h2>
          </AnimatedDiv>
          <AnimatedDiv delay={0.3}>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6 rounded-full opacity-80"></div>
          </AnimatedDiv>
          <AnimatedDiv delay={0.4}>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Stay updated with the latest technology trends, company news, and expert insights from our team.
            </p>
          </AnimatedDiv>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <AnimatedDiv 
              key={post.id} 
              delay={0.2 + index * 0.1}
              className="group bg-white/5 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-white/10 backdrop-blur-sm hover:border-white/20"
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.fields.featuredImage.fields.file.url}
                  alt={post.fields.title}
                  className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4">
                  <span className="inline-block px-3 py-1 bg-blue-600/90 text-white text-xs font-semibold rounded-full backdrop-blur-sm">
                    {post.fields.category}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <div className="flex items-center text-sm text-blue-200 mb-2">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    {new Date(post.fields.publishDate).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                    {post.fields.title}
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-300 mb-5">{post.fields.excerpt}</p>
                <Link
                  to={`/blog/${post.fields.slug}`}
                  className="inline-flex items-center text-blue-400 font-medium hover:text-blue-300 transition-colors group-hover:translate-x-1 duration-200"
                >
                  Read more
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </AnimatedDiv>
          ))}
        </div>

        <AnimatedDiv delay={0.5} className="mt-20 text-center">
          <p className="text-gray-400 mb-6">
            Want to see more articles? Browse our complete blog archive.
          </p>
          <Link
            to="/blog/archive"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-medium py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            View All Posts
          </Link>
        </AnimatedDiv>
      </div>
    </AnimatedSection>
  );
};

export default Blog;