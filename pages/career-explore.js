import React from 'react';
import Cards from '../components/Cards';
import Footer from '../components/_App/Footer';
import Navbar from '../components/_App/Navbar';

function CareerExplore() {
  const courseData = [
    {
      img: '',
      title: 'Software Engineering',
      discription:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
      link: '608f04db-c469-4cdd-8146-ee3b454d5130',
      rating: '4.8(12)',
      time: '80min',
    },
    {
      img: '',
      title: 'Doctors and Dentists',
      discription:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
      link: 'fdab03a8-ac74-46d3-9507-ee347b0e6456',
      rating: '4.3(78)',
      time: '40min',
    },
    {
      img: '',
      title: 'Civil Services',
      discription:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
      link: '70a633b4-2aeb-4431-8f20-2bcee600a80e',
      rating: '4.7(23)',
      time: '46min',
    },
    {
      img: '',
      title: 'Teachers',
      discription:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
      link: '',
      rating: '4.8(12)',
      time: '80min',
    },
    {
      img: '',
      title: 'Entrepreneurs',
      discription:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
      link: '',
      rating: '4.2(12)',
      time: '34min',
    },
    {
      img: '',
      title: 'Accountants',
      discription:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
      link: '',
      rating: '4.8(87)',
      time: '34min',
    },
    {
      img: '',
      title: 'Lawyers',
      discription:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
      link: '',
      rating: '4.8(12)',
      time: '80min',
    },
    {
      img: '',
      title: 'Scientists',
      discription:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
      link: '',
      rating: '4.2(12)',
      time: '34min',
    },
    {
      img: '',
      title: 'Media Professional',
      discription:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
      link: '',
      rating: '4.8(12)',
      time: '80min',
    },
  ];
  const CardLayout = courseData.map((course) => {
    return <Cards data={course} category={'Career Explore'} />;
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
            backgroundImage: "url('career exploration bg.png')",
            backgroundSize: 'cover',
          }}
        >
          <div className="banner-text">
            <h2>Career Exploration</h2>
          </div>
          <img src="/Career-Exploration.gif" />
        </div>
        <div className="container  grid grid--3-cols">{CardLayout}</div>
      </main>
      <Footer />
    </div>
  );
}

export default CareerExplore;
