export default function ProfileIcon({ color }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
    >
      <path
        d="M12.5 6C13.6 6 14.5 6.9 14.5 8C14.5 9.1 13.6 10 12.5 10C11.4 10 10.5 9.1 10.5 8C10.5 6.9 11.4 6 12.5 6ZM12.5 16C15.2 16 18.3 17.29 18.5 18H6.5C6.73 17.28 9.81 16 12.5 16ZM12.5 4C10.29 4 8.5 5.79 8.5 8C8.5 10.21 10.29 12 12.5 12C14.71 12 16.5 10.21 16.5 8C16.5 5.79 14.71 4 12.5 4ZM12.5 14C9.83 14 4.5 15.34 4.5 18V20H20.5V18C20.5 15.34 15.17 14 12.5 14Z"
        fill={color}
      />
    </svg>
  );
}
