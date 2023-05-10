import tw from 'twin.macro'

export const AppLoader = async () => {
  return null
}

export default function App() {
  return <HelloWorld>Welcome to MERN Template</HelloWorld>
}

const HelloWorld = tw.div`fixed inset-0 bg-slate-900 flex items-center justify-center text-white text-7xl`
