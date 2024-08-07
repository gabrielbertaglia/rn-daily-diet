import { Diet } from '@components/card-diet/styles'

export interface MealProps {
  id: string
  name: string
  time: string
  description: string
  diet: Diet
  date: string
}

export const meals: MealProps[] = [
  {
    date: '12/08/2022',
    id: '1',
    name: 'Sanduíche',
    time: '10:00',
    description:
      'Sanduíche de pão integral com atum e salada de alface e tomate',
    diet: 'inside',
  },
  {
    date: '12/08/2022',
    id: '2',
    name: 'X-Tudo',
    time: '10:00',
    description:
      'Sanduíche de pão integral com atum e salada de alface e tomate',
    diet: 'outside',
  },
  {
    date: '11/08/2022',
    id: '3',
    name: 'X-tudo',
    time: '20:00',
    description: 'Xis completo da lancheria do bairro',
    diet: 'inside',
  },
  {
    date: '11/08/2022',
    id: '4',
    name: 'X-tudo',
    time: '20:00',
    description: 'Xis completo da lancheria do bairro',
    diet: 'outside',
  },
  {
    date: '13/08/2022',
    id: '6',
    name: 'X-Nadinha',
    time: '20:00',
    description: 'Xis completo da lancheria do bairro',
    diet: 'outside',
  },
  {
    date: '16/08/2022',
    id: '7',
    name: 'X-Nadinha',
    time: '20:00',
    description: 'Xis completo da lancheria do bairro',
    diet: 'inside',
  },
  {
    date: '17/08/2022',
    id: '8',
    name: 'X-Nadinha',
    time: '20:00',
    description: 'Xis completo da lancheria do bairro',
    diet: 'outside',
  },
  {
    date: '18/08/2022',
    id: '9',
    name: 'X-Nadinha',
    time: '20:00',
    description: 'Xis completo da lancheria do bairro',
    diet: 'inside',
  },
  {
    date: '19/08/2022',
    id: '10',
    name: 'X-Nadinha',
    time: '20:00',
    description: 'Xis completo da lancheria do bairro',
    diet: 'outside',
  },
  {
    date: '20/08/2022',
    id: '11',
    name: 'X-Nadinha',
    time: '20:00',
    description: 'Xis completo da lancheria do bairro',
    diet: 'inside',
  },
  {
    date: '20/08/2022',
    id: '13',
    name: 'X-Nadinha',
    time: '20:00',
    description: 'Xis completo da lancheria do bairro',
    diet: 'outside',
  },
  {
    date: '20/08/2022',
    id: '14',
    name: 'X-Nadinha',
    time: '20:00',
    description: 'Xis completo da lancheria do bairro',
    diet: 'inside',
  },
  {
    date: '21/08/2022',
    id: '12',
    name: 'X-Nadinha',
    time: '20:00',
    description: 'Xis completo da lancheria do bairro',
    diet: 'outside',
  },
]
