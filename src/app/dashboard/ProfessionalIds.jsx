import { useState } from "react";
import HeadingLine from "./HeadingLine";
import TextField from "./TextField";

function ProfessionalIds() {
    const [medicareFields, setMedicareFields] = useState([{ id: "", issue_date: "", expiry_date: "" }]);
    const [medicaidFields, setMedicaidFields] = useState([{ id: "", issue_date: "", expiry_date: "" }]);

    const handleAddField = (type) => {
        if (type === "medicare" && medicareFields[medicareFields.length - 1].id !== "") {
            setMedicareFields([...medicareFields, { id: "", issue_date: "", expiry_date: "" }]);
        } else if (type === "medicaid" && medicaidFields[medicaidFields.length - 1].id !== "") {
            setMedicaidFields([...medicaidFields, { id: "", issue_date: "", expiry_date: "" }]);
        }
    };

    const handleFieldChange = (index, type, field, value) => {
        const updatedFields = type === "medicare" ? [...medicareFields] : [...medicaidFields];
        updatedFields[index][field] = value;
        type === "medicare" ? setMedicareFields(updatedFields) : setMedicaidFields(updatedFields);
    };

    return (
        <>
            <div className="w-full flex flex-col justify-center items-center gap-4">
                <HeadingLine title={"Professional Information"} />

                <div className="w-full flex flex-wrap justify-start gap-4 items-start">
                    <TextField title={"NPI #"} label={"npi"} />
                    <TextField title={"Tax ID #"} label={"tax"} />
                    <TextField title={"UPin #"} label={"upin"} />
                </div>

                <div className="w-full flex flex-wrap justify-start gap-4 items-center ">
                    {medicareFields.map((field, index) => (
                        <div key={index} className="w-full flex flex-wrap justify-start gap-4 items-end">
                            <TextField
                                title={"Medicare #"}
                                label={`medicare_${index}`}
                                value={field.id}
                                onChange={(e) => handleFieldChange(index, "medicare", "id", e.target.value)}
                            />
                            <TextField
                                title={"Issue Date"}
                                label={`issue_date_${index}`}
                                type="date"
                                value={field.issue_date}
                                onChange={(e) => handleFieldChange(index, "medicare", "issue_date", e.target.value)}
                            />
                            <TextField
                                title={"Expiry Date"}
                                label={`expiry_date_${index}`}
                                type="date"
                                value={field.expiry_date}
                                onChange={(e) => handleFieldChange(index, "medicare", "expiry_date", e.target.value)}
                            />
                            {index === medicareFields.length - 1 && (
                                <button
                                    type="button"
                                    className="bg-blue-500 text-white rounded px-4 py-2"
                                    onClick={() => handleAddField("medicare")}
                                >
                                    + ADD
                                </button>
                            )}
                        </div>
                    ))}
                </div>

                {/* Medicaid Section */}
                <div className="w-full flex flex-wrap justify-start gap-4 items-center">
                    {medicaidFields.map((field, index) => (
                        <div key={index} className="w-full flex flex-wrap justify-start gap-4 items-end">
                            <TextField
                                title={"Medicaid #"}
                                label={`medicaid_${index}`}
                                value={field.id}
                                onChange={(e) => handleFieldChange(index, "medicaid", "id", e.target.value)}
                            />
                            <TextField
                                title={"Issue Date"}
                                label={`issue_date_${index}`}
                                type="date"
                                value={field.issue_date}
                                onChange={(e) => handleFieldChange(index, "medicaid", "issue_date", e.target.value)}
                            />
                            <TextField
                                title={"Expiry Date"}
                                label={`expiry_date_${index}`}
                                type="date"
                                value={field.expiry_date}
                                onChange={(e) => handleFieldChange(index, "medicaid", "expiry_date", e.target.value)}
                            />
                            {index === medicaidFields.length - 1 && (
                                <button
                                    type="button"
                                    className="bg-blue-500 text-white rounded px-4 py-2"
                                    onClick={() => handleAddField("medicaid")}
                                >
                                    + ADD
                                </button>
                            )}
                        </div>
                    ))}
                </div>

                <div className="w-full flex flex-wrap justify-start gap-4 items-start">
                    <TextField title={"Medicaid #"} label={"medicaid"} />
                    <TextField title={"Issue Date"} label={"issue_date"} type="date" />
                    <TextField title={"Expiry Date"} label={"expiry_date"} type="date" />
                </div>


                <div className="w-full flex flex-wrap justify-start gap-4 items-start">
                    <TextField title={"State License "} label={"license_number"} />
                    <TextField title={"Effective Date"} label={"effective_date"} type="date" />
                    <TextField title={"Expiry Date"} label={"expiry_date"} type="date" />
                </div>

                <div className="w-full flex flex-wrap justify-start gap-4 items-start">
                    <TextField title={"CLIA # "} label={"clia"} />
                    <TextField title={"Effective Date"} label={"effective_date"} type="date" />
                    <TextField title={"Expiry Date"} label={"expiry_date"} type="date" />
                </div>

                <div className="w-full flex flex-wrap justify-start gap-4 items-start">
                    <TextField title={"DEA # "} label={"dea"} />
                    <TextField title={"Effective Date"} label={"effective_date"} type="date" />
                    <TextField title={"Expiry Date"} label={"expiry_date"} type="date" />
                </div>

                <div className="w-full flex flex-wrap justify-start gap-4 items-start">
                    <TextField title={"CDS # "} label={"cds"} />
                    <TextField title={"Effective Date"} label={"effective_date"} type="date" />
                    <TextField title={"Expiry Date"} label={"expiry_date"} type="date" />
                </div>

                <HeadingLine title={"Medical Malpractice Information"} />
                <div className="text-lg w-full">
                    Professional Liability Insurance
                </div>
                <div className="w-full flex flex-wrap justify-start gap-4 items-start">
                    <TextField title={"Policy # "} label={"dea"} />
                    <TextField title={"Effective Date"} label={"effective_date"} type="date" />
                    <TextField title={"Expiry Date"} label={"expiry_date"} type="date" />
                    <div className="w-1/5">
                        <label htmlFor="provider_title" className="block mb-2 text-sm font-medium text-black">Aggregate<span className="text-red-500">*</span></label>
                        <select name="provider_title" id="provider_title" className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 font-semibold">
                        </select>
                    </div>

                </div>

                <div className="text-lg w-full">
                    General Liability Insurance
                </div>
                <div className="w-full flex flex-wrap justify-start gap-4 items-start">
                    <TextField title={"Policy # "} label={"dea"} />
                    <TextField title={"Effective Date"} label={"effective_date"} type="date" />
                    <TextField title={"Expiry Date"} label={"expiry_date"} type="date" />
                    <div className="w-1/5">
                        <label htmlFor="provider_title" className="block mb-2 text-sm font-medium text-black">Aggregate<span className="text-red-500">*</span></label>
                        <select name="provider_title" id="provider_title" className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 font-semibold">
                        </select>
                    </div>
                </div>
                <HeadingLine title={"Web Portal Info"} />

                <div className="w-full flex flex-wrap justify-start gap-4 items-start">
                    <TextField title={"CAQH Username"} label={"username"} />
                    <TextField title={"CAQH Password"} label={"password"} type="password" />
                </div>

                <div className="w-full flex flex-wrap justify-start gap-4 items-start">
                    <TextField title={"Pecos Username"} label={"username"} />
                    <TextField title={"Pecos Password"} label={"password"} type="password" />
                </div>

                <div className="w-full flex flex-wrap justify-start gap-4 items-start">
                    <TextField title={"Medicaid Portal Username"} label={"username"} />
                    <TextField title={" Medicaid PortalPassword"} label={"password"} type="password" />
                </div>

                <div className="w-full flex flex-wrap justify-start gap-4 items-start">
                    <TextField title={"Availilty Username"} label={"username"} />
                    <TextField title={"Availilty Password"} label={"password"} type="password" />
                </div>

                <div className="w-full flex flex-wrap justify-start gap-4 items-start">
                    <TextField title={"UHC Username"} label={"username"} />
                    <TextField title={"UHC Password"} label={"password"} type="password" />
                </div>

            </div>
        </>
    )
}

export default ProfessionalIds