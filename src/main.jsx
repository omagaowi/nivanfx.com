import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import posthog from 'posthog-js'

posthog.init('phc_qXtPBOwULIX4OGaB7CLq2wiSuw0upVzUV91GFmgmudc',
    {
        api_host: 'https://us.i.posthog.com',
        person_profiles: 'identified_only' // or 'always' to create profiles for anonymous users as well
    }
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)
