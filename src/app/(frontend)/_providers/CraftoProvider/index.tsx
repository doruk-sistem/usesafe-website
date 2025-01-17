import Script from "next/script";

import "@/frontend/_crafto/css/vendors.css";
import "@/frontend/_crafto/css/icon.min.css";
import "@/frontend/_crafto/css/style.css";
import "@/frontend/_crafto/css/responsive.css";
import "@/frontend/_crafto/css/theme.css";

export default function CraftoProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script src="/crafto/js/jquery.js" />
      <Script src="/crafto/js/vendors.min.js" />
      <Script src="/crafto/js/main.js" />

      {children}
    </>
  );
}
