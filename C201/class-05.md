# Notes for Class 05

## HTML Media (Images, common types, choosing formats)

### Questions

1. What is a real world use case for the alt attribute being used in a website?
    * gives alternate words when image  does not work
2. How can you improve accessibility of images in an HTML document?
    * adding alt text and title fo rimages
    * if image decorative, provide null alt text (alt="")
    * avoid text in images
3. Provide an example of when the figure element would be useful in an HTML document.
    * when content like illustrations, diagrams, photos, etc are on page
4. Describe the difference between a gif image and an svg image, pretend you are explaining to an elder in your community.
    * gif is "Graphics Interchange Format" - good choice for simple images/animations
    * svg is "Scalable Vector Graphics" - ideal for interface elements, icons, diagrams
5. What image type would you use to display a screenshot on your website and why?
    * Lossless WebP or PNG (backup PNG or JPEG)

## CSS (color, styling HTML text elements)

### Questions

1. Describe the difference between foreground and background colors of an HTML element, pretend you are talking to someone with no technical knowledge.
    * Background is what is behind the element. What is behind that specific element. If color-background: white; then in order to see white words or whatever, the text (i.e. Foreground) must NOT be white, black would work best
2. Your friend asks you to give his colorless blog website a touch up. How would you use color to give his blog some character?
    * Set background color, give the text some color. Add boxes around margins/padding spacing.
3. What should you consider when choosing fonts for an HTML document?
    * Legibility, Font Family, serif vs sans, any branding?
4. What do font-size, font-weight, and font-style do to HTML text elements?
    * Font-size : actual size of the font itself
    * Font-weight : how **Bold** the text is: (-light, -normal, -bold, -extrbold, -black, etc.)
5. Describe two ways you could add spacing around the characters displayed in an h1 element.
    * using CSS selectors for Class: ```.normal { letter-spacing: normal; }```
    * using CSS selectors for Class: ```.normal { font-kerning: normal; }```
