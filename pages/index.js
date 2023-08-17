import HomePage from '../components/home/HomePage'
import ButtonComp from '../components/UI/ButtonComp'




export default function Home() {


  return (
    <>

      <HomePage />

      {/* <ButtonComp color = {"red"} link={"/test"} >go to test</ButtonComp>
      <ButtonComp color = {"black"} bg={"red"} link={"/test"} >go to test</ButtonComp> */}

    </>
  )
}

// export async function getServerSideProps(context) {

//   const { req, res, params } = context

//   return {
//     props: {
//       username: "username"
//     }
//   }
// }