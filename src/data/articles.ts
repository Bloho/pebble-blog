import article1Thumb from "@/assets/thumbnails/article-1.avif";
import article2Thumb from "@/assets/thumbnails/article-2.png";
import article3Thumb from "@/assets/thumbnails/article-3.png";
import article4Thumb from "@/assets/thumbnails/article-4.png";

// Simplified content block structure for easy article creation
export type ContentBlock = 
  | { type: 'paragraph'; content: string }                              // Regular text paragraph
  | { type: 'heading'; level: 2 | 3; content: string }                  // Section headings (h2 or h3)
  | { type: 'image'; src: string; alt: string; caption?: string }       // Images with optional captions
  | { type: 'quote'; content: string }                                   // Blockquotes
  | { type: 'list'; ordered: boolean; items: string[] };                // Bullet or numbered lists

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
  {
    id: "the-art-of-minimalism",
    title: "Wow look at that whale! This is a sample text!",
    excerpt: "Exploring how less can truly be more in contemporary design practices and everyday life.",
    thumbnail: article1Thumb,
    author: "Sabrina Lee",
    date: "2024-01-15",
    readTime: "5 min read",
    tags: ["Design", "Minimalism", "Lifestyle"],
    badges: [
      {
        text: "12th",
        color: "bg-blue-500"
      },
      {
        text: "Design",
        color: "bg-purple-500"
      }
    ],
    content: [
      { type: 'paragraph', content: "Minimalism isn't just about having less—it's about making room for more of what matters. In design, this philosophy translates into clean lines, purposeful spaces, and intentional choices that enhance rather than distract." },
      { type: 'heading', level: 2, content: 'The Philosophy Behind Minimalism' },
      { type: 'paragraph', content: "At its core, minimalism is about intentionality. Every element serves a purpose, every color choice is deliberate, and every piece of white space is carefully considered. This approach doesn't mean stripping away personality or warmth; rather, it means amplifying the essential while removing the superfluous." },
      { type: 'image', src: article1Thumb, alt: 'Minimalist design concept', caption: 'Clean lines and purposeful spaces define modern minimalism' },
      { type: 'heading', level: 2, content: 'Practical Applications' },
      { type: 'paragraph', content: 'In modern web design, minimalism manifests through:' },
      { type: 'list', ordered: false, items: [
        'Typography: Clear, readable fonts that guide the eye',
        'Color: Restrained palettes that create harmony',
        'Layout: Generous spacing that lets content breathe',
        'Navigation: Intuitive paths that don\'t overwhelm'
      ]},
      { type: 'heading', level: 2, content: 'Finding Balance' },
      { type: 'paragraph', content: "The challenge isn't in removing elements—it's in knowing what to keep. Each component must earn its place through function, beauty, or both. This discernment is what separates sterile emptiness from elegant simplicity." },
      { type: 'quote', content: 'Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away. — Antoine de Saint-Exupéry' },
      { type: 'heading', level: 2, content: 'Moving Forward' },
      { type: 'paragraph', content: 'As we continue to be bombarded with information and options, minimalist design offers a refuge—a clear space where focus and clarity reign. Whether you\'re designing a website, an app, or simply organizing your workspace, the principles remain the same: start with purpose, refine with intention, and always ask, "Is this essential?"' }
    ]
  },
  {
    id: "building-better-habits",
    title: "Building Better Habits for Creative Success",
    excerpt: "Small daily practices that compound into significant creative achievements over time.",
    thumbnail: article2Thumb,
    author: "Marcus Reid",
    date: "2024-01-10",
    readTime: "7 min read",
    tags: ["Productivity", "Creativity", "Personal Growth"],
    badges: [
      {
        text: "Popular",
        color: "bg-green-500"
      }
    ],
    content: [
      { type: 'paragraph', content: "Success isn't built in a day—it's constructed through the accumulation of small, consistent actions. For creatives, establishing the right habits can be the difference between sporadic bursts of productivity and sustained excellence." },
      { type: 'heading', level: 2, content: 'The Science of Habit Formation' },
      { type: 'paragraph', content: 'Understanding how habits form is the first step to building better ones. The habit loop—cue, routine, reward—provides a framework for creating lasting behavioral change. When we align this loop with our creative goals, magic happens.' },
      { type: 'image', src: article2Thumb, alt: 'Creative workspace for building habits', caption: 'A dedicated space helps reinforce positive creative habits' },
      { type: 'heading', level: 2, content: 'Morning Rituals That Work' },
      { type: 'paragraph', content: 'The first hours of the day set the tone for everything that follows. Successful creatives often share common morning practices:' },
      { type: 'list', ordered: true, items: [
        'Early rising: Capturing the quiet hours before the world awakens',
        'Movement: Physical activity to energize body and mind',
        'Creative work first: Tackling the most important work while fresh',
        'Minimal decision-making: Reducing cognitive load through routine'
      ]},
      { type: 'heading', level: 2, content: 'Protecting Creative Time' },
      { type: 'paragraph', content: 'In a world of constant interruptions, protecting creative time requires intentional boundaries. This means setting clear working hours, turning off notifications during deep work, communicating boundaries to others, and creating a dedicated workspace.' },
      { type: 'heading', level: 2, content: 'The Power of Documentation' },
      { type: 'paragraph', content: 'Keeping a creative journal or log serves multiple purposes. It tracks progress, captures fleeting ideas, and provides a record of growth. Over time, these entries become valuable reference points and sources of inspiration.' },
      { type: 'heading', level: 2, content: 'Consistency Over Intensity' },
      { type: 'paragraph', content: "The most powerful habit isn't working yourself to exhaustion—it's showing up consistently. Whether it's writing for 30 minutes daily or sketching before bed, regular practice compounds into remarkable results." },
      { type: 'heading', level: 3, content: 'Start Small' },
      { type: 'paragraph', content: 'Begin with one habit. Master it. Then add another. This patient approach builds confidence and creates sustainable change that lasts.' }
    ]
  },
  {
    id: "power-of-simplicity",
    title: "The Power of Simplicity in Communication",
    excerpt: "Why clear, concise messaging resonates more deeply than complex explanations.",
    thumbnail: article3Thumb,
    author: "Elena Martinez",
    date: "2024-01-05",
    readTime: "4 min read",
    tags: ["Communication", "Writing", "Design"],
    content: [
      { type: 'paragraph', content: "In an age of information overload, simplicity isn't just preferred—it's essential. Whether you're writing copy, designing interfaces, or presenting ideas, the ability to distill complexity into clarity is a superpower." },
      { type: 'heading', level: 2, content: 'Why Simplicity Wins' },
      { type: 'paragraph', content: "Our brains are wired to prefer simplicity. Complex messages require more cognitive effort to process, and in today's fast-paced world, that effort often isn't available. Simple communication:" },
      { type: 'list', ordered: false, items: [
        'Reduces friction: Makes understanding effortless',
        'Increases retention: Memorable messages stick',
        'Builds trust: Clarity signals confidence',
        'Drives action: Clear calls-to-action convert'
      ]},
      { type: 'image', src: article3Thumb, alt: 'Simple communication design', caption: 'Simplicity in design creates clarity in communication' },
      { type: 'heading', level: 2, content: 'The Art of Reduction' },
      { type: 'paragraph', content: "Simplifying isn't about dumbing down—it's about refining. It requires understanding your core message, identifying what's essential, removing everything else, and testing for clarity." },
      { type: 'heading', level: 2, content: 'In Practice' },
      { type: 'paragraph', content: 'Consider these transformations:' },
      { type: 'paragraph', content: 'Before: "Utilize our comprehensive suite of integrated solutions to optimize your workflow efficiency parameters."' },
      { type: 'paragraph', content: 'After: "Work smarter with our simple tools."' },
      { type: 'paragraph', content: "The second version is shorter, clearer, and more impactful. It respects the reader's time and attention." },
      { type: 'heading', level: 2, content: 'Visual Simplicity' },
      { type: 'paragraph', content: "The same principles apply to design. White space isn't empty—it's strategic. It creates hierarchy, improves comprehension, and makes interfaces feel effortless to use." },
      { type: 'heading', level: 2, content: 'The Challenge' },
      { type: 'paragraph', content: 'Simplicity is harder than complexity. It requires discipline, editing, and often multiple iterations. But the payoff—in understanding, engagement, and results—is always worth the effort.' },
      { type: 'paragraph', content: 'Start by asking: What can I remove without losing meaning?' }
    ]
  },
  {
    id: "future-of-remote-work",
    title: "The Future of Remote Work and Digital Creativity",
    excerpt: "How distributed teams are reshaping the creative landscape and what it means for collaboration.",
    thumbnail: article4Thumb,
    author: "David Kim",
    date: "2024-01-01",
    readTime: "6 min read",
    tags: ["Remote Work", "Technology", "Collaboration"],
    content: [
      { type: 'paragraph', content: 'The shift to remote work has fundamentally changed how creative teams operate. What started as a necessity has evolved into a new paradigm—one that offers both unprecedented opportunities and unique challenges.' },
      { type: 'heading', level: 2, content: 'The New Creative Landscape' },
      { type: 'paragraph', content: 'Remote work has democratized access to creative opportunities. Geography no longer dictates career possibilities, and diverse teams can form based on talent rather than location. This shift brings:' },
      { type: 'list', ordered: false, items: [
        'Global talent pools: Access to specialists worldwide',
        'Flexible schedules: Work when you\'re most productive',
        'Reduced overhead: Lower costs for businesses and individuals',
        'Environmental benefits: Fewer commutes, smaller carbon footprints'
      ]},
      { type: 'image', src: article4Thumb, alt: 'Remote work setup', caption: 'The modern remote workspace enables creativity from anywhere' },
      { type: 'heading', level: 2, content: 'Challenges and Solutions' },
      { type: 'heading', level: 3, content: 'Communication Gaps' },
      { type: 'paragraph', content: 'Without in-person interaction, miscommunication can derail projects. Solutions include async-first communication with detailed written updates, regular video check-ins for maintaining human connection, and clear documentation creating single sources of truth.' },
      { type: 'heading', level: 3, content: 'Creative Collaboration' },
      { type: 'paragraph', content: 'Some worry that remote work stifles spontaneous collaboration. The reality is more nuanced. While water-cooler moments are rare, intentional collaboration can be more focused and productive.' },
      { type: 'heading', level: 2, content: 'Tools That Enable' },
      { type: 'paragraph', content: 'The right tools make remote creative work possible: design platforms like Figma and Miro, project management systems that keep everyone aligned, communication tools like Slack and Zoom, and cloud storage for shared files accessible anywhere.' },
      { type: 'heading', level: 2, content: 'The Hybrid Future' },
      { type: 'paragraph', content: "The future isn't fully remote or fully in-office—it's hybrid. Companies are finding that flexible arrangements attract top talent and improve satisfaction. The key is giving teams autonomy to choose what works best." },
      { type: 'heading', level: 2, content: 'Building Culture Remotely' },
      { type: 'paragraph', content: "Strong culture doesn't require physical proximity. It requires shared values and clear mission, regular communication and transparency, virtual social opportunities, and recognition and celebration of wins." },
      { type: 'heading', level: 2, content: 'Embracing the Change' },
      { type: 'paragraph', content: "Remote work isn't a temporary trend—it's a permanent evolution. Creative professionals who embrace this shift, master its tools, and learn to collaborate across distances will thrive in this new landscape." },
      { type: 'paragraph', content: 'The future of work is flexible, global, and full of possibility.' }
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
