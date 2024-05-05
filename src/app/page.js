import Image from 'next/image'

export default function Home() {
  return (
    <main className='min-h-screen bg-[#f4d04e] flex items-center justify-center p-4'>
      <div className='flex flex-col gap-4 max-w-80 bg-white p-4 rounded-2xl border border-black shadow-[6px_6px_0_0_rgba(0,0,0,0)] shadow-black hover:shadow-[12px_12px_0_0_rgba(0,0,0,0)] hover:shadow-black transition-all'>
        <Image src='./illustration-article.svg' width={320} height={320} className='rounded-xl' />
        <div className='text-xs font-bold bg-[#f4d04e] max-w-min py-1 px-3 rounded-md'>Learning</div>
        <p className='text-xs font-semibold'>Published 21 Dec 2023</p>
        <h2 className='text-lg font-extrabold hover:text-[#f4d04e] cursor-pointer'>HTML & CSS foundations</h2>
        <p className='text-gray-500 text-sm'>These languages are the backbone of every website, defining structure, content, and presentatuon</p>
        <div className='flex items-center gap-4'>
          <Image src='/image-avatar.webp' alt='avatar' width={30} height={30} />
          <p className='text-xs font-extrabold'>Greg Hooper</p>
        </div>
      </div>
    </main>
  )
}
