import re

with open('src/components/Library.tsx', 'r') as f:
    content = f.read()

grouped_library_old = r'const groupedLibrary = \{.*?\};\n\nexport function Library'
grouped_library_new = """const groupedLibrary = {
  "Japan": {
    "Kyoto": {
      "Hotels": [
        { title: "Aman Kyoto", difficulty: "Luxury", location: "Kyoto", creators: "Client: JD", distance: "Oct 12-16", elevation: "5 Nights", duration: "Premium", image: "https://images.unsplash.com/photo-1542314831-c6a4d27ce66b?w=600&h=400&fit=crop" },
        { title: "Hoshinoya Kyoto", difficulty: "Boutique", location: "Arashiyama", creators: "Client: AL", distance: "Oct 16-18", elevation: "2 Nights", duration: "Premium", image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&h=400&fit=crop" }
      ],
      "Activities": [
        { title: "Zen Garden Tour", difficulty: "Culture", location: "Kyoto", creators: "Guide: Hideo", distance: "Oct 13", elevation: "1 Stop", duration: "3 Hours", image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&h=400&fit=crop" },
        { title: "Matcha Tea Ceremony", difficulty: "Culture", location: "Gion", creators: "Guide: Yui", distance: "Oct 14", elevation: "Private", duration: "2 Hours", image: "https://images.unsplash.com/photo-1544465544-1b71aee9dfa3?w=600&h=400&fit=crop" },
        { title: "Arashiyama Bamboo Grove", difficulty: "Nature", location: "Kyoto", creators: "Self-guided", distance: "Oct 15", elevation: "Morning", duration: "4 Hours", image: "https://images.unsplash.com/photo-1545569341-9eb8b46d4c1d?w=600&h=400&fit=crop" }
      ]
    },
    "Tokyo": {
      "Flights": [
        { title: "JAL First Class", difficulty: "Flight", location: "JFK to HND", creators: "Booking Ref: X8KL9", distance: "Nov 01", elevation: "Non-stop", duration: "14 Hours", image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=400&fit=crop" },
        { title: "ANA Business", difficulty: "Flight", location: "HND to LAX", creators: "Booking Ref: B3M9Q", distance: "Nov 08", elevation: "Non-stop", duration: "10 Hours", image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=400&fit=crop" }
      ],
      "Hotels": [
        { title: "Park Hyatt Tokyo", difficulty: "Luxury", location: "Shinjuku", creators: "Client: ST", distance: "Nov 01-07", elevation: "6 Nights", duration: "Premium", image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=600&h=400&fit=crop" }
      ],
      "Dining": [
        { title: "Sukiyabashi Jiro", difficulty: "Michelin", location: "Ginza", creators: "Client: ST", distance: "Nov 03", elevation: "Dinner", duration: "Omakase", image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600&h=400&fit=crop" }
      ]
    }
  },
  "Italy": {
    "Amalfi Coast": {
      "Hotels": [
        { title: "Le Sirenuse", difficulty: "Boutique", location: "Positano", creators: "Client: MR", distance: "Sep 04-11", elevation: "7 Nights", duration: "Premium", image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=600&h=400&fit=crop" }
      ],
      "Experiences": [
        { title: "Private Boat to Capri", difficulty: "Leisure", location: "Positano", creators: "Captain: Marco", distance: "Sep 06", elevation: "Full Day", duration: "8 Hours", image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=600&h=400&fit=crop" },
        { title: "Lemon Grove Tour", difficulty: "Culture", location: "Amalfi", creators: "Local Guide", distance: "Sep 08", elevation: "Afternoon", duration: "3 Hours", image: "https://images.unsplash.com/photo-1560088219-5d63f03b29c5?w=600&h=400&fit=crop" }
      ]
    },
    "Rome": {
      "Hotels": [
        { title: "Hotel Hassler", difficulty: "Luxury", location: "Rome", creators: "Client: MR", distance: "Sep 11-14", elevation: "3 Nights", duration: "Premium", image: "https://images.unsplash.com/photo-1551882547-ff40eb0d8d73?w=600&h=400&fit=crop" }
      ],
      "Activities": [
        { title: "Vatican Early Access", difficulty: "History", location: "Vatican", creators: "Guide: Sofia", distance: "Sep 12", elevation: "Morning", duration: "4 Hours", image: "https://images.unsplash.com/photo-1531572753322-ad011ceef8f2?w=600&h=400&fit=crop" }
      ]
    }
  }
};

export function Library"""

content = re.sub(grouped_library_old, grouped_library_new, content, flags=re.DOTALL)

with open('src/components/Library.tsx', 'w') as f:
    f.write(content)

