import React from 'react';
import Cards from '../Cards';

function TopThreeCards() {
  const courseData = [
    {
      img: '/skill-up/Presentation with powerpoint copy.png',
      title: ' MS PowerPoint',
      discription:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      link: '',
      rating: '4.8(325)',
      time: '80min',
      points: '6500',
    },
    {
      img: '/skill-up/MIT CODING FOR KIDS SCRATCJ.jpg',
      title: 'Coding for Kids',
      discription:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      link: '',
      rating: '4.9(428)',
      time: '30min',
      points: '6000',
    },
    {
      img: '/skill-up/MS word for beginners copy.png',
      title: 'MS Word for beginners',
      discription:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      link: '',
      rating: '4.7(229)',
      time: '20min',
      points: '5800',
    },
  ];
  const CardLayout = courseData.map((course) => {
    return <Cards data={course} category={'Skill Up'} />;
  });
  return (
    <section
      className="conatiner padding-bottom-lg"
      style={{ backgroundColor: '#f6e8fe' }}
    >
      <header className="categories-header">
        <h2 className="categories-heading">Top Rated Courses 🚀</h2>
        <div className="container  grid grid--3-cols">{CardLayout}</div>
      </header>
    </section>
  );
}

export default TopThreeCards;
