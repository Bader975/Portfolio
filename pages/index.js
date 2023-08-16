import HomePage from '../components/home/HomePage'





export default function Home() {

  return (
    <>
      <main>
        <HomePage />
      </main>
    </>
  )
}

export async function getServerSideProps(context) {

  const { req, res, params } = context

  return {
    props: {
      username: "username"
    }
  }
}