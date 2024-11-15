import React from 'react';
import { items } from '../constants';

function Company() {
  return (
    <div className="bg-white text-black mt-16">
      {/* Main Content with Padding */}
      <div className=" p-8 space-y-20">

        {/* Section 1: Long Term Growth */}
        <section className="text-center">
        <h2 className="text-7xl font-bold text-black text-left ml-64 leading-tight">
          <span className='text-red-600 text-3xl'>AI MASTER CHEF <br/></span>
          <span className='text-red-600'>Long Term Growth - Elevating</span> <br /> Culinary Experiences,<br /> Expanding Horizons
        </h2>
          <p className="mt-4 text-3xl max-w-2xl text-left ml-64 leading-10">
            Dedicated to elevating culinary experiences, we focus on providing high-quality ingredients and sustainable practices.
          </p>
          <p className="mt-4 text-lg max-w-2xl text-left ml-64">
            At AI Chef Master, we’re dedicated to advancing culinary boundaries and expanding
            our impact in the market. Our growth-oriented vision focuses on creating user-centered experiences
            with an eye on the future, underpinned by strategic goals that drive innovation and success.
          </p>

          <div className="flex flex-wrap justify-center gap-20 mt-20  ">
            {items.map((item, index) => (
              <div key={index} className="bg-gray-100 shadow-md p-6 pb-36 rounded-lg max-w-xs text-left ">
                <h3 className="text-3xl font-semibold text-orange-600 text-center mb-10">{item.title}</h3>
                <hr className="border-t-2 border-gray-400 mb-6" />
                <p className="mt-2 text-black text-lg">{item.description}</p>
              </div>
            ))}
          </div>

        </section>

        {/* Section 2: R&D */}
        <section className="text-center mt-36 mb-36 ">
          <div className="flex flex-col md:flex-row items-center justify-center gap-32">
            <img src="src/assets/research.jpg" alt="R&D" className="w-1/3 rounded-2xl shadow-lg" />
            <div className="text-left md:w-1/2">
              <h2 className="text-7xl font-bold mb-15">
                <span className="text-red-600">R&D</span> - Innovation Hub<br />and Technological Advancements
              </h2>
              <p className="mt-4 text-2xl text-gray-950">
                Our Research and Development (R&D) division is the heart of our innovation journey, driving culinary tech forward through cutting-edge features and dynamic solutions.
              </p>
            </div>
          </div>

          {/* R&D Details */}
          <div className="mt-6 space-y-4">
            {['Ingredient Sourcing', 'Advanced Techniques', 'Quality Assurance', 'Customer Feedback'].map((topic, idx) => (
              <div key={idx} className="bg-gray-100 p-4 rounded-lg shadow">
                <h3 className="text-xl font-semibold text-orange-600">{topic}</h3>
                <p className="text-gray-600">Description about {topic} and how it enhances our offerings.</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Customer Priorities */}
        <section className="text-center mt-16">
          <h2 className="text-4xl font-bold text-orange-600">
            Customer Priorities - Commitment to Excellence and Satisfaction
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Ensuring customer satisfaction with every dish and experience is our highest priority.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            {['Service Quality', 'Taste Consistency', 'Health and Safety', 'Personalized Experience'].map((priority, index) => (
              <div key={index} className="bg-white shadow-md p-6 rounded-lg max-w-xs text-left">
                <h3 className="text-2xl font-semibold text-orange-600">{priority}</h3>
                <p className="mt-2 text-gray-600">
                  We ensure that our focus on {priority} is constantly enhanced to meet our customers' expectations.
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Company;
