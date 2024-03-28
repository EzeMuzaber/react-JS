import ItemListContainer from "./ItemListContainer";
import UserCard from './UserCard'


function Main() {
  return (
    <main className='p-4 grow'>

      
      <div className="text-center p-7 font-bold size-30 text-xl">
      <ItemListContainer greeting="Bienvenidos a Marvel's"/>
      </div>

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

