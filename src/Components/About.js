const About = () => {
  return (
    <div className="max-w-6xl mx-auto p-10 bg-white shadow-2xl rounded-2xl mt-12">
      <h1 className="text-5xl font-extrabold text-blue-700 mb-8 border-b-4 border-blue-300 pb-4">
        About Fake Store
      </h1>

      <section className="mb-10">
        <h2 className="text-3xl font-semibold text-gray-800 mb-3">
          Our Mission
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Fake Store is a sample e-commerce platform built using modern web
          technologies, designed for developers and learners to understand
          real-world shopping cart functionality. It leverages the{" "}
          <a
            href="https://fakestoreapi.com"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            Fake Store API
          </a>{" "}
          to simulate a product-based shopping experience.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-semibold text-gray-800 mb-3">
          What You Can Do
        </h2>
        <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
          <li>Browse a wide range of fake products in a clean UI.</li>
          <li>Add or remove items from your cart seamlessly.</li>
          <li>View cart updates in real-time using React Context API.</li>
          <li>Navigate pages using React Router with nested routes.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-semibold text-gray-800 mb-3">
          Tech Stack Used
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-lg text-gray-700">
          <span>🔹 React JS</span>
          <span>🔹 React Router</span>
          <span>🔹 Context API</span>
          <span>🔹 Tailwind CSS</span>
          <span>🔹 Fake Store API</span>
          <span>🔹 useState / useContext Hooks</span>
          <span>🔹 Custom Hooks</span>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-semibold text-gray-800 mb-3">
          Why This App?
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          This project was developed as part of a learning journey in mastering
          frontend development. It serves as a practical example of building
          scalable and maintainable applications using reusable components and
          clean architecture.
        </p>
      </section>
    </div>
  );
};

export default About;
