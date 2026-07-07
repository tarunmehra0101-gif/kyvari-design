with open('index.html', 'r') as f:
    content = f.read()
if 'fonts.googleapis.com' not in content:
    content = content.replace('</head>', '  <link rel="preconnect" href="https://fonts.googleapis.com">\n  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n  <link href="https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&display=swap" rel="stylesheet">\n</head>')
with open('index.html', 'w') as f:
    f.write(content)

with open('src/index.css', 'r') as f:
    css_content = f.read()
css_content = css_content.replace('--font-sans: "Outfit", ui-sans-serif, system-ui, sans-serif;', '--font-sans: "Figtree", ui-sans-serif, system-ui, sans-serif;')
with open('src/index.css', 'w') as f:
    f.write(css_content)
