import React, { useContext } from "react";
import { MyContext, TitleContext } from "./Context";

function Parent() {
  const myname_n = useContext(MyContext);
  const title = useContext(TitleContext);

  return (
    <div>
      <div>
        Received: {myname_n} {title} {title}
      </div>
      <div>여기 수정하지 마세요.</div>
    </div>
  );
}

export default Parent;
