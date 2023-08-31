import { Banner } from './+Banner'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Banner />
      <div className="h-screen w-screen bg-cyan-200"></div>
    </main>
  )
}
