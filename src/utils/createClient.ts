import clients from '../data/clients'
import { ClientType } from '../types/dataBaseTypes'

const createClient = (client: ClientType) => {
  if (client) {
    clients.push(client)
  }
}

export { createClient }
