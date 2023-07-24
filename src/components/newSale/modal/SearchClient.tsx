import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState, useMemo } from 'react'
import { ClientType } from '../../../types/dataTypes'
import { clientsFilter } from '../../../utils/handleClients'
import { DocumentInfoType } from '../../../pages/types/newSalePage'

type SearchClientTypes = {
  setDocumentInfo: React.Dispatch<React.SetStateAction<DocumentInfoType>>
  closeModal: () => void
  documentInfo: DocumentInfoType
}

const SearchClient = ({
  setDocumentInfo,
  closeModal,
  documentInfo,
}: SearchClientTypes) => {
  const [localSearchClient, setLocalSearchClient] = useState('')
  const [availableClients, setAvailableClients] = useState<ClientType[]>([])

  const debounce = () => {
    let timeoutID: ReturnType<typeof setTimeout>
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      setLocalSearchClient(e.target.value)

      clearTimeout(timeoutID)
      timeoutID = setTimeout(() => {
        setAvailableClients(clientsFilter(e.target.value))
      }, 80)
    }
  }

  const optimizedDebounceClients = useMemo(() => debounce(), [])

  return (
    <div className='w-full'>
      <div className='flex w-full gap-2'>
        <input
          type='search'
          className='p-4 grow'
          placeholder='Search by client name'
          onChange={optimizedDebounceClients}
          value={localSearchClient}
        />
        <div className='flex justify-center items-center'>
          <FontAwesomeIcon
            icon={faSearch}
            className='text-gray-400 text-[1rem] cursor-pointer'
          />
        </div>
      </div>
      <div className='w-full'>
        {localSearchClient.length > 0 &&
          availableClients.length > 0 &&
          availableClients.map((client) => {
            return (
              <div
                key={client.RUT}
                className='flex justify-between items-center p-2 gap-3 cursor-pointer'
                onClick={() => {
                  setDocumentInfo({
                    ...documentInfo,
                    client,
                  })
                  closeModal()
                }}
              >
                <p className='flex gap-2'>
                  <span> {client.name}</span>
                  <span> {client.lastName}</span>
                </p>
                <div className='w-[1.5rem] aspect-square border-[1px] rounded-md border-gray-500 p-1'>
                  {documentInfo.client.RUT === client.RUT && (
                    <div className='w-full bg-primaryBlue h-full rounded-sm'></div>
                  )}
                </div>
              </div>
            )
          })}
        {localSearchClient.length > 0 && availableClients.length < 1 && (
          <div className='my-4 text-gray-400'>
            There are no clients with that name
          </div>
        )}
      </div>
    </div>
  )
}

export default SearchClient
