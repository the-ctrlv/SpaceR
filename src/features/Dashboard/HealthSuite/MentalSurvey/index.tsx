import { Link } from 'react-router-dom';

import surveyBG from 'assets/images/survey-bg.jpg';

export default function MentalSurvey() {
  return (
    <Link
      className="flex-grow rounded-xl overflow-hidden relative cursor-pointer h-52 md:h-72 xl:h-auto"
      to="/survey/daily-survey"
    >
      <span
        className="block w-full h-full"
        style={{
          background: `url(${surveyBG}) center center/cover no-repeat`,
        }}
      />
      <h4 className="absolute bottom-1 w-full text-center pb-2 text-lg font-semibold text-white">
        Daily Survey
      </h4>
    </Link>
  );
}
