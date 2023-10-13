import React, { useState } from 'react';

const DropdownWithSearch = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [searchText, setSearchText] = useState('');
  const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Replace with your options

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleSearchInputChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <div className="custom-select">
      <div
        className={`select-header ${isOpen ? 'open' : ''} block mb-2 text-sm font-medium text-gray-900 bg-slate-300 px-2 py-2` }
        onClick={toggleDropdown}
      >
        {selectedOption ? selectedOption : 'Select an option'}
      </div>
      {isOpen && (
        <div className="select-options bg-slate-300 px-2 py-2 border-r-2">
          <input
            type="text"
            placeholder="Search options..."
            value={searchText}
            onChange={handleSearchInputChange}
          />
          <ul>
            {options
              .filter(option => option.toString().includes(searchText))
              .map((option) => (
                <li
                  key={option}
                  onClick={() => handleOptionClick(option)}
                >
                  {option}
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownWithSearch;