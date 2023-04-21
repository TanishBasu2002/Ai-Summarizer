import {logo} from '../assets'
const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
        <nav className="flex justify-between items-center w-full mb-10 pt-3"> <img src={logo} alt="logo" className='w-28 object-contailer'/>
        <button type='button' onClick={()=> window.open('https://github.com/TanishBasu2002/Ai-Summarizer')} className="black_btn">Github</button>
        </nav>
        <h1 className="head_text">Summarize Articles With <br className="max-md:hidden" />
        <span className='orange_gradient'>OpenAI GPT-4</span>
        </h1>
        <h2 className="desc">
        This is a website that uses the AI Summarizer API from Rapid API to generate summaries of long articles or texts. The website is built using React and Redux, and uses Vite as the build tool.
        </h2>
    </header>
  )
}

export default Hero