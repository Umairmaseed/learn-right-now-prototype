import Cards from '../components/Cards';
import Footer from '../components/_App/Footer';
import Navbar from '../components/_App/Navbar';
import React from 'react';

function Language() {
  const courseData = [
    {
      img: '/Language/German a1 copy.png',
      title: 'German | A1',
      discription:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      link: 'c73e16f8-8eff-421f-8d5b-af5dc91b1909',
      rating: '4.8(12)',
      time: '80min',
    },
    {
      img: '/Language/German A2.png',
      title: 'German | A2',
      discription:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      link: '',
      rating: '4.4(66)',
      time: '30min',
    },
    {
      img: '/Language/German B1.png',
      title: 'German | B1',
      discription:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      link: '',
      rating: '4.2(89)',
      time: '60min',
    },
    {
      img: '/Language/German B2.png',
      title: 'German | B2',
      discription:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      link: '',
      rating: '4.8(12)',
      time: '80min',
    },
    {
      img: '/Language/Mandarin HSK Level 1 copy.png',
      title: 'Mandarin | HSK Level 1',
      discription:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      link: '6fef8825-9bab-47b6-9ee7-15f19f3377de',
      rating: '4.3(54)',
      time: '50min',
    },
    {
      img: '/Language/Mandarin HSK Level 2 copy.png',
      title: 'Mandarin | HSK Level 2',
      discription:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      link: '',
      rating: '4.9(16)',
      time: '60min',
    },
    {
      img: '/Language/Mandarin HSK Level 3 copy.png',
      title: 'Mandarin | HSK Level 3',
      discription:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      link: '',
      rating: '4.8(12)',
      time: '80min',
    },
    {
      img: '/Language/Mandarin HSK Level 4 copy.png',
      title: 'Mandarin | HSK Level 4',
      discription:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      link: '',
      rating: '4.1(12)',
      time: '35min',
    },
  ];
  const CardLayout = courseData.map((course) => {
    return <Cards data={course} category={'Languages'} />;
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
            backgroundImage: "url('Languages copy background.png')",
            backgroundSize: 'cover',
          }}
        >
          <div className="banner-text">
            <h2>Languages</h2>
          </div>
          <img src="/Language.gif" />
        </div>
        <div className="container  grid grid--3-cols">{CardLayout}</div>
      </main>
      <Footer />
    </div>
  );
}

export default Language;
