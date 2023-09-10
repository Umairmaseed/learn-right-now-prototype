import React from 'react';

function Categories() {
  const categoriesData = [
    {
      name: 'Boost IQ, Expand Knowledge: Unleash Your Brilliance!',
      description: ` `,
      gif: '/General-Knowledge.GIF',
      link: '/general-knowledge',
      backgrouund: '#63118f',
    },
    {
      name: 'Find your passion and UPSKILL!',
      description: ``,
      gif: '/Skills.GIF',
      link: '/skill-up',
      backgrouund: '#2c81f6',
    },
    {
      name: 'Learn a language, become a Global Citizen!',
      description: ``,
      gif: '/Language.GIF',
      link: '/language',
      backgrouund: '#fd4954',
    },
    {
      name: 'Explore careers, choose your calling!',
      description: ` `,
      gif: '/Career-Exploration.GIF',
      link: '/career-explore',
      backgrouund: '#08bc7f',
    },
    {
      name: 'Need help with Exam Prep? We’ve got you!',
      description: ``,
      gif: '/Exam-Prep.GIF',
      link: '/exam-prep',
      backgrouund: '#160c27',
    },
  ];
  const categories = categoriesData.map((data, i) => {
    return (
      <div
        className={
          i % 2 !== 0
            ? 'categories-row categories-row-reverse'
            : 'categories-row'
        }
        style={{ backgroundColor: data.backgrouund }}
      >
        <div className="category-text">
          <h2 className="category-heading">{data.name}</h2>
          <p className="category-description">{data.description}</p>
          <a href={data.link} class="category-button">
            Explore &rarr;
          </a>
        </div>
        <div className="category-img">
          <img src={data.gif} alt="exam prep" />
        </div>
      </div>
    );
  });
  return (
    <section className="categories-container ">
      <header className="categories-header">
        <h2 className="categories-heading">Categories</h2>
      </header>
      <div className="">{categories}</div>
    </section>
  );
}

export default Categories;
