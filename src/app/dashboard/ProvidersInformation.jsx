import HeadingLine from "./HeadingLine"
import TextField from "./TextField"

function ProvidersInformation() {
    return (
        <>
            <div className="w-full flex flex-col justify-center items-center gap-4">

                {/* Personal Information */}
                <HeadingLine title={"Personal Information"} />

                <div className="w-full flex flex-wrap justify-start gap-4 items-start">
                    <TextField title={"First Name"} label={"first_name"} />
                    <TextField
                        title={"Middle Initial"}
                        label={"middle_initial"}
                        required={false}
                    />
                    <TextField title={"Last Name"} label={"last_name"} />
                    <div className="w-1/5">
                        <label htmlFor="provider_title" className="block mb-2 text-sm font-medium text-black">Provider Title <span className="text-red-500">*</span></label>
                        <select name="provider_title" id="provider_title" className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 font-semibold">
                        </select>
                    </div>
                </div>

                {/* Professional Information */}
                <HeadingLine title={"Professional Information"} />

                <div className="w-full flex flex-wrap justify-start gap-4 items-start">
                    <TextField title={"Fluent Language"} label={"languages"} required={false} />
                </div>

                {/* Contact Information */}
                <HeadingLine title={"Contact Information"} />

                <div className="w-full flex flex-wrap justify-start gap-4 items-start">
                    <TextField title={"Work Email"} label={"work_email"} type="email" />
                    <TextField title={"Personal Email"} label={"personal_email"} type="email" />
                    <TextField title={"Home Ph."} label={"home_phone"} />
                    <TextField title={"Cell Ph."} label={"cell_phone"} />
                </div>

                {/* Emergency Contact Information */}
                <HeadingLine title={"Emergency Contact Information"} />

                <div className="w-full flex flex-wrap justify-start gap-4 items-start">
                    <TextField title={"Contact Name"} label={"emergency_contact_name"} />
                    <TextField title={"Contact Type"} label={"emergency_contact_type"} />
                    <TextField title={"Email"} label={"emergency_email"} type="email" />
                    <TextField title={"Cell Ph."} label={"emergency_cell_phone"} />
                </div>

                {/* Home Address */}
                <HeadingLine title={"Home Address"} />

                <div className="w-full flex flex-wrap justify-start gap-4 items-start">
                    <TextField title={"Home Address"} label={"home_address"} />
                    <TextField title={"Home Address 2"} label={"home_address_2"} required={false} />
                    <TextField title={"City"} label={"city"} />
                    <div className="w-1/5">
                        <label htmlFor="state" className="block mb-2 text-sm font-medium text-black">State <span className="text-red-500">*</span></label>
                        <select name="state" id="state" className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 font-semibold">
                        </select>
                    </div>
                    <TextField title={"Zip"} label={"zip"} />
                    <TextField title={"County"} label={"county"} required={false} />
                    <div className="w-1/5">
                        <label htmlFor="country" className="block mb-2 text-sm font-medium text-black">Country <span className="text-red-500">*</span></label>
                        <select name="country" id="country" className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 font-semibold">
                        </select>
                    </div>
                    <TextField title={"Mailing Address"} label={"mailing_address"} />
                </div>

                {/* Birth Information */}
                <HeadingLine title={"Birth Information"} />

                <div className="w-full flex flex-wrap justify-start gap-4 items-start">
                    <div className="w-1/5">
                        <label htmlFor="gender" className="block mb-2 text-sm font-medium text-black">Gender <span className="text-red-500">*</span></label>
                        <select name="gender" id="gender" className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 font-semibold">
                        </select>
                    </div>
                    <TextField title={"DOB"} label={"dob"} type="date" />
                    <TextField title={"Birth City"} label={"birth_city"} />
                    <TextField title={"Birth State"} label={"birth_state"} />
                    <TextField title={"Birth County"} label={"birth_county"} />
                    <div className="w-1/5">
                        <label htmlFor="birth_country" className="block mb-2 text-sm font-medium text-black">Birth Country <span className="text-red-500">*</span></label>
                        <select name="birth_country" id="birth_country" className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 font-semibold">
                        </select>
                    </div>
                    <div className="w-1/5">
                        <label htmlFor="country_of_citizenship" className="block mb-2 text-sm font-medium text-black">Country of Citizenship <span className="text-red-500">*</span></label>
                        <select name="country_of_citizenship" id="country_of_citizenship" className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 font-semibold">
                        </select>
                    </div>
                    <div className="w-1/5">
                        <label htmlFor="citizenship_type" className="block mb-2 text-sm font-medium text-black">Citizenship Type <span className="text-red-500">*</span></label>
                        <select name="citizenship_type" id="citizenship_type" className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 font-semibold">
                        </select>
                    </div>
                </div>

                {/* Identification */}
                <HeadingLine title={"Identification"} />

                <div className="w-full flex flex-wrap justify-start gap-4 items-start">
                    <TextField title={"NPI #"} label={"npi"} />
                    <TextField title={"Driver License or ID"} label={"driver_license_id"} />
                    <div className="w-1/5">
                        <label htmlFor="state_issued" className="block mb-2 text-sm font-medium text-black">State Issued <span className="text-red-500">*</span></label>
                        <select name="state_issued" id="state_issued" className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 font-semibold">
                        </select>
                    </div>
                    <TextField title={"Expiration Date"} label={"expiration_date"} type="date" />
                    <TextField title={"SSN"} label={"ssn"}/>
                </div>
                <button className="px-4 py-3 rounded-lg bg-secondary text-white">
                    Save & Next
                </button>
            </div>
        </>
    )
}

export default ProvidersInformation