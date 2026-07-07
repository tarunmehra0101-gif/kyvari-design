import re

with open('src/components/Home.tsx', 'r') as f:
    content = f.read()

content = content.replace(
    '<source src="https://storage.googleapis.com/aistudio-assets/video/mountain_landscape.mp4" type="video/mp4" />',
    '<source src="https://videos.pexels.com/video-files/853889/853889-hd_1920_1080_25fps.mp4" type="video/mp4" />'
)

# make the dark shade a bit stronger at the bottom
content = content.replace(
    'background:"linear-gradient(to top, rgba(2,6,23,0.9) 0%, rgba(2,6,23,0.4) 40%, transparent 100%)"',
    'background:"linear-gradient(to top, rgba(2,6,23,1.0) 0%, rgba(2,6,23,0.6) 50%, transparent 100%)"'
)

with open('src/components/Home.tsx', 'w') as f:
    f.write(content)
