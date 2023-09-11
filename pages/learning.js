import ProgressCard from '@/components/ProgressCard';
import Footer from '@/components/_App/Footer';
import Navbar from '@/components/_App/Navbar';

export default function learning() {
  const courseData = [
    {
      img: '/skill-up/MIT CODING FOR KIDS SCRATCJ.jpg',
      title: 'Coding for Kids with Scratch',
      discription:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      link: '186a0c09-ad1c-4eb8-a3e4-1835ec461423',
      rating: '4.3(48)',
      time: '80min',
      complate: '100',
    },
    {
      img: '/Language/German a1 copy.png',
      title: 'German A1',
      discription:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      link: '186a0c09-ad1c-4eb8-a3e4-1835ec461423',
      rating: '4.1(148)',
      time: '180min',
      complate: '100',
    },
    {
      img: '/skill-up/MS word for beginners copy.png',
      title: 'MS Word',
      discription:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      link: '186a0c09-ad1c-4eb8-a3e4-1835ec461423',
      rating: '4.3(86)',
      time: '90min',
      complate: '100',
    },
    {
      img: '/skill-up/What is freelancing copy.png',
      title: 'What is Freelancing?',
      discription:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      link: '186a0c09-ad1c-4eb8-a3e4-1835ec461423',
      rating: '4.3(198)',
      time: '130min',
      complate: '87',
    },
    {
      img: '/skill-up/harvard cs50.jpg',
      title: 'Harvard CS50',
      discription:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      link: '186a0c09-ad1c-4eb8-a3e4-1835ec461423',
      rating: '4.3(198)',
      time: '70min',
      complate: '15',
    },
    {
      img: '/skill-up/Think like a coder copy.png',
      title: 'Think like a coder',
      discription:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      link: '186a0c09-ad1c-4eb8-a3e4-1835ec461423',
      rating: '4.3(96)',
      time: '85min',
      complate: '62',
    },
    {
      img: '/skill-up/Graphic with canva copy.png',
      title: 'Graphic Design',
      discription:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      link: '186a0c09-ad1c-4eb8-a3e4-1835ec461423',
      rating: '4.1(210)',
      time: '130min',
      complate: '43',
    },
  ];
  const CardLayout = courseData.map((course) => {
    return <ProgressCard data={course} category={'Skill Up'} />;
  });
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <div
          style={{ paddingTop: '9.6rem' }}
          className="container  grid grid--3-cols"
        >
          {CardLayout}
        </div>
        <Footer />
      </main>
    </>
  );
}
