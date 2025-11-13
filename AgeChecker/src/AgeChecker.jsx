import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function AgeChecker() {
    const [day, setDay] = useState("")
    const [month, setMonth] = useState("")
    const [year, setYear] = useState("")
    const [error, setError] = useState([])
    const handleSubmit = (e) => {
        e.preventDefault()
        setYear(e.target.year.value)
        setMonth(e.target.month.value)
        setDay(e.target.day.value)
        let year1 = Number(e.target.year.value)
        let month1 = Number(e.target.month.value)
        let day1 = Number(e.target.day.value)
        if (year1 > 2025){
            error.push("year")
            setError(error)
        }else {
            setYear(year1)
            
        }
        
        if (month1 > 12 || month1 < 1){
            error.push("month")
            setError(error)
        }else {
            setMonth(month1)
        }

        if (day1 > 31){
            error.push("day")
            console.log(error)
            setError(error)
        }else {
            setDay(day1)
        }
        
        if (year1 <= 2025 && year1 >= 0 && month1 <= 12 && month >=1 && day1 > 0 && day1 <= 31) {
            setYear(year1)
            setMonth(month1)
            setDay(day1)
            setError([])
        }
    }
    return (
        <>
        <form className='w-[600px] h-[450px] bg-white rounded-[25px] rounded-br-[120px] font-[Poppins-Bold] p-[35px]' onSubmit={handleSubmit}>
            <div className='flex gap-[15px]'>
                <div>
                    <h1 className={`opacity-[60%] ${error.includes("day") ? 'text-red-500' : ''}`}>DAY</h1>
                    <input type="number" maxLength={2} placeholder='DD' className={`text-[30px] font-[700] border w-[120px] border-[#e7e7e7] rounded-[6px] opacity-[60%] px-3 ${error.includes("day") ? 'border-red-500' : ''}`} name='day'/>
                </div>
                <div>
                    <h1 className={`opacity-[60%] ${error.includes("month") ? 'text-red-500' : ''}`}>MONTH</h1>
                    <input type="number" maxLength={2} placeholder='DD' className={`text-[30px] font-[700] border w-[120px] border-[#e7e7e7] rounded-[6px] opacity-[60%] px-3 ${error.includes("month") ? 'border-red-500' : ''}`} name='month'/>
                </div>
                <div>
                    <h1 className={`opacity-[60%] ${error.includes("year") ? 'text-red-500' : ''}`}>YEAR</h1>
                    <input type="number" maxLength={2} placeholder='DD' className={`text-[30px] font-[700] border w-[120px] border-[#e7e7e7] rounded-[6px] opacity-[60%] px-3 ${error.includes("year") ? 'border-red-500' : ''}`} name='year'/>
                </div>
            </div>
            <div className='flex justify-between items-center'>
                <hr className='w-[89%] text-[#ededed]'/>
                <button type='submit'>
                    <div className='w-[70px] h-[70px] rounded-[50%] bg-[#864cff] flex justify-center items-center cursor-pointer'>
                        <img src="/images/icon-arrow.svg" alt="" className='w-[30px]'/>
                    </div>
                </button>
            </div>
            <div className='relative bottom-[20px]'>
                <section className='flex items-center gap-[15px]'>
                    {year ? <h1 className='text-[80px]  leading-[70px] text-[#864cff]'>{2025-Number(year)}</h1> :
                        <div className='flex gap-[15px]'>
                            <div className='w-[40px] h-[15px] bg-[#864cff]'>

                            </div> 
                            <div className='w-[40px] h-[15px] bg-[#864cff]'>

                            </div> 
                        </div>
                    }


                    <h1 className='text-[80px] leading-[50px]'><i>years</i></h1>
                </section>
                <section className='flex items-center gap-[15px]'>
                    {month ? <h1 className='text-[80px]  leading-[70px] text-[#864cff]'>{Number(month==12 ? 0 : 11-Number(month))}</h1> : <div className='flex gap-[15px]'>
                        <div className='w-[40px] h-[15px] bg-[#864cff] relative top-[10px]'>

                        </div>
                        <div className='w-[40px] h-[15px] bg-[#864cff] relative top-[10px]'>

                        </div>
                    </div>}
                    <h1 className='text-[80px] h-[100px]'><i>months</i></h1>
                </section>
                <section className='flex items-center gap-[15px]'>
                    {day ? <h1 className='text-[80px]  leading-[70px] text-[#864cff]'>{day > 13 ? 30-day : 13-day}</h1> : <div className='flex gap-[15px]'>
                        <div className='w-[40px] h-[15px] bg-[#864cff] relative top-[10px]'>

                        </div>
                        <div className='w-[40px] h-[15px] bg-[#864cff] relative top-[10px]'>

                        </div>
                    </div>}
                    <h1 className='text-[80px] h-[100px]'><i className='h-[100px]'>days</i></h1>
                </section>
            </div>
        </form>
        </>
    )
}

export default AgeChecker