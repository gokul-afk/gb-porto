import clsx from 'clsx'
import React from 'react'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'


function SwirlyDoodle({ className }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 281 40"
      className={className}
      preserveAspectRatio="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M240.172 22.994c-8.007 1.246-15.477 2.23-31.26 4.114-18.506 2.21-26.323 2.977-34.487 3.386-2.971.149-3.727.324-6.566 1.523-15.124 6.388-43.775 9.404-69.425 7.31-26.207-2.14-50.986-7.103-78-15.624C10.912 20.7.988 16.143.734 14.657c-.066-.381.043-.344 1.324.456 10.423 6.506 49.649 16.322 77.8 19.468 23.708 2.65 38.249 2.95 55.821 1.156 9.407-.962 24.451-3.773 25.101-4.692.074-.104.053-.155-.058-.135-1.062.195-13.863-.271-18.848-.687-16.681-1.389-28.722-4.345-38.142-9.364-15.294-8.15-7.298-19.232 14.802-20.514 16.095-.934 32.793 1.517 47.423 6.96 13.524 5.033 17.942 12.326 11.463 18.922l-.859.874.697-.006c2.681-.026 15.304-1.302 29.208-2.953 25.845-3.07 35.659-4.519 54.027-7.978 9.863-1.858 11.021-2.048 13.055-2.145a61.901 61.901 0 0 0 4.506-.417c1.891-.259 2.151-.267 1.543-.047-.402.145-2.33.913-4.285 1.707-4.635 1.882-5.202 2.07-8.736 2.903-3.414.805-19.773 3.797-26.404 4.829Zm40.321-9.93c.1-.066.231-.085.29-.041.059.043-.024.096-.183.119-.177.024-.219-.007-.107-.079ZM172.299 26.22c9.364-6.058 5.161-12.039-12.304-17.51-11.656-3.653-23.145-5.47-35.243-5.576-22.552-.198-33.577 7.462-21.321 14.814 12.012 7.205 32.994 10.557 61.531 9.831 4.563-.116 5.372-.288 7.337-1.559Z"
      />
    </svg>
  )
}

