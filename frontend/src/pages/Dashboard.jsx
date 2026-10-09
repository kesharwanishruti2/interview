import React, { useEffect, useState } from 'react';
import Navbar from '../componenets/Navbar';
import StatsCard from '../componenets/StatsCard';
import Filters from '../componenets/Filters';
import Questioncard from '../componenets/Questioncard';
import QuestionForm from '../componenets/QuestionForm';
import { getQuestions, saveQuestions } from '../utils/Storage';



const Dashboard = () => {
// Saare questions store honge initially koi dummy data nahi hai
const [questions, setQuestions] = useState(()=>getQuestions());
const [showForm, setShowForm] = useState(false);
const [category, setCategory] = useState("All Categories");
const [search, setSearch] = useState("");
const [status, setStatus] = useState("All Status");
const [difficulty, setDifficulty] = useState("All Difficulties");
const [editingQuestion, setEditingQuestion] = useState(null);

// QuestionForm se aaya object array mein add hoga
const handleAddQuestion = (newQuestion) => {
setQuestions((prev) => [
...prev,
{
...newQuestion,
id: Date.now(),
},
]);
};

const handleUpdateQuestion = (updatedQuestion) => {
  setQuestions((prev) =>
    prev.map((item) =>
      item.id === editingQuestion.id
        ? { ...item, ...updatedQuestion }
        : item
    )
  );

  setEditingQuestion(null);
  setShowForm(false);
};




  const handleDeleteQuestion = (id) => {
  setQuestions((prev) =>
    prev.filter((question) => question.id !== id)
  );
};
useEffect(() => {
  saveQuestions(questions);
}, [questions]);

const filteredQuestions = questions.filter((item) => {
  const matchesSearch = item.question
    .toLowerCase()
    .includes(search.toLowerCase());

  const matchesCategory =
    category === "All Categories" || item.category === category;
    const matchesStatus = 
    status === "All Status"||item.status === status
  const matchesDifficulty =
    difficulty === "All Difficulties" ||
    item.difficulty === difficulty;

  return matchesSearch && matchesCategory&&matchesStatus&&matchesDifficulty;
});
return ( <div> <Navbar />


  <main>
    <section className="flex items-center justify-between px-6 py-8">
      <div>
        <h2 className="text-2xl font-semibold text-[#1F2937]">
          Welcome back! 👋
        </h2>

        <p className="mt-1 text-sm text-[#6B7280]">
          Keep going! Every question you solve brings you closer to your goal.
        </p>
      </div>

      <button   onClick={() => setShowForm(true)}
      className="rounded-lg bg-[#C26A3D] px-4 py-2 text-sm font-medium text-white">
        + Add Question
      </button>
    </section>

    <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
<StatsCard title="Total Questions" value={questions.length} />

<StatsCard
  title="Completed"
  value={questions.filter((q) => q.status === "Completed").length}
/>

<StatsCard
  title="In Progress"
  value={questions.filter((q) => q.status === "In Progress").length}
/>

<StatsCard
  title="Progress"
  value={
    questions.length
      ? `${Math.round(
          (questions.filter((q) => q.status === "Completed").length /
            questions.length) *
            100
        )}%`
      : "0%"
  }
/>
    </section>

{showForm && (
  <QuestionForm
    editingQuestion={editingQuestion}
    onAddQuestion={handleAddQuestion}
    onUpdate={handleUpdateQuestion}
    onCanel={() => {
      setShowForm(false);
      setEditingQuestion(null);
    }}
  />
)}

    <section className="mt-10">
      <h2 className="text-xl font-semibold text-[#1F2937]">
        Interview Questions
      </h2>

      <div className="mt-10">
        <Filters search={search}setSearch={setSearch} category={category} setCategory={setCategory} status={status}
         setStatus={setStatus}   difficulty={difficulty}
  setDifficulty={setDifficulty} />
      </div>


<div className="mt-10 space-y-3">
  {filteredQuestions.length > 0 ? (
    filteredQuestions.map((question) => (
      <Questioncard
        key={question.id}
        question={question}
        onDelete={handleDeleteQuestion}
        onEdit={(question) => {
          setEditingQuestion(question);
          setShowForm(true);
        }}
      />
    ))
  ) : (
    <div className="rounded-xl border border-[#E7E2DC] bg-white px-6 py-10 text-center">
      
<div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-[#E7E2DC] bg-[#FFFDFC] px-6 py-12 text-center">
  {questions.length === 0 ? (
    <>
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#F7F5F2] text-3xl ring-1 ring-[#E7E2DC]">
        📝
      </div>

      <h3 className="text-lg font-semibold text-[#1F2937]">
        No questions yet
      </h3>

      <p className="mt-2 max-w-sm text-sm leading-6 text-[#6B7280]">
        Start preparing for your interviews by adding your first question.
      </p>

      <button
        onClick={() => setShowForm(true)}
        className="mt-5 rounded-lg bg-[#C26A3D] px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-[#A95530] focus:outline-none focus:ring-2 focus:ring-[#C26A3D] focus:ring-offset-2"
      >
        + Add Question
      </button>
    </>
  ) : (
    <>
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#F7F5F2] text-3xl ring-1 ring-[#E7E2DC]">
        🔍
      </div>

      <h3 className="text-lg font-semibold text-[#1F2937]">
        No matching questions found
      </h3>

      <p className="mt-2 max-w-sm text-sm leading-6 text-[#6B7280]">
        Try changing your search or filters to find a question.
      </p>
    </>
  )}
</div>
    </div>
  )}
</div>
      
    </section>
  </main>
</div>


);
};

export default Dashboard;
