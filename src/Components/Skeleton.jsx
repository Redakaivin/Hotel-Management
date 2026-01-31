function Skeleton({ height, width, borderRadius, style }) {
    return (
        <div
            style={{
                height: height || "20px",
                width: width || "100%",
                borderRadius: borderRadius || "4px",
                backgroundColor: "#e0e0e0",
                animation: "pulse 1.5s infinite ease-in-out",
                ...style,
            }}
        >
            <style>
                {`
        @keyframes pulse {
          0% { opacity: 0.6; }
          50% { opacity: 0.8; }
          100% { opacity: 0.6; }
        }
      `}
            </style>
        </div>
    );
}

export default Skeleton;
