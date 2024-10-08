// import TranslatorStart from './components/TranslatorStart'
import TranslatorApp from './components/TranslatorApp'

const App = () => {
  return (
    <div className="w-full h-screen bg-[#111] flex justify-center items-center text-[#ff4500]">
      <div className='w-[90%] max-w-lg bg-[#87ceeb] rounded-3xl border-8 border-[#ff4500] flex flex-col'>
        {/* <TranslatorStart /> */}
        <TranslatorApp />
      </div>
    </div>
  )
}

export default App