function CheckIcon({ className }) {
  return (
    <svg
      aria-hidden="true"
      className={clsx(
        'h-6 w-6 flex-none fill-current stroke-current',
        className
      )}
    >
      <path
        d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
        strokeWidth={0}
      />
      <circle
        cx={12}
        cy={12}
        r={8.25}
        fill="none"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Plan({ name, price, description, href, features, featured = false }) {
  return (
    <section
      className={clsx(
        'flex flex-col rounded-3xl px-6 sm:px-8',
        featured ? 'order-first bg-blue-600 py-8 lg:order-none' : 'lg:py-8'
      )}
    >
      <h3 className="mt-5 font-display text-lg text-white">{name}</h3>
      <p
        className={clsx(
          'mt-2 text-base',
          featured ? 'text-white' : 'text-slate-400'
        )}
      >
        {description}
      </p>
      <p className="order-first font-display text-5xl font-light tracking-tight text-white">
        {price}
      </p>
      <ul
        role="list"
        className={clsx(
          'order-last mt-10 flex flex-col gap-y-3 text-sm',
          featured ? 'text-white' : 'text-slate-200'
        )}
      >
        {features.map((feature) => (
          <li key={feature} className="flex">
            <CheckIcon className={featured ? 'text-white' : 'text-slate-400'} />
            <span className="ml-4">{feature}</span>
          </li>
        ))}
      </ul>
      <Button
        href={href}
        variant={featured ? 'solid' : 'outline'}
        color="white"
        className="mt-8"
        aria-label={`Get started with the ${name} plan for ${price}`}
      >
        Get started
      </Button>
    </section>
  )
}

export function Pricing() {
  const MIN_PP = 0
  const MAX_PP = 1280 // (619-300) * 4 sections
  const [toggled, settoggled] = React.useState(false)
  const [error, seterror] = React.useState(false)
  const [errorMsg, seterrorMsg] = React.useState("")
  const [rangeValues,setrangeValue] = React.useState(700)
  const [creditScore,onselectionchange] = React.useState(700)
  const [validCredit,setvalidCredit] = React.useState(700)



  
  function onPPInputChange(value) {
    const numberConverted = Number(value)
    if(parseInt(value) < 300 || parseInt(value) > 850){
        console.log("Credit Score Error")
        console.log(value)
        seterror(true)
        if(parseInt(value) < 300) {
            seterrorMsg("Credit score must be greater or equal to 300")
            setvalidCredit(numberConverted)
            onselectionchange(creditScore)
            
        }
        else if (parseInt(value) > 850) {
            seterrorMsg("Credit score must be less or equal to 850")
            setvalidCredit(numberConverted)
            onselectionchange(creditScore)
        }
    }
    else{
        seterror(false)
        setvalidCredit(numberConverted)
        onselectionchange(numberConverted)
    }
  }

  function isValid(value) {
    if (value != validCredit){
      return validCredit
    }else {
      return value
    }
  }


  function rangeValue(value){
    if(value < 620){
        return (value - 300)
    }
    else if(value < 640){
      return (parseInt((value-580)*8))
    }
    else if(value < 960){
      return (parseInt(((value-540)*16)/3))
    }
    else if(value < 1280){
      return (parseInt(((value-330)*32)/13))
    }
    else {
      return (850)
    }

  }


  function onPPChange(value) {
    const numberConverted = Number(value)
    setrangeValue(Number(value))
    
    if(parseInt(value) < 320 ){
        
        console.log(value)
        onselectionchange(numberConverted+300)
        setvalidCredit(numberConverted+300)
    }
    else if(parseInt(value) < 640){
      console.log(value)
      setvalidCredit(parseInt(numberConverted/8)+580)
      onselectionchange(parseInt(numberConverted/8)+580)
    }
    else if(parseInt(value) < 960){
      console.log(value)
      setvalidCredit(parseInt((numberConverted*3)/16)+540)
      onselectionchange(parseInt((numberConverted*3)/16)+540)
    }
    else{
      console.log(value)
      setvalidCredit(parseInt((numberConverted*13)/32)+330)
      onselectionchange(parseInt((numberConverted*13)/32)+330)
    }

  }
  return (
    <div className="py-4 md:py-8 px-6 md:px-10  md:min-h-96">
    <div className="flex flex-col md:flex-row">
    <div className="mt-16 flex-grow md:mt-0 md:ml-20">
      <h3 className="text-2xl font-bold">{"What's"} your credit score? </h3>
      <label className="label">
        <span className="label-text text-lg">Your credit score helps determine the interest rates you may qualify for.


</span>
      </label>
      <div className="">
        {toggled? (
        <div className="mt-8 flex ">
            <div className="w-full ">
                <div className={`text-xs font-light mb-1 ${error?" text-red-600":null}`}>CREDIT SCORE</div>
            <input
          type="text"
          placeholder="10"
          maxlength="3"
          size="3"
          className={`input-bordered w-full ${error?"border border-red-500 focus:ring-red-500 focus:border-red-500":"focus:ring-black focus:border-black"} `}
          value={isValid(creditScore)}
          onChange={(e) => {
            onPPInputChange(e.target.value)
          }}
        />
        <div className={`text-xs mt-1 ${error?" text-red-600 visible":"invisible"}`}>{errorMsg}</div>
        </div></div>
        ):(<><div className="mt-8 flex justify-center">
            <div className="flex justify-center font-light ">
            <span className="pt-2 text-2xl font-medium">&nbsp;</span>
            <span className=" text-6xl font-medium">{(creditScore)}</span>
            </div>
            
            <div onClick={(e) => {
          settoggled(true)
        }}
          className="cursor-pointer   flex items-center">
            <div className=' rounded-full ml-2 p-3 hover:bg-gray-200'>
            <svg  width="18"  height="18"  viewBox="0 0 18 18"  fill="none"  xmlns="http://www.w3.org/2000/svg" >
          <path fill-rule="evenodd" clip-rule="evenodd" d="M15.7933 2.2069C15.3346 1.75016 14.7124 1.49567 14.0651 1.50006C13.4178 1.50444 12.7991 1.76732 12.3467 2.23023L2.68 11.8969L1.5 16.5002L6.10333 15.3196L15.77 5.6529C16.233 5.20064 16.496 4.58201 16.5004 3.93477C16.5048 3.28752 16.2502 2.66539 15.7933 2.2069Z" stroke="#330573" stroke-width="1.5" strokeLinecap="round" strokeLinejoin="round" ></path>
          <path d="M12.0703 2.50684L15.493 5.9295" stroke="#330573" stroke-width="1.5" strokeLinecap="round" strokeLinejoin="round"  ></path>
          <path  d="M2.68164 11.896L6.10764 15.316"  stroke="#330573"  stroke-width="1.5"  strokeLinecap="round"  strokeLinejoin="round" ></path>
        </svg>
            </div>
      
    </div>

    
        </div>

        <div className="mt-4 sm:pr-10">
        <div className="form-control">
            
          <div className='z-10 pointer-events-none	 flex cursor-pointer relative top-11 px-5'>
          {/* <div className=" bg-black">&nbsp;&nbsp;</div> */}
          {/* {` justify-center flex ${className}`} */}
          <div className={`w-1/4 rounded-l-md ${(parseInt(creditScore)>299 && parseInt(creditScore)<620)?"bg-red-400":"bg-red-400/50"}`}></div>
            <div className={`w-1/4  ${(parseInt(creditScore)>619 && parseInt(creditScore)<660)?"bg-orange-400":"bg-orange-400/50"}`}></div>
            <div className={`w-1/4  ${(parseInt(creditScore)>659 && parseInt(creditScore)<720)?"bg-green-500":"bg-green-500/50"}`}></div>
            <div className={`w-1/4 rounded-r-md  ${(parseInt(creditScore)>719 && parseInt(creditScore)<851)?"bg-green-600":"bg-green-600/50"}`}>&nbsp;</div>
            {/* <div className=" bg-black">&nbsp;&nbsp;</div> */}
          </div>
          <input
            id="creditInput"
            type="range"
            min={MIN_PP}
            max={MAX_PP}
            onChange={(e) => {
              onPPChange(e.target.value)
            }}
            value={rangeValues}
            step={1}
            className="px-3 z-30 relative cursor-pointer w-full bg-blue-500/0  h-16  appearance-none overflow-hidden rounded-lg accent-red-500"
          />
          
        </div>
        <div className='flex px-4'>
        <div className='w-1/4'> <span className=''>Poor </span><span className='invisible md:visible'>(300 - 619)</span></div>
            <div className='w-1/4'> <span className=''>Fair </span><span className='invisible md:visible'>(620 - 659)</span></div>
            <div className='w-1/4'>Good <span className='invisible md:visible'>(660 - 719)</span></div>
            <div className='w-1/4'>Excellent <span className='invisible md:visible'>(720 - 850)</span></div>
        </div>
      </div>
        
        </> )}
    </div>

      {/* <div className="mt-10 flex flex-col">
        <label>SELECT YOUR CREDIT SCORE*</label>
        <select
          onChange={(e) => {
            console.log(typeof e.target.value)
            onselectionchange(e.target.value)
          }}
          value={creditScore}
          className="select-bordered select w-full max-w-xs"
        >
          <option value="">Your Score</option>
          <option value="<640">{'<640'}</option>
          <option value="640-679">640-679</option>
          <option value="680-719">680-719</option>
          <option value="720-739">720-739</option>
          <option value="740+">740+</option>
        </select>
      </div> */}
      
    </div>
  </div>
  </div>
  )
}
