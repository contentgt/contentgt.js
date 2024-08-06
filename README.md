# ContentGT API Client

A Node.js client for the [ContentGT API](https://contentgt.com/article-generation-api) Article Generation.

## Installation

```sh
npm install contentgt.js
```

## Usage

Using a single Article topic:

```javascript
import { ContentGT } from 'contentgt.js';

const client = new ContentGT('YOUR_API_KEY');

client.createArticle({
  article_topic: 'The Benefits of a Balanced Diet',
}).then(result => {
  const article = result;

  console.log(article.generated_content)
  console.log(article.meta_description)
}).catch(error => console.error(error));
```

Using an advanced fields:

```javascript
import { ContentGT } from 'contentgt.js';

const client = new ContentGT('YOUR_API_KEY');

client.createArticle({
  article_topic: 'How To Work with Files In JavaScript',
  text_structure: 'Include h1, h2 tags, lists, code examples',
  volume_selected: 'long',
  language: 'English',
  include_images: true
}).then(result => {
  const article = result;

  console.log(article.generated_content)
  console.log(article.meta_description)
}).catch(error => console.error(error));
```

## API

### `new ContentGT(apiKey)`

Creates a new instance of the ContentGT API client.

- `apiKey`: Your ContentGT API key.

### `client.createArticle(options)`

Creates a new article using the ContentGT API.

- Available params:
  - `article_topic` (required): The topic of the article.
  - `text_structure`: Structure of the text, e.g., "Include h1, h2 tags, lists, code examples".
  - `volume_selected`: Volume of the content, "short", "medium", or "long".
  - `language`: Language of the article, e.g., "English", "Spanish".
  - `include_images`: Whether to include images in the article (boolean).

Returns a Promise that resolves with the API response.

## License

MIT