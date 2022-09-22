import Head from 'next/head'
import Auth from '../components/layouts/Auth';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Signagewala-App</title>
        <meta name="description" content="Manage your Retail Branding" />
      </Head>
      <div>App to Manage Signages <i class="fa-solid fa-house"></i> font awesome are working</div>

    </div>
  )
}
Home.layout = Auth;