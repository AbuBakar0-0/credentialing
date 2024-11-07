import React from 'react'

const Dropdown = ({ title, label, required = true }) => {

    const specialities = [
        {
            title: "Allergy and Immunology"
        },
        {
            title: "Anesthesiology"
        },
        {
            title: "Behavioral Health"
        },
        {
            title: "Cardiology"
        },
        {
            title: "Chiropractic"
        },
        {
            title: "Critical Care Medicine"
        },
        {
            title: "Dental"
        },
        {
            title: "Dermatology"
        },
        {
            title: "DME"
        },
        {
            title: "Doula / Midwife"
        },
        {
            title: "Emergency Medicine"
        },
        {
            title: "Endocrinology"
        },
        {
            title: "Family Medicine"
        },
        {
            title: "Gastroenterology"
        },
        {
            title: "General Surgery"
        },
        {
            title: "Gynecology"
        },
        {
            title: "Geriatrics"
        },
        {
            title: "Home Health"
        },
        {
            title: "Infectious Diseases"
        },
        {
            title: "Internal Medicine"
        },
        {
            title: "Laboratory"
        },
        {
            title: "Nephrology"
        },
        {
            title: "Neurology"
        },
        {
            title: "Neurosurgery"
        },
        {
            title: "Obstetrics and Gynecology (OB/GYN)"
        },
        {
            title: "Ophthamology"
        },
        {
            title: "Oncology"
        },
        {
            title: "Orthopedics"
        },
        {
            title: "Otolaryngology (ENT)"
        },
        {
            title: "Pain Management"
        },
        {
            title: "Pediatrics"
        },
        {
            title: "Physical Therapy"
        },
        {
            title: "Plastic Surgery"
        },
        {
            title: "Podiatry"
        },
        {
            title: "Psychiatry"
        },
        {
            title: "Pulmonology"
        },
        {
            title: "Radiology"
        },
        {
            title: "Rheumatology"
        },
        {
            title: "Sleep Medicine"
        },
        {
            title: "Urgent Care"
        },
        {
            title: "Urology"
        },
        {
            title: "Vascular Surgery"
        }
    ];


    return (
        <>
            
            <div className="w-1/5">
                <label htmlFor={label} className="block mb-2 text-sm font-medium text-black">{title} {required ? <span className="text-red-500">*</span> : <></>}</label>
                <select name={title} id={label} className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 font-semibold">
                    {title == "Speciality" ?

                        specialities.map((item, index) => (
                            <option value={item.title} key={index}>{item.title}</option>
                        ))
                        :
                        <>
                            <option value=""></option>
                        </>
                    }
                </select>
            </div>
        </>
    )
}

export default Dropdown