import React from "react";
import Header from "../../components/Header/Header";
import PostcardSection from "../../components/PostcardSection/PostcardSection";
import Footer from "../../components/Footer/Footer";
import HeroSection from "../../components/HeroSection/HeroSection";
import "./Contact.scss";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  Textarea,
} from "@material-tailwind/react";

function Contact() {
  return (
    <div className="contact-parent">
      <Header />
      <HeroSection HeroTitle={"Contact Us"} minHeightBox={"600px"} />
      <section className="contact-main-section">
        <div className="form-section m-[10%]">
          <Card color="transparent" shadow={false}>
            <Typography variant="h4" color="blue-gray">
              Get in Touch
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              Nice to meet you! Enter us know your Query.
            </Typography>
            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
              <div className="mb-1 flex flex-col gap-6">
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Your Name
                </Typography>
                <Input
                  size="lg"
                  placeholder="Hello John!"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Your Email
                </Typography>
                <Input
                  size="lg"
                  placeholder="name@mail.com"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Message
                </Typography>
                <Textarea
                  type="text"
                  size="lg"
                  placeholder="message"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
              </div>
              <Checkbox
                label={
                  <Typography
                    variant="small"
                    color="gray"
                    className="flex items-center font-normal"
                  >
                    I agree the
                    <a
                      href="#"
                      className="font-medium transition-colors hover:text-gray-900"
                    >
                      &nbsp;Terms and Conditions
                    </a>
                  </Typography>
                }
                containerProps={{ className: "-ml-2.5" }}
              />
              <Button className="mt-6" fullWidth>
                Send Now
              </Button>
            </form>
          </Card>
        </div>
        <div className="talk-to-us-section"></div>
      </section>
      <PostcardSection />
      <Footer />
    </div>
  );
}

export default Contact;
