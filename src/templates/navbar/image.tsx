export default function Image({ onClick }: { onClick: () => void }) {
  return (
    <div
      id="image"
      onClick={onClick}
      className="w-12 h-12 relative cursor-pointer p-2 mr-2"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="250"
        height="250"
        viewBox="5 5 40 40"
        className="w-full h-full fill-white"
      >
        <path d="M 10 11 C 8.343 11 7 12.343 7 14 L 7 36 C 7 37.657 8.343 39 10 39 L 40 39 C 41.657 39 43 37.657 43 36 L 43 14 C 43 12.343 41.657 11 40 11 L 10 11 z M 10 12 L 40 12 C 41.105 12 42 12.895 42 14 L 42 33.091797 L 33.470703 25.421875 C 32.137703 24.223875 30.113203 24.225734 28.783203 25.427734 L 21.851562 31.691406 L 18.533203 28.853516 C 17.219203 27.730516 15.283609 27.733328 13.974609 28.861328 L 8 34.007812 L 8 14 C 8 12.895 8.895 12 10 12 z M 16 17 C 14.343 17 13 18.343 13 20 C 13 21.657 14.343 23 16 23 C 17.657 23 19 21.657 19 20 C 19 18.343 17.657 17 16 17 z"></path>
      </svg>
    </div>
  );
}
