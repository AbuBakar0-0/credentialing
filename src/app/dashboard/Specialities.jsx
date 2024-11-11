import React, { useState } from 'react'
import HeadingLine from './HeadingLine'
import TextField from './TextField'

function Specialities() {


    return (
        <>
            <div className="w-full flex flex-col justify-center items-center gap-4">
                <HeadingLine title={"Specialities"} />
                <p className='w-full'><span className='text-red-400'>*</span>Required all fields are marked with red asterik</p>

                <p className='w-full text-lg'>Primary Speciality</p>

                <div className="w-full flex flex-wrap justify-start gap-4 items-start">
                    <div className="w-1/2">
                        <label htmlFor="state_issued" className="block mb-2 text-sm font-medium text-black">Primary Speciality<span className="text-red-500">*</span></label>
                        <select name="state_issued" id="state_issued" className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 font-semibold">
                        </select>
                    </div>
                    <div className="w-1/2">
                        <label htmlFor="provider_title" className="block mb-2 text-sm font-medium text-black">Board Certifieds<span className="text-red-500">*</span></label>
                        <div className='w-full flex flex-row justify-start items-center gap-4'>
                            <input type="radio" name="training" /> Yes
                            <input type="radio" name="training" /> No
                        </div>
                    </div>
                    <div className="w-1/2">
                        <label htmlFor="state_issued" className="block mb-2 text-sm font-medium text-black">Name of Certifying Board<span className="text-red-500">*</span></label>
                        <select name="state_issued" id="state_issued" className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 font-semibold">
                        </select>
                    </div>
                </div>

                <div className='w-full flex flex-wrap justify-start gap-4 items-start'>
                    <TextField title={"Country"} label={"country"} />
                    <TextField title={"State"} label={"state"} />
                    <TextField title={"County"} label={"county"} />
                </div>
                <div className="w-full flex flex-wrap justify-start gap-4 items-start">
                    <TextField title={"Street Address 1"} label={"street_address"} />
                    <TextField title={"Street Address 2"} label={"street_address_2"} required={false} />
                </div>
                <div className="w-full flex flex-wrap justify-start gap-4 items-start">
                    <TextField title={"City"} label={"city"} />
                    <div className="w-1/5">
                        <label htmlFor="state" className="block mb-2 text-sm font-medium text-black">State <span className="text-red-500">*</span></label>
                        <select name="state" id="state" className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 font-semibold">
                        </select>
                    </div>
                    <TextField title={"Zip"} label={"zip"} />
                </div>

                <div className="w-full flex flex-wrap justify-start gap-4 items-start">
                    <TextField title={"Effective Date"} label={"Start_date"} type="date" />
                    <div className="w-full">
                        <label htmlFor="provider_title" className="block mb-2 text-sm font-medium text-black">Does your board certification have an expiry Date?<span className="text-red-500">*</span></label>
                        <div className='w-full flex flex-row justify-start items-center gap-4'>
                            <input type="radio" name="training" /> Yes
                            <input type="radio" name="training" /> No
                        </div>
                    </div>
                    <TextField title={"Expiry Date"} label={"End_date"} type="date" />
                </div>


                <p className='w-full text-lg'>Primary Speciality</p>

                <div className="w-full flex flex-wrap justify-start gap-4 items-start">
                    <div className="w-1/2">
                        <label htmlFor="state_issued" className="block mb-2 text-sm font-medium text-black">Primary Speciality<span className="text-red-500">*</span></label>
                        <select name="state_issued" id="state_issued" className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 font-semibold">
                        </select>
                    </div>
                    <div className="w-1/2">
                        <label htmlFor="provider_title" className="block mb-2 text-sm font-medium text-black">Board Certifieds<span className="text-red-500">*</span></label>
                        <div className='w-full flex flex-row justify-start items-center gap-4'>
                            <input type="radio" name="training" /> Yes
                            <input type="radio" name="training" /> No
                        </div>
                    </div>
                    <div className="w-1/2">
                        <label htmlFor="state_issued" className="block mb-2 text-sm font-medium text-black">Name of Certifying Board<span className="text-red-500">*</span></label>
                        <select name="state_issued" id="state_issued" className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 font-semibold">
                        </select>
                    </div>
                </div>

                <div className='w-full flex flex-wrap justify-start gap-4 items-start'>
                    <TextField title={"Country"} label={"country"} />
                    <TextField title={"State"} label={"state"} />
                    <TextField title={"County"} label={"county"} />
                </div>
                <div className="w-full flex flex-wrap justify-start gap-4 items-start">
                    <TextField title={"Street Address 1"} label={"street_address"} />
                    <TextField title={"Street Address 2"} label={"street_address_2"} required={false} />
                </div>
                <div className="w-full flex flex-wrap justify-start gap-4 items-start">
                    <TextField title={"City"} label={"city"} />
                    <div className="w-1/5">
                        <label htmlFor="state" className="block mb-2 text-sm font-medium text-black">State <span className="text-red-500">*</span></label>
                        <select name="state" id="state" className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 font-semibold">
                        </select>
                    </div>
                    <TextField title={"Zip"} label={"zip"} />
                </div>

                <div className="w-full flex flex-wrap justify-start gap-4 items-start">
                    <TextField title={"Effective Date"} label={"Start_date"} type="date" />
                    <div className="w-full">
                        <label htmlFor="provider_title" className="block mb-2 text-sm font-medium text-black">Does your board certification have an expiry Date?<span className="text-red-500">*</span></label>
                        <div className='w-full flex flex-row justify-start items-center gap-4'>
                            <input type="radio" name="training" /> Yes
                            <input type="radio" name="training" /> No
                        </div>
                    </div>
                    <TextField title={"Expiry Date"} label={"End_date"} type="date" />
                </div>


                <p className='w-full text-lg'>Secondary Speciality</p>
                <div className='w-full h-[2px] bg-secondary'></div>

                <div className="w-full flex flex-wrap justify-start gap-4 items-start">
                    <div className="w-1/2">
                        <label htmlFor="state_issued" className="block mb-2 text-sm font-medium text-black">Primary Speciality<span className="text-red-500">*</span></label>
                        <select name="state_issued" id="state_issued" className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 font-semibold">
                        </select>
                    </div>
                    <div className="w-1/2">
                        <label htmlFor="provider_title" className="block mb-2 text-sm font-medium text-black">Board Certifieds<span className="text-red-500">*</span></label>
                        <div className='w-full flex flex-row justify-start items-center gap-4'>
                            <input type="radio" name="training" /> Yes
                            <input type="radio" name="training" /> No
                        </div>
                    </div>
                    <div className="w-1/2">
                        <label htmlFor="state_issued" className="block mb-2 text-sm font-medium text-black">Name of Certifying Board<span className="text-red-500">*</span></label>
                        <select name="state_issued" id="state_issued" className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 font-semibold">
                        </select>
                    </div>
                </div>

                <div className='w-full flex flex-wrap justify-start gap-4 items-start'>
                    <TextField title={"Country"} label={"country"} />
                    <TextField title={"State"} label={"state"} />
                    <TextField title={"County"} label={"county"} />
                </div>
                <div className="w-full flex flex-wrap justify-start gap-4 items-start">
                    <TextField title={"Street Address 1"} label={"street_address"} />
                    <TextField title={"Street Address 2"} label={"street_address_2"} required={false} />
                </div>
                <div className="w-full flex flex-wrap justify-start gap-4 items-start">
                    <TextField title={"City"} label={"city"} />
                    <div className="w-1/5">
                        <label htmlFor="state" className="block mb-2 text-sm font-medium text-black">State <span className="text-red-500">*</span></label>
                        <select name="state" id="state" className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 font-semibold">
                        </select>
                    </div>
                    <TextField title={"Zip"} label={"zip"} />
                </div>

                <div className="w-full flex flex-wrap justify-start gap-4 items-start">
                    <TextField title={"Effective Date"} label={"Start_date"} type="date" />
                    <div className="w-full">
                        <label htmlFor="provider_title" className="block mb-2 text-sm font-medium text-black">Does your board certification have an expiry Date?<span className="text-red-500">*</span></label>
                        <div className='w-full flex flex-row justify-start items-center gap-4'>
                            <input type="radio" name="training" /> Yes
                            <input type="radio" name="training" /> No
                        </div>
                    </div>
                    <TextField title={"Expiry Date"} label={"End_date"} type="date" />
                </div>

                <p className='w-full text-lg'>Certifications</p>
                <div className='w-full h-[2px] bg-secondary'></div>

                <div className="w-full">
                    <label htmlFor="provider_title" className="block mb-2 text-sm font-medium text-black">Do you have Certifications<span className="text-red-500">*</span></label>
                    <div className='w-full flex flex-row justify-start items-center gap-4'>
                        <input type="radio" name="training" /> Yes
                        <input type="radio" name="training" /> No
                    </div>
                </div>

                <p className='w-full text-lg'>Qualified Autism Service Provicer (QASP)</p>

                <div className="w-full">
                    <label htmlFor="provider_title" className="block mb-2 text-sm font-medium text-black">Qualified Autism Service Provicer (QASP)<span className="text-red-500">*</span></label>
                    <div className='w-full flex flex-row justify-start items-center gap-4'>
                        <input type="radio" name="training" /> Yes
                        <input type="radio" name="training" /> No
                    </div>
                </div>

                <p className='w-full text-lg'>Cardio Pulmonary Resuscitation (CPR)</p>

                <div className="w-full">
                    <label htmlFor="provider_title" className="block mb-2 text-sm font-medium text-black">Cardio Pulmonary Resuscitation (CPR)<span className="text-red-500">*</span></label>
                    <div className='w-full flex flex-row justify-start items-center gap-4'>
                        <input type="radio" name="training" /> Yes
                        <input type="radio" name="training" /> No
                    </div>
                </div>

                <p className='w-full text-lg'>Basic Life Support (BLS)</p>

                <div className="w-full">
                    <label htmlFor="provider_title" className="block mb-2 text-sm font-medium text-black">Basic Life Support (BLS)<span className="text-red-500">*</span></label>
                    <div className='w-full flex flex-row justify-start items-center gap-4'>
                        <input type="radio" name="training" /> Yes
                        <input type="radio" name="training" /> No
                    </div>
                </div>

                <p className='w-full text-lg'>Advanced Cardiac Life Support (BLS)</p>

                <div className="w-full">
                    <label htmlFor="provider_title" className="block mb-2 text-sm font-medium text-black">Advanced Cardiac Life Support (BLS)<span className="text-red-500">*</span></label>
                    <div className='w-full flex flex-row justify-start items-center gap-4'>
                        <input type="radio" name="training" /> Yes
                        <input type="radio" name="training" /> No
                    </div>
                </div>

                <p className='w-full text-lg'>Advanced Cardiac Life Support (ACLS)</p>

                <div className="w-full">
                    <label htmlFor="provider_title" className="block mb-2 text-sm font-medium text-black">Advanced Cardiac Life Support (ACLS)<span className="text-red-500">*</span></label>
                    <div className='w-full flex flex-row justify-start items-center gap-4'>
                        <input type="radio" name="training" /> Yes
                        <input type="radio" name="training" /> No
                    </div>
                </div>

                <p className='w-full text-lg'>Advanced Life Support in OB (ALSO)</p>

                <div className="w-full">
                    <label htmlFor="provider_title" className="block mb-2 text-sm font-medium text-black">Advanced Life Support in OB (ALSO)<span className="text-red-500">*</span></label>
                    <div className='w-full flex flex-row justify-start items-center gap-4'>
                        <input type="radio" name="training" /> Yes
                        <input type="radio" name="training" /> No
                    </div>
                </div>

                <p className='w-full text-lg'>Health Care Provider (CoreC)</p>

                <div className="w-full">
                    <label htmlFor="provider_title" className="block mb-2 text-sm font-medium text-black">Health Care Provider (CoreC)<span className="text-red-500">*</span></label>
                    <div className='w-full flex flex-row justify-start items-center gap-4'>
                        <input type="radio" name="training" /> Yes
                        <input type="radio" name="training" /> No
                    </div>
                </div>

                <p className='w-full text-lg'>Advanced Trauma Life Support (ATLS)</p>

                <div className="w-full">
                    <label htmlFor="provider_title" className="block mb-2 text-sm font-medium text-black">Advanced Trauma Life Support (ATLS)<span className="text-red-500">*</span></label>
                    <div className='w-full flex flex-row justify-start items-center gap-4'>
                        <input type="radio" name="training" /> Yes
                        <input type="radio" name="training" /> No
                    </div>
                </div>

                <p className='w-full text-lg'>Neonatal Advanced Life Support (NALS)</p>

                <div className="w-full">
                    <label htmlFor="provider_title" className="block mb-2 text-sm font-medium text-black">Neonatal Advanced Life Support (NALS)<span className="text-red-500">*</span></label>
                    <div className='w-full flex flex-row justify-start items-center gap-4'>
                        <input type="radio" name="training" /> Yes
                        <input type="radio" name="training" /> No
                    </div>
                </div>

                <p className='w-full text-lg'>Neonaltal Resuscitation Program (NRP)</p>

                <div className="w-full">
                    <label htmlFor="provider_title" className="block mb-2 text-sm font-medium text-black">Neonaltal Resuscitation Program (NRP)<span className="text-red-500">*</span></label>
                    <div className='w-full flex flex-row justify-start items-center gap-4'>
                        <input type="radio" name="training" /> Yes
                        <input type="radio" name="training" /> No
                    </div>
                </div>

                <p className='w-full text-lg'>Pediatric Advanced Life Support (PALS)</p>

                <div className="w-full">
                    <label htmlFor="provider_title" className="block mb-2 text-sm font-medium text-black">Pediatric Advanced Life Support (PALS)<span className="text-red-500">*</span></label>
                    <div className='w-full flex flex-row justify-start items-center gap-4'>
                        <input type="radio" name="training" /> Yes
                        <input type="radio" name="training" /> No
                    </div>
                </div>

                <p className='w-full text-lg'>Other</p>

                <div className="w-full">
                    <label htmlFor="provider_title" className="block mb-2 text-sm font-medium text-black">Other<span className="text-red-500">*</span></label>
                    <div className='w-full flex flex-row justify-start items-center gap-4'>
                        <input type="radio" name="training" /> Yes
                        <input type="radio" name="training" /> No
                    </div>
                </div>
                
                <p className='w-full text-lg'>Anesthesia Permit</p>

                <div className="w-full">
                    <label htmlFor="provider_title" className="block mb-2 text-sm font-medium text-black">Anesthesia Permit<span className="text-red-500">*</span></label>
                    <div className='w-full flex flex-row justify-start items-center gap-4'>
                        <input type="radio" name="training" /> Yes
                        <input type="radio" name="training" /> No
                    </div>
                </div>
                
            </div>

        </>
    )
}

export default Specialities