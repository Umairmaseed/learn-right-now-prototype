import React from 'react';
import Cards from '../components/Cards';
import Footer from '../components/_App/Footer';
import Navbar from '../components/_App/Navbar';

function ExamPrep() {
  const courseData = [
    {
      img: '',
      title: 'SAT',
      discription:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      link: 'c578b27e-05fe-4ccb-a3d5-c42b20507471',
      rating: '4.8(12)',
      time: '80min',
    },
    {
      img: '',
      title: 'IELTS',
      discription:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      link: '014b0ba2-b368-4862-8fd1-04c2cb54b2ac',
      rating: '4.8(87)',
      time: '34min',
    },
    {
      img: '',
      title: 'MDCAT',
      discription:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      link: '7e05e5e9-0897-4a26-a09d-10ff04b9b08c',
      rating: '4.2(12)',
      time: '34min',
    },
    {
      img: '',
      title: 'ETEA',
      discription:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      link: '488dfcb4-448b-49a4-a08a-03e970dfddb8',
      rating: '4.8(12)',
      time: '80min',
    },
    {
      img: '',
      title: 'ECAT',
      discription:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      link: 'baddfed8-772f-4336-bc0f-86f4b63b37fd',
      rating: '4.7(23)',
      time: '46min',
    },
    {
      img: '',
      title: 'NET',
      discription:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      link: 'afcd70c8-78ff-4cc3-a22f-3179798be9a3',
      rating: '4.3(78)',
      time: '40min',
    },
    {
      img: '',
      title: 'PMA',
      discription:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      link: '',
      rating: '4.8(12)',
      time: '80min',
    },
  ];
  const CardLayout = courseData.map((course) => {
    return <Cards data={course} category={'Exam Preparation'} />;
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
            backgroundImage: "url('Exam Prep background.png')",
            backgroundSize: 'cover',
          }}
        >
          <div className="banner-text">
            <h2>Exam Preparation</h2>
          </div>
          <img src="/Exam-Prep.gif" />
        </div>
        <div className="container  grid grid--3-cols">{CardLayout}</div>
      </main>
      <Footer />
    </div>
  );
}

export default ExamPrep;
