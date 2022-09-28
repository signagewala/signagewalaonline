import React from 'react'

export default function CorpRateTable({ generalRates, generalRateHeaders }) {
    return (
        <div className='max-h-96 overflow-y-scroll'>

            {generalRates ?
                generalRates.map((rate, i) => (


                    <table key={i} className='w-full'>
                        <thead>
                            <tr>
                                {generalRateHeaders ?
                                    generalRateHeaders.map((header, h) => (
                                        <th key={h} className="align-middle text-center border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold
                                    bg-gray-200 text-gray-500 border-gray-100">
                                            {header.header}
                                        </th>
                                    ))
                                    :
                                    (
                                        <th className="align-middle text-center border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold
                            bg-gray-200 text-gray-500 border-gray-100">S No</th>

                                    )
                                }
                            </tr>
                        </thead>
                        <tbody>
                            {generalRates[generalRates.findIndex(h => h.email == rate.email)].rates ?
                                generalRates[generalRates.findIndex(h => h.email == rate.email)].rates.map((crate, r) => (

                                    <tr key={r} className={`${r % 2 == 0 ? "bg-gray-50 text-gray-600" : "bg-gray-100 text-gray-600"} hover:bg-black hover:text-white`}>
                                        <td className='px-4 max-w-min  border-x-2'>{crate.description} <a className='text-xs text-gray-300'> for {rate.cname}</a> <span className={`${crate.status == "requested" ? "text-red-500" : "text-emerald-500"}`}>{crate.status == "requested" ? <i className="fa-solid fa-map-pin"></i> : <i className="fa-solid fa-check"></i>}</span></td>
                                        <td className='px-4 max-w-min  border-x-2 text-center'>{crate.rate}</td>
                                        <td className='px-4 max-w-min  border-x-2 text-center'>..</td>
                                    </tr>
                                ))
                                :
                                <tr><td> {rate.cname} has not selected any elements</td></tr>
                            }
                        </tbody>
                    </table>

                ))
                :
                <div></div>

            }

        </div>
    )
}
