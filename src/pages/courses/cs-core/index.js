import React from 'react';
import CoursePage from '../../../components/course-page';
import heroImg from '../../../images/cs-core-hero.jpg';

const CSCorePage = () => (
  <CoursePage
    courseImage={heroImg}
    coursePath={`cs-core`}
    courseTitle="CS Core"
    courseDescription="CS Core is an introduction to the fundamentals of programming. This
    course is focused on building a solid foundation through projects
    and examples of best practices. Youth will learn programming skills
    through modern JavaScript and the p5.js library. There is a focus on
    creating interactive web experiences and core skills that will lead
    into future computer science courses. This course is the first in
    our Computer Science Pathway and is a prerequisite to following
    courses."
    courseSemester="Spring 2019 Cohort"
  />
);

export default CSCorePage;
