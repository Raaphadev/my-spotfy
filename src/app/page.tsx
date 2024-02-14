import{Home as HomeIcon, Search, LibraryBig, Plus, ArrowRight, ChevronLeft, ChevronRight} from 'lucide-react'

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-auto bg-zinc-950 p-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <nav className="bg-zinc-900 rounded pl-5 py-1 mt-5">
            <a href="" className="flex items-center gap-2 my-5"><HomeIcon className="mr-4"/>Home</a>
            <a href="" className="flex items-center gap-2 my-5"><Search className="mr-4"/> Search</a>
          </nav>
          <nav className="bg-zinc-900 rounded pl-5 py-1 pb-5 pr-5 mt-3">          
            <a href="" className="flex items-center gap-2 my-5"><LibraryBig/>Sua Biblioteca <Plus/><ArrowRight /></a>
            <div className="flex flex-1 gap-2 mt-4">
              <button className="rounded-full bg-zinc-800 px-3">Playlists</button>
              <button className="rounded-full bg-zinc-800 px-3">Álbuns</button>
              <button className="rounded-full bg-zinc-800 px-3">Artistas</button>
            </div>
            <div className='flex flex-col gap-3 mt-6'>
              <a className='text-sm text-zinc-100'>Musicas Curtidas</a>
              <a className='text-sm text-zinc-100'>Jose dos anjos</a>
              <a className='text-sm text-zinc-100'>POP Brasil</a>
              <a className='text-sm text-zinc-100'>MPB atuais</a>
            </div>
            
          </nav>
        </aside>
        <main className="flex-1 p-6">
          <div className='gap-3 flex items-center'>
            <button className='p-2 rounded-full bg-zinc-900'><ChevronLeft/></button>
            <button className='p-2 rounded-full bg-zinc-900'><ChevronRight/></button>
          </div>
          <div className='flex flex-col grid-cols-2 gap2'>
            <a href="http://">
              <image></image>
              <p>Titulo</p>
            </a>

          </div>
           
        </main>
      </div>
      <footer className=" bg-black border-t border-zinc-900 p-6 ">
        Footer ff
      </footer>
    </div>
    
   
  );
}
