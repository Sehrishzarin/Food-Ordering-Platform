import React, { useEffect } from 'react'
import { Auth0Provider, AppState, useAuth0 } from '@auth0/auth0-react'
import { useCreateMyUser } from '@/api/MyUserApi';

interface Props {
  children: React.ReactNode
}

function ConnectionTester() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const { createUser } = useCreateMyUser();

  useEffect(() => {
    if (!isLoading && isAuthenticated && user?.sub && user?.email) {
      console.log("👤 Auth0 User verified! Triggering automatic registration...");
      createUser({ auth0id: user.sub, email: user.email });
    }
  }, [user, isAuthenticated, isLoading, createUser]);

  // A temporary debug button overlay to bypass Auth0 if it's stuck
  return (
    <div style={{ position: 'fixed', bottom: 10, right: 10, zIndex: 9999, background: '#222', padding: 10, borderRadius: 5, color: '#fff' }}>
      <p style={{ margin: '0 0 5px 0', fontSize: '12px' }}>Auth State: {isLoading ? "Loading..." : isAuthenticated ? "Logged In" : "Logged Out"}</p>
      <button 
        onClick={() => createUser({ auth0id: "test_auth_id_123", email: "test_email@test.com" })}
        style={{ background: '#007bff', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer', borderRadius: 3 }}
      >
        Force Test API Connection
      </button>
    </div>
  );
}

function Auth0ProviderWithNavigate({ children }: Props) {
  //@ts-ignore
  const domain = import.meta.env.VITE_AUTH0_DOMAIN
  //@ts-ignore
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID
  //@ts-ignore
  const redirectUri = import.meta.env.VITE_AUTH0_CALLBACK_URI

  if(!domain || !clientId || !redirectUri) {
    throw new Error('Missing Auth0 configuration. Please check your environment variables.')
  }

  const onRedirectCallback = (appState?: AppState) => {
    window.history.replaceState({}, document.title, window.location.pathname);
  }

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{ redirect_uri: redirectUri }} 
      onRedirectCallback={onRedirectCallback}
    >
      <ConnectionTester />
      {children}
    </Auth0Provider>
  )
}

export default Auth0ProviderWithNavigate