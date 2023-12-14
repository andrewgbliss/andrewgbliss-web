type Props = {
  className?: string;
};

export default function Checkmark({ className }: Props) {
  return (
    <svg fill="none" className={className}>
      <path
        d="M1.5 4.5l2.236 2.236a1 1 0 001.467-.056L10.5.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
}
