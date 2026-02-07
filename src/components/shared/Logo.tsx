const Logo = ({ className }: { className?: string }) => (
    <svg
        viewBox="0 0 100 100"
        className={className}
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        {/* Minimalist Abstract Form - Premium Feel */}
        <path d="M50 20 L80 80 L20 80 Z" stroke="currentColor" strokeWidth="4" fill="none" />
        <circle cx="50" cy="55" r="10" fill="currentColor" />
    </svg>
);

export default Logo;
