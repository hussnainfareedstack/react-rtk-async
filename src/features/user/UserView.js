import React from 'react'
import { fetchUsers } from './userSlice'
import { useDispatch, useSelector } from 'react-redux'
import './spinnerLoading.css'

export const UserView = () => {

  const data = useSelector( state => state.user)
  const dispatch = useDispatch()


  return (
    <div>
      <h1 className="text-3xl font-bold underline mb-5 pt-5">List of Users</h1>
      <button className='border rounded-full py-2 px-4 bg-blue-500' onClick={()=> dispatch(fetchUsers())}>Get Users</button>

      { data.loading ? <div className='c-inline-spinner'></div> : null}
      <div className='m-10 flex justify-center '>
      {
        data.users.length
        ? <table className='border-collapse border border-slate-500 p-10'>
          <thead> <tr>
            <th className='border border-slate-600'>Id</th>
            <th className='border border-slate-600'>Username</th>
            <th className='border border-slate-600'>Name</th>
            <th className='border border-slate-600'>Email</th>
            <th className='border border-slate-600'>Address</th>
            </tr>
          </thead>
          <tbody>{data.users.map(user => {
          return <tr key={user.id}>
              <td className='border border-slate-700 px-3 py-1'>{user.id}</td>
              <td className='border border-slate-700 px-3'>{user.username}</td>
              <td className='border border-slate-700 px-3'>{user.name}</td>
              <td className='border border-slate-700 px-3'>{user.email}</td>
              <td className='border border-slate-700 px-3'>{user.address.street} {user.address.city} {user.address.zipcode}</td>
            </tr>
        })}</tbody></table>
        : null
      }
      </div>
      { data.error ? <h2 className=' text-red-900'>Error: {data.error}</h2> : null}

    </div>
  )
}
