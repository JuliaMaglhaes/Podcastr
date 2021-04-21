export default function Home(props) {
  // console.log(props.episodes)
  return (
    <div>
      <h1>Index</h1>
      <p>{JSON.stringify(props.episodes)}</p>
    </div>
  )
}

export async function getStaticProps(){
  const response = await fetch('http://localhost:3333/episodes')
  const data = await response.json()
  console.log(data)
  return{
    props: {
      episodes: data,
    },
    revalidate: 60 * 60 * 8,
  }
}
