import iconCo2 from 'assets/icons/co2.svg';
import iconHumidity from 'assets/icons/humidity.svg';
import iconLight from 'assets/icons/light.svg';
import iconOxygen from 'assets/icons/oxygen.svg';
import iconTemperature from 'assets/icons/temperature.svg';
import iconVoc from 'assets/icons/voc.svg';

export const sensorData = [
  {
    id: 1,
    icon: iconTemperature,
    title: 'Temperature',
    description: 'This is the Temperature in the habitat.',
    value: '82',
    measurementType: '°F',
  },
  {
    id: 2,
    icon: iconHumidity,
    title: 'Humidity',
    description: 'This is the Humidity level in the habitat.',
    value: '41',
    measurementType: '%RH',
  },
  {
    id: 3,
    icon: iconCo2,
    title: 'Co2',
    description: 'This is the Co2 level in the habitat.',
    value: '5,250',
    measurementType: 'ppm',
  },
  {
    id: 4,
    icon: iconLight,
    title: 'Ambient Light',
    description: 'This is the Ambient Light level in the habitat.',
    value: '350',
    measurementType: 'lx',
  },
  {
    id: 5,
    icon: iconVoc,
    title: 'VOC',
    description: 'This is the VOC level in the habitat.',
    value: '5.5',
    measurementType: 'mg/m3',
  },
  {
    id: 6,
    icon: iconOxygen,
    title: 'Oxygen',
    description: 'This is the Oxygen level in the habitat.',
    value: '21',
    measurementType: '%',
  },
];
