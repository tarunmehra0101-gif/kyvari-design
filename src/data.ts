export const scenes = {
  paro: { sky: 'linear-gradient(170deg,#ffd9a0 0%,#ff9a8b 70%)', sun: '#fff3c4', m1: '#7c5cbf', m2: '#5a3fa0', m3: '#43307e' },
  hanoi: { sky: 'linear-gradient(170deg,#a7c7ff 0%,#e3b8ff 75%)', sun: '#ffffff', m1: '#5b8def', m2: '#4a6fd0', m3: '#3a55ab' },
  bangkok: { sky: 'linear-gradient(170deg,#ffe29a 0%,#ffa99a 75%)', sun: '#fffbe0', m1: '#e0745c', m2: '#c05545', m3: '#8f3a3a' },
  laksha: { sky: 'linear-gradient(170deg,#8de3d0 0%,#3fb7d9 80%)', sun: '#fff9d6', m1: '#1e8aa8', m2: '#166f8d', m3: '#0f5470' },
  kl: { sky: 'linear-gradient(170deg,#c4b5fd 0%,#818cf8 80%)', sun: '#fef3c7', m1: '#4c3d99', m2: '#3b2f7d', m3: '#2b2260' },
  dubai: { sky: 'linear-gradient(170deg,#fecaca 0%,#fdba74 80%)', sun: '#fff7d1', m1: '#c2703d', m2: '#a3562e', m3: '#7c3f24' }
};

export const tag = {
  adventure: { t: 'ADVENTURE', i: '▲', g: 'linear-gradient(135deg,#ff7a59,#ff4d6d)' },
  romantic: { t: 'ROMANTIC', i: '♥', g: 'linear-gradient(135deg,#ec4899,#f43f5e)' },
  urban: { t: 'URBAN', i: '⌂', g: 'linear-gradient(135deg,#6366f1,#0ea5e9)' },
  luxury: { t: 'LUXURY', i: '✦', g: 'linear-gradient(135deg,#f59e0b,#d97706)' }
};

