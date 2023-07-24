import clients from '../data/clients'
import { ClientType } from '../types/dataTypes'

const clientsFilter = (targetName: string) => {
  if (targetName.length < 1) return []
  const filteredClients = clients.filter((client) =>
    client.name.toLowerCase().includes(targetName.toLowerCase())
  )
  return filteredClients
}

const createClient = (client: ClientType) => {
  if (client) {
    clients.push(client)
  }
}

export { clientsFilter, createClient }
