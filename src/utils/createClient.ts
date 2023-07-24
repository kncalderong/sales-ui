import clients from '../data/clients'
import { ClientType } from '../types/dataTypes'

const createClient = (client: ClientType) => {
  if (client) {
    clients.push(client)
  }
}

export { createClient }
