***basic query***

```
{
  allFile {
    totalCount
    nodes {
      size
      birthTime
      absolutePath
    }
  }
}
```

***query with arguments***

```
{
  allFile(limit:2) {
    totalCount
    nodes {
      size
      birthTime
      absolutePath
    }
  }
}

{
  allFile(sort:{fields: size, order: DESC}) {
    totalCount
    nodes {
      size
      birthTime
      absolutePath
    }
  }
}
```

***single file***

```
{
  file(relativePath: {eq: "desert.jpg"}) {
    size
    relativePath
  }
}
```

***Trigger Netlify rebuild from Headless CMS***

Netlify --> Site --> Deploy Settings --> Continuous Deployment --> Build Hooks

- Name it
- Save it
- Copy the api.netlify.com URL

Contentful --> Space --> Settings --> Webhooks --> Add Webhook

- Name it
- Paste URL
- Save it
- Creates a POST request to Netlify