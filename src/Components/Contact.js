import React from 'react';

const ContactCard = () => {
  return (
    <div className="min-h-screen bg-blue-100 flex justify-center items-start py-0 px-4">
      <div className="bg-white  shadow-xl rounded-2xl p-8 max-w-5xl w-full mt-10">
        <h2 className="text-2xl font-bold text-blue-600 mb-4 border-b border-blue-500 pb-2">
          Contact Me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg">
          <div className="space-y-2">
            <p><strong>Name:</strong> Balavenkatesh S</p>
            <p>
              <strong>Email:</strong>{' '}
              <a href="mailto:vashbala@gmail.com" className="text-blue-600 hover:underline">
                vashbala@gmail.com
              </a>
            </p>
            <p><strong>Mobile:</strong> 7373878201</p>
            <div>
              <h3 className="font-semibold">Location</h3>
              <p>Trichy, Tamil Nadu, India</p>
            </div>
          </div>
          <div className="space-y-6 mt-4">
            <p>
              <strong>LinkedIn:</strong>{' '}
              <a
                href="https://www.linkedin.com/in/balavenkatesh-s-705567220"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                linkedin.com/in/balavenkatesh-s-705567220
              </a>
            </p>
            <p>
              <strong>GitHub:</strong>{' '}
              <a
                href="https://github.com/Balavenkatesh-sivalingam"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                github.com/Balavenkatesh-sivalingam
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
