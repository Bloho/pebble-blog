# Custom Fonts

Place your custom font files (.otf or .ttf) in this directory:

## Required Font Files
- `bold.otf` - Bold weight
- `medium.otf` - Medium weight  
- `air.otf` - Light/Air weight
- `bold-italic.otf` - Bold italic variant
- `medium-italic.otf` - Medium italic variant

## Using Custom Fonts in Articles

In `src/data/articles.ts`, add the `fontFamily` property to any article:

```typescript
{
  id: "example-article",
  title: "Example Article",
  // ... other properties
  fontFamily: 'bold' // or 'custom-medium', 'custom-air', 'sans', 'serif'
}
```

## Available Font Options
- `'sans'` - Inter (default system font)
- `'serif'` - Merriweather (default article font)
- `'custom-bold'` - Your custom bold font
- `'custom-medium'` - Your custom medium font
- `'custom-air'` - Your custom air/light font

## Note
If no `fontFamily` is specified, articles will default to the serif font (Merriweather).

