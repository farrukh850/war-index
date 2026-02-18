import React, { useState } from 'react';

interface Question {
  id: number;
  title: string;
  description: string;
}

const questions: Question[] = [
  {
    id: 1,
    title: "What is the War Risk Index?",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin, elit eu sodales dapibus, sem nibh faucibus justo, at consequat lorem dolor nec nunc. Aenean id varius nisl. Morbi lacus eros, suscipit non nibh tempor, facilisis cursus ante."
  },
  {
    id: 2,
    title: "How is the index calculated?",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin, elit eu sodales dapibus, sem nibh faucibus justo, at consequat lorem dolor nec nunc. Aenean id varius nisl. Morbi lacus eros, suscipit non nibh tempor, facilisis cursus ante."
  },
  {
    id: 3,
    title: "What do the different risk levels mean?",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin, elit eu sodales dapibus, sem nibh faucibus justo, at consequat lorem dolor nec nunc. Aenean id varius nisl. Morbi lacus eros, suscipit non nibh tempor, facilisis cursus ante."
  },
  {
    id: 4,
    title: "How often is the data updated?",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin, elit eu sodales dapibus, sem nibh faucibus justo, at consequat lorem dolor nec nunc. Aenean id varius nisl. Morbi lacus eros, suscipit non nibh tempor, facilisis cursus ante."
  },
  {
    id: 5,
    title: "Which regions are covered by the index?",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin, elit eu sodales dapibus, sem nibh faucibus justo, at consequat lorem dolor nec nunc. Aenean id varius nisl. Morbi lacus eros, suscipit non nibh tempor, facilisis cursus ante."
  },
  {
    id: 6,
    title: "Can I use this data for research or analysis?",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin, elit eu sodales dapibus, sem nibh faucibus justo, at consequat lorem dolor nec nunc. Aenean id varius nisl. Morbi lacus eros, suscipit non nibh tempor, facilisis cursus ante."
  }
];

const IndexQuestions = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleQuestion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="p-12 border-dashed-spaced relative">
      <div className="space-y-2">
        {questions.map((question) => (
          <div
            key={question.id}
            className="border border-gray-200 rounded-lg overflow-hidden bg-white"
          >
            <button
              onClick={() => toggleQuestion(question.id)}
              className="w-full px-6 py-4 flex items-center justify-between text-left transition-colors cursor-pointer"
            >
              <h3 className="text-lg font-semibold text-gray-800 pr-4">
                {question.title}
              </h3>
              <div className="flex-shrink-0 w-4 h-4 flex items-center justify-center">
                {openId === question.id ? (
                  <svg
                    className="w-6 h-6 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20 12H4"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-4 h-4 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                )}
              </div>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openId === question.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-6 pb-4 pt-2 text-gray-600 leading-relaxed">
                {question.description}
              </div>
            </div>
          </div>
        ))}
      </div>
        <img src="/images/border-plus.svg" alt="Border Plus" className="absolute -left-[7px] -bottom-2 z-10"/>
        <img src="/images/border-plus.svg" alt="Border Plus" className="absolute -right-[7px] -bottom-2 z-10"/>
    </div>
  );
};

export default IndexQuestions;

