import React from 'react';

const FormTextField = ({ title, label, required = true, type = "text", value, onChange }) => {
    let placeholder = title;

    // Formatting function for phone number
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
        let newValue = e.target.value;
        if (title === "Phone Number") {
            newValue = formatPhoneNumber(newValue);
        }
        onChange(label, newValue); // Call parent’s onChange with label and new value
    };

    if (title === "Phone Number") {
        placeholder = "(XXX) XXX-XXXX";
    }
    if (title === "Email Address") {
        placeholder = "yourname@company.com";
        type = "email";
    }

    return (
        <div className="w-full">
            <label htmlFor={label} className="block mb-2 text-sm font-semibold text-black">
                {title} {required ? <span className="text-red-500">*</span> : null}
            </label>
            <input
                type={type}
                id={label}
                name={label}
                className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 font-semibold"
                placeholder={placeholder}
                required={required}
                value={value}
                onChange={handleInputChange}
            />
        </div>
    );
};

export default FormTextField;
