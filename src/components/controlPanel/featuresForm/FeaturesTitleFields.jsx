import React from "react";

const FeaturesTitleFields = ({ form, handleInputChange }) => (
  <div className="md:col-span-2 bg-gray-100 rounded-md p-4">
    <legend className="text-lg font-bold text-gray-900 mb-4">Features</legend>
    <div className="space-y-4">
      <div>
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700">
          Title
        </label>
        <input
          type="text"
          name="title"
          id="title"
          value={form.title}
          onChange={handleInputChange}
          className="mt-3 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        />
      </div>
      <div>
        <label
          htmlFor="subtitle"
          className="block text-sm font-medium text-gray-700">
          Subtitle
        </label>
        <input
          type="text"
          name="subtitle"
          id="subtitle"
          value={form.subtitle}
          onChange={handleInputChange}
          className="mt-3 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        />
      </div>
    </div>
  </div>
);

export default FeaturesTitleFields;
