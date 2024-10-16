import React from 'react'

export default function page() {
  return (
    <div className="flex overflow-hidden flex-col justify-center px-10 pt-28 pb-20 max-md:px-5 max-md:pt-24">
      <div className="text-center w-full text-8xl font-medium leading-tight text-neutral-900 max-md:max-w-full max-md:text-4xl">
        How can we help?
      </div>
      <div className="flex flex-wrap gap-10 items-start self-center mt-28 max-md:mt-10 max-md:max-w-full">
        <form className="flex flex-col justify-center min-w-[240px] w-[381px]">
          <div className="text-5xl font-light leading-tight text-black tracking-tighter">
            Message Us
          </div>
          <div className="flex flex-col mt-4 w-full text-sm font-semibold leading-6 whitespace-nowrap max-w-[381px] tracking-tighter">
            <div className="flex overflow-hidden items-center self-start">
            <label htmlFor='name' className="self-stretch my-auto text-neutral-900">Name</label>
              <div className="self-stretch my-auto text-orange-400 opacity-80">
                *
              </div>
            </div>
            <input type="text" className="flex items-end py-2 pr-2 pl-4 w-full bg-white rounded-md border border-neutral-300" placeholder='Name' name='name'>
            </input>
          </div>
          <div className="flex flex-col mt-4 w-full text-sm font-semibold leading-6 whitespace-nowrap max-w-[381px] tracking-tighter">
            <div className="flex overflow-hidden items-center self-start">
              <label htmlFor="email" className="self-stretch my-auto text-neutral-900">Email</label>
              <div className="self-stretch my-auto text-orange-400 opacity-80">
                *
              </div>
            </div>
            <input type="email" className="flex items-end py-2 pr-2 pl-4 w-full bg-white rounded-md border border-neutral-300" placeholder='Email' name='email'>
            </input>
          </div>
          <div className="flex flex-col mt-4 w-full max-w-[381px]">
            <div className="flex overflow-hidden items-center self-start text-sm font-semibold leading-6 whitespace-nowrap">
              <label htmlFor='message' className="self-stretch my-auto text-neutral-900">
                Message
              </label>
              <div className="self-stretch my-auto text-orange-400 opacity-80">
                *
              </div>
            </div>
            <input type="text" className="flex items-end py-2 pr-2 pl-4 w-full bg-white rounded-md border border-neutral-300" placeholder='Message' name='message'>
            </input>
          </div>
          <button type='submit'value="submit" className="gap-2 self-start px-4 py-2.5 mt-4 text-base font-semibold text-center whitespace-nowrap bg-black rounded-md text-white">
            Submit </button>
        </form>

        <div className="shrink-0 self-stretch w-0 bg-neutral-900 border-neutral-300 h-[393px] tracking-tighter" />
        <div className="flex flex-col min-w-[351px] w-[351px]">
          <div className="text-5xl font-light text-black">
            Get in touch
          </div>
          <div className="flex overflow-hidden gap-4 items-center px-4 py-3 mt-6 w-full rounded-md border border-neutral-300">
            <div className="flex gap-2 items-center self-stretch p-4 my-auto w-16 h-16 bg-orange-100 rounded-[99px]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/484f86c6dea2c84f565b5e0ed820c3ac0ec713779177a266a3de354de2a4b1bf?placeholderIfAbsent=true&apiKey=bfbb11ef5bde4de380e6eb67bb37fa0f"
                className="object-contain w-8 aspect-square"
              />
            </div>
            <div className="flex flex-col self-stretch my-auto font-medium whitespace-nowrap text-neutral-900">
              <div className="text-3xl leading-tight ">Email</div>
              <div className="text-lg leading-8 opacity-80">
                info@learnex.com
              </div>
            </div>
          </div>
          <div className="flex overflow-hidden gap-4 items-center px-4 py-3 mt-6 w-full rounded-md border border-neutral-300">
            <div className="flex gap-2 items-center self-stretch p-4 my-auto w-16 h-16 bg-orange-100 rounded-[99px]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2627dc6f167246803e0a3afca319a4756b33222b9602691b20c8418954ee628c?placeholderIfAbsent=true&apiKey=bfbb11ef5bde4de380e6eb67bb37fa0f"
                className="object-contain w-8 aspect-square"
              />
            </div>
            <div className="flex flex-col self-stretch my-auto font-medium text-neutral-900">
              <div className="text-3xl leading-tight">Call or text</div>
              <div className="text-lg leading-8 opacity-80">+(91) 88503-46213</div>
            </div>
          </div>
          <div className="flex overflow-hidden gap-4 items-center px-4 py-3 mt-6 w-full rounded-md border border-neutral-300">
            <div className="flex gap-2 items-center self-stretch p-4 my-auto w-16 h-16 bg-orange-100 rounded-[99px]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/434238cd4b76de67fc64264f38436b467fd446e91d9b037b2e43f6d3214386f9?placeholderIfAbsent=true&apiKey=bfbb11ef5bde4de380e6eb67bb37fa0f"
                className="object-contain w-8 aspect-square"
              />
            </div>
            <div className="flex flex-col self-stretch my-auto font-medium whitespace-nowrap text-neutral-900">
              <div className="text-3xl leading-tight">Social</div>
              <div className="text-lg leading-8 opacity-80">@learnerx.com</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
