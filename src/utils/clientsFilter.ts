import clients from '../data/clients'

const clientsFilter = (targetName: string) => {
  const filteredClients = clients.filter((client) =>
    client.name.toLowerCase().includes(targetName.toLowerCase())
  )
  return filteredClients
}

export { clientsFilter }
