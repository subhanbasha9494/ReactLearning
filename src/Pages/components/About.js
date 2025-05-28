import UserClass from './UserClass';

const About = () => {
  return (
    <div>
      <h1>About Us</h1>
      <p>This is the about us page</p>
      <UserClass
        name={'Samivulla'}
        location={'kadapa'}
        contact={'9494880880'}
      />
    </div>
  );
};

export default About;
