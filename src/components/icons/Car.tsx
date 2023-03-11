function Car(props: React.SVGProps<SVGSVGElement>) {
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
        d="M24.337 15.25l-.203-.392.424-.122c.16-.05.328-.076.496-.075h.522a.423.423 0 00.424-.4.544.544 0 00-.161-.391.554.554 0 00-.395-.16h-.852a.543.543 0 00-.514.374l-.127.421-1.158-2.243a2.353 2.353 0 00-.881-.928 2.377 2.377 0 00-1.24-.334h-6.39a2.376 2.376 0 00-1.24.334c-.375.223-.68.544-.881.928l-1.154 2.243-.132-.42a.543.543 0 00-.513-.375h-.806a.554.554 0 00-.394.16.545.545 0 00-.162.39c.01.217.185.39.403.4h.522c.168 0 .336.026.496.076l.425.122-.204.392-1.12 1.683a2.533 2.533 0 00-.424 1.41v4.207c0 .248.203.45.454.45h2.316a.444.444 0 00.45-.45v-.59H22.67v.59c0 .247.2.448.45.45h2.316c.25 0 .454-.202.454-.45v-4.208a2.535 2.535 0 00-.425-1.41l-1.128-1.682zM12.64 12.49a1.851 1.851 0 011.642-.997h6.407c.34-.002.673.09.963.267.29.176.525.429.679.73l1.154 2.246H11.486l1.154-2.246zm-1.272 7.064a1.056 1.056 0 01-.98-.645 1.041 1.041 0 01.228-1.143c.303-.3.759-.39 1.154-.227.395.163.652.547.65.972a1.052 1.052 0 01-1.04 1.043h-.012zm8.247 1.035a.268.268 0 01-.195.08h-3.882a.279.279 0 01-.28-.274.287.287 0 01.28-.277h3.895a.283.283 0 01.28.277.273.273 0 01-.085.194h-.013zm0-1.048a.269.269 0 01-.195.08h-3.882a.268.268 0 01-.174-.467.268.268 0 01.195-.08h3.895a.268.268 0 01.195.467h-.034zm3.963 0c-.428 0-.813-.255-.977-.647a1.042 1.042 0 01.231-1.143c.303-.299.758-.388 1.153-.224s.65.547.649.971c.004.277-.105.545-.3.743-.197.198-.464.31-.744.313l-.012-.013z"
        fill="#263238"
      />
    </svg>
  );
}

export default Car;