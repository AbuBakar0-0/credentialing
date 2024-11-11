"use client";

import { useState } from "react";
import HeadingLine from "./HeadingLine";
import TextField from "./TextField";

function ProvidersInformation() {
    const [readonly, setReadOnly] = useState(false);
    const [providerTitle, setProviderTitle] = useState("");

    const handleReadonly = () => {
        setReadOnly(!readonly);
    };

    const handleProviderTitleChange = (event) => {
        setProviderTitle(event.target.value);
    };

    return (
        <>
            <div className="w-full flex flex-col justify-center items-center gap-4">

                {/* Personal Information */}
                <HeadingLine title={"Personal Information"} />

                <div className="w-full flex flex-wrap justify-start gap-4 items-start">
                    <TextField title={"First Name"} label={"first_name"} />
                    <TextField title={"Middle Initial"} label={"middle_initial"} required={false} />
                    <TextField title={"Last Name"} label={"last_name"} />

                    <div className="w-1/5">
                        <label htmlFor="provider_title" className="block mb-2 text-sm font-medium text-black">
                            Provider Title <span className="text-red-500">*</span>
                        </label>
                        <select
                            name="provider_title"
                            id="provider_title"
                            className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 font-semibold"
                            value={providerTitle}
                            onChange={handleProviderTitleChange}
                        >
                            <option value="">Select Title</option>
                            <option value="Dr">Dr</option>
                            <option value="Mr">Mr</option>
                            <option value="Ms">Ms</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    {/* Conditionally rendered text field when "Other" is selected */}
                    {providerTitle === "Other" && (
                        <TextField title={"Please Specify"} label={"other_provider_title"} />
                    )}

                    <TextField title={"SSN"} label={"ssn"} />
                    <div className="w-1/5">
                        <label htmlFor="gender" className="block mb-2 text-sm font-medium text-black">
                            Gender <span className="text-red-500">*</span>
                        </label>
                        <select name="gender" id="gender" className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 font-semibold">
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                </div>
                {/* <div className="w-1/5">
                        <label htmlFor="country_of_citizenship" className="block mb-2 text-sm font-medium text-black">Country of Citizenship <span className="text-red-500">*</span></label>
                        <select name="country_of_citizenship" id="country_of_citizenship" className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 font-semibold">
                        </select>
                    </div>
                    <div className="w-1/5">
                        <label htmlFor="citizenship_type" className="block mb-2 text-sm font-medium text-black">Citizenship Type <span className="text-red-500">*</span></label>
                        <select name="citizenship_type" id="citizenship_type" className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 font-semibold">
                        </select>
                    </div> */}


                <div className="w-full flex flex-wrap justify-start gap-4 items-start">

                    <TextField title={"Driver License or ID"} label={"driver_license_id"} />
                    <div className="w-1/5">
                        <label htmlFor="state_issued" className="block mb-2 text-sm font-medium text-black">State Issued <span className="text-red-500">*</span></label>
                        <select name="state_issued" id="state_issued" className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 font-semibold">
                        </select>
                    </div>
                    <TextField title={"Issue Date"} label={"issue_date"} type="date" />
                    <TextField title={"Expiration Date"} label={"expiration_date"} type="date" />



                </div>

                {/* Professional Information
                <HeadingLine title={"Professional Information"} />

                <div className="w-full flex flex-wrap justify-start gap-4 items-start">
                    <TextField title={"Fluent Language"} label={"languages"} required={false} />
                </div> */}

                {/* Home Address */}
                <HeadingLine title={"Home Address"} />

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
                <div className="w-full flex flex-wrap justify-start gap-4 items-center">
                    <input type="checkbox" onClick={handleReadonly} /> Same as Home Address
                </div>
                <div className="w-full flex flex-wrap justify-start gap-4 items-start">
                    <TextField title={"Mailing Address"} label={"mailing_address"} />
                    <TextField title={"Mailing Address 2"} label={"mailing_address_2"} />
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


                {/* Contact Information */}
                <HeadingLine title={"Contact Information"} />

                <div className="w-full flex flex-wrap justify-start gap-4 items-start">
                    <TextField title={"Home Ph."} label={"home_phone"} />
                    <TextField title={"Cell Ph."} label={"cell_phone"} />
                    <TextField title={"Personal Email"} label={"personal_email"} type="email" />
                    <TextField title={"Work Email"} label={"work_email"} type="email" />

                </div>

                {/* Emergency Contact Information */}
                <HeadingLine title={"Emergency Contact Information"} />

                <div className="w-full flex flex-wrap justify-start gap-4 items-start">
                    <TextField title={"Contact Name"} label={"emergency_contact_name"} />
                    <TextField title={"Relation"} label={"relation"} />
                    <TextField title={"Cell Ph."} label={"emergency_cell_phone"} />
                    <TextField title={"Email"} label={"emergency_email"} type="email" />
                </div>

                <div className="w-full flex flex-wrap justify-start gap-4 items-start">

                </div>
                <button className="px-4 py-3 rounded-lg bg-secondary text-white">
                    Save & Next
                </button>
            </div >
        </>
    )
}

export default ProvidersInformation