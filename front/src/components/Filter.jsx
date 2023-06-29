import React, { useState } from 'react';

const Filter = () => {
  const [filterValue, setFilterValue] = useState('');

  const handleFilterChange = (event) => {
    setFilterValue(event.target.value);
  };

  // Les données à filtrer (par exemple, une liste d'éléments)
  const data = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
    // ...
  ];

  // Appliquer le filtre aux données
  const filteredData = data.filter(item => item.name.includes(filterValue));

  return (
    <div>
      <input type="text" value={filterValue} onChange={handleFilterChange} placeholder="Filter..." />

      <ul>
        {filteredData.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Filter;