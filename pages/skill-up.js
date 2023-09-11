import Cards from '../components/Cards';
import Footer from '../components/_App/Footer';
import Navbar from '../components/_App/Navbar';
import React from 'react';

function SkillUp() {
  const courseData = [
    {
      img: '/skill-up/MIT CODING FOR KIDS SCRATCJ.jpg',
      title: 'Coding for Kids with Scratch',
      discription:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      link: '186a0c09-ad1c-4eb8-a3e4-1835ec461423',
      rating: '4.3(48)',
      time: '80min',
      points: '6000',
    },
    {
      img: '/skill-up/HOW TO TAKE ADVANTAGE CHATGPT copy.png',
      title: 'How to use ChatGPT',
      discription:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      link: '',
      rating: '4.6(168)',
      time: '120min',
      points: '4500',
    },
    {
      img: '/skill-up/Graphic with canva copy.png',
      title: 'Graphic Design with Canva',
      discription:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      link: '4bfbd53f-61be-4c8c-8720-cab46c2ba55a',
      rating: '4.5(64)',
      time: '30min',
      points: '3400',
    },
    {
      img: '/skill-up/Presentation with powerpoint copy.png',
      title: 'Presentations with MS PowerPoint',
      discription:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      link: '5a4a0068-3dbc-4ec5-abbb-a3ea9b8ae7c3',
      rating: '4.8(18)',
      time: '80min',
      points: '5500',
    },
    {
      img: '/skill-up/MS word for beginners copy.png',
      title: 'MS Word for beginners',
      discription:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      link: '4fd3653b-3919-4151-8518-09dbe4a8681c',
      rating: '4.1(14)',
      time: '46min',
      points: '5000',
    },
    {
      img: '/skill-up/introduction to photoshop.jpg',
      title: 'Introduction to Adobe Photoshop',
      discription:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      link: 'e6ff12a1-b677-4cc5-bdf9-f32981baec5b',
      rating: '3.9(127)',
      time: '60min',
      points: '4000',
    },
    {
      img: '/skill-up/Think like a coder copy.png',
      title: 'Think like a coder Series ',
      discription:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      link: '53a44ba9-881e-473f-9882-5d27ffce4cca',
      rating: '4.4(17)',
      time: '50min',
      points: '4500',
    },
    {
      img: '/skill-up/harvard cs50.jpg',
      title: 'Harvard CS50 ',
      discription:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      link: '0afc3b09-3c41-4279-91b3-fd0fc030de6b',
      rating: '4.7(69)',
      time: '50min',
      points: '5000',
    },

    {
      img: '/skill-up/Video Editing with pro copy.png',
      title: 'Video Editing with Adobe Premiere Pro',
      discription:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      link: '',
      rating: '4.8(18)',
      time: '50min',
      points: '6500',
    },
    {
      img: '/skill-up/Communication skills copy.png',
      title: 'Communication Skills',
      discription:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      link: '',
      rating: '4.4(81)',
      time: '30min',
      points: '5500',
    },
    {
      img: '/skill-up/dining.jpeg',
      title: 'Dining etiquettes ',
      discription:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      link: '',
      rating: '4.9(8)',
      time: '40min',
      points: '4200',
    },
    {
      img: '/skill-up/Content writing copy.png',
      title: 'Content Writing 101',
      discription:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      link: '',
      rating: '4.8(18)',
      time: '30min',
      points: '4000',
    },
    {
      img: '/skill-up/What is freelancing copy.png',
      title: 'What is Freelancing? ',
      discription:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      link: '',
      rating: '4.8(12)',
      time: '80min',
      points: '3000',
    },
  ];
  const CardLayout = courseData.map((course) => {
    return <Cards data={course} category={'Skill Up'} />;
  });

  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main className="categories-page-main">
        <div
          className="banner"
          style={{
            backgroundImage: "url('Skill Up bg.png')",
            backgroundSize: 'cover',
          }}
        >
          <div className="banner-text">
            <h2>Skill Up</h2>
          </div>
          <img src="/Skills.gif" />
        </div>
        <div className="container  grid grid--3-cols">{CardLayout}</div>
      </main>
      <Footer />
    </div>
  );
}

export default SkillUp;
