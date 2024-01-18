interface ChipProps {
    title: string;
  }
  
  const Chip  = ({ title }:ChipProps) => {
    return (
        <div className="flex justify-center items-center m-0.5 px-2 py-1 rounded-full bg-slate-600 text-base text-white font-medium">
            <div className="flex-initial max-w-full leading-none text-xs font-normal">{title}</div>
        </div>
    );
  };
  
  export default Chip;