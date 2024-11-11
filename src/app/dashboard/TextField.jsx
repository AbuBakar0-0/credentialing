"use client";
import { useState } from 'react';

const TextField = ({ title, label, required = true, type = "text", readonly = false }) => {
    const [inputValue, setInputValue] = useState('');
    let placeholder = title;

    // Formatting functions for various input types
    const formatInput = (value) => {
        if (title.includes("Date")) {
            return formatDOB(value);
        }
        switch (title) {
            case "SSN":
                return formatSSN(value);
            case "DOB":
                return formatDOB(value);
            case "Zip":
                return formatZip(value);
            case "Home Ph.":
            case "Office Ph.":
            case "Cell Ph.":
                return formatPhoneNumber(value);
            default:
                return value;
        }
    };

    const formatSSN = (value) => {
        value = value.replace(/\D/g, ''); // Remove non-numeric characters
        if (value.length > 3 && value.length <= 5) {
            return `${value.slice(0, 3)}-${value.slice(3)}`;
        } else if (value.length > 5) {
            return `${value.slice(0, 3)}-${value.slice(3, 5)}-${value.slice(5, 9)}`;
        }
        return value;
    };

    const formatDOB = (value) => {
        value = value.replace(/\D/g, ''); // Remove non-numeric characters

        // Limit the year part to 4 digits after MM/DD
        if (value.length > 8) {
            value = value.slice(0, 8); // Limit input to MMDDYYYY
        }

        if (value.length > 2 && value.length <= 4) {
            return `${value.slice(0, 2)}/${value.slice(2)}`;
        } else if (value.length > 4) {
            return `${value.slice(0, 2)}/${value.slice(2, 4)}/${value.slice(4)}`;
        }

        return value;
    };

    const formatZip = (value) => {
        value = value.replace(/\D/g, ''); // Remove non-numeric characters
        if (value.length > 5) {
            return `${value.slice(0, 5)}-${value.slice(5, 9)}`;
        }
        return value;
    };

    const formatPhoneNumber = (value) => {
        value = value.replace(/\D/g, ''); // Remove non-numeric characters
        if (value.length > 3 && value.length <= 6) {
            return `(${value.slice(0, 3)}) ${value.slice(3)}`;
        } else if (value.length > 6) {
            return `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6, 10)}`;
        }
        return value;
    };

    const handleInputChange = (e) => {
        let value = e.target.value;

        // Limit to 2 characters if the title is "Middle Initial"
        if (title === "Middle Initial") {
            value = value.slice(0, 2);
        }

        const formattedValue = formatInput(value);
        setInputValue(formattedValue);
    };

    // Set placeholder based on the title
    switch (title) {
        case "DOB":
            placeholder = "MM/DD/YYYY";
            break;
        case "SSN":
            placeholder = "___-__-____";
            break;
        case "Zip":
            placeholder = "_____-____";
            break;
        case "Home Ph.":
        case "Office Ph.":
        case "Cell Ph.":
            placeholder = "(___) ___-____";
            break;
        case "Email":
        case "Work Email":
        case "Personal Email":
            placeholder = "yourname@example.com";
            break;
    }

    var width = "w-1/5";
    switch (title) {
        case "Street Address 1":
        case "Street Address 2":
        case "Mailing Address":
        case "Mailing Address 2":
        case "Professional School":
            width = "w-[41.5%]";
            break;
    }

    return (
        <div className={width}>
            <label htmlFor={label} className="block mb-2 text-sm font-medium text-black">
                {title} {required ? <span className="text-red-500">*</span> : null}
            </label>
            <input
                type={type}
                id={label}
                className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 font-semibold"
                placeholder={placeholder}
                value={inputValue}
                onChange={handleInputChange}
                required={required}
                readOnly={readonly}
            />
        </div>
    );
};

export default TextField;
