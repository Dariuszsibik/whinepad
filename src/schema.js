/* @flow */

import classification from './classification';

export default [
  {
    id: 'name',
    label: 'Nazwa',
    show: true,
    sample: '$2 chuck',
    align: 'left',
  },
  {
    id: 'year',
    label: 'Rok',
    type: 'year',
    show: true,
    sample: 2015,
  },
  {
    id: 'grape',
    label: 'Szczep',
    type: 'suggest',
    options: classification.grapes, 
    show: true,
    sample: 'Merlot',
    align: 'left',
  },
  {
    id: 'rating',
    label: 'Ocena',
    type: 'rating',
    show: true,
    sample: 3,
  },
  {
    id: 'comments',
    label: 'Komentarze',
    type: 'text',
    sample: 'Niezłe, jak na tę cenę',
  },
]
