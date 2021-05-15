import React, { useState } from 'react';
import data from './data';
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDedault();
    console.log('hello world');
  };
  return (
    <section className="section-center">
      <h3>tired of boring lorem ipsum?</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraphs:</label>
        <input
          type="number"
          name="amunt"
          id="amount"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type="submit" className="btn">
          generate
        </button>
      </form>
      <article className="lorem-text">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
          doloribus. Ab nostrum temporibus voluptas deleniti voluptate magnam
          sint ad laboriosam eius incidunt fuga, officiis neque ipsa eum
          excepturi eveniet aliquam.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
          doloribus. Ab nostrum temporibus voluptas deleniti voluptate magnam
          sint ad laboriosam eius incidunt fuga, officiis neque ipsa eum
          excepturi eveniet aliquam.
        </p>
      </article>
    </section>
  );
}

export default App;
