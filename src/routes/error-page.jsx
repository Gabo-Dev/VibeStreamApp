import React from 'react'
import { useRouteError } from 'react-router-dom';   //  provides the error that was thrown
                                                    //  when the user navigates to a route that does not exist
export default function ErrorPage() {
    const error = useRouteError();
    
    return (
    <div>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
            <i>{error.statusText || error.message}</i>
        </p>
    </div>
  )
}
