import clients from '../data/clients'

const clientsFilter = (targetName: string) => {
  if (targetName.length < 1) return []
  const filteredClients = clients.filter((client) =>
    client.name.toLowerCase().includes(targetName.toLowerCase())
  )
  return filteredClients
}

export { clientsFilter }
