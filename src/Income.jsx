import React from 'react'
import { useGetIncomeQuery, useDeleteIncomeMutation } from './Slice/apiSlice';


const Income = () => {
    const {data} = useGetIncomeQuery()
    console.log(data);
    const [deleteIncome] = useDeleteIncomeMutation()

    const handelDelete = (id) => {
        console.log(id,"ghffhg");
        deleteIncome(id)
    }
  return (
    <div className='flex flex-col rounded-[10px] w-[400px] bg-white/70 p-4'>
      <h1 className='text-2xl text-center pb-4'>Income</h1>
      <div className='flex flex-col gap-y-[20px]'>
        {data?.map((ele,i)=>(
            <div key={i} className='flex justify-evenly'>
                <h2 className='text-green-500 text-lg font-semibold'>${ele.amount}</h2>
                <h2>{ele.category}</h2>
                <h2>{ele.date}</h2>
              <button className='bg-red-500 px-2 text-xs rounded-[4px] h-[30px]  text-white' onClick={()=>handelDelete(ele.id)}>Delete</button>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Income
