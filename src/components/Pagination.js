import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'

const Pagination = () => {
    const {page,handlePageChange,totalPages} = useContext(AppContext);
  return (
    <div className=' fixed bottom-0 bg-white border-t w-[100vw] flex justify-between mt-3 px-4'>
        <div className=' flex w-20 gap-3 '>
            { page>1 &&
                <button
                className=' bg-slate-300 p-1 border border-slate-800 rounded' 
                onClick={()=> handlePageChange(page-1)}
                >Previous</button>
            }
            { page < totalPages &&
                <button 
                className=' bg-slate-300 p-1 border border-slate-800 rounded'
                onClick={()=> handlePageChange(page+1)}
                >
                  Next
                </button>
            }
          
        </div>
        <p className='font-semibold '>
                Page {page} of {totalPages}
            </p>
    </div>
  )
}

export default Pagination