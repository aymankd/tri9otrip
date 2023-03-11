function Train(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={35}
      height={35}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx={17.5} cy={17.5} r={17.5} fill="#263238" fillOpacity={0.08} />
      <path
        d="M21.564 10.603H20.28l-.4-1.154A.673.673 0 0019.241 9H15.75a.673.673 0 00-.636.449l-.397 1.154h-1.281A2.435 2.435 0 0011 13.037v7.9c0 1.233.914 2.253 2.102 2.413h.002l-.457.554a.67.67 0 101.034.852l1.14-1.38h5.356l1.14 1.38a.67.67 0 001.033-.852l-.457-.554h.005A2.433 2.433 0 0024 20.936v-7.9a2.435 2.435 0 00-2.436-2.433zm-7.14 10.834a.835.835 0 110-1.673c.46 0 .834.373.834.84 0 .46-.374.833-.834.833zm6.159 0a.84.84 0 01-.841-.833c0-.467.38-.84.84-.84.468 0 .835.373.835.84a.83.83 0 01-.834.833zm1.408-4.167a.79.79 0 01-.794.787h-7.394a.79.79 0 01-.794-.787v-3.867c0-.44.354-.793.794-.793h7.394c.44 0 .794.353.794.793v3.867z"
        fill="#263238"
      />
    </svg>
  );
}

export default Train;
