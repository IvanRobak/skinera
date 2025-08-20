interface WavyBottomBorderProps {
  className?: string;
  fillColor?: string;
}

const WavyBottomBorder: React.FC<WavyBottomBorderProps> = ({
  className = 'fill-white',
  fillColor,
}) => {
  return (
    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
      <svg
        className="relative block w-full h-12 sm:h-14 md:h-20 overflow-hidden"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        style={{
          transform: 'translateY(2px)',
        }}
      >
        <path
          d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
          className={fillColor ? undefined : className}
          fill={fillColor}
        />
      </svg>
      {/* Додаткове перекриття для приховування тонкої лінії */}
      {/* <div className="absolute bottom-0 left-0 w-full h-1 bg-white"></div> */}
    </div>
  );
};

export default WavyBottomBorder;
