import React from 'react';
import { Link } from 'gatsby';
import CoursePage from '../../../components/course-page';
import heroImg from '../../../images/cs-core-hero.jpg';

const FabCorePage = () => (
  <CoursePage
    courseImage={heroImg}
    courseTitle="Fab Core"
    courseDescription="Fab Core is an introduction to digital fabrication methods and design for fabrication. This course is focused on precision 3D design and printing including hands-on experience with 3D printers.

    In addition, there will be a focus on 2D design for fabrication using Inkscape and hands-on experience with vinyl cutters for paper and decal design.
    
    This course is the first in our Fabrication Pathway and is a prerequisite to following courses."
    courseSemester="Spring 2019 Cohort"
  />
);

export default FabCorePage;
