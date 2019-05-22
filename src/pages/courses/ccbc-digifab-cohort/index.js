import React from 'react';
import CoursePage from '../../../components/course-page';
import heroImg from '../../../images/ccbc-hero.jpg';

const CCBCPage = () => (
  <CoursePage
    courseImage={heroImg}
    coursePath={`ccbc-digifab-cohort`}
    courseTitle="CCBC Digifab Cohort"
    courseDescription="The Fabrication Certification course at DHF is a 9-month long course focused on advanced 2D and 3D design and fabrication techniques. The course features skill-building projects and techniques focused on 3D printing, laser cutting, and CNC milling."
    courseSemester="Spring 2019 Cohort"
  />
);

export default CCBCPage;
