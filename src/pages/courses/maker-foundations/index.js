import React from 'react';
import CoursePage from '../../../components/course-page';
import heroImg from '../../../images/hero-img.jpg';

const MakerFoundationsPage = () => (
  <CoursePage
    courseImage={heroImg}
    coursePath={`maker-foundations`}
    courseTitle="Maker Foundations"
    courseSemester="Spring 2019 Cohort"
    courseDescription="Maker Foundations program is an introductory course for middle and high school youth. Enjoy 14 weeks of exploration into emerging technology topics where you will design and 3D print your own creations, learn to program games and make your own game artwork, make a website, create interactive electronics, and much more!"
  />
);

export default MakerFoundationsPage;
