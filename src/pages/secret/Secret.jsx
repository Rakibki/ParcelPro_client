import React, { useEffect } from 'react'
import { all_users } from '../../api/auth'
import useRole from '../../hooks/useRole';

const Secret = () => {

    const [data] = all_users()
    console.log(data);

  return (
    <div>Secret</div>
  )
}

export default Secret