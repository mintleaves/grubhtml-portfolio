"use client";
import { FC } from "react";
import { InfiniteMovingCards } from "@/components/Moving-cards";

const testimonials = [
  {
    quote:
      "I am very satisfied with the quality of the work and the communication from the seller. They go above and beyond to ensure satisfactory delivery of the job, contribute with their own ideas for improvements, and provide constant visibility and updates on progress.",
    name: "Sri Rahayu",
    title: "Product Designer, Germany",
  },

  {
    quote:
      "DevWiz is the person you need for your projects ! His communication, the fact he gives you updates every day, the way he handles problems and demands, are the reason you want to do business with him ! I was scared about giving my project to someone on Fiverr and didnt know what to expect. DevWiz gave me so much more, my project is way better that I was expecting. I gave him a second project right after the delivery without hesitation ! Thanks buddy it was a pleasure doing business with you !",
    name: "AceJimbo",
    title: "Professional Gaming Streamer, Canada",
  },
  {
    quote:
      "Our project was delivered significantly sooner than expected, and communication was great throughout the entire project. This is a professional, friendly and committed seller.",
    name: "Sri Rahayu",
    title: "Product Designer, Germany",
  },
  {
    quote:
      "This is the best dev you can hire ! I recommend BUYERS to be alert about his local time, he will answer you whatever the time because fiverr's workers need to answer fast to the client for their stats and he wants your satisfaction. But it's way better to chat with him during his day time :) Amazing work for my 2nd project with him, always listening to my demands, always finding solutions and he helped me a lot with my website. I recommend that guy a lot !",
    name: "AceJimbo",
    title: "Professional Gaming Streamer, Canada",
  },
  {
    quote: "3rd project with him.... always perfect job and communication.",
    name: "AceJimbo",
    title: "Professional Gaming Streamer, Canada",
  },
  {
    quote:
      "4th project with this guys and as always im really happy with his work ! I recommend him to everyone !",
    name: "AceJimbo",
    title: "Professional Gaming Streamer, Canada",
  },
  {
    quote: "Thanks for the job.",
    name: "AceJimbo",
    title: "Professional Gaming Streamer, Canada",
  },
  {
    quote:
      "Really like doing business with him. He takes his time to deliver a perfect project. I recommand him highly !",
    name: "AceJimbo",
    title: "Professional Gaming Streamer, Canada",
  },
  {
    quote: "Really happy with the delivery again !",
    name: "AceJimbo",
    title: "Professional Gaming Streamer, Canada",
  },
  {
    quote:
      "Fastest response times, great communication, very trustworthy. We plan to continue working with him on many projects in the future. He showed great patience while walking me through creating a MySQL Database for the first time, and he is very much appreciated.",
    name: "WeAre360apparel",
    title: "Screen printing shop, Washington",
  },
  {
    quote: "You are the best!!",
    name: "Rorosa11",
    title: "Israel",
  },
  {
    quote: "Very responsive and fast service!",
    name: "WeAre360apparel",
    title: "Screen printing shop, Washington",
  },
  {
    quote: "Thanks again !",
    name: "AceJimbo",
    title: "Professional Gaming Streamer, Canada",
  },
];

const Testimonials: FC = () => {
  return (
    <section className="section" id="testimonials">
      <div className="container !max-w-full">
        <h2 className="text-4xl md:text-7xl lg:text-8xl">Trusted by clients</h2>

        <div className="mt-10 md:mt-16 lg:mt-20">
          <div className="rounded-md flex flex-col items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards
              items={testimonials}
              direction="right"
              speed="slow"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
