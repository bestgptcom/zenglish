"use client";

import Image from "next/image";
import { AiFillStar } from "react-icons/ai";

const ReviewList = [
  {
    pic: 'riley.png',
    name: 'Riley',
    age: 20,
    details: "Finally a language app that doesn't yell at me for missing a day!",
    review: 5,
  },
  {
    pic: 'kai.png',
    name: 'Kai',
    age: 23,
    details: 'Speaking French on the first session felt unreal.',
    review: 5,
  },
  {
    pic: 'amara.png',
    name: 'Amara',
    age: 18,
    details: 'The avatars make practice less awkward than IRL.',
    review: 4,
  },
  {
    pic: 'leo.png',
    name: 'Leo',
    age: 25,
    details: 'My learning anxiety disappears the moment I see Zen',
    review: 5,
  },
];

export default function ReviewSection() {
  return (
    <section className="w-full bg-[#F6F7F9] py-16">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-geist">
          Beta testers talk<br />about Zenglish
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ReviewList.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm p-6 flex flex-col h-full"
            >
              <div className="flex items-center gap-3 mb-4">
                <Image
                  className="rounded-full object-cover"
                  src={`/images/avatar/${item.pic}`}
                  width={40}
                  height={40}
                  alt={item.name}
                />
                <div>
                  <div className="font-semibold font-satoshi">{item.name}</div>
                  <div className="text-xs text-gray-500">{item.age}</div>
                </div>
              </div>
              <p className="flex-1 text-gray-800 mb-4 font-satoshi">{item.details}</p>
              <div className="flex gap-1">
                {Array.from({ length: item.review }).map((_, i) => (
                  <AiFillStar key={i} size={20} color="#FFB800" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
