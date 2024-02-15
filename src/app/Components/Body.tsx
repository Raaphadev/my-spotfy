import{Home as HomeIcon, Search, Maximize2, LibraryBig, Plus,Speaker,Volume1, ArrowRight, ChevronLeft, ChevronRight, Play, PlaySquare, Shuffle, SkipBack,Pause, AlignLeft, SkipForward, Repeat} from 'lucide-react'
import Image from 'next/image';


export function Body(){
    return(
        <main className="flex-1 p-6  bg-zinc-800">
          <div className='gap-3 flex items-center mb-4'>
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
    )
}