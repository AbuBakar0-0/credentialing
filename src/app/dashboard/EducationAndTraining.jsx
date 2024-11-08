import HeadingLine from './HeadingLine'
import { CiEdit } from "react-icons/ci";
import { IoAddCircleOutline } from "react-icons/io5";
import { MdDeleteOutline } from "react-icons/md";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";


function EducationAndTraining() {
    return (
        <>
            <div className='w-full flex flex-col justify-center items-center gap-4'>
                {/* Education & Professional Training */}
                <HeadingLine title={"Education & Professional Training"} />
                <p className='w-full'><span className='text-red-400'>*</span>Required all fields are marked with red asterik</p>

                {/* Education */}
                <div className='w-full flex flex-row justify-between items-center'>
                    <p className="w-full text-lg">Education</p>
                    <button className='w-52 bg-secondary px-4 py-3 rounded-lg text-white flex flex-row justify-center items-center gap-4'>
                        <IoAddCircleOutline className='size-6' />
                        <p>Add Education</p>
                    </button>
                </div>
                <div className='w-full flex flex-col justify-center items-center gap-4'>
                    <div className='w-full h-40 shadow-xl rounded-lg border-l-8 border-secondary flex flex-row justify-between items-center gap-4 p-10'>
                        <p>Doctor of Medicine (MD)</p>
                        <div className='flex flex-col justify-center items-start'>
                            <p>University of Queenland</p>
                            <p>June 2014 to June 2014</p>
                            <p>USA</p>
                        </div>
                        <div className='flex flex-col justify-center items-center gap-4'>
                            <button className='w-40 bg-secondary px-4 py-3 rounded-lg text-white flex flex-row justify-center items-center gap-4'>
                                <CiEdit className='size-6' />
                                <p>Edit</p>
                            </button>
                            <button className='w-40 bg-gray-400 px-4 py-3 rounded-lg text-white flex flex-row justify-center items-center gap-4'>
                                <MdDeleteOutline className='size-6' />
                                <p>Delete</p>
                            </button>

                        </div>
                    </div>

                </div>

                {/* Professional Experience */}
                <div className='w-full flex flex-row justify-between items-center mt-20'>
                    <p className="w-full text-lg">Professional Experience</p>
                    <button className='w-52 bg-secondary px-4 py-3 rounded-lg text-white flex flex-row justify-center items-center gap-4'>
                        <IoAddCircleOutline className='size-6' />
                        <p>Add Experience</p>
                    </button>
                </div>
                <div className='w-full flex flex-col justify-center items-center gap-4'>
                    <div className='w-full h-40 shadow-xl rounded-lg border-l-8 border-secondary flex flex-row justify-between items-center gap-4 p-10'>
                        <p>Residency</p>
                        <div className='flex flex-col justify-center items-start'>
                            <p>St. Luke Hospital</p>
                            <p>Family Medicine</p>
                            <p>June 2020 to June 2022</p>
                            <p>USA</p>
                        </div>
                        <div className='flex flex-col justify-center items-center gap-4'>
                            <button className='w-40 bg-secondary px-4 py-3 rounded-lg text-white flex flex-row justify-center items-center gap-4'>
                                <CiEdit className='size-6' />
                                <p>Edit</p>
                            </button>
                            <button className='w-40 bg-gray-400 px-4 py-3 rounded-lg text-white flex flex-row justify-center items-center gap-4'>
                                <MdDeleteOutline className='size-6' />
                                <p>Delete</p>
                            </button>

                        </div>
                    </div>

                    <div className='w-full h-40 shadow-xl rounded-lg border-l-8 border-secondary flex flex-row justify-between items-center gap-4 p-10'>
                        <p>FellowShip</p>
                        <div className='flex flex-col justify-center items-start'>
                            <p>St. Luke Hospital</p>
                            <p>Family Medicine</p>
                            <p>June 2020 to June 2022</p>
                            <p>USA</p>
                        </div>
                        <div className='flex flex-col justify-center items-center gap-4'>
                            <button className='w-40 bg-secondary px-4 py-3 rounded-lg text-white flex flex-row justify-center items-center gap-4'>
                                <CiEdit className='size-6' />
                                <p>Edit</p>
                            </button>
                            <button className='w-40 bg-gray-400 px-4 py-3 rounded-lg text-white flex flex-row justify-center items-center gap-4'>
                                <MdDeleteOutline className='size-6' />
                                <p>Delete</p>
                            </button>

                        </div>
                    </div>


                </div>


                {/* Cultural Training */}
                <div className='w-full flex flex-col justify-center items-start gap-4 mt-20'>
                    <p>Have you completed Cultural Training?</p>
                    <div className='w-full flex flex-row justify-start items-center gap-3'>
                        <input type="radio" name="cultural_training" /> Yes <br />
                    </div>
                    <div className='w-full flex flex-row justify-start items-center gap-3'>
                        <input type="radio" name="cultural_training" /> No <br />
                    </div>
                </div>

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
                        <FaArrowCircleRight/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EducationAndTraining