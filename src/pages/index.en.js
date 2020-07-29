import React, {useEffect} from 'react'
import { navigate } from 'gatsby'

const EnPage = () => {

  useEffect(() => {
    navigate('/');
  });
  
  return (<></>);
}

export default EnPage