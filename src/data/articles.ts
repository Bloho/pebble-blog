import article1Thumb from "@/assets/thumbnails/article-1.png";
import article2Thumb from "@/assets/thumbnails/article-2.png";
import article3Thumb from "@/assets/thumbnails/article-3.png";
import article4Thumb from "@/assets/thumbnails/article-4.png";

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  thumbnail: string;
  author: string;
  date: string;
  readTime: string;
  tags: string[];
  fontFamily?: 'sans' | 'serif' | 'custom-bold' | 'custom-medium' | 'custom-air';
}

export const articles: Article[] = [
  {
    id: "the-art-of-minimalism",
    title: "The Art of Minimalism in Modern Design",
    excerpt: "Exploring how less can truly be more in contemporary design practices and everyday life.",
    thumbnail: article1Thumb,
    author: "Sarah Chen",
    date: "2024-01-15",
    readTime: "5 min read",
    tags: ["Design", "Minimalism", "Lifestyle"],
    content: `
Minimalism isn't just about having less—it's about making room for more of what matters. In design, this philosophy translates into clean lines, purposeful spaces, and intentional choices that enhance rather than distract.

## The Philosophy Behind Minimalism

At its core, minimalism is about intentionality. Every element serves a purpose, every color choice is deliberate, and every piece of white space is carefully considered. This approach doesn't mean stripping away personality or warmth; rather, it means amplifying the essential while removing the superfluous.

## Practical Applications

In modern web design, minimalism manifests through:

- **Typography**: Clear, readable fonts that guide the eye
- **Color**: Restrained palettes that create harmony
- **Layout**: Generous spacing that lets content breathe
- **Navigation**: Intuitive paths that don't overwhelm

## Finding Balance

The challenge isn't in removing elements—it's in knowing what to keep. Each component must earn its place through function, beauty, or both. This discernment is what separates sterile emptiness from elegant simplicity.

> "Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away." — Antoine de Saint-Exupéry

## Moving Forward

As we continue to be bombarded with information and options, minimalist design offers a refuge—a clear space where focus and clarity reign. Whether you're designing a website, an app, or simply organizing your workspace, the principles remain the same: start with purpose, refine with intention, and always ask, "Is this essential?"
    `
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
    content: `
Success isn't built in a day—it's constructed through the accumulation of small, consistent actions. For creatives, establishing the right habits can be the difference between sporadic bursts of productivity and sustained excellence.

## The Science of Habit Formation

Understanding how habits form is the first step to building better ones. The habit loop—cue, routine, reward—provides a framework for creating lasting behavioral change. When we align this loop with our creative goals, magic happens.

## Morning Rituals That Work

The first hours of the day set the tone for everything that follows. Successful creatives often share common morning practices:

1. **Early rising**: Capturing the quiet hours before the world awakens
2. **Movement**: Physical activity to energize body and mind
3. **Creative work first**: Tackling the most important work while fresh
4. **Minimal decision-making**: Reducing cognitive load through routine

## Protecting Creative Time

In a world of constant interruptions, protecting creative time requires intentional boundaries. This means:

- Setting clear working hours
- Turning off notifications during deep work
- Communicating boundaries to others
- Creating a dedicated workspace

## The Power of Documentation

Keeping a creative journal or log serves multiple purposes. It tracks progress, captures fleeting ideas, and provides a record of growth. Over time, these entries become valuable reference points and sources of inspiration.

## Consistency Over Intensity

The most powerful habit isn't working yourself to exhaustion—it's showing up consistently. Whether it's writing for 30 minutes daily or sketching before bed, regular practice compounds into remarkable results.

### Start Small

Begin with one habit. Master it. Then add another. This patient approach builds confidence and creates sustainable change that lasts.
    `
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
    content: `
In an age of information overload, simplicity isn't just preferred—it's essential. Whether you're writing copy, designing interfaces, or presenting ideas, the ability to distill complexity into clarity is a superpower.

## Why Simplicity Wins

Our brains are wired to prefer simplicity. Complex messages require more cognitive effort to process, and in today's fast-paced world, that effort often isn't available. Simple communication:

- **Reduces friction**: Makes understanding effortless
- **Increases retention**: Memorable messages stick
- **Builds trust**: Clarity signals confidence
- **Drives action**: Clear calls-to-action convert

## The Art of Reduction

Simplifying isn't about dumbing down—it's about refining. It requires:

1. Understanding your core message
2. Identifying what's essential
3. Removing everything else
4. Testing for clarity

## In Practice

Consider these transformations:

**Before**: "Utilize our comprehensive suite of integrated solutions to optimize your workflow efficiency parameters."

**After**: "Work smarter with our simple tools."

The second version is shorter, clearer, and more impactful. It respects the reader's time and attention.

## Visual Simplicity

The same principles apply to design. White space isn't empty—it's strategic. It creates hierarchy, improves comprehension, and makes interfaces feel effortless to use.

## The Challenge

Simplicity is harder than complexity. It requires discipline, editing, and often multiple iterations. But the payoff—in understanding, engagement, and results—is always worth the effort.

*Start by asking: What can I remove without losing meaning?*
    `
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
    content: `
The shift to remote work has fundamentally changed how creative teams operate. What started as a necessity has evolved into a new paradigm—one that offers both unprecedented opportunities and unique challenges.

## The New Creative Landscape

Remote work has democratized access to creative opportunities. Geography no longer dictates career possibilities, and diverse teams can form based on talent rather than location. This shift brings:

- **Global talent pools**: Access to specialists worldwide
- **Flexible schedules**: Work when you're most productive
- **Reduced overhead**: Lower costs for businesses and individuals
- **Environmental benefits**: Fewer commutes, smaller carbon footprints

## Challenges and Solutions

### Communication Gaps

Without in-person interaction, miscommunication can derail projects. Solutions include:

- **Async-first communication**: Detailed written updates
- **Regular video check-ins**: Maintaining human connection
- **Clear documentation**: Creating single sources of truth

### Creative Collaboration

Some worry that remote work stifles spontaneous collaboration. The reality is more nuanced. While water-cooler moments are rare, intentional collaboration can be more focused and productive.

## Tools That Enable

The right tools make remote creative work possible:

- **Design platforms**: Figma, Miro, and collaborative whiteboards
- **Project management**: Systems that keep everyone aligned
- **Communication**: Slack, Zoom, and async video tools
- **Cloud storage**: Shared files accessible anywhere

## The Hybrid Future

The future isn't fully remote or fully in-office—it's hybrid. Companies are finding that flexible arrangements attract top talent and improve satisfaction. The key is giving teams autonomy to choose what works best.

## Building Culture Remotely

Strong culture doesn't require physical proximity. It requires:

1. Shared values and clear mission
2. Regular communication and transparency
3. Virtual social opportunities
4. Recognition and celebration of wins

## Embracing the Change

Remote work isn't a temporary trend—it's a permanent evolution. Creative professionals who embrace this shift, master its tools, and learn to collaborate across distances will thrive in this new landscape.

*The future of work is flexible, global, and full of possibility.*
    `
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
