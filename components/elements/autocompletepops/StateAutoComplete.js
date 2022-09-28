import React from 'react'

export default function StateAutoComplete({ states, setFormData, formData, popAutocompleteState, setPopAutocompleteState }) {
    const handleClick = (e) => {
        setFormData({
            ...formData,
            'state': e.target.innerText
        })
        console.log(e)
        setPopAutocompleteState((popAutocompleteState) => false) //to close dropdown
    }
    return (
        <div className='overflow-y-auto bg-white h-auto w-auto'>
            {states.map((states) => (
                <div onClick={handleClick} key={states.key} className="hover:bg-gray-300 px-4">
                    <div>{states.name}</div>
                </div>
            ))
            }
        </div >
    )
}
