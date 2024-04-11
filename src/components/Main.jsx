import ItemListContainer from "./ItemListContainer";
import UserCard from './UserCard'
import Timer from "./Timer";

/* text-center p-7 font-bold size-30 text-xl */
function Main() {
  return (
    <main className='p-4 grow'>
      {/* inicio fecha y hora */}
      <div className="flex justify-between items-center ">
        <div className="text-left text-sm font-bold">
          <Timer />
        </div>
        <div className="mx-auto p-6 font-bold size-30 text-xl">
          <ItemListContainer greeting="Bienvenidos a Marvel's" />
        </div>
      </div>
      {/* fin fecha y hora */}

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

