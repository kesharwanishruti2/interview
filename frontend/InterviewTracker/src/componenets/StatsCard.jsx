import React from 'react'

const StatsCard = ({title,value}) => {
  return (
    <div className='border border-[#E7E2DC] bg-white rounded-xl p-5'>
     <p className='text-sm text-[#6B7280]'>{title}</p>
     <h3 className='mt-2 text-2xl font-semibold text-[#1F2937]'>{value}</h3>
    </div>
  )
}

export default StatsCard
