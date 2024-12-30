import React from "react";

interface FormTitleProps {
  title: string;
  subtitle: string;
}

export const FormTitle: React.FC<FormTitleProps> = ({ title, subtitle }) => (
  <div className="mb-6">
    <h2 className="text-xl font-semibold">{title}</h2>
    <p className="text-sm text-gray-400">{subtitle}</p>
  </div>
);

interface TextInputProps {
  label: string;
  placeholder: string;
}

export const TextInput: React.FC<TextInputProps> = ({ label, placeholder }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium mb-2">{label}</label>
    <input
      type="text"
      placeholder={placeholder}
      className="w-full bg-gray-700 border border-gray-600 rounded px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
    />
  </div>
);

interface NumberInputProps {
  label: string;
  placeholder: string;
}

export const NumberInput: React.FC<NumberInputProps> = ({
  label,
  placeholder,
}) => (
  <div className="mb-4">
    <label className="block text-sm font-medium mb-2">{label}</label>
    <input
      type="number"
      placeholder={placeholder}
      className="w-full bg-gray-700 border border-gray-600 rounded px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
    />
  </div>
);

interface ToggleSwitchProps {
  label: string;
  isChecked: boolean;
  onToggle: () => void;
}

export const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  label,
  isChecked,
  onToggle,
}) => (
  <div className="mb-4 flex items-center justify-between">
    <label className="text-sm font-medium">{label}</label>
    <button
      onClick={onToggle}
      className={`w-12 h-6 rounded-full flex items-center px-1 transition-all ${
        isChecked ? "bg-orange-500" : "bg-gray-600"
      }`}
    >
      <div
        className={`w-4 h-4 bg-white rounded-full transform transition-transform ${
          isChecked ? "translate-x-6" : "translate-x-0"
        }`}
      ></div>
    </button>
  </div>
);
