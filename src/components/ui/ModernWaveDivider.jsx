const ModernWaveDivider = ({ position = "bottom", color = "#ffffff", height = 50 }) => {
  const isTop = position === "top"

  return (
    <div
      className={`absolute left-0 right-0 w-full overflow-hidden leading-0 ${
        isTop ? "top-0 transform -translate-y-1" : "bottom-0 transform translate-y-1"
      }`}
      style={{ height: `${height}px` }}
    >
      {isTop ? (
        <svg
          className="relative block w-full h-full"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" fill={color}></path>
        </svg>
      ) : (
        <svg
          className="relative block w-full h-full"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            fill={color}
          ></path>
        </svg>
      )}
    </div>
  )
}

export default ModernWaveDivider
