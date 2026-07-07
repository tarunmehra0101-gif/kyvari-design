import re

with open('src/components/Trips.tsx', 'r') as f:
    content = f.read()

pattern = re.compile(r'\{groupedTrips\[country\]\[city\]\.map\(\(t: any, i: number\) => \{.*?\)\;\s*\}\)\}', re.DOTALL)

replacement = """{groupedTrips[country][city].map((t: any, i: number) => {
                      const imageUrl = t.image || 'https://images.unsplash.com/photo-1542315582-7065961dbd15?w=600&h=400&fit=crop';
                      const difficulty = t.rating ? `★ ${t.rating} rating` : "Popular";
                      
                      return (
                        <TrailCard
                          key={i}
                          onClick={() => setView('detail')}
                          title={t.short || t.title}
                          location={t.city}
                          imageUrl={imageUrl}
                          difficulty={difficulty}
                          creators={t.client ? `Client: ${t.client}` : "Custom Trip"}
                          distance={t.dates || "Flexible"}
                          elevation={`${Math.floor(Math.random() * 20) + 2} stops`}
                          duration={t.dates ? "Multi-day" : "Flexible"}
                          onDirectionsClick={() => setView('detail')}
                          className="cursor-pointer hover:shadow-[0_20px_40px_rgba(20,24,58,0.1)] transition-all duration-300"
                        />
                      );
                    })}"""

new_content = pattern.sub(replacement, content)

with open('src/components/Trips.tsx', 'w') as f:
    f.write(new_content)
