import HeadingLine from './HeadingLine'
import { CiEdit } from "react-icons/ci";
import { IoAddCircleOutline } from "react-icons/io5";
import { MdDeleteOutline } from "react-icons/md";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import TextField from './TextField';


function EmploymentInformation() {
    return (
        <>
            <div className="w-full flex flex-col justify-center items-center gap-4">

                {/* Employment Information */}
                <HeadingLine title={"Employment Information"} />
                <p className='w-full'><span className='text-red-400'>*</span>Required all fields are marked with red asterik</p>


                <div className="w-full flex flex-wrap justify-start gap-4 items-start">
                    <TextField title={"Practice / Employer Name"} label={"employer_name"} />
                    <TextField title={"Department / Speciality"} label={"speciality"} />
                    <TextField title={"Street 1"} label={"street_1"} />
                    <div className='w-full flex flex-row justify-start items-center gap-4'>
                        <input type="checkbox" />
                        <span>I have a building/office/suite to add</span>
                    </div>
                    <div className="w-1/5">
                        <label htmlFor="country" className="block mb-2 text-sm font-medium text-black">Country <span className="text-red-500">*</span></label>
                        <select name="country" id="country" className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 font-semibold">
                        </select>
                    </div>
                    <TextField title={"City"} label={"city"} />
                    <div className="w-1/5">
                        <label htmlFor="state" className="block mb-2 text-sm font-medium text-black">State <span className="text-red-500">*</span></label>
                        <select name="state" id="state" className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 font-semibold">
                        </select>
                    </div>
                    <TextField title={"Zip"} label={"zip"} />
                    <TextField title={"Cell Ph."} label={"cell_phone"} />
                    <div className='w-full flex flex-row justify-start items-center gap-4'>
                        <input type="checkbox" />
                        <span>I have a phone extension to add</span>
                    </div>
                    <TextField title={"Fax No."} label={"fax"} required={false} />

                    <TextField title={"Start Date"} label={"start_date"} type={"date"} />




                </div>
                <div className='w-full flex flex-col justify-center items-start gap-4 '>
                    <p>Is this your Current Employer?</p>
                    <div className='w-full flex flex-row justify-start items-center gap-3'>
                        <input type="radio" name="cultural_training" /> Yes <br />
                    </div>
                    <div className='w-full flex flex-row justify-start items-center gap-3'>
                        <input type="radio" name="cultural_training" /> No <br />
                    </div>
                </div>
                <div className="w-full h-[2px] bg-primary mt-10"></div>

                <div className='w-full flex flex-row justify-around items-center gap-4'>
                    <div className='w-1/4 flex flex-row justify-center items-center gap-4 px-4 py-3 bg-secondary rounded-lg text-white'>
                        <FaArrowCircleLeft />
                        <span> Save & Go Back</span>
                    </div>
                    <div className='w-1/4 flex flex-row justify-center items-center gap-4 px-4 py-3 bg-secondary rounded-lg text-white'>
                        <span>Save</span>
                    </div>

                    <div className='w-1/4 flex flex-row justify-center items-center gap-4 px-4 py-3 bg-secondary rounded-lg text-white'>
                        <span>Save & Continue</span>
                        <FaArrowCircleRight />
                    </div>
                </div>
            </div>
        </>
    )
}

export default EmploymentInformation