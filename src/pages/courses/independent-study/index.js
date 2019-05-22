import React from 'react';
import CoursePage from '../../../components/course-page';
import heroImg from '../../../images/independent-study-hero.jpg';

const IndependentStudyPage = () => (
  <CoursePage
    courseImage={heroImg}
    coursePath={`independent-study`}
    courseTitle="Independent Study"
    courseDescription="Independent Study is an opportunity for High School Members who wish to work on a project that furthers their knowledge in a particular skill area or helps them develop skills outside of those offered in current DHF courses.

    This is also a great way for Members who have a schedule that doesn’t easily fit with the schedule of courses we typically offer to still be involved at DHF."
    courseSemester="Spring 2019 Cohort"
  />
);

export default IndependentStudyPage;
