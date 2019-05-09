export const capitalizeFirstLetter = stringToTransform =>
  `${stringToTransform.charAt(0).toUpperCase()}${stringToTransform.slice(1)}`;

export const transformSemester = rawSemester => {
  if (rawSemester === '2019spring') {
    return 'Spring 2019';
  }
};
