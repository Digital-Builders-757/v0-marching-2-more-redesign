"use client";

// ============================================
// HERO VIDEO BACKGROUND COMPONENT
// A reusable video background with customizable
// clip path, overlay color, and opacity settings
// ============================================

interface HeroVideoBackgroundProps {
  /** Video source URL */
  videoSrc?: string;
  /** CSS clip-path value (e.g., "polygon(100% 0%, 100% 100%, 30% 100%)" for triangle) */
  clipPath?: string;
  /** Overlay color (hex or rgba) */
  overlayColor?: string;
  /** Overlay opacity (0-1) */
  overlayOpacity?: number;
  /** Video opacity (0-1) */
  videoOpacity?: number;
}

export function HeroVideoBackground({
  videoSrc = "https://cdn.pixabay.com/video/2020/05/25/40130-424930973_large.mp4",
  clipPath,
  overlayColor = "#1c4522",
  overlayOpacity = 0.4,
  videoOpacity = 0.5,
}: HeroVideoBackgroundProps) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Video container - optionally clipped to a shape */}
      <div 
        className="absolute inset-0"
        style={clipPath ? { clipPath } : undefined}
      >
        {/* Video element - autoplays muted and loops */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: videoOpacity }}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
        
        {/* Color overlay to blend video with section background */}
        <div 
          className="absolute inset-0" 
          style={{ 
            backgroundColor: overlayColor, 
            opacity: overlayOpacity 
          }} 
        />
      </div>
    </div>
  );
}

// ============================================
// USAGE EXAMPLES
// ============================================

/*
// Full screen video background
<HeroVideoBackground />

// Triangle clipped video (right side)
<HeroVideoBackground 
  clipPath="polygon(100% 0%, 100% 100%, 30% 100%)"
/>

// Custom video with different overlay
<HeroVideoBackground 
  videoSrc="https://your-video-url.mp4"
  overlayColor="#0f2818"
  overlayOpacity={0.6}
  videoOpacity={0.4}
/>

// Diamond shape clip
<HeroVideoBackground 
  clipPath="polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)"
/>
*/

// ============================================
// EXAMPLE: Section using the video background
// ============================================

export function ExampleSectionWithVideoBackground() {
  return (
    <section className="relative min-h-screen overflow-hidden" style={{ backgroundColor: "#1c4522" }}>
      {/* Video background with triangle clip on right side */}
      <HeroVideoBackground 
        clipPath="polygon(100% 0%, 100% 100%, 30% 100%)"
        videoSrc="https://cdn.pixabay.com/video/2020/05/25/40130-424930973_large.mp4"
        overlayColor="#1c4522"
        overlayOpacity={0.4}
        videoOpacity={0.5}
      />
      
      {/* Content goes here - use z-10 to appear above video */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-white text-5xl font-bold">Your Content Here</h1>
        <p className="text-white/90 text-xl mt-4">
          The video plays in a triangle shape on the right side of the section.
        </p>
      </div>
    </section>
  );
}
