import { useEffect, useState } from "react";

const initialForm= {
        question: "",
        category: "DSA",
        difficulty: "Easy",
        status: "Pending",
    }

const QuestionForm = ({onAddQuestion,onCanel,onUpdate,  editingQuestion}) => {
    const [form, setForm] = useState(initialForm);
    
    const handleChange = (e)=>{
    const {name,value}= e.target;
    setForm({
        ...form,
        [name]:value
    })
    }


    const handleCancel = () => {
  setForm(initialForm);
  onCanel();
};
    // const handleSubmit = (e)=>{
    //   e.preventDefault();
    //     const trimmedQuestion = form.question.trim();

  // if (!trimmedQuestion) {
  //   return;
  // }
  //     onAddQuestion({
  //   ...form,
  //   question: trimmedQuestion,
  // });
  //      onCanel()//suvbmit ka bada mai close karo 

  //     console.log(form)
  //   }

const handleSubmit = (e) => {
  e.preventDefault();

  const trimmedQuestion = form.question.trim();

  if (!trimmedQuestion) {
    return;
  }

  const updatedData = {
    ...form,
    question: trimmedQuestion,
  };

  if (editingQuestion) {
    onUpdate({
      ...updatedData,
      id: editingQuestion.id,
    });
  } else {
    onAddQuestion(updatedData);
  }

  onCanel();
};
useEffect(() => {
  if (editingQuestion) {
    setForm({
      question: editingQuestion.question,
      category: editingQuestion.category,
      difficulty: editingQuestion.difficulty,
      status: editingQuestion.status,
    });
  }
}, [editingQuestion]);

  return (
    <form className="rounded-xl border border-[#E7E2DC] bg-white p-5" onSubmit={handleSubmit}>
      <div className="grid gap-4">
        {/* Question */}
        <div>
          <label className="text-sm font-medium text-[#1F2937]">
            Question
          </label>

          <input
            type="text"
              name="question"
            placeholder="Enter question..."
            className="mt-2 w-full rounded-lg border border-[#E7E2DC] px-4 py-2.5 text-sm outline-none focus:border-[#C26A3D]"
            value={form.question}
            onChange={handleChange}          
          />
        </div>

        {/* Category */}
        <div>
          <label className="text-sm font-medium text-[#1F2937]">
            Category
          </label>

          <select
            name="category"
            value={form.category}
            onChange={handleChange}
          className="mt-2 w-full rounded-lg border border-[#E7E2DC] bg-white px-4 py-2.5 text-sm outline-none">
            <option>DSA</option>
            <option>Git</option>
            <option>Technical</option>
          </select>
        </div>

        {/* Difficulty */}
        <div>
          <label className="text-sm font-medium text-[#1F2937]">
            Difficulty
          </label>

          <select 
            value={form.difficulty}
            onChange={handleChange}
             name="difficulty"
          className="mt-2 w-full rounded-lg border border-[#E7E2DC] bg-white px-4 py-2.5 text-sm outline-none">
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </select>
        </div>

        {/* Status */}
        <div>
          <label className="text-sm font-medium text-[#1F2937]">
            Status
          </label>

          <select 
                 name="status"
            value={form.status}
            onChange={handleChange}
          className="mt-2 w-full rounded-lg border border-[#E7E2DC] bg-white px-4 py-2.5 text-sm outline-none">
            <option>Pending</option>
            <option>In Progress</option>
            <option>Completed</option>
          </select>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-3">
          <button
            type="button"
            onClick={handleCancel}
            className="rounded-lg border border-[#E7E2DC] px-4 py-2 text-sm"
          >
            Cancel
          </button>

        <button
  type="submit"
  className="rounded-lg bg-[#C26A3D] px-4 py-2 text-sm font-medium text-white"
>
  {editingQuestion ? "Update Question" : "Add Question"}
</button>
        </div>
      </div>
    </form>
  );
};

export default QuestionForm;