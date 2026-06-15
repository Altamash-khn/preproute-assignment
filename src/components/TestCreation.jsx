import {
  FiBell,
  FiChevronDown,
  FiEdit,
  FiClipboard,
} from "react-icons/fi";

export default function TestCreation() {
  return (
    <div className="min-h-screen bg-[#F8F9FD] flex">
      
      <aside className="w-[260px] bg-white border-r">
        <div className="p-6">
          <h1 className="text-4xl font-bold text-blue-600">PrepRoute</h1>
        </div>

        <nav className="mt-10 px-4">
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
      
        <header className="bg-white h-24 border-b px-10 flex justify-end items-center">
          <div className="flex items-center gap-6">
            <FiBell className="text-2xl" />

            <div className="flex items-center gap-3">
              <img
                src="https://i.pravatar.cc/100"
                alt=""
                className="w-12 h-12 rounded-full"
              />

              <div>
                <h3 className="font-semibold">Alex Wando</h3>
                <p className="text-sm text-gray-500">Admin</p>
              </div>

              <FiChevronDown />
            </div>
          </div>
        </header>

       
        <main className="p-10">
          <p className="text-gray-500">
            Test Creation / Create Test / Chapter Wise
          </p>

         
          <div className="flex mt-8 border rounded-xl w-fit overflow-hidden bg-white">
            <button className="px-8 py-3 bg-blue-50 text-blue-600 font-medium">
              Chapterwise
            </button>

            <button className="px-8 py-3 text-gray-500">PYQ</button>

            <button className="px-8 py-3 text-gray-500">Mock Test</button>
          </div>

          
          <div className="grid grid-cols-2 gap-8 mt-10">
            <Input label="Subject" placeholder="Choose from Drop-down" />

            <Input label="Name of Test" placeholder="Enter name of Test" />

            <Input label="Topic" placeholder="Choose from Drop-down" />

            <Input label="Sub Topic" placeholder="Choose from Drop-down" />

            <Input label="Duration (Minutes)" placeholder="Enter the time" />

            <div>
              <label className="block mb-4 font-medium">
                Test Difficulty Level
              </label>

              <div className="flex gap-14">
                <Radio label="Easy" />
                <Radio label="Medium" />
                <Radio label="Difficult" />
              </div>
            </div>
          </div>

          
          <div className="mt-12">
            <h3 className="text-xl font-medium mb-8">
              Marking Scheme:
            </h3>

            <div className="grid grid-cols-5 gap-8">
              <Input label="Wrong Answer" placeholder="-1" />

              <Input label="Unattempted" placeholder="+0" />

              <Input label="Correct Answer" placeholder="+5" />

              <Input label="No of Questions" placeholder="Ex:250" />

              <Input label="Total Marks" placeholder="Ex:250" />
            </div>
          </div>

        
          <div className="flex justify-end gap-5 mt-16">
            <button className="px-12 py-3 rounded-lg bg-gray-100 text-blue-600">
              Cancel
            </button>

            <button className="px-12 py-3 rounded-lg bg-indigo-500 text-white">
              Next
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}

function Input({ label, placeholder }) {
  return (
    <div>
      <label className="block mb-3 font-medium text-gray-700">
        {label}
      </label>

      <input
        type="text"
        placeholder={placeholder}
        className="w-full h-14 px-4 border rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
  );
}

function Radio({ label }) {
  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <input type="radio" name="difficulty" />
      <span>{label}</span>
    </label>
  );
}