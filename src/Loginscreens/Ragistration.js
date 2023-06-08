import { Button, Form, Input } from "antd";
import { Link } from "react-router-dom";

const SignupForm = ({ handleSubmit }) => {
  return (
    <Form autoComplete="off" onFinish={(values) => handleSubmit(values)}>
      <h3 className="text-blue  text-center text-[30px] font-bold mb-[40px]">
        Sign Up
      </h3>
      <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-[30px]">
        <div className="relative mb-6">
          <Form.Item
            label=""
            name="firstname"
            rules={[
              {
                pattern: new RegExp(/^[A-Za-z ']{1,30}$/),
                message: "Invalid First Name.",
              },
              {
                required: true,
                message: "Please Enter Your First Name!",
              },
            ]}
            hashFeedback
          >
            <Input placeholder="First Name*" />
          </Form.Item>
        </div>
        <div className="relative mb-6">
          <Form.Item
            label=""
            name="lastname"
            rules={[
              {
                pattern: new RegExp(/^[A-Za-z ']{1,20}$/),
                message: "Invalid Last Name.",
              },
              {
                required: true,
                message: "Please Enter Your Last Name!",
              },
            ]}
            hashFeedback
          >
            <Input placeholder="Last Name*" />
          </Form.Item>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-[30px]">
        <div className="relative mb-6">
          <Form.Item
            label=""
            name="email"
            rules={[
              {
                pattern: new RegExp(
                  /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
                ),
                message: "Wrong Email Format",
              },
              {
                required: true,
                message: "Please Enter Your Email!",
              },
            ]}
            hashFeedback
          >
            <Input autoComplete="off" placeholder="Email *" />
          </Form.Item>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-[30px]">
        <div className="relative mb-6">
          <Form.Item
            label=""
            name="password"
            rules={[
              {
                pattern: new RegExp(
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*.?&]{8,30}$/
                ),
                message:
                  "Password must contain at least one letter, one number and one special character with no space and it must be 8-30 characters.",
              },
              {
                required: true,
                message: "Please Enter Your Password!",
              },
            ]}
            hashFeedback
          >
            <Input.Password placeholder="Password *" />
          </Form.Item>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-[30px]">
        <div className="relative mb-6">
          <Form.Item
            label=""
            name="Confirm-Password"
            dependencies={["password"]}
            rules={[
              {
                required: true,
                message: "Please input your Confirm-Password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject("your password dose not match");
                },
              }),
            ]}
          >
            <Input.Password placeholder="Confirm-Password *" />
          </Form.Item>
        </div>
      </div>
      <Form.Item>
        <div className="text-center mb-5">
          <Button
            htmlType="submit"
            className=" px-[3rem] py-2 bg-[#0674BB] text-white  text-lg font-semibold rounded-full button-shadow"
            title="Send OTP"
          >
            Send OTP
          </Button>
        </div>
      </Form.Item>

      <div className="mt-6">
        <a>
          <hr className="w-[60%] mx-auto" />
        </a>
        <p className="mt-6 lg:text-[16px] text-[14px] text-center text-[#ababab]">
          <a>Already have an account?</a>
          <Link
            to="/login"
            className="lg:text-[16px]     text-[14px] text-blue font-bold"
          >
            &nbsp;Log In
          </Link>
        </p>
      </div>
    </Form>
  );
};
export default SignupForm;
