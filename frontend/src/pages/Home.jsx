import { Hero, Images } from "@components";


const Home = () => {
  return (
    <div>
      <Hero />
      <Images images={[
        {
          src: 'https://picsum.photos/800/533',
          alt: 'Placeholder image',
          width: 800,
          height: 33
        },
        {
          src: 'https://picsum.photos/800/533',
          alt: 'Placeholder image',
          width: 800,
          height: 533
        },
        {
          src: 'https://picsum.photos/800/533',
          alt: 'Placeholder image',
          width: 800,
          height: 533
        },
        {
          src: 'https://picsum.photos/800/533',
          alt: 'Placeholder image',
          width: 800,
          height: 533
        },
        {
          src: 'https://picsum.photos/800/533',
          alt: 'Placeholder image',
          width: 800,
          height: 533
        },
        {
          src: 'https://picsum.photos/800/533',
          alt: 'Placeholder image',
          width: 800,
          height: 533
        },
      ]} />
    </div>
  );
};
export default Home;
