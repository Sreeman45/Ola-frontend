import { useState, useEffect } from "react";

interface Testimonial {
  name: string;
  title: string;
  testimonial: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Priya",
    title: "Fashion designer",
    testimonial: "This product is amazing! It changed our Life style.",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    name: "Aakash",
    title: "Model",
    testimonial: "Beautiful scent,polishing smell.",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Rahul",
    title: "Model",
    testimonial:
      "Highly recommend! It improved My styling process dramatically.",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    name: "Sanketh",
    title: "Businessmen",
    testimonial: "Great experience!I would recommend to others.",
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    name: "Ritika",
    title: "Beautician",
    testimonial: "Fantastic service, my team has been using it for months now!",
    avatar: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    name: "prasad",
    title: "businessmen",
    testimonial:
      "I can’t imagine going out without this. Truly a game changer.",
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
  },
];

export default function Testimonias() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const displayedTestimonials = [
    testimonials[(currentTestimonial + 0) % testimonials.length],
    testimonials[(currentTestimonial + 1) % testimonials.length],
    testimonials[(currentTestimonial + 2) % testimonials.length],
  ];

  return (
    <div className="max-w-7xl mx-auto p-8">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gray-100 opacity-50 z-0" />
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 transition-all transform duration-700">
          {displayedTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 shadow-lg transition-all transform duration-700"
            >
              <div className="flex justify-center mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full border-4 border-indigo-500"
                />
              </div>
              <p className="text-xl font-semibold mb-2">{testimonial.name}</p>
              <p className="text-md text-gray-500 mb-4">{testimonial.title}</p>
              <p className="text-lg italic">{testimonial.testimonial}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
