import { LineWave } from 'react-loader-spinner';

export const loader = (
  <LineWave
    height="300"
    width="500"
    color="#eef4ed"
    ariaLabel="line-wave"
    wrapperStyle={{flex: 1, justifyContent: "center", alignItems: "center"}}
    wrapperClass=""
    visible={true}
    firstLineColor=""
    middleLineColor=""
    lastLineColor=""
  />
);