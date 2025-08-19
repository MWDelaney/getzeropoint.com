---
title: ZeroPoint Documentation
permalink: /documentation/
---
<section>

# Getting started with ZeroPoint

<hr>

This documentation is designed to help you get started with ZeroPoint and guide you through its features and functionalities.

## Installation

To install ZeroPoint, follow these steps:

1. Generate a new GitHub repository using the ZeroPoint template (click [here](https://github.com/MWDelaney/ZeroPoint/generate) or visit the [ZeroPoint repository](https://github.com/MWDelaney/ZeroPoint) and click "Use this template").
2. Prepare your repository for use by removing ZeroPoint branding and replacing it with your own project name and description.
3. Allow GitHub Actions to write to your repository
    1. Click "Settings" in the top right corner of your repository
    2. Click "Actions/General" in the left sidebar
    3. Under "Workflow permissions" choose "Read and write permissions"
    4. Click "Save"
4. Run the "**Remove ZeroPoint branding**" action
    1. Click the "Actions" tab in the top navigation of your repository
    2. Click the "Remove ZeroPoint branding" workflow
    3. Click the "Run workflow" button, choose the `main` branch, and click the green "Run workflow" button

That's it! Your project is branded with your own name and description and is ready for development.

## Creating a new page

To create a new page in your ZeroPoint project, follow these steps:

1. Create a new file in the `src/content/pages` directory.
2. Add the necessary frontmatter to the top of the file, including the title and permalink.
3. Write your content using Markdown or HTML syntax.
4. Save the file and commit your changes.

Here's an example of a simple page:

```markdown
---
title: My New Page
permalink: /my-new-page/
---

# My New Page

This is the content of my new page.
```

## Editing the navigation

ZeroPoint includes an example "primary navigation" data file located at `src/data/navigation.json`, which is used by the navigation view component in `src/views/partials/navigation.njk`. You can modify these files, or use them as a reference to create your own navigation.

</section>
