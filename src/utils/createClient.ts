import clients from '../data/clients'
import { ClientType } from '../data/types/dataBaseTypes'

const createClient = (client: ClientType) => {
  if (client) {
    clients.push(client)
  }
}

export { createClient }
