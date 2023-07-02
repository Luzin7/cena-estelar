import { VscLoading } from 'react-icons/vsc';
import { getRandomMessage } from '../../functions/generateLoadingMessage';
import './loading.css';
import { useEffect, useState } from 'react';

export default function Loading() {
  const [message, setMessage] = useState(getRandomMessage());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setMessage(getRandomMessage());
    }, 7000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <div id="loading_wrapper">
      <VscLoading id="loading" />
      <span>{message}</span>
    </div>
  );
}
