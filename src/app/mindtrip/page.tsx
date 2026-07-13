"use client";
import React, { useState } from 'react';

/* ─── Mindtrip Home Page - Exact Clone ─── */

const MT_IMG = 'https://images.mindtrip.ai';

export default function MindtripHome() {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    { title: "Start chatting with us.", desc: "Ask for suggestions for any destination or an entire itinerary. Tell us how you like to travel, what you look for in a new place, and any preferences or pet peeves you have. The more you share, the more personalized your recommendations and plans become." },
    { title: "Popular itineraries.", desc: "Visit our Inspiration page to get ideas and inspiration from other Mindtrippers. Add their suggestions to a new trip plan and customize it to make it your own." },
    { title: "Get personalized recommendations.", desc: "We'll provide personalized, actionable travel experiences based on your preferences. Check out photos, reviews, maps and more. Favorite the items you like and add them to your trip plan." },
    { title: "Plan with your crew.", desc: "Invite friends and family to your trip, start a group chat and build an itinerary that works for everyone — no endless group texts required." },
    { title: "Upload and organize all your travel receipts.", desc: "Get started by uploading a receipt or confirmation to Mindtrip or forwarding it to receipts@mindtrip.ai. Add new ones as you book and access everything in one place while you travel." },
  ];

  const newFeatures = [
    { title: "Events", desc: "From concerts and comedy to farmers' markets and family fun, we'll show you what's happening nearby that fits your vibe. Get the scoop, make a plan, even snag tickets.", color: "#FFE8E0", img: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=400&h=400&fit=crop" },
    { title: "Google Pins", desc: "Import your saved places from Google Maps into Mindtrip and — boom — they become a themed collection you can use to plan.", color: "#E0F5E8", img: "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=400&h=400&fit=crop" },
    { title: "Collections", desc: "See a place you love? Save it to a collection — your favorites sorted by destination, theme or vibe. Invite friends to collaborate and watch that \"someday\" trip take shape.", color: "#E8F0FF", img: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=400&fit=crop" },
    { title: "Start Anywhere®", desc: "Feeling inspired? Mindtrip it. Share your favorite travel content, and we'll whip up a custom list or itinerary in seconds. You can even start with a photo, screenshot or PDF!", color: "#E8FFFA", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=400&fit=crop" },
  ];

  const adventureFeatures = [
    { title: "Photos, maps + reviews", desc: "Don't just read about a place; experience it. With vibrant photos, interactive maps and reviews, you'll feel like you're already there." },
    { title: "Tailored recommendations", desc: "From the best restaurants in your town to the best beaches around the world, we've got you covered. Favorite the recommendations you like and add them to your trip plan." },
    { title: "Customizable trip plans", desc: "In seconds, we'll create customizable itineraries for anywhere you'd like to go. Include specifics for your requests so we can personalize your plans for you." },
    { title: "Collaboration tools", desc: "Plan together in real time — add ideas, comments and likes. Chat as a group within your trip and tag @Mindtrip for suggestions that balance everyone's vibes." },
    { title: "Popular itineraries", desc: "Visit our Inspiration page to get ideas and inspiration from other Mindtrippers. Add their suggestions to a new trip plan and customize it to make it your own." },
  ];

  const bookingCards = [
    { title: "Hotels", desc: "Stay at the best hotels around the world for the best prices.", icon: "🏨", soon: false },
    { title: "Car Rental", desc: "Unlock deals on any type of wheels and hit the road.", icon: "🚗", soon: true },
    { title: "Flights", desc: "Get real-time airfares for anywhere you want to jet off to.", icon: "✈️", soon: false },
    { title: "Restaurants", desc: "Snag a coveted table at the hottest restaurants.", icon: "🍽️", soon: false },
    { title: "Experiences", desc: "Make reservations for your favorite activities, then make memories.", icon: "🎭", soon: false },
    { title: "Tours", desc: "Get an insider's perspective on any location or attraction.", icon: "🗺️", soon: true },
  ];

  const inspirationCards = [
    { title: "Paris: A Locals Guide", img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=500&h=600&fit=crop" },
    { title: "4-Days of Authenticity and Culture in Rome", img: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=500&h=600&fit=crop" },
    { title: "Foodie's Delight: 5 San Francisco Neighborhoods...", img: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=500&h=600&fit=crop" },
    { title: "A Harbourside Adventure Down Under", img: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=500&h=600&fit=crop" },
    { title: "A NYC Classic", img: "https://images.unsplash.com/photo-1496588152823-86ff7695e68f?w=500&h=600&fit=crop" },
    { title: "Urban Adventure in Tokyo", img: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=500&h=600&fit=crop" },
    { title: "Luxury Stay at Nizuc Resort & Spa", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&h=600&fit=crop" },
    { title: "A Vibrant 3-Days in Toronto", img: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=500&h=600&fit=crop" },
  ];

  const pressLogos = [
    { name: "CNBC", url: "https://images.mindtrip.ai/web/press/cnbc.svg" },
    { name: "The New York Times", url: "https://images.mindtrip.ai/web/press/nyt.svg" },
    { name: "TechCrunch", url: "https://images.mindtrip.ai/web/press/techcrunch.svg" },
    { name: "VentureBeat", url: "https://images.mindtrip.ai/web/press/venturebeat.svg" },
    { name: "Skift", url: "https://images.mindtrip.ai/web/press/skift.svg" },
    { name: "PhocusWire", url: "https://images.mindtrip.ai/web/press/phocuswire.svg" },
  ];

  const categoryTags = [
    { emoji: "🧖", label: "Spa / Wellness" },
    { emoji: "🎭", label: "Theater" },
    { emoji: "🏖️", label: "Beach" },
    { emoji: "🐦", label: "Wildlife" },
    { emoji: "⛺", label: "Resorts" },
    { emoji: "🍽️", label: "Fine Dining" },
    { emoji: "🏛️", label: "Historical Tours" },
    { emoji: "🏊", label: "Water Sports" },
    { emoji: "🚴", label: "Cycling" },
  ];

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: PAGE_CSS }} />
      <div className="mt-page">
        {/* ─── NAVBAR ─── */}
        <nav className="mt-nav">
          <div className="mt-nav-left">
            <button className="mt-hamburger">
              <svg width="20" height="14" viewBox="0 0 20 14" fill="none"><path d="M1 1h18M1 7h18M1 13h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
            </button>
            <div className="mt-logo">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="currentColor"/></svg>
              <span className="mt-logo-text">mindtrip.</span>
            </div>
          </div>
          <div className="mt-nav-center">
            <a href="#" className="mt-nav-link"><span className="mt-nav-for">for</span> Creators</a>
            <a href="#" className="mt-nav-link"><span className="mt-nav-for">for</span> Business</a>
            <a href="#" className="mt-nav-link">Get inspired</a>
            <a href="#" className="mt-nav-link">Resources</a>
          </div>
          <div className="mt-nav-right">
            <button className="mt-btn-getapp">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12" y2="18" strokeLinecap="round"/></svg>
              Get app
            </button>
            <a href="#" className="mt-nav-login">Log in</a>
            <button className="mt-btn-getstarted">Get started</button>
          </div>
        </nav>

        {/* ─── HERO ─── */}
        <section className="mt-hero">
          <div className="mt-hero-content">
            <h1 className="mt-hero-title">Travel<br/>differently.</h1>
            <p className="mt-hero-desc">Mindtrip brings the world to you and empowers you to experience it <strong>your</strong> way.</p>
            <div className="mt-hero-actions">
              <button className="mt-btn-chat">Start chatting</button>
              <button className="mt-btn-play">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="12" fill="currentColor"/><path d="M10 8l6 4-6 4V8z" fill="white"/></svg>
                Play video
              </button>
            </div>
          </div>
          <div className="mt-hero-visual">
            <div className="mt-hero-cloud mt-cloud-1"></div>
            <div className="mt-hero-cloud mt-cloud-2"></div>
            <div className="mt-hero-bigben">
              <img src="https://images.unsplash.com/photo-1529655683826-aba9b3e77383?w=400&h=600&fit=crop" alt="Big Ben" />
            </div>
            <div className="mt-hero-arch">
              <img src="https://images.unsplash.com/photo-1520939817895-060bdaf4fe1b?w=300&h=500&fit=crop" alt="Arch doorway" />
              <div className="mt-hero-colosseum">
                <img src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=200&h=150&fit=crop" alt="Colosseum" />
              </div>
              <div className="mt-hero-eiffel">
                <img src="https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=150&h=200&fit=crop" alt="Eiffel Tower" />
              </div>
            </div>
            <div className="mt-hero-card mt-hero-card-1">
              <div className="mt-avatar-sm"></div>
              <div className="mt-card-lines"><div></div><div></div></div>
              <span>···</span>
            </div>
            <div className="mt-hero-card mt-hero-card-2">
              <div className="mt-avatar-sm"></div>
              <div className="mt-card-lines"><div></div><div></div></div>
              <span>···</span>
            </div>
            <div className="mt-hero-heart">❤️</div>
          </div>
          <div className="mt-hero-learnmore">Learn more <span>↓</span></div>
        </section>

        {/* ─── START CHATTING SECTION ─── */}
        <section className="mt-section mt-section-chat">
          <div className="mt-section-inner mt-split">
            <div className="mt-split-left">
              <h2 className="mt-h2">Start chatting<br/>with us.</h2>
              <p className="mt-body">{features[0].desc}</p>
            </div>
            <div className="mt-split-right">
              <div className="mt-category-cloud">
                {categoryTags.map((tag, i) => (
                  <div key={i} className="mt-category-tag" style={{ animationDelay: `${i * 0.1}s` }}>
                    <span className="mt-tag-emoji">{tag.emoji}</span> {tag.label}
                  </div>
                ))}
                <div className="mt-category-images">
                  <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=200&h=200&fit=crop" alt="" className="mt-cat-img mt-cat-img-1" />
                  <img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=200&h=200&fit=crop" alt="" className="mt-cat-img mt-cat-img-2" />
                  <img src="https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=200&h=200&fit=crop" alt="" className="mt-cat-img mt-cat-img-3" />
                  <img src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=200&h=200&fit=crop" alt="" className="mt-cat-img mt-cat-img-4" />
                  <div className="mt-cat-avatar">
                    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop" alt="" />
                  </div>
                  <img src="https://images.unsplash.com/photo-1533105079780-92b9be482077?w=200&h=200&fit=crop" alt="" className="mt-cat-img mt-cat-img-5" />
                  <img src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=200&h=200&fit=crop" alt="" className="mt-cat-img mt-cat-img-6" />
                </div>
              </div>
              <div className="mt-chat-input-box">
                <input type="text" placeholder="Ask us anything..." readOnly />
                <div className="mt-chat-input-icons">
                  <button>+</button>
                  <button>😊</button>
                  <button>@</button>
                  <div className="mt-chat-input-right">
                    <button className="mt-mic-btn">🎙️</button>
                    <button className="mt-send-btn">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── FEATURE WALKTHROUGH SECTIONS ─── */}
        {features.slice(1).map((f, i) => (
          <section key={i} className="mt-section mt-section-feature">
            <div className="mt-section-inner mt-split">
              <div className={`mt-split-left ${i % 2 === 1 ? 'mt-order-2' : ''}`}>
                <h2 className="mt-h2">{f.title}</h2>
                <p className="mt-body">{f.desc}</p>
              </div>
              <div className={`mt-split-right ${i % 2 === 1 ? 'mt-order-1' : ''}`}>
                <div className="mt-feature-mockup">
                  <div className="mt-mockup-placeholder" style={{ background: i === 0 ? '#f0f4ff' : i === 1 ? '#fff5f0' : i === 2 ? '#f0fff5' : '#f5f0ff' }}>
                    <div className="mt-mockup-inner">
                      {i === 0 && <div className="mt-itinerary-cards">
                        <div className="mt-itin-card"><div className="mt-itin-img" style={{background:'linear-gradient(135deg,#667eea,#764ba2)'}}></div><div className="mt-itin-text"><strong>Bali Explorer</strong><span>7 days</span></div></div>
                        <div className="mt-itin-card"><div className="mt-itin-img" style={{background:'linear-gradient(135deg,#f093fb,#f5576c)'}}></div><div className="mt-itin-text"><strong>Tokyo Highlights</strong><span>5 days</span></div></div>
                        <div className="mt-itin-card"><div className="mt-itin-img" style={{background:'linear-gradient(135deg,#4facfe,#00f2fe)'}}></div><div className="mt-itin-text"><strong>Iceland Wonders</strong><span>6 days</span></div></div>
                      </div>}
                      {i === 1 && <div className="mt-reco-cards">
                        <div className="mt-reco-card">
                          <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=300&h=200&fit=crop" alt="" />
                          <div className="mt-reco-info"><strong>Le Comptoir de la Gastronomie</strong><span>⭐ 4.6 · French · $$</span></div>
                        </div>
                        <div className="mt-reco-card">
                          <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=300&h=200&fit=crop" alt="" />
                          <div className="mt-reco-info"><strong>Nobu Restaurant</strong><span>⭐ 4.8 · Japanese · $$$</span></div>
                        </div>
                      </div>}
                      {i === 2 && <div className="mt-crew-mockup">
                        <div className="mt-crew-header">
                          <strong>Trip to Portugal</strong>
                          <div className="mt-crew-avatars">
                            <div className="mt-crew-av" style={{background:'#ffa07a'}}></div>
                            <div className="mt-crew-av" style={{background:'#87ceeb'}}></div>
                            <div className="mt-crew-av" style={{background:'#dda0dd'}}></div>
                          </div>
                        </div>
                        <div className="mt-crew-tabs"><span className="mt-crew-tab-active">Itinerary</span><span>Chat</span><span>Activity</span></div>
                        <div className="mt-crew-comment">
                          <div className="mt-crew-av-sm" style={{background:'#87ceeb'}}></div>
                          <div><strong>Costa Luz</strong><p>🏨 3pm check-in</p></div>
                        </div>
                        <div className="mt-crew-reply"><div className="mt-crew-av-sm" style={{background:'#9370db'}}></div><p>Wow, this hotel looks amazing!!!</p></div>
                        <div className="mt-crew-reply"><div className="mt-crew-av-sm" style={{background:'#ffa07a'}}></div><p>Yes, please</p></div>
                      </div>}
                      {i === 3 && <div className="mt-receipt-mockup">
                        <div className="mt-receipt-card">
                          <div className="mt-receipt-header">📧 Booking Confirmation</div>
                          <div className="mt-receipt-body">
                            <div className="mt-receipt-line"></div>
                            <div className="mt-receipt-line short"></div>
                            <div className="mt-receipt-tabs"><span>Email</span><span>Activity</span></div>
                          </div>
                        </div>
                        <button className="mt-forward-btn">📧 Forward email</button>
                      </div>}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* ─── NEW AT MINDTRIP ─── */}
        <section className="mt-section mt-section-new">
          <h2 className="mt-h2 mt-text-center">🎉 New at Mindtrip</h2>
          <div className="mt-new-grid">
            {newFeatures.map((f, i) => (
              <div key={i} className="mt-new-card" style={{ background: f.color }}>
                <div className="mt-new-card-img">
                  <img src={f.img} alt={f.title} />
                </div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
                <a href="#" className="mt-try-link">Try it Now →</a>
              </div>
            ))}
          </div>
        </section>

        {/* ─── APP DOWNLOAD CTA ─── */}
        <section className="mt-section mt-section-app">
          <div className="mt-app-cta">
            <p className="mt-app-text">Download the free Mindtrip app — your ultimate travel companion.</p>
            <a href="https://apps.apple.com/app/mindtrip-ai-travel-companion/id6503107567" className="mt-appstore-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
              Download on the App Store
            </a>
          </div>
        </section>

        {/* ─── EVERYTHING YOU NEED ─── */}
        <section className="mt-section mt-section-adventure">
          <h2 className="mt-h1 mt-text-center">Everything you need<br/>for your next adventure</h2>
          {adventureFeatures.map((f, i) => (
            <div key={i} className={`mt-adventure-row ${i % 2 === 1 ? 'mt-reverse' : ''}`}>
              <div className="mt-adventure-text">
                <h3 className="mt-h2">{f.title}</h3>
                <p className="mt-body">{f.desc}</p>
              </div>
              <div className="mt-adventure-visual">
                <div className="mt-adventure-mockup" style={{ background: i === 0 ? '#f5f5f5' : i === 1 ? '#fff8f0' : i === 2 ? '#f0f8ff' : i === 3 ? '#f8f0ff' : '#f0fff8' }}>
                  {i === 0 && <>
                    <div className="mt-map-preview">
                      <img src="https://images.unsplash.com/photo-1583422409516-2895a77efded?w=400&h=300&fit=crop" alt="Spain" style={{borderRadius:16,width:'100%'}} />
                      <div className="mt-map-overlay"><span>Spain</span></div>
                    </div>
                    <div className="mt-map-side">
                      <div className="mt-map-mini" style={{background:'#e8e8e8',height:200,borderRadius:12}}></div>
                    </div>
                  </>}
                  {i === 1 && <div className="mt-reco-preview">
                    <div className="mt-reco-card-lg">
                      <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=300&h=200&fit=crop" alt="" />
                      <strong>Best Brunch Spots</strong>
                      <span>12 places curated for you</span>
                    </div>
                  </div>}
                  {i === 2 && <div className="mt-trip-preview">
                    <div className="mt-trip-card">
                      <strong>Day 1 - Arrival in Barcelona</strong>
                      <div className="mt-trip-items">
                        <div className="mt-trip-item">🏨 Check-in at Hotel Arts</div>
                        <div className="mt-trip-item">🍽️ Dinner at Cal Pep</div>
                        <div className="mt-trip-item">🚶 Evening stroll on La Barceloneta</div>
                      </div>
                    </div>
                  </div>}
                  {i === 3 && <div className="mt-collab-preview">
                    <div className="mt-collab-header">Trip to Portugal <span>3 travelers</span></div>
                    <div className="mt-collab-chat">
                      <div className="mt-collab-msg"><strong>Sarah:</strong> Love the hotel pick!</div>
                      <div className="mt-collab-msg"><strong>@Mindtrip:</strong> Here are 3 restaurants nearby...</div>
                    </div>
                  </div>}
                  {i === 4 && <div className="mt-inspo-preview">
                    <img src="https://images.unsplash.com/photo-1473163928189-364b2c4e1135?w=300&h=200&fit=crop" alt="" style={{borderRadius:12,width:'100%'}} />
                    <div className="mt-inspo-overlay">
                      <strong>Explore Elk, California</strong>
                      <button className="mt-btn-customize">+ Customize a trip</button>
                      <button className="mt-btn-save">♡ Save</button>
                    </div>
                  </div>}
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* ─── ORGANIZE IT ALL ─── */}
        <section className="mt-section mt-section-organize">
          <h2 className="mt-h1 mt-text-center">Organize it all in one place.</h2>
          <div className="mt-booking-grid">
            {bookingCards.map((c, i) => (
              <div key={i} className="mt-booking-card">
                {c.soon && <span className="mt-soon-badge">Coming soon</span>}
                <div className="mt-booking-icon">{c.icon}</div>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ─── GET INSPIRED ─── */}
        <section className="mt-section mt-section-inspired">
          <h2 className="mt-h1 mt-text-center">Get inspired.</h2>
          <p className="mt-body mt-text-center" style={{marginBottom:48}}>Explore popular destinations and start planning your Mindtrip.</p>
          <div className="mt-inspiration-grid">
            {inspirationCards.map((c, i) => (
              <a key={i} href="#" className="mt-inspo-card">
                <img src={c.img} alt={c.title} />
                <div className="mt-inspo-card-overlay">
                  <div className="mt-inspo-avatar"></div>
                  <h3>{c.title}</h3>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* ─── CREATE INSPIRE EARN ─── */}
        <section className="mt-section mt-section-creator">
          <div className="mt-creator-box">
            <div className="mt-creator-left">
              <h2 className="mt-h1">Create.<br/>Inspire.<br/>Earn.</h2>
              <p className="mt-body">Love traveling and sharing your recommendations? Become a Mindtrip Creator and get paid to do what you love!</p>
              <button className="mt-btn-chat">Become a Creator</button>
            </div>
            <div className="mt-creator-photos">
              <img src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=300&h=400&fit=crop" alt="" className="mt-cr-photo mt-cr-1" />
              <img src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=400&h=500&fit=crop" alt="" className="mt-cr-photo mt-cr-2" />
              <img src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=300&h=400&fit=crop" alt="" className="mt-cr-photo mt-cr-3" />
            </div>
          </div>
        </section>

        {/* ─── TAG US ─── */}
        <section className="mt-section mt-section-tag">
          <h2 className="mt-h1 mt-text-center">Tag us on your next trip.</h2>
          <div className="mt-tag-grid">
            <img src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=300&h=300&fit=crop" alt="" />
            <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=300&h=300&fit=crop" alt="" />
            <img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=300&h=300&fit=crop" alt="" />
            <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=300&h=300&fit=crop" alt="" />
          </div>
        </section>

        {/* ─── AS FEATURED IN ─── */}
        <section className="mt-section mt-section-press">
          <h2 className="mt-h3 mt-text-center">As featured in …</h2>
          <div className="mt-press-grid">
            {[
              { name: "CNBC", title: "How AI is transforming the travel industry" },
              { name: "NYT", title: "My First Trip to Norway, With A.I. as a Guide" },
              { name: "TechCrunch", title: "Mindtrip wants to become your AI travel agent" },
              { name: "VentureBeat", title: "Mindtrip's AI travel assistant aims to be your one-stop shop" },
              { name: "Skift", title: "Mindtrip Raises $7 Million" },
              { name: "PhocusWire", title: "AI-powered trip planner Mindtrip officially launches" },
            ].map((p, i) => (
              <a key={i} href="#" className="mt-press-card">
                <div className="mt-press-logo">{p.name}</div>
                <p>{p.title}</p>
              </a>
            ))}
          </div>
        </section>

        {/* ─── OUR ADVENTURE ALLIES ─── */}
        <section className="mt-section mt-section-allies">
          <h2 className="mt-h2 mt-text-center">Our adventure allies</h2>
          <div className="mt-allies-logos">
            <div className="mt-ally-logo">Expedia</div>
            <div className="mt-ally-logo">Viator</div>
            <div className="mt-ally-logo">Booking.com</div>
            <div className="mt-ally-logo">Priceline</div>
            <div className="mt-ally-logo">Hilton</div>
            <div className="mt-ally-logo">Marriott</div>
            <div className="mt-ally-logo">Hotels.com</div>
          </div>
          <div className="mt-allies-cta">
            <a href="https://apps.apple.com/app/mindtrip-ai-travel-companion/id6503107567" className="mt-appstore-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
              Get iOS app
            </a>
          </div>
        </section>

        {/* ─── FOOTER ─── */}
        <footer className="mt-footer">
          <div className="mt-footer-inner">
            <div className="mt-footer-col">
              <h4>for Travelers</h4>
              <a href="#">Plan your trip</a>
              <a href="#">Flights</a>
              <a href="#">Inspirations</a>
              <a href="#">Help</a>
            </div>
            <div className="mt-footer-col">
              <h4>for Creators</h4>
              <a href="#">Become a Creator</a>
              <a href="#">Creator Academy</a>
            </div>
            <div className="mt-footer-col">
              <h4>for Business</h4>
              <a href="#">Overview</a>
              <a href="#">Destinations</a>
              <a href="#">Hotels</a>
              <a href="#">How It Works</a>
              <a href="#">Packages</a>
              <a href="#">Book a demo</a>
            </div>
            <div className="mt-footer-col">
              <h4>Company</h4>
              <a href="#">About</a>
              <a href="#">Team</a>
              <a href="#">Press</a>
              <a href="#">Media Kit</a>
              <a href="#">Contact</a>
              <a href="#">Resources</a>
              <a href="#">Mindtrip App</a>
            </div>
          </div>
          <div className="mt-footer-bottom">
            <div className="mt-footer-logo">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="currentColor"/></svg>
              <span>mindtrip.</span>
            </div>
            <div className="mt-footer-social">
              <a href="#">𝕏</a>
              <a href="#">in</a>
              <a href="#">📷</a>
              <a href="#">▶</a>
              <a href="#">📌</a>
              <a href="#">tt</a>
            </div>
            <div className="mt-footer-legal">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

/* ─── ALL CSS ─── */
const PAGE_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

.mt-page {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  color: #1a1a1a;
  background: #fff;
  overflow-x: hidden;
}

/* ── NAVBAR ── */
.mt-nav {
  position: fixed; top: 0; left: 0; right: 0; z-index: 100;
  display: flex; align-items: center; justify-content: space-between;
  padding: 12px 24px;
  background: rgba(255,255,255,0.95);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(0,0,0,0.06);
}
.mt-nav-left { display: flex; align-items: center; gap: 12px; }
.mt-hamburger { background: none; border: none; cursor: pointer; padding: 8px; color: #1a1a1a; }
.mt-logo { display: flex; align-items: center; gap: 6px; }
.mt-logo-text { font-size: 18px; font-weight: 700; letter-spacing: -0.5px; }
.mt-nav-center { display: flex; gap: 32px; }
.mt-nav-link { text-decoration: none; color: #1a1a1a; font-size: 15px; font-weight: 500; }
.mt-nav-for { font-style: italic; color: #888; font-weight: 400; }
.mt-nav-right { display: flex; align-items: center; gap: 12px; }
.mt-btn-getapp {
  display: flex; align-items: center; gap: 6px;
  background: #f5f5f5; border: 1px solid #e0e0e0; border-radius: 100px;
  padding: 8px 16px; font-size: 14px; font-weight: 500; cursor: pointer;
}
.mt-nav-login { text-decoration: none; color: #1a1a1a; font-size: 14px; font-weight: 500; }
.mt-btn-getstarted {
  background: #fff; border: 1.5px solid #1a1a1a; border-radius: 100px;
  padding: 8px 20px; font-size: 14px; font-weight: 600; cursor: pointer;
}
.mt-btn-getstarted:hover { background: #1a1a1a; color: #fff; }

/* ── HERO ── */
.mt-hero {
  position: relative;
  min-height: 100vh;
  padding: 80px 64px 40px;
  background: linear-gradient(180deg, #ffecd2 0%, #f5c16c 40%, #e8a838 70%, #d4922a 100%);
  display: flex;
  align-items: center;
  overflow: hidden;
}
.mt-hero-content { position: relative; z-index: 2; max-width: 650px; }
.mt-hero-title {
  font-size: clamp(64px, 8vw, 120px);
  font-weight: 900;
  line-height: 0.95;
  letter-spacing: -3px;
  margin-bottom: 24px;
}
.mt-hero-desc { font-size: 20px; line-height: 1.6; max-width: 500px; margin-bottom: 32px; }
.mt-hero-desc strong { font-weight: 700; }
.mt-hero-actions { display: flex; align-items: center; gap: 24px; }
.mt-btn-chat {
  background: #1a1a1a; color: #fff; border: none; border-radius: 100px;
  padding: 18px 40px; font-size: 18px; font-weight: 600; cursor: pointer;
  transition: transform 0.2s;
}
.mt-btn-chat:hover { transform: scale(1.05); }
.mt-btn-play {
  display: flex; align-items: center; gap: 8px;
  background: none; border: none; font-size: 16px; font-weight: 500; cursor: pointer;
}

.mt-hero-visual {
  position: absolute; right: 0; top: 0; bottom: 0; width: 55%;
  pointer-events: none;
}
.mt-hero-cloud {
  position: absolute; width: 300px; height: 150px;
  background: url("data:image/svg+xml,%3Csvg viewBox='0 0 300 150' xmlns='http://www.w3.org/2000/svg'%3E%3Cellipse cx='150' cy='100' rx='130' ry='50' fill='rgba(255,255,255,0.8)'/%3E%3Cellipse cx='100' cy='80' rx='80' ry='40' fill='rgba(255,255,255,0.9)'/%3E%3Cellipse cx='200' cy='85' rx='70' ry='35' fill='rgba(255,255,255,0.85)'/%3E%3C/svg%3E") no-repeat center;
  background-size: contain;
}
.mt-cloud-1 { top: 5%; left: -10%; width: 350px; }
.mt-cloud-2 { top: 25%; right: 15%; width: 200px; }

.mt-hero-bigben {
  position: absolute; top: 10%; left: 15%; width: 280px; z-index: 1;
}
.mt-hero-bigben img { width: 100%; border-radius: 16px; box-shadow: 0 20px 60px rgba(0,0,0,0.2); }

.mt-hero-arch {
  position: absolute; top: 5%; right: 10%; width: 220px; z-index: 2;
}
.mt-hero-arch > img {
  width: 100%; border-radius: 100px 100px 16px 16px;
  box-shadow: 0 20px 60px rgba(0,0,0,0.15);
  clip-path: ellipse(50% 80% at 50% 50%);
}
.mt-hero-colosseum {
  position: absolute; bottom: -30px; right: -40px;
}
.mt-hero-colosseum img { width: 150px; border-radius: 12px; box-shadow: 0 8px 24px rgba(0,0,0,0.15); }
.mt-hero-eiffel {
  position: absolute; top: -20px; right: -60px;
}
.mt-hero-eiffel img { width: 120px; border-radius: 8px; opacity: 0.7; }

.mt-hero-card {
  position: absolute; background: #fff; border-radius: 16px; padding: 12px 16px;
  display: flex; align-items: center; gap: 12px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.1); z-index: 5;
}
.mt-hero-card-1 { top: 30%; left: 5%; }
.mt-hero-card-2 { bottom: 20%; left: 20%; }
.mt-avatar-sm {
  width: 36px; height: 36px; border-radius: 50%;
  background: linear-gradient(135deg, #f093fb, #f5576c);
}
.mt-card-lines div {
  height: 6px; background: #e0e0e0; border-radius: 3px; margin-bottom: 4px;
}
.mt-card-lines div:first-child { width: 80px; }
.mt-card-lines div:last-child { width: 50px; }
.mt-hero-heart {
  position: absolute; bottom: 35%; right: 25%; font-size: 28px; z-index: 6;
  animation: float 3s ease-in-out infinite;
}

.mt-hero-learnmore {
  position: absolute; bottom: 40px; left: 50%; transform: translateX(-50%);
  font-size: 15px; font-weight: 500; color: #1a1a1a; z-index: 10;
  display: flex; align-items: center; gap: 8px;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
}

/* ── SECTIONS ── */
.mt-section { padding: 80px 64px; }
.mt-section-inner { max-width: 1200px; margin: 0 auto; }
.mt-section-chat, .mt-section-feature { background: #f0f2f5; }
.mt-section-chat { padding-top: 100px; }

.mt-split { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: center; }
.mt-split-left { }
.mt-split-right { }
.mt-order-1 { order: -1; }
.mt-order-2 { order: 1; }

.mt-h1 { font-size: clamp(36px, 5vw, 64px); font-weight: 800; line-height: 1.1; letter-spacing: -2px; margin-bottom: 24px; }
.mt-h2 { font-size: clamp(28px, 3.5vw, 44px); font-weight: 800; line-height: 1.15; letter-spacing: -1px; margin-bottom: 20px; }
.mt-h3 { font-size: 24px; font-weight: 700; margin-bottom: 16px; }
.mt-body { font-size: 17px; line-height: 1.65; color: #444; max-width: 520px; }
.mt-text-center { text-align: center; margin-left: auto; margin-right: auto; }

/* ── CATEGORY CLOUD ── */
.mt-category-cloud { position: relative; min-height: 450px; }
.mt-category-tag {
  display: inline-flex; align-items: center; gap: 6px;
  background: #fff; border-radius: 100px; padding: 10px 18px;
  font-size: 14px; font-weight: 500; box-shadow: 0 2px 12px rgba(0,0,0,0.06);
  position: absolute; white-space: nowrap;
  animation: tagFloat 4s ease-in-out infinite alternate;
}
.mt-category-tag:nth-child(1) { top: 5%; left: 30%; }
.mt-category-tag:nth-child(2) { top: 3%; right: 5%; }
.mt-category-tag:nth-child(3) { top: 22%; left: 55%; }
.mt-category-tag:nth-child(4) { top: 18%; right: 0%; }
.mt-category-tag:nth-child(5) { top: 38%; left: 25%; }
.mt-category-tag:nth-child(6) { top: 35%; right: 5%; }
.mt-category-tag:nth-child(7) { top: 55%; left: 20%; }
.mt-category-tag:nth-child(8) { top: 58%; right: 0%; }
.mt-category-tag:nth-child(9) { top: 72%; left: 35%; }

.mt-category-images { position: absolute; top: 0; left: 0; right: 0; bottom: 0; }
.mt-cat-img {
  position: absolute; border-radius: 12px; object-fit: cover;
  box-shadow: 0 4px 16px rgba(0,0,0,0.1);
}
.mt-cat-img-1 { top: 10%; left: 10%; width: 120px; height: 130px; }
.mt-cat-img-2 { top: 5%; left: 40%; width: 100px; height: 100px; }
.mt-cat-img-3 { top: 30%; left: 5%; width: 110px; height: 140px; }
.mt-cat-img-4 { top: 55%; left: 15%; width: 100px; height: 120px; }
.mt-cat-img-5 { top: 48%; left: 50%; width: 100px; height: 100px; }
.mt-cat-img-6 { top: 68%; left: 45%; width: 110px; height: 100px; }
.mt-cat-avatar {
  position: absolute; top: 35%; left: 40%; width: 120px; height: 120px;
  border-radius: 50%; overflow: hidden; border: 4px solid #ffc0cb;
  box-shadow: 0 4px 20px rgba(0,0,0,0.15); z-index: 2;
}
.mt-cat-avatar img { width: 100%; height: 100%; object-fit: cover; }

@keyframes tagFloat {
  0% { transform: translateY(0); }
  100% { transform: translateY(-8px); }
}

/* ── CHAT INPUT ── */
.mt-chat-input-box {
  background: #fff; border: 2px solid #1a1a1a; border-radius: 16px;
  padding: 16px; margin-top: -20px; position: relative; z-index: 3;
}
.mt-chat-input-box input {
  width: 100%; border: none; outline: none;
  font-size: 16px; color: #999; font-family: inherit; padding: 4px 0;
}
.mt-chat-input-icons {
  display: flex; align-items: center; gap: 8px; margin-top: 8px;
}
.mt-chat-input-icons button {
  background: none; border: none; font-size: 18px; cursor: pointer;
  color: #666; padding: 4px 8px;
}
.mt-chat-input-right { margin-left: auto; display: flex; gap: 8px; }
.mt-send-btn {
  background: #1a1a1a !important; color: #fff !important;
  width: 36px; height: 36px; border-radius: 50% !important;
  display: flex !important; align-items: center; justify-content: center;
}

/* ── FEATURE MOCKUPS ── */
.mt-feature-mockup { width: 100%; }
.mt-mockup-placeholder {
  border-radius: 24px; padding: 32px; min-height: 350px;
  display: flex; align-items: center; justify-content: center;
}
.mt-mockup-inner { width: 100%; }

.mt-itinerary-cards { display: flex; flex-direction: column; gap: 12px; }
.mt-itin-card {
  display: flex; gap: 16px; background: #fff; border-radius: 16px; padding: 16px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
}
.mt-itin-img { width: 60px; height: 60px; border-radius: 12px; flex-shrink: 0; }
.mt-itin-text { display: flex; flex-direction: column; gap: 4px; }
.mt-itin-text strong { font-size: 16px; }
.mt-itin-text span { font-size: 13px; color: #888; }

.mt-reco-cards { display: flex; flex-direction: column; gap: 16px; }
.mt-reco-card {
  background: #fff; border-radius: 16px; overflow: hidden;
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
}
.mt-reco-card img { width: 100%; height: 150px; object-fit: cover; }
.mt-reco-info { padding: 14px; }
.mt-reco-info strong { display: block; font-size: 15px; margin-bottom: 4px; }
.mt-reco-info span { font-size: 13px; color: #888; }

.mt-crew-mockup { background: #fff; border-radius: 20px; padding: 24px; box-shadow: 0 4px 24px rgba(0,0,0,0.08); }
.mt-crew-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; }
.mt-crew-header strong { font-size: 18px; }
.mt-crew-avatars { display: flex; gap: -8px; }
.mt-crew-av { width: 32px; height: 32px; border-radius: 50%; margin-left: -8px; border: 2px solid #fff; }
.mt-crew-tabs { display: flex; gap: 16px; margin-bottom: 20px; padding-bottom: 12px; border-bottom: 1px solid #eee; font-size: 14px; color: #888; }
.mt-crew-tab-active { color: #1a1a1a; font-weight: 600; border-bottom: 2px solid #1a1a1a; padding-bottom: 10px; margin-bottom: -13px; }
.mt-crew-comment { display: flex; gap: 12px; align-items: flex-start; margin-bottom: 12px; background: #f8f8f8; border-radius: 12px; padding: 12px; }
.mt-crew-av-sm { width: 28px; height: 28px; border-radius: 50%; flex-shrink: 0; }
.mt-crew-comment strong { font-size: 14px; display: block; }
.mt-crew-comment p { font-size: 13px; color: #666; margin: 2px 0 0; }
.mt-crew-reply { display: flex; gap: 12px; align-items: center; padding: 8px 12px; }
.mt-crew-reply p { font-size: 14px; }

.mt-receipt-mockup { display: flex; flex-direction: column; align-items: center; gap: 16px; }
.mt-receipt-card { background: #fff; border-radius: 16px; padding: 20px; box-shadow: 0 4px 20px rgba(0,0,0,0.08); width: 300px; }
.mt-receipt-header { font-size: 16px; font-weight: 600; margin-bottom: 12px; }
.mt-receipt-line { height: 8px; background: #eee; border-radius: 4px; margin-bottom: 8px; }
.mt-receipt-line.short { width: 60%; }
.mt-receipt-tabs { display: flex; gap: 16px; font-size: 13px; color: #888; margin-top: 12px; }
.mt-forward-btn {
  background: #1a1a1a; color: #fff; border: none; border-radius: 100px;
  padding: 14px 28px; font-size: 15px; font-weight: 500; cursor: pointer;
  display: flex; align-items: center; gap: 8px;
}

/* ── NEW AT MINDTRIP ── */
.mt-section-new { background: #f0f2f5; padding-top: 100px; }
.mt-new-grid {
  display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px;
  max-width: 1200px; margin: 48px auto 0;
}
.mt-new-card {
  border-radius: 24px; padding: 24px; min-height: 380px;
  display: flex; flex-direction: column;
}
.mt-new-card-img {
  width: 100%; height: 200px; border-radius: 16px; overflow: hidden; margin-bottom: 16px;
}
.mt-new-card-img img { width: 100%; height: 100%; object-fit: cover; }
.mt-new-card h3 { font-size: 20px; font-weight: 700; margin-bottom: 8px; }
.mt-new-card p { font-size: 14px; color: #444; line-height: 1.5; flex: 1; }
.mt-try-link { font-size: 14px; font-weight: 600; color: #1a1a1a; text-decoration: none; margin-top: 12px; }

/* ── APP CTA ── */
.mt-section-app { background: #f0f2f5; text-align: center; padding: 40px 64px 80px; }
.mt-app-cta { max-width: 600px; margin: 0 auto; }
.mt-app-text { font-size: 18px; font-weight: 500; margin-bottom: 20px; }
.mt-appstore-btn {
  display: inline-flex; align-items: center; gap: 8px;
  background: #1a1a1a; color: #fff; border-radius: 100px;
  padding: 14px 28px; font-size: 15px; font-weight: 500; text-decoration: none;
}

/* ── ADVENTURE ── */
.mt-section-adventure { background: #f0f2f5; }
.mt-adventure-row {
  display: grid; grid-template-columns: 1fr 1fr; gap: 64px;
  align-items: center; max-width: 1200px; margin: 64px auto;
}
.mt-adventure-row.mt-reverse { direction: rtl; }
.mt-adventure-row.mt-reverse > * { direction: ltr; }
.mt-adventure-mockup {
  border-radius: 24px; padding: 32px; min-height: 300px;
  display: flex; align-items: center; justify-content: center;
}
.mt-map-preview { position: relative; }
.mt-map-overlay {
  position: absolute; bottom: 16px; left: 16px;
  background: rgba(0,0,0,0.5); color: #fff; padding: 8px 16px;
  border-radius: 8px; font-weight: 600;
}
.mt-reco-card-lg { text-align: center; }
.mt-reco-card-lg img { border-radius: 16px; width: 100%; margin-bottom: 12px; }
.mt-reco-card-lg strong { display: block; font-size: 18px; margin-bottom: 4px; }
.mt-reco-card-lg span { font-size: 14px; color: #888; }
.mt-trip-card { background: #fff; border-radius: 16px; padding: 24px; box-shadow: 0 2px 16px rgba(0,0,0,0.06); }
.mt-trip-card strong { font-size: 17px; display: block; margin-bottom: 16px; }
.mt-trip-items { display: flex; flex-direction: column; gap: 10px; }
.mt-trip-item { font-size: 14px; padding: 8px 12px; background: #f8f8f8; border-radius: 10px; }
.mt-collab-preview { background: #fff; border-radius: 16px; padding: 24px; box-shadow: 0 2px 16px rgba(0,0,0,0.06); }
.mt-collab-header { font-size: 17px; font-weight: 700; margin-bottom: 16px; display: flex; justify-content: space-between; }
.mt-collab-header span { font-size: 13px; color: #888; font-weight: 400; }
.mt-collab-msg { font-size: 14px; padding: 8px 0; border-bottom: 1px solid #f0f0f0; }
.mt-collab-msg strong { font-weight: 600; }
.mt-inspo-preview { position: relative; }
.mt-inspo-overlay {
  margin-top: 16px; display: flex; flex-direction: column; gap: 8px;
}
.mt-inspo-overlay strong { font-size: 18px; }
.mt-btn-customize {
  background: linear-gradient(135deg, #c084fc, #818cf8);
  color: #fff; border: none; border-radius: 100px; padding: 12px 24px;
  font-size: 15px; font-weight: 600; cursor: pointer;
}
.mt-btn-save {
  background: #fff; border: 1.5px solid #e0e0e0; border-radius: 100px;
  padding: 12px 24px; font-size: 15px; font-weight: 500; cursor: pointer;
}

/* ── ORGANIZE / BOOKING ── */
.mt-section-organize { background: #fff; }
.mt-booking-grid {
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px;
  max-width: 1000px; margin: 48px auto 0;
}
.mt-booking-card {
  position: relative; background: #f8f8f8; border-radius: 20px;
  padding: 28px; text-align: center;
}
.mt-booking-icon { font-size: 36px; margin-bottom: 12px; }
.mt-booking-card h3 { font-size: 18px; font-weight: 700; margin-bottom: 8px; }
.mt-booking-card p { font-size: 14px; color: #666; line-height: 1.5; }
.mt-soon-badge {
  position: absolute; top: 12px; right: 12px;
  background: #e0e0e0; color: #666; border-radius: 100px;
  padding: 4px 12px; font-size: 11px; font-weight: 600;
}

/* ── GET INSPIRED ── */
.mt-section-inspired { background: #f0f2f5; }
.mt-inspiration-grid {
  display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px;
  max-width: 1200px; margin: 0 auto;
}
.mt-inspo-card {
  position: relative; border-radius: 20px; overflow: hidden;
  height: 320px; display: block; text-decoration: none;
}
.mt-inspo-card img {
  width: 100%; height: 100%; object-fit: cover;
  transition: transform 0.4s;
}
.mt-inspo-card:hover img { transform: scale(1.05); }
.mt-inspo-card-overlay {
  position: absolute; bottom: 0; left: 0; right: 0;
  padding: 20px;
  background: linear-gradient(transparent, rgba(0,0,0,0.7));
}
.mt-inspo-card-overlay h3 { color: #fff; font-size: 16px; font-weight: 700; margin: 0; }
.mt-inspo-avatar {
  width: 28px; height: 28px; border-radius: 50%;
  background: linear-gradient(135deg, #f093fb, #f5576c);
  margin-bottom: 8px;
}

/* ── CREATOR ── */
.mt-section-creator { background: #f0f2f5; }
.mt-creator-box {
  background: #f5c6b3;
  border-radius: 32px;
  padding: 80px;
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 48px; align-items: center;
  position: relative; overflow: hidden;
  max-width: 1300px; margin: 0 auto;
}
.mt-creator-left { position: relative; z-index: 2; }
.mt-creator-photos {
  position: relative; display: flex; gap: 16px; justify-content: center;
}
.mt-cr-photo {
  border-radius: 16px; object-fit: cover; box-shadow: 0 8px 32px rgba(0,0,0,0.15);
}
.mt-cr-1 { width: 200px; height: 280px; transform: rotate(-5deg); }
.mt-cr-2 { width: 240px; height: 320px; z-index: 2; }
.mt-cr-3 { width: 180px; height: 260px; transform: rotate(5deg); }

/* ── TAG US ── */
.mt-section-tag { background: #fff; }
.mt-tag-grid {
  display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px;
  max-width: 1200px; margin: 48px auto 0;
}
.mt-tag-grid img {
  width: 100%; height: 280px; object-fit: cover;
  border-radius: 16px;
}

/* ── PRESS ── */
.mt-section-press { background: #fff; }
.mt-press-grid {
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px;
  max-width: 1000px; margin: 32px auto 0;
}
.mt-press-card {
  text-decoration: none; color: #1a1a1a;
  background: #f8f8f8; border-radius: 16px; padding: 24px;
  transition: transform 0.2s;
}
.mt-press-card:hover { transform: translateY(-4px); }
.mt-press-logo { font-size: 13px; font-weight: 700; color: #888; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 1px; }
.mt-press-card p { font-size: 15px; font-weight: 600; line-height: 1.4; margin: 0; }

/* ── ALLIES ── */
.mt-section-allies { background: #f0f2f5; text-align: center; }
.mt-allies-logos {
  display: flex; justify-content: center; gap: 48px;
  margin: 32px 0; flex-wrap: wrap;
}
.mt-ally-logo { font-size: 20px; font-weight: 700; color: #999; }
.mt-allies-cta { margin-top: 24px; }

/* ── FOOTER ── */
.mt-footer {
  background: #1a1a1a; color: #fff; padding: 64px;
}
.mt-footer-inner {
  display: grid; grid-template-columns: repeat(4, 1fr); gap: 48px;
  max-width: 1200px; margin: 0 auto 48px;
}
.mt-footer-col h4 { font-size: 14px; font-weight: 600; margin-bottom: 16px; color: #fff; }
.mt-footer-col a {
  display: block; color: #999; text-decoration: none;
  font-size: 14px; padding: 4px 0; transition: color 0.2s;
}
.mt-footer-col a:hover { color: #fff; }
.mt-footer-bottom {
  display: flex; justify-content: space-between; align-items: center;
  border-top: 1px solid #333; padding-top: 24px;
  max-width: 1200px; margin: 0 auto;
}
.mt-footer-logo {
  display: flex; align-items: center; gap: 8px;
  font-size: 18px; font-weight: 700; color: #fff;
}
.mt-footer-social { display: flex; gap: 16px; }
.mt-footer-social a { color: #999; text-decoration: none; font-size: 16px; }
.mt-footer-social a:hover { color: #fff; }
.mt-footer-legal { display: flex; gap: 24px; }
.mt-footer-legal a { color: #666; text-decoration: none; font-size: 13px; }
.mt-footer-legal a:hover { color: #fff; }

/* ── RESPONSIVE ── */
@media (max-width: 768px) {
  .mt-nav-center { display: none; }
  .mt-section { padding: 60px 24px; }
  .mt-split { grid-template-columns: 1fr; gap: 32px; }
  .mt-hero { padding: 80px 24px 40px; }
  .mt-hero-visual { display: none; }
  .mt-new-grid { grid-template-columns: 1fr 1fr; }
  .mt-inspiration-grid { grid-template-columns: 1fr 1fr; }
  .mt-booking-grid { grid-template-columns: 1fr 1fr; }
  .mt-adventure-row { grid-template-columns: 1fr; }
  .mt-creator-box { grid-template-columns: 1fr; padding: 40px; }
  .mt-footer-inner { grid-template-columns: 1fr 1fr; }
  .mt-press-grid { grid-template-columns: 1fr; }
  .mt-tag-grid { grid-template-columns: 1fr 1fr; }
}
`;
