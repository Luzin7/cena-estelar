import React from 'react';
import { useRouteError } from 'react-router-dom';

function Error() {
  const error = useRouteError();

  return (
    <div>
      <h1>Oops!</h1>
      <p>Você foi além do que pudemos avaliar.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}

export default Error;
