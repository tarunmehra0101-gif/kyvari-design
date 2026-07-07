with open('src/components/Home.tsx', 'r') as f:
    content = f.read()

content = content.replace(
    '<source src="https://videos.pexels.com/video-files/853889/853889-hd_1920_1080_25fps.mp4" type="video/mp4" />',
    '<source src="https://storage.googleapis.com/aistudio-assets/video/mountain_landscape.mp4" type="video/mp4" />'
)

with open('src/components/Home.tsx', 'w') as f:
    f.write(content)
