import { createContext, useState } from 'react'

const store = createContext();
const StoreComponent = ({ children }) => {
    const [entries, setEntries] = useState([]);
  
    const addEntry = (newEntry) => {
      setEntries([...entries, newEntry]);
    };
  
    const updateEntry = (index, updatedEntry) => {
      const updatedEntries = [...entries];
      updatedEntries[index] = updatedEntry;
      setEntries(updatedEntries);
    };
  
    const deleteEntry = (index) => {
      const updatedEntries = [...entries];
      updatedEntries.splice(index, 1);
      setEntries(updatedEntries);
    };

    return (
        <store.Provider
          value={{ entries, addEntry, updateEntry, deleteEntry }}
        >
          {children}
        </store.Provider>
    );
};
    
export { StoreComponent, store };