import React from 'react'

export default function CityAutoComplete({ cities, setFormData, formData, popAutocompleteCity, setPopAutocompleteCity }) {
    const handleClick = (e) => {
        setFormData({
            ...formData,
            'city': e.target.innerText
        })
        console.log(e)
        setPopAutocompleteCity((popAutocompleteCity) => false) //to close dropdown
    }
    return (
        <div className='overflow-y-auto bg-white h-auto w-auto'>
            {cities.map((cities) => (
                <div onClick={handleClick} key={cities.id} className="hover:bg-gray-300 px-4">
                    <div>{cities.name}</div>
                </div>
            ))
            }
        </div >
    )
}
