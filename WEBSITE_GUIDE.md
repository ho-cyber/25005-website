# Website Maintenance and Editing Guide

## Project Structure

```
3d-portfolio-master/
├── public/            # Static assets
│   ├── data/          # Markdown files
│   └── parallax/      # Background images
├── src/               # Source code
│   ├── assets/        # Images and 3D models
│   ├── components/    # React components
│   ├── data/          # Data files
│   └── utils/         # Utility functions
```

## Updating Content

### Blogs
1. Edit markdown files in `public/data/`
2. Format:
   ```markdown
   # Title
   Content goes here
   ![Image Alt](image_url)

   ## Code Examples

   ### Java
   ```java
   public class Main {
       public static void main(String[] args) {
           System.out.println("Hello, World!");
       }
   }
   ```

   ### Python
   ```python
   def main():
       print("Hello, World!")

   if __name__ == "__main__":
       main()
   ```
   ```
3. Use proper markdown syntax for formatting

### Images
1. Add new images to `src/assets/`
2. Update references in components
3. For blog images, use relative paths in markdown

### Portfolio Items
1. Edit `src/data/portfolio.js`
2. Add new items with:
   ```js
   {
     name: "Project Name",
     description: "Project Description",
     image: "image_path"
   }
   ```

## Modifying Styles
1. Use Tailwind CSS classes in components
2. Custom styles in `src/index.css`
3. Update Tailwind config in `tailwind.config.cjs`

## Adding New Pages
1. Create new component in `src/components/`
2. Add route in `src/App.jsx`
3. Update navigation in `src/components/Navbar.jsx`

## Deployment
1. Build the project:
   ```bash
   npm run build
   ```
2. Deploy the `dist/` folder to your hosting provider
3. Ensure all assets are accessible via relative paths

## Common Operations

### Running Locally
```bash
npm install
npm run dev
```

### Adding Dependencies
```bash
npm install package-name
```

### Troubleshooting
- Check browser console for errors
- Verify file paths and imports
- Clear cache and refresh

## Best Practices
1. Keep components modular
2. Use descriptive names for files and variables
3. Test changes locally before deployment
4. Maintain consistent coding style
