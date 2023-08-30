import React from 'react'
import {logo} from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex 
    justify-center items-center flex-col">
        <nav className="flex justify-between 
        items-center w-full mb-10 pt-3">
            <img src={logo} alt = "sumarizer_logo" 
            className="w-28 object-contain"/>

            <button
            type ="button"
            onClick={() => window.open('https://github.com/AaronTomThomas/article-summarizer')}
            className = "black_btn">
                Github
            </button>

        </nav>

        <h1 className='head_text'>
            Instant Article Summaries using <br className='max-md:hidden'/>
            <span className='title_gradient'>OpenAI GPT-4</span>
        </h1>
        <h1 className='desc'>
        Unlock the Power of GPT-4: Get concise article summaries instantly with SummarizeSwift. Paste URLs, receive insights!
        </h1>
    </header>
  )
}

export default Hero