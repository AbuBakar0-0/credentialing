import Dropdown from "./components/Dropdown";
import TextField from "./components/TextField";

export default function Home() {
  return (
    <>
      <div className="h-screen bg-white flex flex-col justify-start items-start p-10 text-black gap-4">
        <div className="w-full flex flex-col gap-4">
          <h1 className="text-2xl">Providers</h1>
          <div className="w-full flex flex-wrap justify-start gap-4 items-start">
            <TextField title={"First Name"} label={"first_name"} />
            <TextField
              title={"Middle Initial"}
              label={"middle_initial"}
              required={false}
            />
            <TextField title={"Last Name"} label={"last_name"} />

            <TextField title={"Title"} label={"title"} required={false} />
            <TextField title={"DOB"} label={"dob"} type="date" />
            <TextField title={"SSN"} label={"ssn"} required={false} />

            <TextField title={"Home Address"} label={"address"} />
            <TextField
              title={"Home Address 2"}
              label={"address_2"}
              required={false}
            />
            <TextField title={"ZIP"} label={"zip"} />

            <TextField title={"City"} label={"city"} required={false} />
            <TextField title={"State"} label={"state"} required={false} />
            <TextField
              title={"Home Ph."}
              label={"home_phone"}
              required={false}
            />

            <TextField
              title={"Office Ph."}
              label={"office_phone"}
              required={false}
            />
            <TextField
              title={"Cell Ph."}
              label={"cell_phone"}
              required={false}
            />
            <TextField
              title={"Email"}
              label={"email"}
              required={false}
              type="email"
            />

            <TextField title={"License"} label={"license"} required={false} />
            <TextField title={"NPI"} label={"npi"} />
            <TextField title={"UPIN"} label={"upin"} required={false} />

            <TextField title={"Tax ID"} label={"tax_id"} />
            <Dropdown label={"speciality"} title={"Speciality"} />
            <TextField title={"Group NPI"} label={"group_npi"} />
            <TextField title={"DEA"} label={"dea"} />

            <TextField
              title={"DEA Expiry"}
              label={"dea_exp"}
              required={false}
              type="date"
            />
          </div>
        </div>

        <div className="w-full flex flex-col gap-4">
          <h1 className="text-2xl">Taxanomy</h1>
          <div className="w-full flex flex-wrap justify-start gap-4 items-start">
            <Dropdown title={"Type"} label={"type"}/>
            <Dropdown title={"Code One"} label={"code_one"}/>
            <Dropdown title={"Code Two"} label={"code_two"}/>

          </div>
        </div>
      </div>
    </>
  );
}
