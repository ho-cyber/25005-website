import{ marked } from 'marked';

export const parseBlogs = (markdownText) => {
  // Split by lines starting with # to separate posts
  const rawBlogs = markdownText.split(/\n(?=#)/);
  
  return rawBlogs.map((blogContent, index) => {
    const lines = blogContent.split("\n");
    const title = lines[0].replace(/^#+\s*/, ''); // Remove markdown headers from title
    const content = marked(lines.slice(1).join("\n").trim(), {
      breaks: true,
      gfm: true,
      headerIds: false,
      baseUrl: '/public/data/', // Set base URL for relative image paths
      renderer: new marked.Renderer({
        image(href, title, text) {
          return `<img src="${href}" alt="${text}" class="my-4 mx-auto max-w-full" />`;
        }
      })
    });

    return {
      id: `blog-${index + 1}`,
      title,
      content
    };
  }).filter(blog => blog.title && blog.content); // Filter out empty posts
};
