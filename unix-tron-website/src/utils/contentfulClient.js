import { createClient } from 'contentful';

const contentfulConfig = {
  space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
  environment: process.env.REACT_APP_CONTENTFUL_ENVIRONMENT || 'master'
};

// Verify required parameters are present
if (!contentfulConfig.space || !contentfulConfig.accessToken) {
  throw new Error(
    'Contentful spaceId and accessToken need to be provided in your .env file'
  );
}

const client = createClient(contentfulConfig);

export default client;