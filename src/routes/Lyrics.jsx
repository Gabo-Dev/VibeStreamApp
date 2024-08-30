import React from 'react'

function Lyrics() {
  const handleSearch = () => {
    
  }
  return (
    <div className='flex h-full'>
      <div className='flex flex-col w-1/2'>
        <div className='  h-1/6 flex  mx-auto place-items-center'>
        <input
              className='bg-zinc-200 text-zinc-600 font-mono ring-1 ring-zinc-400
              focus:ring-2 focus:ring-rose-400 outline-none duration-300 placeholder:text-zinc-600
              placeholder:opacity-50 rounded-full px-4 py-2  shadow-md focus:shadow-lg
              focus:shadow-rose-400 dark::shadow-md dark:shadow-sky-700' 
              autoComplete='on'
              placeholder='Search Here...'
              type="text" 
              onSubmit={handleSearch}
              />
        </div>
        <div className='flex-auto bg-slate-400'>
          
        </div>
      </div>
    </div>
  )
}

export default Lyrics