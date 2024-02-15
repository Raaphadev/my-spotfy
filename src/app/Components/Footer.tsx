import{Home as HomeIcon, Search, Maximize2, LibraryBig, Plus,Speaker,Volume1, ArrowRight, ChevronLeft, ChevronRight, Play, PlaySquare, Shuffle, SkipBack,Pause, AlignLeft, SkipForward, Repeat} from 'lucide-react'
import Image from 'next/image';


export function Footer(){
    return(
        <footer className="fixed flex items-center justify-between bottom-0 left-0 right-0 bg-black border-t border-zinc-900 p-6 ">
        <div className='flex items-center gap-3'>
          <Image src="/imagens/album.png" width={56} height={56} alt="capa do album fernandinho" />
          <div className='flex flex-col'>
            <strong>Fernandinho Acustico</strong>
            <span className='text-xs text-zinc-400'>Novo CD</span>
          </div>
        </div>
        <div className='flex flex-col items-center'>
          <div className='flex items-center gap-6'>
            <Shuffle size={20}/>
            <SkipBack size={20}/>
            <button className='bg-slate-50 rounded-full p-2 text-stone-950'>
              <Pause size={20}/>
            </button>
            <SkipForward size={20}/>
            <Repeat size={20}/>

          </div>
          <div className='flex items-center gap-2 mt-1'>
            <span className='text-zinc-400 text-sm'>0:31</span>
            <div className='w-96 bg-zinc-800 h-1 rounded-full'>
              <div className='border w-40 rounded-full '></div>
            </div>
            <span className='text-zinc-400 text-sm'>2:53</span>
          </div>
        </div>
        <div className='flex items-center gap-3'>
          <PlaySquare size={18} className='text-zinc-500'/>
          <AlignLeft size={18} className='text-zinc-500'/>
          <Speaker size={18} className='text-zinc-500'/>
          <Volume1 size={18} className='text-zinc-500'/>
          <div className='h-1 w-24 bg-slate-700 rounded-full'>
            <div className='h-1 w-16 bg-white rounded-full'></div>
          </div>
          <Maximize2 size={18} className='text-zinc-500'/>  
        </div>
      </footer>
    )
}