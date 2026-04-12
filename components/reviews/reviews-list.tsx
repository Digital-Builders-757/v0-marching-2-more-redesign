"use client"

import { Star } from "lucide-react"

const reviews = [
  {
    name: "The Sanchez Family",
    affiliation: "U.S. Navy",
    quote: "So excited for our new journey! I can't thank Donavan McFadden and the Marching2More team enough for finding the perfect home for my little family! He was extremely dedicated to finding a home that fit our needs and wants! Here's to new beginnings!",
    avatar: "S",
  },
  {
    name: "The Cole Family",
    affiliation: "U.S. Navy",
    quote: "Donavan McFadden assisted my wife and I in purchasing our first home together. Buying a home for the first time can be scary and confusing, it certainly was for us. We had spoken to and tried to work with different agents before we settled in with Mr. Donavan. Our experiences before and after working with him were night and day. He was very responsive and really took his time to explain everything we did not know. He took what can be a laborious and stressful process and made it an enjoyable one. For as long as we are in the Hampton roads area we will use Donavan McFadden as our agent to buy and sell. Thank you Donavan!",
    avatar: "C",
  },
  {
    name: "Karen Gonzalez",
    affiliation: "U.S. Navy",
    quote: "Can't recommend enough! Donavan McFadden was a blessing helping my husband and I find a home (not a house a home). He was patient and diligent throughout the entire process and was readily available at all times. Not only did he give us an amazing experience but then he topped it off with an amazing House Warming Gift. He has stayed in touch even after the closing and helped with referrals to any home improvement needs. He was honest and a pleasure to work with! Highly recommend! Him and his team will take care of you!",
    avatar: "K",
  },
  {
    name: "Chris & Britt Perry",
    affiliation: "CMP Appraisals",
    quote: "We had the great pleasure of working with Donavan on a recent case. As an appraisal office there are a few traits we truly treasure in an agent: being readily available, flexible with scheduling, and a desire to understand the appraisal process. Donavan hit all three and made it a grand slam by genuinely being class act to spend some time with. Highly recommend.",
    avatar: "C",
  },
  {
    name: "Terri Hill",
    affiliation: "Hampton Roads Resident",
    quote: "When you have family and friends you care about you want to refer them to someone you can trust! Roger Lee was that person for me. He built trust. He was relatable. He was patient! He helped my relative and I truly believe gained a repeat client.",
    avatar: "T",
  },
  {
    name: "Timothy L. Cunningham",
    affiliation: "U.S. Navy",
    quote: "My wife and I have bought 3 houses and sold 2, but our experience with Mr. McFadden has been hands down the smoothest, fastest, and easiest. He took care of everything we needed while selling our home, was always quick to respond, and extremely professional. I would recommend in a heartbeat. No other realtor we have worked with has come close to providing the level of expertise we experienced while working with McFadden.",
    avatar: "T",
  },
  {
    name: "The McGoogan Family",
    affiliation: "Hampton PD",
    quote: "We were at a spot in our lives where we were desperate for a place of our own, and honestly it felt hopeless. We looked at houses and none felt like home, but Donovan showed us a house and truly it was like it was meant for us. He was so positive every step of the way with us, continually asking us about our needs, and always being respectful about our wishes. He's casual, professional, and truthful about what you're getting into buying a home. I wouldn't have wanted to have anyone else on my side for a home purchase. Truly one of kind and honestly the process was so easy. Thankful for a realtor you can trust.",
    avatar: "M",
  },
  {
    name: "Dwayne Jenkins",
    affiliation: "Credit Kwondo",
    quote: "Donny and Roger are an amazing 1-2 punch for both buyers and sellers in the VA Beach area! They are constantly providing valuable information through seminars and education in the community. They are going to make sure the home you buy fits your financial needs and your family's needs.",
    avatar: "D",
  },
]

export function ReviewsList() {
  return (
    <section className="bg-[#244b2a]">
      <div className="px-6 py-16 md:px-16 md:py-20 lg:px-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="relative rounded-lg bg-white p-6 shadow-sm"
                data-gsap="fade-up"
                data-gsap-delay={index * 0.05}
              >
                {/* Google G */}
                <div className="absolute left-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow">
                  <span className="text-sm font-bold text-gray-700">G</span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="h-14 w-14 overflow-hidden rounded-full bg-gray-200">
                    <div className="flex h-full w-full items-center justify-center text-lg font-semibold text-gray-700">
                      {review.avatar}
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-m2m-deep" style={{ fontFamily: "var(--font-display)" }}>
                      {review.name}
                    </p>
                    <p className="text-xs text-gray-500" style={{ fontFamily: "var(--font-sans)" }}>
                      {review.affiliation}
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-m2m-gold text-m2m-gold" />
                  ))}
                </div>

                <p className="mt-4 text-sm leading-relaxed text-gray-700" style={{ fontFamily: "var(--font-sans)" }}>
                  {review.quote}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
