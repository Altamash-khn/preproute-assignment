import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FiBell,
  FiChevronDown,
  FiEdit,
  FiClipboard,
} from "react-icons/fi";

export default function TestCreation() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    subject: "",
    testName: "",
    topic: "",
    subTopic: "",
    duration: "",
    difficulty: "",
    wrongAnswer: "",
    unattempted: "",
    correctAnswer: "",
    noOfQuestions: "",
    totalMarks: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

    const handleNext = () => {
      const isValid = Object.values(formData).every(
        (value) => value.toString().trim() !== ""
      );

    if (!isValid) {
      alert("Please fill all fields");
      return;
    }

    navigate("/nextpage");
  };

  return (
    <div className="min-h-screen bg-[#F8F9FD] flex flex-col lg:flex-row">
     
      <aside className="w-full lg:w-[260px] bg-white border-r">
        <div className="p-6">
          <h1 className="text-3xl sm:text-4xl font-bold text-blue-600">
            PrepRoute
          </h1>
        </div>

        <nav className="px-4 pb-6">
          <ul className="space-y-3">
            <li className="flex items-center gap-3 p-3 rounded-lg text-gray-600">
              Dashboard
            </li>

            <li className="flex items-center gap-3 p-3 rounded-lg bg-blue-50 text-blue-600 font-medium border-l-4 border-blue-600">
              <FiEdit />
              Test Creation
            </li>

            <li className="flex items-center gap-3 p-3 rounded-lg text-gray-600">
              <FiClipboard />
              Test Tracking
            </li>
          </ul>
        </nav>
      </aside>

     
      <div className="flex-1">
       
        <header className="bg-white min-h-[80px] border-b px-4 sm:px-6 lg:px-10 flex justify-between sm:justify-end items-center">
          <h2 className="font-semibold text-lg sm:hidden">
            Test Creation
          </h2>

          <div className="flex items-center gap-4 sm:gap-6">
            <FiBell className="text-2xl" />

            <div className="hidden sm:flex items-center gap-3">
              <img
                src="https://i.pravatar.cc/100"
                alt="profile"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full"
              />

              <div>
                <h3 className="font-semibold">Alex Wando</h3>
                <p className="text-sm text-gray-500">Admin</p>
              </div>

              <FiChevronDown />
            </div>
          </div>
        </header>

        <main className="p-4 sm:p-6 lg:p-10">
          <p className="text-gray-500 text-sm sm:text-base">
            Test Creation / Create Test / Chapter Wise
          </p>

          {/* Tabs */}
          <div className="flex flex-wrap mt-8 border rounded-xl overflow-hidden bg-white w-full lg:w-fit">
            <button className="flex-1 sm:flex-none px-6 py-3 bg-blue-50 text-blue-600 font-medium">
              Chapterwise
            </button>

            <button className="flex-1 sm:flex-none px-6 py-3 text-gray-500">
              PYQ
            </button>

            <button className="flex-1 sm:flex-none px-6 py-3 text-gray-500">
              Mock Test
            </button>
          </div>

          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-10">
            <Input
              label="Subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Choose from Drop-down"
            />

            <Input
              label="Name of Test"
              name="testName"
              value={formData.testName}
              onChange={handleChange}
              placeholder="Enter name of Test"
            />

            <Input
              label="Topic"
              name="topic"
              value={formData.topic}
              onChange={handleChange}
              placeholder="Choose from Drop-down"
            />

            <Input
              label="Sub Topic"
              name="subTopic"
              value={formData.subTopic}
              onChange={handleChange}
              placeholder="Choose from Drop-down"
            />

            <Input
              label="Duration (Minutes)"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              placeholder="Enter the time"
            />

            <div>
              <label className="block mb-4 font-medium">
                Test Difficulty Level
              </label>

              <div className="flex flex-wrap gap-4 sm:gap-8">
                <Radio
                  label="Easy"
                  value="Easy"
                  checked={formData.difficulty === "Easy"}
                  onChange={handleChange}
                />

                <Radio
                  label="Medium"
                  value="Medium"
                  checked={formData.difficulty === "Medium"}
                  onChange={handleChange}
                />

                <Radio
                  label="Difficult"
                  value="Difficult"
                  checked={formData.difficulty === "Difficult"}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

         
          <div className="mt-12">
            <h3 className="text-lg sm:text-xl font-medium mb-8">
              Marking Scheme:
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              <Input
                label="Wrong Answer"
                name="wrongAnswer"
                value={formData.wrongAnswer}
                onChange={handleChange}
                placeholder="-1"
              />

              <Input
                label="Unattempted"
                name="unattempted"
                value={formData.unattempted}
                onChange={handleChange}
                placeholder="+0"
              />

              <Input
                label="Correct Answer"
                name="correctAnswer"
                value={formData.correctAnswer}
                onChange={handleChange}
                placeholder="+5"
              />

              <Input
                label="No of Questions"
                name="noOfQuestions"
                value={formData.noOfQuestions}
                onChange={handleChange}
                placeholder="Ex:250"
              />

              <Input
                label="Total Marks"
                name="totalMarks"
                value={formData.totalMarks}
                onChange={handleChange}
                placeholder="Ex:250"
              />
            </div>
          </div>

          
          <div className="flex flex-col sm:flex-row justify-end gap-4 mt-16">
            <button className="w-full sm:w-auto px-12 py-3 rounded-lg bg-gray-100 text-blue-600">
              Cancel
            </button>

            <button
              onClick={handleNext}
              className="w-full sm:w-auto px-12 py-3 rounded-lg bg-indigo-500 text-white"
            >
              Next
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}

function Input({ label, placeholder, name, value, onChange }) {
  return (
    <div>
      <label className="block mb-3 font-medium text-gray-700">
        {label}
      </label>

      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full h-12 sm:h-14 px-4 border rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
  );
}

function Radio({ label, value, checked, onChange }) {
  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <input
        type="radio"
        name="difficulty"
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <span>{label}</span>
    </label>
  );
}