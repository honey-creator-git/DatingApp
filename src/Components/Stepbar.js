import { Button, message, Steps, theme } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";

const Stepbar = () => {
  const steps = [
    {
      title: "",
      content: (
        <>
          <img src="images/image 3.svg" className="w-[85%] mx-auto py-5" alt />
        </>
      ),
    },
    {
      title: "",
      content: (
        <>
          <img src="images/image 2.svg" className="w-[85%] mx-auto py-5" alt />
        </>
      ),
    },
    {
      title: "",
      content: (
        <>
          <img src="images/image 6.svg" className="w-[85%] mx-auto py-5" alt />
        </>
      ),
    },
  ];

  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));
  const contentStyle = {};
  return (
    <>
      <Steps current={current} items={items} />
      <div>{steps[current].content}</div>
      <div className="flex justify-center mb-10 items-center gap-8">
        {current < steps.length - 1 && (
          <Button className="p-0 mb-8 border-0" onClick={() => next()}>
            <img
              src="images/camera 1.svg"
              className="min-w-[80px] mx-auto "
              alt
            />
          </Button>
        )}
        {current === steps.length - 1 && (
          <Link
            to="/Idverify"
            className="bg-[#05B7FD] text-center min-w-[280px] inline-block w-full border border-[#05B7FD]  rounded-full text-white font-bold py-2 text-center"
            onClick={() => message.success("Processing complete!")}
          >
            Done
          </Link>
        )}
      </div>
    </>
  );
};

export default Stepbar;
