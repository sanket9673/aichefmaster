import React from 'react';
import { stepsData, benefitsData } from '../constants';

const Career = () => {
  return (
    <div className="flex justify-center pt-10">
      {/* Outer Container with specific size and shadow */}
      <div
        className="shadow-lg p-8"
        style={{
          width: '1590px',
          height: '3973px',
          boxShadow: '0px -4px 20px rgba(0, 0, 0, 0.3)', // Customize shadow for a soft, blurred effect
          backgroundColor: 'white', // Background color of the container
          borderRadius: '8px', // Optional: Add a slight border radius
        }}
      >

        {/* Hero Section */}
        <section className="text-center mb-16">
          <h2 className="text-6xl font-bold mb-4">
            Bring Your Talent to <span className="text-red-600">AI Chef Master</span>
          </h2>
          <p className="text-xl text-black p-2">
            Join us in creating the next era of AI-driven culinary experiences! Be a part of an innovative team...
          </p>
          <p className="text-lg text-black p-6">
          At AI Chef Master, we're blending technology and creativity to transform how people cook,<br /> eat, and live healthier lives. We're looking for passionate, innovative minds who want to make<br /> a difference and push the boundaries of what's possible.
          </p>
        </section>

        {/* Why Work Section */}
        <section className="text-center ">
          <h3 className="text-3xl font-bold mb-6">Why Work at <span className="text-red-600">AI Chef Master?</span></h3>
          <div className="grid grid-cols-3 gap-8">
    {benefitsData.map((item, index) => (
      <div key={index} className="text-center">
        <div className="text-3xl mb-2">{item.icon}</div>
        <h4 className="font-bold mb-2">{item.title}</h4>
        <p className="text-gray-600">{item.description}</p>
      </div>
    ))}
  </div>
        </section>

        {/* Interviewing Section */}
        <section className="m-16 p-10">
          <h3 className="text-3xl font-bold text-center mb-6">Interviewing at <span className="text-red-600">AI Chef Master</span></h3>
          <p className="text-lg text-black text-center pb-8">
          Our hiring process is designed to find talented individuals <br />
          who are passionate about our mission and can add unique value to our team. Here’s what to expect:
          </p>
          <div className="grid grid-cols-4 gap-8">
          {stepsData.map((item, index) => (
            <div
              key={index}
              className={`p-6 ${index === 3 ? 'bg-black text-white' : 'bg-gray-100'}`}
            >
              <h4 className="text-4xl font-bold p-3">{item.step}</h4>
              <h5 className="font-semibold mb-2">{item.title}</h5>
              <p className="text-gray-600">{item.info}</p>
            </div>
          ))}
        </div>
        </section>

        {/* Fast Facts Section */}
        <section className="text-center mb-20">
          <h3 className="text-3xl font-bold mb-4">
            AI Chef Master: <span className="text-red-600">(Fast Facts)</span>
          </h3>

          <div className="text-gray-600 font-semibold grid  gap-x-4 text-lg">
            <span>Founded: 2024</span>
            <span>Headquarters: Mumbai</span>
            <span>Employees: A growing team of innovators dedicated to revolutionizing digital culinary experiences.</span> 
            <span>Core Products: Chef Assistant, Chef Intelligence, Nutrition Manager</span>
          </div>


        </section>

        {/* Values Section */}
        <section className="text-center mb-16 flex justify-center items-center">
  <div className="w-3/4">
    <h3 className="text-2xl font-bold mb-6">Our Values and Core Principles</h3>
    <div className="text-left grid grid-cols-2 gap-4 font-semibold items-center justify-center">
      {['Long-term Growth', 'Customer Priorities', 'Focus on R&D', 'Building Community'].map((value, index) => (
        <div
          key={index}
          className={`p-4 rounded ${index % 2 === 0 ? 'bg-gray-200' : 'bg-blue-100'}`}
        >
          {value}
        </div>
      ))}
    </div>
  </div>
</section>


        {/* Career Opportunities Section */}
        <section className="text-center mb-16">
          <h3 className="text-2xl font-bold mb-6">Explore Career Opportunities</h3>
          <p className="text-lg text-black mb-6">
          Looking to take your career to the next level? At AI Chef Master, we offer a wide range of roles to match your skills, passion, and
           <br/> ambition. Discover the perfect job for you in one of these fields:
          </p>
          <div className="grid grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="border p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Job Title {index + 1}</h4>
                <p className="text-gray-600 mb-4">Location: Remote</p>
                <button className="bg-green-600 text-white px-4 py-2 rounded">Apply Now</button>
              </div>
            ))}
          </div>
        </section>

        {/* Join Us Section */}
        <section className="text-center mb-16">
          <h3 className="text-3xl font-bold mb-6">
            Join Us at <span className="text-red-600">AI Chef Master</span>
          </h3>
          <p className="text-gray-600 text-lg">
          Ready to start your journey with us? We’re excited to see how your talents can help shape the future of AI Chef Master. 
          <br />Be a part of a team where creativity meets technology, and together, let’s make a real impact in the culinary world.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Career;


