function ProgressBar() {
  return (
    <footer className="fixed left-0 right-0 bottom-0 bg-white p-4">
      <div className="flex flex-row items-center justify-between">
        <div className="mr-3 font-semibold">Accomplishment</div>
        <div className="relative h-2 grow border border-zinc-100 bg-white">
          <div className="absolute left-0 top-0 h-[6px] w-4/12 bg-green-600"></div>
        </div>
        <div className="ml-5 text-2xl font-semibold">2 / 12</div>
      </div>
    </footer>
  );
}

export default ProgressBar;
