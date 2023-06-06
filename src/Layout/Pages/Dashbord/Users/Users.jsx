import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet-async';
import { FaRegTrashAlt, FaUserCircle } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';

const Users = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery(['users'], async () => {
    const res = await axiosSecure.get('/users')
    return res.data;
  })
  const handleMakeAdmin = (id) => {
    fetch(`http://localhost:5000/users/admin/${id}`,{
      method: 'PATCH',
    })
    .then(res => res.json())
    .then(data => {
      if(data.modifiedCount){
        refetch();
        Swal.fire({
          icon: 'success',
          title: `${users?.name}admin created succes full`,
          showConfirmButton: false,
          timer: 1500
        })
      }
      console.log(data);
    })
  };

  const handleDeletItems = (item) => {

  };
  return (
    <div>
      <Helmet>
        <title>Nissan Boss|all users</title>
      </Helmet>
      <h1 className='text-3xl font-bold font-sans'>Total Users:{users?.length}</h1>

      <div className="overflow-x-auto w-full">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>sl</th>
              <th>Name</th>
              <th>email</th>
              <th>role</th>
              <th>Action</th>
            </tr>
           </thead>
           <tbody>
            {
              users.map((user, index) => <tr
              key={user?._id}
              >
                <th>{index + 1}</th>
                <td>{user?.name}</td>
                <td>{user?.email}</td>
                <td>{user?.role === 'admin' ? 'admin' : <button onClick={() => handleMakeAdmin(user?._id)} className='bg-yellow-600 w-10 rounded text-white p-2'>
                  <FaUserCircle className=' text-2xl' />
                </button>}</td>
                <td> <button onClick={() => handleDeletItems(user?._id)} className='bg-red-500 w-10 rounded text-white p-2'>
                  <FaRegTrashAlt className=' text-2xl' />
                </button></td>
              </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;