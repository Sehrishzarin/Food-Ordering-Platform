import React from 'react'
import { Auth0Provider, AppState, User } from '@auth0/auth0-react'

interface Props {
  children: React.ReactNode
}

function Auth0ProviderWithNavigate({ children }: Props) {
    //@ts-ignore
    const domain = import.meta.env.VITE_AUTH0_DOMAIN //@ts-ignore
    const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID //@ts-ignore
    const redirectUri = import.meta.env.VITE_AUTH0_CALLBACK_URI

    if(!domain || !clientId || !redirectUri) {
        throw new Error('Missing Auth0 configuration. Please check your environment variables.')
    }
//@ts-ignore
    const onRedirectCallback = (appState?: AppState, user?: User) => {
     console.log("User", user)
    
    }
  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{ redirect_uri: redirectUri }} onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  )
}

export default Auth0ProviderWithNavigate

