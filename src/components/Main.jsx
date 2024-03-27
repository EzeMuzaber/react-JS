import { Button } from 'antd'
import UserCard from './UserCard'


function Main() {
  return (
    <main className='p-4 grow'>
      <h2>Home</h2>
      {/* <Button>Soy un boton</Button> */}

      <section className="grid users gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
      
      </section>
    </main>
  )
}
export default Main

