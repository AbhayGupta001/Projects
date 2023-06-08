import Random from './components/Random';
import Tag from './components/Tag';

export default function App() {
  return (
  <div className="background w-screen h-screen overflow-x-hidden pb-8">
    <h1 className='w-11/12 mx-auto mt-8 rounded-xl text-center p-6 text-3xl font-bold bg-white'>Gif Generator</h1>
    <div className='w-full mt-12 px-4 flex flex-col items-center'>
      <Random/>
      <Tag/>
    </div>
  </div>);
}
