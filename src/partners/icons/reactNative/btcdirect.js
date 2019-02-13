//@flow
import React from "react";
import Svg, { G, Path } from "react-native-svg";

type Props = {
  width: number
};

const Btcdirect = ({ width = 150 }: Props) => (
  <Svg
    viewBox="0 0 2892.16 792.05"
    width={width}
    height={(width / 2892.16) * 792.05}
  >
    <G fill="#0086fb">
      <Path d="M528.34 146.17L561.36 24H465.6l-19.81 76c-17.61-6.61-36.32-11-55-14.31L407.27 24h-95.76L296.1 83.44c-82.54 11-158.49 53.93-209.1 121.07-105.68 137.58-79.27 335.7 58.32 441.36L112.3 768H207l19.81-75.94c17.61 6.6 36.33 11 55 14.31L265.29 768h94.65l16.51-59.43C459 697.6 535 654.68 585.58 587.54c106.76-138.69 80.34-335.7-57.24-441.37zm-191.51 323.6a74.85 74.85 0 1 1 74.84-74.85c0 41.83-33.02 74.85-74.84 74.85zM590 713c0-9.91-6.61-15.41-17.61-15.41h-18.73v42.93h11v-12.1h8.81l6.6 12.11h12.11l-9.91-13.21c5.51-2.2 8.81-7.71 7.73-14.32zm-9.91 0c0 4.4-2.2 7.7-6.6 7.7h-8.81v-14.3h7.71c3.3-1.1 6.6 2.2 7.7 5.5z" />
      <Path d="M571.27 675.59a46.23 46.23 0 1 0 46.22 46.23c-1.1-25.32-20.91-46.23-46.22-46.23zm0 81.45a35.23 35.23 0 1 1 35.22-35.22A34.77 34.77 0 0 1 571.27 757zM1072.06 392.72c35.22-7.7 58.34-34.12 58.34-75.94 0-50.63-37.42-83.65-95.76-83.65H888.26v325.79H1039c59.44 0 96.86-35.22 96.86-90.25.04-42.93-26.37-71.55-63.8-75.95zm-95.75-96.86h35.22a32 32 0 0 1 29.72 34.14v4.41c-1.1 17.61-16.51 30.81-35.22 29.71h-29.72zM1044.55 461c-1.1 17.61-17.61 31.92-36.32 29.72h-30.82v-70.48h36.32a33.24 33.24 0 0 1 30.82 35.22zM1152.41 315.68l78.15 1.09v242.15h90.25V316.77h77.05v-83.64h-245.45v82.55zM1575.47 310c36.7 0 59.37 19.61 65.85 49h92.85c-6.48-85-66.94-134-158.7-134-97.16 0-164.1 70.8-164.1 171 0 99.12 65.86 171 164.1 171 91.76 0 151.14-49 158.7-134h-92.85c-5.4 29.41-29.15 49-65.85 49-45.34 0-72.33-32.67-72.33-86.05s26.99-85.95 72.33-85.95zM1871.75 233.13h-90.26v325.79h90.26c100.16 0 154.09-79.25 154.09-162.9s-53.93-162.89-154.09-162.89zm-2.2 296.07h-59.44V261.74h59.44c83.65 0 126.57 66 126.57 134.28 0 67.14-42.92 133.18-126.57 133.18zM2087.85 248.54c-14.31 1.1-25.32 13.2-24.22 27.51v3.3c1.1 14.31 13.21 25.32 27.52 24.22s25.31-13.21 24.21-27.52v-3.3c-1.1-14.31-13.2-25.32-27.51-24.21zM2075.19 346.49h28.62v212.43h-28.62zM2199.74 402.63v-56.14h-27.51v211.33h27.51v-91.36c0-46.22 17.61-95.75 62.74-95.75 6.6 0 12.11 0 18.71 1.1v-27.52a96.38 96.38 0 0 0-17.61-2.2c-28.58 0-55.03 18.71-63.84 60.54zM2403.36 341c-57.23 0-95.75 42.93-95.75 111.17s37.42 112.26 96.85 112.26c44 0 79.25-27.51 86.95-66h-27.51c-8.81 24.22-33 40.73-59.44 38.53-40.72 0-68.24-29.72-68.24-77h158.5c0-6.6 1.1-13.21 0-19.81 0-57.34-36.33-99.15-91.36-99.15zm-67.14 94.66c2.2-41.83 27.52-70.45 67.14-70.45s63.84 28.62 64.94 70.45zM2627.89 369.61c35.23 0 57.24 16.51 62.74 49.53h27.52c-5.51-47.33-39.63-77.05-90.26-77.05-60.53 0-97.95 44-97.95 110.07s37.42 111.16 97.95 112.26c51.74 0 85.86-29.71 90.26-75.94h-27.52c-5.5 31.92-28.61 48.43-62.74 48.43-42.92 0-69.34-33-69.34-83.65s26.45-83.65 69.34-83.65zM2843.62 534.71c-18.71 0-34.12-6.61-34.12-50.64V372.91h53.93v-26.42h-53.93v-70.44H2782v70.44h-37.43v26.42H2782v116.67c0 66 31.91 71.54 56.13 71.54 11 1.1 22-1.1 31.92-3.3V530.3c-8.82 2.2-17.62 3.3-26.43 4.41z" />
    </G>
  </Svg>
);
export default Btcdirect;
