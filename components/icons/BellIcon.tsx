export default function BellIcon(props: { showBadge?: boolean }) {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.5022 18.3614C18.5497 18.3614 19.3997 17.514 19.403 16.4666V16.4666V16.4666C19.4024 15.9336 19.1896 15.4228 18.8118 15.047L17.5523 13.7865V10.0419C17.552 8.57006 16.9667 7.15868 15.9253 6.11859C14.8839 5.0785 13.4718 4.495 11.9999 4.49659V4.49659C8.93836 4.49825 6.45718 6.98032 6.45663 10.0419V13.7835L5.19711 15.044C4.81898 15.4197 4.6059 15.9305 4.60486 16.4636V16.4636V16.4636C4.60817 17.511 5.45821 18.3584 6.50565 18.3584L17.5022 18.3614Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.5204 21.5036H13.4786"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {props?.showBadge ? (
        <circle
          cx="17.0039"
          cy="6"
          r="5"
          fill="#DB3A33"
          stroke="white"
          strokeWidth="2"
        />
      ) : null}
    </svg>
  );
}
