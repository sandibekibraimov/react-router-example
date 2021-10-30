import React from 'react';
import { useLocation } from 'react-router-dom';

const Contact = () => {
  const queryString = useLocation().search;
  const queryParams = new URLSearchParams(queryString);

  const name = queryParams.get('name');

  return (
    <div>
      <h2>Hey {name}, contact us</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga eius
        ratione quae eveniet eaque aliquid corrupti possimus repellendus
        repellat veritatis sint obcaecati placeat fugit asperiores eos numquam
        quam voluptatem eum amet quas, nihil alias. Explicabo iusto dolor
        debitis inventore corrupti!
      </p>
    </div>
  );
};

export default Contact;
