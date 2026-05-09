import article1Thumb from "@/assets/thumbnails/article-1.png";
import article2Thumb from "@/assets/thumbnails/article-2.png";
import article3Thumb from "@/assets/thumbnails/article-3.png";
import article4Thumb from "@/assets/thumbnails/article-4.png";

// Simplified content block structure for easy article creation
export type ContentBlock = 
  | { type: 'paragraph'; content: string }                              // Regular text paragraph
  | { type: 'heading'; level: 2 | 3; content: string }                  // Section headings (h2 or h3)
  | { type: 'image'; src: string; alt: string; caption?: string }       // Images with optional captions
  | { type: 'quote'; content: string }                                   // Blockquotes
  | { type: 'list'; ordered: boolean; items: string[] }                 // Bullet or numbered lists
  | { type: 'code'; language: string; content: string }                 // Code blocks with syntax highlighting
  | { type: 'video'; url: string; caption?: string };                   // YouTube/Vimeo video embeds

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: ContentBlock[];
  thumbnail: string;
  author: string;
  date: string;
  readTime: string;
  tags: string[];
  fontFamily?: 'sans' | 'serif' | 'custom-bold' | 'custom-medium' | 'custom-air';
  badges?: {
    text: string;
    color: string;
  }[];
}

export const articles: Article[] = [
  
// Add this to your articles.ts file:

{
  "id": "getting-started",
  "title": "Getting Started",
  "excerpt": "This article is about how upload your article to Excelsior.",
  "thumbnail": "https://pbs.twimg.com/media/G58cmSCbAAAztru?format=jpg&name=large",
  "author": "Ayush Samanta",
  "date": "2025-11-17",
  "readTime": "23 min read",
  "tags": [ "President of SHIELD","Info"],
  "content": [
    {
      "type": "paragraph",
      "content": "This is the first time our school is dealing with infrastructure at this scale, so I have kept it very simple, and includes a few extra steps ( no code, don’t worry)."
    },
    {
      "type": "heading",
      "level": 2,
      "content": "FIRST WAY: Not recommended"
    },
    {
      "type": "paragraph",
      "content": "This is the most time taking process (upto a week) to upload your blog, if you want a faster way, just skip to the SECOND WAY. This is the step where you can just mail your work in the form of pdf to [shield@dpspr.edu.in](mailto:shield@dpspr.edu.in), which will of course take some time (Maybe a week) as your pdf needs to be converted into the format of our blog. Incase you have images in your article (Highly reccomended), you have to “link” the image in your pdf. So basically instead of just uploading he image in your pdf, you upload the link of the image, and make sure the link of the image is hosted in a reliable source. Such as Wikipedia, Freepik, Pixabay, Pexels, Unsplash, X, Freeimages, Shutterstock, etc. This process is not recommended at all, but we accept it."
    },
    {
      "type": "image",
      "src": "https://pbs.twimg.com/media/G58KYHhaoAAP5bQ?format=jpg&name=medium",
      "alt": "",
      "caption": "We just need the link! Not the image itself."
    },
    {
      "type": "heading",
      "level": 2,
      "content": "SECOND WAY: Recommended"
    },
    {
      "type": "paragraph",
      "content": "If you want your article to be uploaded very fast (est. 24 hours) you can just follow the steps below. This will probably take 10 minutes of your time! I’ll always reccommend you using this as this will provide the flexibility and freedom to customise your tags (explained later), format, and you can even preview the blog before publishing!"
    },
    {
      "type": "heading",
      "level": 3,
      "content": "Step 0: Get your article ready "
    },
    {
      "type": "paragraph",
      "content": "I recommend you to get your article ready before we start the submission process. You can use any application to do this step, with some guidelines I’ll mention under this section. You can use Google Docs, Microsoft Word, Notion, etc."
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        "Make sure your article is well structured (Well defined Title, Headings, Paragraphs)",
        "If your article includes images, make sure you have the LINK to the image, not the image itself. We are not supporting the ability to upload images directly to the blog as it needs more manual work to lossless compress the images, otherwise it will affect the latency of the website. I’ll give you a quick example in this article later."
      ]
    },
    {
      "type": "heading",
      "level": 2,
      "content": "Step 1: Uploading text"
    },
    {
      "type": "paragraph",
      "content": "First of all we will be using this custom uploading web app to handle the uploading process. URL for this website is “article-drop.vercel.app”"
    },
    {
      "type": "paragraph",
      "content": "Carefully, enter all your details first before heading towards “Content Blocks”."
    },
    {
      "type": "image",
      "src": "https://pbs.twimg.com/media/G58QLWzbUAAuhPN?format=jpg&name=medium",
      "alt": "",
      "caption": "Dashboard"
    },
    {
      "type": "heading",
      "level": 3,
      "content": "Tags:"
    },
    {
      "type": "paragraph",
      "content": "Tags are badges assigned to each articles. It is visible in the homepage, as well as the individual article pages. "
    },
    {
      "type": "paragraph",
      "content": "In case of me, \"President of SHIELD\" and \"Info\" are my tags. “Info” here is basically the category of the article. You are allowed to tag yourself to a maximum of 3 (Your class, category and council if you are part of one)"
    },
    {
      "type": "heading",
      "level": 3,
      "content": "Content blocks:"
    },
    {
      "type": "paragraph",
      "content": "To keep things smooth and easy, you are going to upload your article using blocks. It’s really simple. You simple start by pressing “+” on the top-right side of the content block box. You will see something like this:"
    },
    {
      "type": "image",
      "src": "https://pbs.twimg.com/media/G58RehhbMAAcRK-?format=jpg&name=medium",
      "alt": "",
      "caption": "When you click (+) you will see these options"
    },
    {
      "type": "paragraph",
      "content": "Now click “Heading” to add your heading to your paragraph, and write your content inside it. If you have multiple paragraphs, with multiple headings, then simply use as much headings and texts you like. We also have the feature to add Quotes, Images, Youtube /Vimeo imbeds, etc. Make sure you preview everything before exporting."
    },
    {
      "type": "heading",
      "level": 2,
      "content": "Now, how to add images"
    },
    {
      "type": "paragraph",
      "content": "When you press “+”, you can see the option to add images too. So click that."
    },
    {
      "type": "image",
      "src": "https://pbs.twimg.com/media/G58RehhbMAAcRK-?format=jpg&name=medium",
      "alt": "",
      "caption": "Click Image to add image source"
    },
    {
      "type": "image",
      "src": "https://pbs.twimg.com/media/G58SvBsaYAE3qnA?format=jpg&name=medium",
      "alt": "",
      "caption": "You will see 3 boxes, which you need to fill up."
    },
    {
      "type": "paragraph",
      "content": "Let’s say I want to use this image of these gold crystals in my article, from Wikipedia."
    },
    {
      "type": "image",
      "src": "https://pbs.twimg.com/media/G58TE64aUAEqfXF?format=jpg&name=large",
      "alt": "",
      "caption": "Screenshot of wikipedia image preview"
    },
    {
      "type": "paragraph",
      "content": "I will just right click to open the context menu, and click “Copy image address” or you can “Open Image in new tab” and take the url from there aswell."
    },
    {
      "type": "image",
      "src": "https://pbs.twimg.com/media/G58TE7eaQAAYGEP?format=png&name=medium",
      "alt": "",
      "caption": ""
    },
    {
      "type": "paragraph",
      "content": "I will paste the url of the image in the first box, the second box is for your “best description” of your image. Keep in mind, what you write in the Alt text is not visible in the article, but is used to show your image in search results, with matching keywords. Moving onto the third box, this is the caption of the image, which will be visible in your article. You have to credit the owner/author of the image here as well."
    },
    {
      "type": "image",
      "src": "https://pbs.twimg.com/media/G58emrcbUAEfKvZ?format=png&name=medium",
      "alt": "",
      "caption": "Filling up the source of the image"
    },
    {
      "type": "paragraph",
      "content": "Now make sure the image you are using lets you attribute the author of the image. You can see the author/owner of the image in the down-left side of the image in wikipedia preview page. If the image is in \"Public domain\", you don't need to credit anyone."
    },
    {
      "type": "image",
      "src": "https://pbs.twimg.com/media/G58TE7CbUAAl9lg?format=jpg&name=large",
      "alt": "",
      "caption": "The highlighted part is the author of the image."
    },
    {
      "type": "paragraph",
      "content": "You can go to Preview to preview your changes."
    },
    {
      "type": "image",
      "src": "https://pbs.twimg.com/media/G58VP_ga0AA5cHY?format=jpg&name=medium",
      "alt": "",
      "caption": "Go to \"Preview\" on the top of the website to preview your changes"
    },
    {
      "type": "paragraph",
      "content": "Now if you are using your own image, you need to have it online first. You can do this easily by uploading it to any social media website. I recommend you use X.com (Ex- Twitter) or you can use GitHub as well if you are familiar with it. Make sure if you use any other websites, you don’t delete the images from your own account, as it will not show in the article after its published in our article."
    },
    {
      "type": "heading",
      "level": 3,
      "content": "EXPORTING: The second final step"
    },
    {
      "type": "paragraph",
      "content": "When you finish checking everything in the preview section, you click the export button on top. An article.txt file will automatically start downloading. Beware of the fact, that if you refresh the webpage without exporting your article, you will lose your progress. After exporting, you will get a notification. Your file should start downloading automatically. If not, the code gets copied to your clipboard too, so you can just go to any text editor, save the texts and export it."
    },
    {
      "type": "heading",
      "level": 2,
      "content": "Sending the your article to us: The last step!"
    },
    {
      "type": "paragraph",
      "content": "Now take that text file and send it to shield@dpspr.edu.in, with your name, class, section, roll no and topic. "
    },
    {
      "type": "image",
      "src": "https://pbs.twimg.com/media/G58fkiHaQAAhMSZ?format=jpg&name=large",
      "alt": "",
      "caption": "Mailing it to shield@dpspr.edu.in"
    },
    {
      "type": "paragraph",
      "content": "And congrats! We have your article! You will see your article up on the blog in very little time, not more than 48 hours. If you don’t see the article uploaded even after 48 hours, reach us to at shield@dpspr.edu.in or contact your class teacher to relay it to the faculty of computer science."
    },
    {
      "type": "paragraph",
      "content": "If any updates are required, you will be contacted to the same email, so make sure you regularly check your inboxes during the 48 hour period or unless your article is visible in the website."
    },
    {
      "type": "heading",
      "level": 2,
      "content": "Concluding"
    },
    {
      "type": "paragraph",
      "content": "You’re now fully equipped to take your ideas from draft to publication and make your mark on this platform. This is not just another student blog. It is a space built end to end for you, by someone who genuinely believes students deserve a professional grade outlet. I designed the entire ecosystem: the website, the UI/UX, the backend infrastructure, the workflows, all with one objective. I want your work to have the stage it deserves.\n"
    },
    {
      "type": "paragraph",
      "content": "So don’t hold back. Upload your article, push your thinking, and showcase the kind of insight that sets you apart. The platform is ready. Now it is your move. All the best!"
    }
  ]
}
  
];

export function getArticleById(id: string): Article | undefined {
  return articles.find(article => article.id === id);
}

export function getRecentArticles(limit: number = 3): Article[] {
  return articles
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
}
