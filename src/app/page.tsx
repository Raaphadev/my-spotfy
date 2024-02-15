import{Home as HomeIcon, Search, LibraryBig, Plus, ArrowRight, ChevronLeft, ChevronRight, Play} from 'lucide-react'
import Image from 'next/image';

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
            <div className="flex flex-1 gap-2 mt-4 text-sm">
              <button className="rounded-full bg-zinc-800 px-3 py-1">Playlists</button>
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
        <main className="flex-1 p-6 ">
          <div className='gap-3 flex items-center'>
            <button className='p-2 rounded-full bg-zinc-900'><ChevronLeft/></button>
            <button className='p-2 rounded-full bg-zinc-900'><ChevronRight/></button>
          </div>
          <nav className='mt-3 bg-gradient-to-r from-black	 '>            
            <div className='rounded text-3xl  font-bold	mb-4	flex items-center gap-4'><Image src="/imagens/album-morada.png" width={230} height={230} alt="capa do album fernandinho" />
              <div className='flex flex-col gap-2'>
                <span className='text-base font-medium	'>Playlist</span>
                <strong className='text-5xl'>É TUDO SOBRE VOCÊ | MORADA</strong>
                <p className='text-sm font-normal	'>Morada - É Tudo Sobre Você (Ao Vivo) | Assista minha playlist</p>
                <div>
                  <button className='bg-green-600 rounded-full px-5 py-2  text-black text-sm'>Play</button>
                  <button className='border-white	border 	px-5 py-2 rounded-full ml-4 text-sm'>Seguir</button> 
                </div>
              </div>     
            </div>
          </nav>
          <div className="flex flex-1 gap-2 mt-5 mb-4 text-sm">
              <button className="rounded-full bg-zinc-800 px-3 py-1 ">Music</button>
              <button className="rounded-full bg-zinc-800 px-3 py-1">Tudo</button>
              <button className="rounded-full bg-zinc-800 px-3 py-1">Podcasts</button>
            </div>
          <div className='grid grid-cols-3 gap-2 mt-5' >
            <a className='bg-white/10 group  rounded text-xs	flex items-center gap-4  overflow-hidden hover:bg-white/20 transition-colors pr-5'><Image src="/imagens/album.png" width={90} height={90} alt="capa do album fernandinho" />
              <p>FERNANDINHO ACÚSTICO - NOVO CD LANÇAMENTO</p>
              <button className='bg-green-600 rounded-full p-2 text-stone-950 ml-auto invisible group-hover:visible'><Play/></button>
            </a>
            <a className='bg-white/10 group  rounded text-xs	flex items-center gap-4  overflow-hidden hover:bg-white/20 transition-colors pr-5'><Image src="/imagens/album.png" width={90} height={90} alt="capa do album fernandinho" />
              <p>FERNANDINHO ACÚSTICO - NOVO CD LANÇAMENTO</p>
              <button className='bg-green-600 rounded-full p-2 text-stone-950 ml-auto invisible group-hover:visible'><Play/></button>
            </a>
            <a className='bg-white/10 group  rounded text-xs	flex items-center gap-4  overflow-hidden hover:bg-white/20 transition-colors pr-5'>
              <Image src="/imagens/album.png" width={90} height={90} alt="capa do album fernandinho" />
              <p>FERNANDINHO ACÚSTICO - NOVO CD LANÇAMENTO</p>
              <button className='bg-green-600 rounded-full p-2 text-stone-950 ml-auto invisible group-hover:visible'><Play/></button>
            </a>
            <a className='bg-white/10 group  rounded text-xs	flex items-center gap-4  overflow-hidden hover:bg-white/20 transition-colors pr-5'>
              <Image src="/imagens/album.png" width={90} height={90} alt="capa do album fernandinho" />
              <p>FERNANDINHO ACÚSTICO - NOVO CD LANÇAMENTO</p>
              <button className='bg-green-600 rounded-full p-2 text-stone-950 ml-auto invisible group-hover:visible'><Play/></button>
            </a>
            <a className='bg-white/10 group  rounded text-xs	flex items-center gap-4  overflow-hidden hover:bg-white/20 transition-colors pr-5'>
              <Image src="/imagens/album.png" width={90} height={90} alt="capa do album fernandinho" />
              <p>FERNANDINHO ACÚSTICO - NOVO CD LANÇAMENTO</p>
              <button className='bg-green-600 rounded-full p-2 text-stone-950 ml-auto invisible group-hover:visible'><Play/></button>
            </a>
            <a className='bg-white/10 group  rounded text-xs	flex items-center gap-4  overflow-hidden hover:bg-white/20 transition-colors pr-5'>
              <Image src="/imagens/album.png" width={90} height={90} alt="capa do album fernandinho" />
              <p>FERNANDINHO ACÚSTICO - NOVO CD LANÇAMENTO</p>
              <button className='bg-green-600 rounded-full p-2 text-stone-950 ml-auto invisible group-hover:visible'><Play/></button>
            </a>  
          </div>
          <div className='m-5'>Episódios para voce</div>
          <nav className='grid grid-cols-5 gap-2 mt-4'>
            <div className='rounded bg-white/5 p-5 '>
              <Image src="/imagens/album.png" className='w-full rounded mb-4' width={120} height={120} alt="capa do album fernandinho" />
              <strong>Album Fernandinho</strong>
              <p>13 de Fev - 04:00</p>
            </div>
            <div className='rounded bg-white/5 p-5 '>
              <Image src="/imagens/album.png" className='w-full rounded mb-4' width={120} height={120} alt="capa do album fernandinho" />
              <strong>Album Fernandinho</strong>
              <p>13 de Fev - 04:00</p>
            </div>
            <div className='rounded bg-white/5 p-5 '>
              <Image src="/imagens/album.png" className='w-full rounded mb-4' width={120} height={120} alt="capa do album fernandinho" />
              <strong>Album Fernandinho</strong>
              <p>13 de Fev - 04:00</p>
            </div>
            <div className='rounded bg-white/5 p-5 '>
              <Image src="/imagens/album.png" className='w-full rounded mb-4' width={120} height={120} alt="capa do album fernandinho" />
              <strong>Album Fernandinho</strong>
              <p>13 de Fev - 04:00</p>
            </div>
         
          </nav>
        </main>
      </div>
      <footer className="fixed  bottom-0 left-0 right-0 bg-black border-t border-zinc-900 p-6 ">
        Footer ff
      </footer>
    </div>
    
   
  );
}
