import re

with open('src/components/Library.tsx', 'r') as f:
    content = f.read()

grid_old = r'<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">\s*\{items\.map\(\(item: any, i: number\) => \(\s*<TrailCard(.*?)\/>\s*\)\)\}\s*<\/div>'
grid_new = """<div className="flex overflow-x-auto gap-6 pb-4 hide-scrollbar" style={{ scrollSnapType: "x mandatory" }}>
                          {items.map((item: any, i: number) => (
                            <div key={i} style={{ minWidth: "300px", maxWidth: "340px", flex: "0 0 auto", scrollSnapAlign: "start" }}>
                              <TrailCard
                                title={item.title}
                                location={item.location}
                                difficulty={item.difficulty}
                                creators={item.creators}
                                distance={item.distance}
                                elevation={item.elevation}
                                duration={item.duration}
                                imageUrl={item.image}
                                onClick={() => setView('detail')}
                                className="cursor-pointer hover:shadow-lg transition-all h-full"
                              />
                            </div>
                          ))}
                        </div>"""
content = re.sub(grid_old, grid_new, content, flags=re.DOTALL)

with open('src/components/Library.tsx', 'w') as f:
    f.write(content)

