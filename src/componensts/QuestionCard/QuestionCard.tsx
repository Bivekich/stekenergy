interface QestionAnswer {
  quesion: string;
  answer: string;
}

export default function QuestionCard({ quesion, answer }: QestionAnswer) {
  return (
    <div className="flex w-[90%] bg-[#fcfcfc] border-2 shadow-sm min-h-24 flex-col justify-center gap-5 pb-2 pt-2">
      <div className="flex gap-5 pl-5 text-xl font-bold items-center">
        <span>Q</span>
        <span>{quesion}</span>
      </div>

      <div className="flex gap-5 pl-5 items-center">
        <span>A</span>
        <span>{answer}</span>
      </div>
    </div>
  );
}
