import { SaleType } from '../types/dataTypes'

const sales: SaleType[] = [
  {
    saleId: '01H5TY0S8NC1FKERSD84Y35HYK0CZ',
    date: '23/7/2023, 17:34:46',
    client: {
      RUT: '01H5TY0SAETJG2K1A2C96FBAGX',
      name: 'Kaye',
      lastName: 'Durram',
      email: 'kdurram20@umich.edu',
      address: {
        street: 'Mifflin',
        number: '99',
        neighborhood: 'Mulga Park ',
        city: 'Mocupe',
      },
      phone: '(144) 8642817',
    },
    branchOffice: {
      id: 3,
      country: 'Colombia',
      currency: 'COP',
    },
    seller: {
      RUT: '123123asdfasd',
      address: {
        city: 'Bogota',
        neighborhood: 'La Roca',
        number: '123',
        street: 'Salmona',
      },
      birthDate: '2017-06-01',
      email: 'firstSeller@gmail.com',
      name: 'Pedro',
      lastName: 'Escamoso',
      phone: '3214231232',
    },
    details: [
      {
        product: {
          id: 45,
          name: 'Yogurt - Raspberry, 175 Gr',
          price: 2659,
          stock: 63,
          branchOfficeId: 3,
        },
        quantity: 5,
        subtotal: 13295,
      },
      {
        product: {
          id: 478,
          name: 'Yogurt - French Vanilla',
          price: 8900,
          stock: 12,
          branchOfficeId: 3,
        },
        quantity: 1,
        subtotal: 8900,
      },
    ],
    total: 22195,
  },
  {
    saleId: '01H5TY0S8NC1FKERSD84Y315468748SDFASDFCZ',
    date: '22/7/2023, 13:34:46',
    client: {
      RUT: '01H5TY0SDQGE5WAPJFBWV5CXGY',
      name: 'Bride',
      lastName: 'Hassen',
      email: 'bhassen45@hubpages.com',
      address: {
        street: 'Judy',
        number: '073',
        neighborhood: 'La Chinita International ',
        city: 'Chupa',
      },
      phone: '(223) 8792083',
    },
    branchOffice: {
      id: 2,
      country: 'Argentina',
      currency: 'ARS',
    },
    seller: {
      RUT: '123123asdfasd',
      address: {
        city: 'Bogota',
        neighborhood: 'La Roca',
        number: '123',
        street: 'Salmona',
      },
      birthDate: '2017-06-01',
      email: 'firstSeller@gmail.com',
      name: 'Pedro',
      lastName: 'Escamoso',
      phone: '3214231232',
    },
    details: [
      {
        product: {
          id: 62,
          name: 'Tuna - Loin',
          price: 2614,
          stock: 2,
          branchOfficeId: 2,
        },
        quantity: 2,
        subtotal: 5228,
      },
      {
        product: {
          id: 499,
          name: 'Wine - White, Riesling, Semi - Dry',
          price: 5886,
          stock: 17,
          branchOfficeId: 2,
        },
        quantity: 10,
        subtotal: 58860,
      },
    ],
    total: 64088,
  },
]

export { sales }
