import https from 'https';

export class ContentGT {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseURL = 'contentgt.com';
  }

  createArticle(options) {
    return new Promise((resolve, reject) => {
      const { 
        article_topic, 
        text_structure, 
        volume_selected, 
        language, 
        include_images 
      } = options;

      if (!article_topic) {
        reject(new Error('article_topic is required'));
        return;
      }

      const data = JSON.stringify({
        article_topic,
        text_structure,
        volume_selected,
        language,
        include_images
      });

      const requestOptions = {
        hostname: this.baseURL,
        port: 443,
        path: '/api/v1/articles',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Length': data.length
        }
      }; 

      const req = https.request(requestOptions, (res) => {
        let responseBody = '';

        res.on('data', (chunk) => {
          responseBody += chunk;
        });

        res.on('end', () => {
          try {
            const parsedData = JSON.parse(responseBody);
            resolve(parsedData);
          } catch (error) {
            reject(new Error('Failed to parse response'));
          }
        });
      });

      req.on('error', (error) => {
        reject(error);
      });

      req.write(data);
      req.end();
    });
  }
}

export default ContentGT;