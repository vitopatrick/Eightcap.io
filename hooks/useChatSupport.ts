import { useEffect } from "react";

export const useChatSupport = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "//code.jivosite.com/widget/kLb2BvxvQ5";

    document.body.appendChild(script);
  }, []);
};

