import { FC } from 'react';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

interface ErrorPageProps {

}

const ErrorPage:FC<ErrorPageProps> = () => {
  const error = useRouteError();
  let errorMsg: string;

  if(isRouteErrorResponse(error)) {
    errorMsg = error.statusText;
  } else if (error instanceof Error) {
    errorMsg = error.message;
  } else if (typeof error === 'string') {
    errorMsg = error;
  } else {
    errorMsg = 'Unknown error';
  }

  console.error(errorMsg)

  return (
    <div>
      <h1>Error!</h1>
      <p>Sorry, an unexpected error has occurred</p>
      <p>
        <i>{errorMsg}</i>
      </p>
    </div>
  );
};

export default ErrorPage;