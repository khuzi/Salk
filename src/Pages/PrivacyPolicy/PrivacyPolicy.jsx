import React from "react";
import { Typography } from "@material-ui/core";
import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
  return (
    <section className="privacy-policy">
      <div className="top-header">
        <Typography
          variant="h4"
          style={{ fontWeight: "bold", marginBottom: "0.5rem" }}
        >
          Privacy Policy
        </Typography>
        <Typography variant="subtitle1">last updated 02/09/2020</Typography>
      </div>
      <div className="policies">
        <ul>
          <li>
            Your privacy is important to us. It is Salk Technologies Inc's
            policy to respect your privacy regarding any information we may
            collect from you across our website, http://salk.io, and other sites
            we own and operate.
          </li>
          <li>
            We only ask for personal information when we truly need it to
            provide a service to you. We collect it by fair and lawful means,
            with your knowledge and consent. We also let you know why we’re
            collecting it and how it will be used.
          </li>
          <li>
            We only retain collected information for as long as necessary to
            provide you with your requested service. What data we store, we’ll
            protect within commercially acceptable means to prevent loss and
            theft, as well as unauthorized access, disclosure, copying, use or
            modification.
          </li>
          <li>
            We don’t share any personally identifying information publicly or
            with third-parties, except when required to by law.
          </li>
          <li>
            Our website may link to external sites that are not operated by us.
            Please be aware that we have no control over the content and
            practices of these sites, and cannot accept responsibility or
            liability for their respective privacy policies.
          </li>
          <li>
            You are free to refuse our request for your personal information,
            with the understanding that we may be unable to provide you with
            some of your desired services.
          </li>
          <li>
            Your continued use of our website will be regarded as acceptance of
            our practices around privacy and personal information. If you have
            any questions about how we handle user data and personal
            information, feel free to contact us.
          </li>
          <li>This policy is effective as of 2 September 2020.</li>
        </ul>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
