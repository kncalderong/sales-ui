export const documentInfoInitialState = {
  sellerRUT: '',
  client: {
    RUT: '',
    name: '',
    lastName: '',
    email: '',
    address: {
      street: '',
      number: '',
      neighborhood: '',
      city: '',
    },
    phone: '',
  },
  branchOffice: {
    id: NaN,
    country: '',
    currency: '',
  },
}

export const modalInitialState = {
  isOpen: false,
  modalType: '',
}

export const productToAddInitialState = {
  product: {
    id: NaN,
    name: '',
    price: NaN,
    stock: NaN,
    branchOfficeId: NaN,
  },
  quantity: NaN,
  subtotal: NaN,
}

export const alertInitialState = {
  isActive: false,
  alertMessage: '',
}
