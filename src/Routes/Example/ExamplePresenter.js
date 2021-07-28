import React from 'react';
import GoogleLogin from "react-google-login";

const ExamplePresenter = ({sample}) =>
    <div>
        <GoogleLogin
            clientId="708361541583-0vaf8j58t3nsp9rt82qt0f6r31qhtddi.apps.googleusercontent.com"
            onSuccess={sample}
            onFailure={sample}
            buttonText="login"
        />
    </div>
;

export default ExamplePresenter;