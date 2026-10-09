import React from 'react'

const Filters = ({search,setSearch,setCategory,category,status, setStatus,  difficulty,
  setDifficulty}) => {
  return (
    <div className="flex flex-col gap-3 md:flex-row">
      <input
        type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        placeholder="Search questions..."
        className="flex-1 rounded-lg border border-[#E7E2DC] bg-white px-4 py-2.5 text-sm outline-none focus:border-[#C26A3D]"
      />

      <select 
      value={category}
      onChange={(e) => setCategory(e.target.value)}
      className="rounded-lg border border-[#E7E2DC] bg-white px-4 py-2.5 text-sm outline-none">
        <option>All Categories</option>
        <option>DSA</option>
        <option>Git</option>
        <option>Technical</option>
      </select>

      <select 
      value={status}
      onChange={(e)=>setStatus(e.target.value)}
      className="rounded-lg border border-[#E7E2DC] bg-white px-4 py-2.5 text-sm outline-none">
        <option>All Status</option>
        <option>Pending</option>
        <option>In Progress</option>
        <option>Completed</option>
      </select>

      <select 
      value={difficulty}
      onChange={(e)=>setDifficulty(e.target.value)}  
      className="rounded-lg border border-[#E7E2DC] bg-white px-4 py-2.5 text-sm outline-none">
        <option>All Difficulties</option>
        <option>Easy</option>
        <option>Medium</option>
        <option>Hard</option>
      </select>
    </div>
  );
}

export default Filters
