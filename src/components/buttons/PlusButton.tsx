interface PlusButtonProps {
  onClick: () => void;
}

export default function PlusButton({ onClick }: PlusButtonProps) {
  return (
    <svg
      onClick={onClick}
      className="cursor-pointer"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
    >
      <path
        d="M12 2.5C6.48 2.5 2 6.98 2 12.5C2 18.02 6.48 22.5 12 22.5C17.52 22.5 22 18.02 22 12.5C22 6.98 17.52 2.5 12 2.5ZM17 13.5H13V17.5H11V13.5H7V11.5H11V7.5H13V11.5H17V13.5Z"
        fill="#5A8F7B"
      />
    </svg>
  );
}
