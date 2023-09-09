import Cards from '../components/Cards';
import Footer from '../components/_App/Footer';
import Navbar from '../components/_App/Navbar';
import React from 'react';

function GeneralKnowledge() {
  const courseData = [
    {
      img: '',
      title: 'Black Holes explained',
      discription:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      link: '5190d087-fea9-459c-b55c-abb253a84802',
      rating: '4.8(12)',
      time: '80min',
    },
    {
      img: '',
      title: 'Measles Explained',
      discription:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      link: '317397da-cc3d-4857-8b4f-80fa0b1497fc',
      rating: '4.8(45)',
      time: '60min',
    },
    {
      img: '',
      title: 'Nuclear energy explained',
      discription:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      link: 'bfbe8744-492a-49ca-83a4-061f274bf689',
      rating: '4.1(12)',
      time: '30min',
    },
    {
      img: '',
      title: 'Plastic Pollution ',
      discription:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      link: 'dd670c23-4630-404a-83c4-2852ce4f7396',
      rating: '4.2(57)',
      time: '50min',
    },
    {
      img: '',
      title: 'Wormholes explained ',
      discription:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      link: 'ab4c006c-3754-4267-9991-2d07230b429f',
      rating: '4.8(12)',
      time: '80min',
    },
    {
      img: '',
      title: 'Whats an algorithm',
      discription:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      link: '2d5e8642-555b-4258-933b-79ed8f4392ed',
      rating: '4.3(78)',
      time: '40min',
    },
    {
      img: '',
      title: 'How does your immune system work ',
      discription:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      link: '8a026ff3-c0c0-471f-9247-1ba2c4fca70f',
      rating: '4.7(23)',
      time: '46min',
    },
    {
      img: '',
      title: 'How Car Engine Works',
      discription:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      link: '9c063eda-8782-4a76-8907-d1f0f7867b17',
      rating: '4.8(12)',
      time: '80min',
    },
    {
      img: '',
      title: 'What does the liver do ',
      discription:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      link: 'f4cfb7ea-011c-473e-9943-92de1fdb3fdb',
      rating: '4.2(12)',
      time: '34min',
    },
    {
      img: '',
      title: 'Why is it so hard to cure cancer ',
      discription:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      link: '5070f75b-b775-49e1-a7e2-cc86382f7be3',
      rating: '4.8(87)',
      time: '34min',
    },
  ];
  const CardLayout = courseData.map((course) => {
    return <Cards data={course} category={'General Knowledge'} />;
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
            backgroundImage: "url('General Knowledge backgdound.png')",
            backgroundSize: 'cover',
          }}
        >
          <div className="banner-text">
            <h2>General Knowledge</h2>
          </div>
          <img src="/General-Knowledge.gif" />
        </div>
        <div className="container  grid grid--3-cols">{CardLayout}</div>
      </main>
      <Footer />
    </div>
  );
}

export default GeneralKnowledge;
