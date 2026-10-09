import React from 'react';

const Questioncard = ({ question, onDelete,onEdit,setOnEdit }) => {
return ( <div className="flex items-center justify-between rounded-xl border border-[#E7E2DC] bg-white p-5">
   <h3>{question.question}</h3>

  <div className="flex gap-2 text-sm text-[#6B7280]">
    <span>{question.category}</span>
    <span>•</span>
    <span>{question.difficulty}</span>
    <span>•</span>
    <span>{question.status}</span>
  </div>

  <div className="flex gap-3">
    <button className="text-sm text-[#C26A3D]"onClick={()=>onEdit(question)} >Edit</button>
    <button className="text-sm text-red-500"onClick={()=> onDelete(question.id)}>Delete</button>
  </div>
</div>


);
};

export default Questioncard;
