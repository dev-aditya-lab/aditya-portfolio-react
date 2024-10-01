import React from 'react'
import skills from "../utils/skill.json"

const SkilCard = () => {
    return (
        <>
            {
                skills.map((skill) => {
                    return (
                        <div className='h-fit w-fit py-1 md:px-4 px-4 rounded-lg bg-white border border-blue-600 flex items-center gap-2' key={skill.id}>
                            <div className=' h-10 w-10 rounded-md overflow-hidden'>
                                <img className='object-cover h-full w-full' src={skill.logo} alt="" />
                            </div>
                            <h1 className='text-slate-800'>{skill.name}</h1>
                        </div>
                    )
                })
            }
        </>
    )
}

export default SkilCard