export const trips = [
  { image: 'https://images.unsplash.com/photo-1627894483216-2138af692e32?w=600&h=800&fit=crop', title: "REFLECT WHERE SKY MEETS MOUNTAIN", short: 'Bhutanese Bliss', city: 'BANFF NATIONAL PARK, CANADA', dates: '20–22 Jul', client: 'Meera & Arjun', rating: '4.8', tag: tag.adventure, sc: scenes.paro, detail: true, price: 120, avatarSeed: 'Felix', createdDate: '2d ago', views: '2.1k', loves: '342', agentSeed: 'Wanderlust', themes: [tag.adventure, tag.luxury] },
  { image: 'https://images.unsplash.com/photo-1555921015-5532091f6026?w=600&h=800&fit=crop', title: "LIVE WHERE COLOR MEETS COASTLINE", short: "Hanoi's Romantic Charms", city: 'MANAROLA, CINQUE TERRE, ITALY', dates: '20–22 Jul', client: 'The Kapoors', rating: '4.7', tag: tag.romantic, sc: scenes.hanoi, price: 80, avatarSeed: 'Aneka', createdDate: '1w ago', views: '14.5k', loves: '1.2k', agentSeed: 'AtlasTravel', themes: [tag.romantic, tag.urban] },
  { image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=600&h=800&fit=crop', title: 'ICELANDIC HIGHLANDS, ICELAND', short: 'Bangkok Bazaar', city: 'ICELAND', dates: '20–21 Jul', client: 'Ritu S.', rating: '4.6', tag: tag.urban, sc: scenes.bangkok, price: 200, avatarSeed: 'Molly', createdDate: '5h ago', views: '840', loves: '96', agentSeed: 'Wanderlust', themes: [tag.adventure] },
  { image: 'https://images.unsplash.com/photo-1512100356356-de1b84283e18?w=600&h=800&fit=crop', title: 'AZURE ESCAPES & LUXURY RETREATS', short: 'Azure Escapes', city: 'LAKSHADWEEP, INDIA', dates: '24–28 Jul', client: 'Honeymoon', rating: '4.9', tag: tag.luxury, sc: scenes.laksha, price: 250, avatarSeed: 'Jack', createdDate: '3w ago', views: '32k', loves: '4.1k', agentSeed: 'EpicJourneys', themes: [tag.luxury, tag.romantic] },
  { image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?w=600&h=800&fit=crop', title: 'KUALA LUMPUR SKYLINE SPRINT', short: 'KL Skyline Sprint', city: 'KUALA LUMPUR, MALAYSIA', dates: '1–3 Aug', client: 'Solo · Dev', rating: '4.5', tag: tag.urban, sc: scenes.kl, price: 95, avatarSeed: 'Oliver', createdDate: '1mo ago', views: '5k', loves: '210', agentSeed: 'AtlasTravel', themes: [tag.urban] },
  { image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&h=800&fit=crop', title: 'DUBAI DESERT LIGHTS TO DOWNTOWN', short: 'Dubai Desert Lights', city: 'DUBAI, UAE', dates: '8–11 Aug', client: 'Family · 4', rating: '4.7', tag: tag.adventure, sc: scenes.dubai, price: 180, avatarSeed: 'Jude', createdDate: 'Just now', views: '12', loves: '2', agentSeed: 'Wanderlust', themes: [tag.luxury, tag.adventure, tag.urban] }
];

const catGrad = {
  SIGHTSEEING: 'linear-gradient(135deg,#14b8a6,#0ea5e9)',
  HOTEL: 'linear-gradient(135deg,#8b5cf6,#6366f1)',
  FOOD: 'linear-gradient(135deg,#f59e0b,#f97316)',
  ACTIVITY: 'linear-gradient(135deg,#ff7a59,#ff4d6d)'
};

const hlG = ['linear-gradient(135deg,#2563eb,#7c3aed)', 'linear-gradient(135deg,#14b8a6,#0ea5e9)', 'linear-gradient(135deg,#f59e0b,#ec4899)'];
const hlS = ['rgba(79,70,229,.35)', 'rgba(14,165,233,.35)', 'rgba(236,72,153,.3)'];

const mkPlace = (o: any) => Object.assign({
  ratingPct: Math.round((o.rating / 5) * 100) + '%',
  weatherWhen: 'JULY MORNINGS',
  weatherSunny: 'Clear and cool — crisp 14–18° mornings with sharp Himalayan light. Perfect for photos before 10am.',
  weatherRainy: 'Monsoon showers roll through most afternoons — mornings usually stay dry. Carry a light shell.',
  facts: [
    { glyph: '◔', label: 'BEST TIME', bg: '#eef2ff', color: '#4353c9', value: o.best },
    { glyph: '⏱', label: 'TIME NEEDED', bg: '#f0fdfa', color: '#0f766e', value: o.duration },
    { glyph: '⛁', label: 'DRESS CODE', bg: '#fdf2f8', color: '#be1876', value: o.dress },
    { glyph: '▤', label: 'BOOKING', bg: '#fffbeb', color: '#b45309', value: o.booking }
  ],
  photos: o.photoLabels.map((l: string) => ({ label: l })),
  quotes: [
    { initial: 'T', name: 'Tashi W.', when: 'Feb 2026 · Google', grad: 'linear-gradient(135deg,#14b8a6,#0ea5e9)', text: o.q1 },
    { initial: 'S', name: 'Sofia R.', when: 'Nov 2025 · Google', grad: 'linear-gradient(135deg,#ec4899,#f43f5e)', text: o.q2 }
  ]
}, o, {
  highlights: o.highlights.map((t: string, i: number) => ({ glyph: '✓', grad: hlG[i % 3], shadow: hlS[i % 3], t })),
  catGrad: (catGrad as any)[o.cat] || catGrad.SIGHTSEEING
});

export const places = {
  airport: mkPlace({
    photoUrl: 'https://images.unsplash.com/photo-1542315582-7065961dbd15?w=600&h=400&fit=crop',
    name: 'Arrival & Immigration · Paro International Airport (PBH)', cat: 'SIGHTSEEING',
    rating: 4.6, reviews: '1.3k', address: 'Airport Road, Paro 12001, Bhutan',
    about: "One of the world's most beautiful arrivals: a hand-flown descent between pine ridgelines onto the valley floor. The terminal itself — carved timber, painted cornices — is your first taste of Bhutanese craft. Immigration is calm and takes about an hour.",
    highlights: ['Land through the famous curling approach — only ~50 pilots on earth are certified to fly it.', 'Traditional dzong-style architecture the moment you step off the plane.', 'Visa & permit formalities handled in one quiet queue — no scramble.'],
    best: 'Morning, straight off arrival — queues are shortest', duration: '60–90 min incl. baggage', dress: 'Comfortable travel layers', booking: 'None — just keep documents handy',
    pack: 'Keep passports, visa clearance and two printed copies in your carry-on — checked bags come out slowly.',
    local: 'Watch the ground crew bow to arriving aircraft — a small ritual most travellers miss.',
    insider: 'During descent, look left: the ridgeline gap frames Jomolhari (7,326 m) for about 20 seconds.',
    why: 'This is the essential first step into Bhutan — it sets the tone for the whole adventure and immerses you in the kingdom before you even reach the kerb.',
    price: 'Included', photoLabels: ['terminal facade', 'valley approach', 'arrival hall', 'prayer flags'],
    q1: 'The most beautiful airport arrival of my life. Immigration was next to the check-in counter — so convenient.',
    q2: 'Small, calm, and stunning. We were through in 50 minutes and the drive out is gorgeous.',
    sky: scenes.paro.sky, sun: scenes.paro.sun, m1: scenes.paro.m1, m2: scenes.paro.m2
  }),
  hotel: mkPlace({
    photoUrl: 'https://images.unsplash.com/photo-1542314831-c6a4d27160c7?w=600&h=400&fit=crop',
    name: 'Hotel Olathang', cat: 'HOTEL',
    rating: 4.5, reviews: '860', address: 'P.Box No. 1214, Paro 12008, Bhutan',
    about: "Built in 1974 for the coronation of the Fourth King, Olathang sits in a blue-pine forest above the valley — carved cottages, wood-fired heaters, and one of the best sunset terraces in Paro. Well-kept, mid-range, and full of character.",
    highlights: ['Royal-guesthouse heritage — Bhutan’s very first hotel.', 'Forest cottages with valley views and wood-stove warmth.', 'Ten minutes from both the dzong and the main street.'],
    best: 'Check-in from 12:00', duration: '2 nights', dress: 'Warm layer for evenings', booking: 'Confirmed · ref KYV-8841',
    pack: 'Evenings drop below 12° even in July — pack a fleece for the terrace.',
    local: 'Ask the front desk for butter tea at sunset — it’s not on any menu.',
    insider: 'Cottage rooms 14–18 face Jomolhari; request one at check-in, it’s free.',
    why: 'Well-established, great value, and its hillside setting delivers the "waking up in the Himalaya" feeling that fits this trip’s spirit and budget.',
    price: '$150/night', photoLabels: ['forest cottages', 'sunset terrace', 'lobby fireplace', 'valley view room'],
    q1: 'The cottages smell of pine and the staff treat you like family. Sunset from the terrace is unreal.',
    q2: 'Simple rooms but enormous charm — and the location above the valley is perfect.',
    sky: 'linear-gradient(170deg,#c4e0b8 0%,#7cb08a 80%)', sun: '#fff9d6', m1: '#3f7d5a', m2: '#2c5e44'
  }),
  lunch: mkPlace({
    photoUrl: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&h=400&fit=crop',
    name: 'Sonam Trophel Restaurant', cat: 'FOOD',
    rating: 4.4, reviews: '540', address: 'Main Street, Paro, Bhutan',
    about: "Paro's most loved family kitchen — two floors above the main street, run by the same family for decades. Order the ema datshi (chilli-cheese) and momos; portions are generous and everything is made when you order it.",
    highlights: ['The definitive ema datshi — locals argue it’s the country’s best.', 'Hand-pleated beef and cheese momos, steamed to order.', 'Window tables overlook Paro’s willow-lined main street.'],
    best: '12:30–14:00', duration: '~1 hour', dress: 'Casual', booking: 'Walk-in · table held 13:00',
    pack: 'Cash — cards work but the connection drops; ngultrum or INR both accepted.',
    local: 'Say "shezu" as you’re seated — the smile you get back is worth it.',
    insider: 'Ask for the unlisted red-rice porridge dessert; they make six portions a day.',
    why: 'Highly regarded for authentic Bhutanese food — a crucial, delicious cultural anchor for day one, minutes from the dzong.',
    price: '~$12/pp', photoLabels: ['ema datshi', 'momos steaming', 'dining room', 'main street view'],
    q1: 'Best meal of our whole trip. The chilli-cheese is life-changing and the family is so kind.',
    q2: 'Momos to dream about. Go hungry, order too much, regret nothing.',
    sky: 'linear-gradient(170deg,#ffe0b3 0%,#ffb385 80%)', sun: '#fff6d8', m1: '#d1784f', m2: '#a85a3c'
  }),
  dzong: mkPlace({
    photoUrl: 'https://images.unsplash.com/photo-1598285521995-20163351e29e?w=600&h=400&fit=crop',
    name: 'Rinpung Dzong (Paro Dzong)', cat: 'ACTIVITY',
    rating: 4.6, reviews: '2.1k', address: 'CCGF Q54, Paro, Bhutan',
    about: "The 'Fortress on a Heap of Jewels' — a 1644 monastery-fortress whose whitewashed walls tower over the Paro river. Cross the covered cantilever bridge, climb the flagstone path, and wander courtyards where monks still debate at dusk.",
    highlights: ['Cross Nyamai Zam, the roofed wooden bridge from the 1600s.', 'Fourteen towering courtyard murals of the Buddhist cosmos.', 'Golden-hour light turns the whole fortress amber — bring a camera.'],
    best: 'Late afternoon, 15:30–17:30', duration: '1.5–2 hours', dress: 'Shoulders & knees covered', booking: '$10 at the gate · guide included',
    pack: 'A scarf for shoulders and slip-on shoes — you’ll remove them in the temples.',
    local: 'Walk clockwise around every courtyard and prayer wheel — always.',
    insider: 'Stay 15 minutes past closing call: the monks’ evening horns echo down the valley.',
    why: 'The essential cultural and historical experience in Paro — and timed for the exact hour the light is most extraordinary.',
    price: '$10/pp', photoLabels: ['fortress walls', 'cantilever bridge', 'courtyard murals', 'monks at dusk'],
    q1: 'Timing it for late light was genius — the walls literally glow. The bridge is a movie scene.',
    q2: 'Our favourite stop in Bhutan. The murals alone deserve an hour.',
    sky: 'linear-gradient(170deg,#fcd9b8 0%,#e8a87c 80%)', sun: '#fff3c4', m1: '#9c6644', m2: '#7f5539'
  }),
  dinner: mkPlace({
    photoUrl: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=600&h=400&fit=crop',
    name: 'Dinner at Hotel Olathang Restaurant', cat: 'FOOD',
    rating: 4.3, reviews: '310', address: 'Hotel Olathang, Paro, Bhutan',
    about: "End the day slow: a traditional Bhutanese set dinner by the wood fire — red rice, jasha maru chicken stew, seasonal ferns — then step onto the terrace for the valley's first stars.",
    highlights: ['Traditional set menu that changes with the valley’s harvest.', 'Wood-fired dining room — request the corner table by the stove.', 'Terrace stargazing after dinner: zero light pollution.'],
    best: '19:00–21:00', duration: '~1.5 hours', dress: 'Warm layer for the terrace', booking: 'Included · half-board',
    pack: 'Your fleece again — the terrace is magic but crisp.',
    local: 'Try ara, the local rice spirit, served warm with butter. Sip slowly.',
    insider: 'The kitchen will do a quiet cooking demo of ema datshi if you ask before 18:00.',
    why: 'Convenient, comfortable, and the right gentle landing after an adventurous first day — no taxis, just ten steps to bed.',
    price: 'Included', photoLabels: ['set dinner', 'dining room fire', 'terrace at night', 'red rice & stew'],
    q1: 'The fire, the stew, the stars. A perfect quiet ending.',
    q2: 'Simple honest food and the warmest room in Paro.',
    sky: 'linear-gradient(170deg,#2b2a5e 0%,#4b3d8f 80%)', sun: '#fef3c7', m1: '#1e1b4b', m2: '#171438'
  }),
  tigers: mkPlace({
    photoUrl: 'https://images.unsplash.com/photo-1570183863483-e18e612eb048?w=600&h=400&fit=crop',
    name: "Tiger's Nest Monastery (Paro Taktsang)", cat: 'ACTIVITY',
    rating: 4.9, reviews: '5.4k', address: 'Taktsang Trail, Paro, Bhutan',
    about: "Bhutan's icon: a monastery pinned to a cliff 900 m above the valley floor. The hike is a steady 4–5 hours round trip through pine forest and prayer flags, with a tea-house halfway that has the best view in the kingdom.",
    highlights: ['The classic cliff-face reveal at the Taktsang viewpoint.', 'Half-way tea house — butter tea with a monastery panorama.', '700 steps down and up again to cross the waterfall gorge.'],
    best: 'Start 07:30 to beat cloud and crowds', duration: '4–5 hours round trip', dress: 'Hiking shoes, layers', booking: '$16 permit · arranged',
    pack: 'Water, sun hat, and a walking stick — rentable at the trailhead for $2.',
    local: 'Locals say make a wish at the waterfall bridge — but only on the way up.',
    insider: 'Horses can carry you the first half for $15 — save your knees for the steps.',
    why: 'The single most extraordinary half-day in the Himalaya — the whole trip builds to this morning.',
    price: '$16/pp', photoLabels: ['cliff monastery', 'prayer flag trail', 'tea house view', 'waterfall steps'],
    q1: 'Worth every step. The final reveal made me cry. Start early!',
    q2: 'The tea house alone is worth the climb. Unforgettable.',
    sky: 'linear-gradient(170deg,#bfd8ff 0%,#8fb3e8 80%)', sun: '#fff9d6', m1: '#54689e', m2: '#3d4d7d'
  })
};

export const days = [
  {
    name: 'Day 1', badge: '☀ DAY 1 · ARRIVAL', headline: 'Soar into the Paro Valley',
    blurb: 'Begin by flying into the breathtaking Paro Valley, settle into a forest retreat, then end the day inside a 17th-century fortress as the light turns gold.',
    chips: [{ t: '◉ 4 stops' }, { t: '⌂ Hotel Olathang' }, { t: '➤ 1,663 km total' }],
    sky: 'linear-gradient(150deg,#ff9a56 0%,#ff5e7e 100%)', sun: '#fff3c4', m1: '#7c3aed', m2: '#5b21b6',
    hasFlight: true,
    sections: [
      { part: 'morning', title: 'MORNING', time: '06:00 – 12:00', entries: [
        { label: 'KB205 · DEL → PBH', place: places.airport, copy: 'Wheels up at dawn. Window seats on the left catch Everest at sunrise before the famous curling descent into Paro Valley.' },
        { label: 'Arrival & Immigration · PBH', place: places.airport, copy: 'Formalities are refreshingly calm — about an hour, with prayer flags fluttering outside the arrival hall.' },
        { label: 'Check in · Hotel Olathang', place: places.hotel, copy: 'Drop your bags at a 1974 royal guesthouse turned hotel, set in blue-pine forest above the valley.' }
      ]},
      { part: 'afternoon', title: 'AFTERNOON', time: '12:30 – 17:30', entries: [
        { label: 'Lunch · Sonam Trophel', place: places.lunch, copy: 'Ema datshi done right — Paro’s most loved family kitchen, five minutes from the dzong.' },
        { label: 'Explore Rinpung Dzong', place: places.dzong, copy: 'The "Fortress on a Heap of Jewels". Timed for late light, when the whitewashed walls turn amber.' }
      ]},
      { part: 'evening', title: 'EVENING', time: '19:00 – 22:00', entries: [
        { label: 'Dinner · Hotel Olathang', place: places.dinner, copy: 'End slow: a traditional set dinner by the wood fire, then the valley’s first stars from the terrace.' }
      ]}
    ],
    stops: [
      { place: places.airport, cat: 'SIGHTSEEING', title: 'Arrival & Immigration at Paro Intl (PBH)', meta: '09:30 · 60–90 min', rating: '4.6', price: 'Incl.', hasDrive: false },
      { place: places.hotel, cat: 'HOTEL', title: 'Hotel Olathang', meta: 'Check-in 12:00 · 2 nights', rating: '4.5', price: '$150/nt', hasDrive: true, drive: '3.4 km · 5 min drive' },
      { place: places.lunch, cat: 'FOOD', title: 'Lunch at Sonam Trophel', meta: '13:00 · table held', rating: '4.4', price: '~$12', hasDrive: true, drive: '2.0 km · 3 min drive' },
      { place: places.dzong, cat: 'ACTIVITY', title: 'Explore Rinpung Dzong', meta: '15:30 · golden hour', rating: '4.6', price: '$10', hasDrive: true, drive: '1.2 km · 4 min drive' }
    ]
  },
  {
    name: 'Day 2', badge: '▲ DAY 2 · THE CLIMB', headline: "The Tiger's Nest pilgrimage",
    blurb: 'The day the whole trip builds to: a dawn start, pine forests strung with prayer flags, and a monastery pinned impossibly to the cliff face.',
    chips: [{ t: '◉ 3 stops' }, { t: '▲ 900 m ascent' }, { t: '⏱ 4–5 hr hike' }],
    sky: 'linear-gradient(150deg,#4f7dd9 0%,#7c3aed 100%)', sun: '#fef3c7', m1: '#1e293b', m2: '#0f172a',
    hasFlight: false,
    sections: [
      { part: 'morning', title: 'MORNING', time: '06:30 – 12:30', entries: [
        { label: "Hike · Tiger's Nest", place: places.tigers, copy: 'Start at 07:30 to beat the cloud. Steady switchbacks, butter tea at the half-way house, then the reveal.' }
      ]},
      { part: 'afternoon', title: 'AFTERNOON', time: '13:00 – 17:00', entries: [
        { label: 'Trailhead farmhouse lunch', place: places.lunch, copy: 'Earned carbs: red rice, buckwheat pancakes and chilli-cheese at a farmhouse by the trailhead.' }
      ]},
      { part: 'evening', title: 'EVENING', time: '18:00 – 21:30', entries: [
        { label: 'Hot-stone bath & dinner', place: places.dinner, copy: 'A traditional dotsho hot-stone bath for the legs, then a slow dinner by the fire.' }
      ]}
    ],
    stops: [
      { place: places.tigers, cat: 'ACTIVITY', title: "Tiger's Nest Monastery hike", meta: '07:30 · 4–5 hours', rating: '4.9', price: '$16', hasDrive: true, drive: '9.8 km · 20 min drive' },
      { place: places.lunch, cat: 'FOOD', title: 'Farmhouse lunch at the trailhead', meta: '13:30 · rustic set menu', rating: '4.4', price: '~$10', hasDrive: false },
      { place: places.dinner, cat: 'FOOD', title: 'Hot-stone bath + dinner at Olathang', meta: '18:30 · book bath by 16:00', rating: '4.3', price: '$25', hasDrive: true, drive: '10.5 km · 22 min drive' }
    ]
  },
  {
    name: 'Day 3', badge: '◐ DAY 3 · FAREWELL', headline: 'Thimphu run & farewell',
    blurb: 'A gentle final morning: the capital’s giant Buddha, a last bowl of momos at the weekend market, and the drive back for the afternoon flight.',
    chips: [{ t: '◉ 3 stops' }, { t: '⌂ Thimphu day trip' }, { t: '✈ 16:10 departure' }],
    sky: 'linear-gradient(150deg,#14b8a6 0%,#0ea5e9 100%)', sun: '#fff9d6', m1: '#0f766e', m2: '#115e59',
    hasFlight: false,
    sections: [
      { part: 'morning', title: 'MORNING', time: '08:00 – 12:00', entries: [
        { label: 'Buddha Dordenma · Thimphu', place: places.dzong, copy: 'An hour’s drive up-valley to the 52 m golden Buddha watching over the capital.' }
      ]},
      { part: 'afternoon', title: 'AFTERNOON', time: '12:30 – 15:00', entries: [
        { label: 'Centenary Farmers’ Market', place: places.lunch, copy: 'One last bowl of momos among the chilli sellers and butter-tea stalls, then souvenirs done properly.' }
      ]},
      { part: 'evening', title: 'EVENING', time: '15:00 – 16:10', entries: [
        { label: 'KB204 · PBH → DEL', place: places.airport, copy: 'The curling take-off is just as spectacular in reverse — right-side windows this time.' }
      ]}
    ],
    stops: [
      { place: places.dzong, cat: 'SIGHTSEEING', title: 'Buddha Dordenma viewpoint', meta: '09:30 · 1.5 hours', rating: '4.7', price: 'Free', hasDrive: true, drive: '52 km · 1 hr 10 min drive' },
      { place: places.lunch, cat: 'FOOD', title: 'Centenary Farmers’ Market lunch', meta: '12:45 · street-food crawl', rating: '4.5', price: '~$8', hasDrive: false },
      { place: places.airport, cat: 'SIGHTSEEING', title: 'Departure · KB204 to Delhi', meta: 'Gates 14:40 · wheels-up 16:10', rating: '4.6', price: 'Incl.', hasDrive: true, drive: '54 km · 1 hr 15 min drive' }
    ]
  }
];
