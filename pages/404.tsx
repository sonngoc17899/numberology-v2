import type { NextPage } from 'next';
import Lottie from 'react-lottie';

import animationData from '../styles/lotties/error-page.json';

const NotFound: NextPage = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <div className="container">
      <div className="flex justify-center">
        <Lottie options={defaultOptions} height={600} width={600} />
      </div>
    </div>
  );
};

export default NotFound;
